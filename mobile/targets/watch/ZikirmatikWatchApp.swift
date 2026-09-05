import SwiftUI
import WatchConnectivity

@main
struct ZikirmatikWatchApp: App {
    @StateObject private var wcSessionDelegate = SessionDelegator()

    var body: some Scene {
        WindowGroup {
            ContentView()
                .environmentObject(wcSessionDelegate)
        }
    }
}

class SessionDelegator: NSObject, WCSessionDelegate, ObservableObject {
    @Published var count: Int = 0
    @Published var selectedZikir: String = "serbest"

    override init() {
        super.init()
        if WCSession.isSupported() {
            let session = WCSession.default
            session.delegate = self
            session.activate()
        }
    }

    func session(_ session: WCSession, activationDidCompleteWith activationState: WCSessionActivationState, error: Error?) {}

    func session(_ session: WCSession, didReceiveMessage message: [String : Any], replyHandler: @escaping ([String : Any]) -> Void) {
        print("WATCH_SYNC [Swift]: Received message from Phone -> \(message)")
        DispatchQueue.main.async {
            if let newCount = message["count"] as? Int {
                self.count = newCount
            } else if let newCount = message["count"] as? Double {
                self.count = Int(newCount)
            } else if let newCountStr = message["count"] as? String, let parsedCount = Int(newCountStr) {
                self.count = parsedCount
            }
            
            if let newZikir = message["selectedZikir"] as? String {
                self.selectedZikir = newZikir
            }
        }
        // Telefon tarafındaki react-native-watch-connectivity timeout'a düşmemesi için
        // acilen boş bir yanıt gönderiyoruz.
        replyHandler(["status": "success"])
    }

    func sendMessage(message: [String: Any]) {
        print("WATCH_SYNC [Swift]: Attempting to send message -> \(message)")
        if WCSession.default.isReachable {
            WCSession.default.sendMessage(message, replyHandler: { reply in
                print("WATCH_SYNC [Swift]: Message sent successfully, reply: \(reply)")
            }, errorHandler: { error in
                print("WATCH_SYNC [Swift]: Error sending message: \(error.localizedDescription)")
            })
        } else {
            print("WATCH_SYNC [Swift]: Session not reachable, using transferUserInfo")
            WCSession.default.transferUserInfo(message)
        }
    }
}
