import SwiftUI
import WatchKit

struct ContentView: View {
    @EnvironmentObject var session: SessionDelegator

    let zikirler = [
        ("serbest", "Serbest Zikir"),
        ("subhanallah", "Sübhanallah"),
        ("elhamdulillah", "Elhamdülillah"),
        ("allahu_ekber", "Allahu Ekber"),
        ("tevhid", "Kelime-i Tevhid"),
        ("estagfirullah", "Estağfirullah"),
        ("lahavle", "La Havle"),
        ("hasbunallah", "Hasbünallah")
    ]

    var body: some View {
        VStack(spacing: 4) {
            // Zikir Seçici
            Picker("Zikir", selection: $session.selectedZikir) {
                ForEach(zikirler, id: \.0) { id, name in
                    Text(name).tag(id)
                }
            }
            .pickerStyle(WheelPickerStyle())
            .frame(height: 35)
            .onChange(of: session.selectedZikir) { newValue in
                session.count = 0
                session.sendMessage(message: ["type": "CHANGE_ZIKIR", "selectedZikir": newValue])
            }

            Spacer()

            // Büyük Sayı ve Buton
            Button(action: {
                WKInterfaceDevice.current().play(.click)
                session.count += 1
                session.sendMessage(message: ["type": "INCREMENT", "count": session.count, "selectedZikir": session.selectedZikir])
            }) {
                ZStack {
                    Circle()
                        .fill(Color(red: 17/255.0, green: 17/255.0, blue: 17/255.0))
                        .overlay(
                            Circle()
                                .stroke(Color(red: 51/255.0, green: 51/255.0, blue: 51/255.0), lineWidth: 2)
                        )
                    
                    Text("\(session.count)")
                        .font(.system(size: 42, weight: .bold))
                        .foregroundColor(.white)
                        .lineLimit(1)
                        .minimumScaleFactor(0.5)
                        .padding()
                }
            }
            .buttonStyle(PlainButtonStyle())
            
            Spacer()

            // Sıfırla Butonu
            Button(action: {
                session.count = 0
                session.sendMessage(message: ["type": "RESET", "selectedZikir": session.selectedZikir])
            }) {
                Text("Sıfırla")
                    .font(.system(size: 14))
                    .foregroundColor(.red)
            }
            .buttonStyle(PlainButtonStyle())
            .padding(.bottom, 2)
        }
        .edgesIgnoringSafeArea(.bottom)
    }
}
