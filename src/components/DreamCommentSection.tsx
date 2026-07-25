'use client';

import React, { useState, useEffect } from 'react';

interface Comment {
  id: string;
  author: string;
  date: string;
  content: string;
  aiReply?: string;
  isPendingAi?: boolean;
  likes: number;
}

interface Props {
  symbolSlug: string;
  symbolTitle: string;
}

export default function DreamCommentSection({ symbolSlug, symbolTitle }: Props) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [authorName, setAuthorName] = useState('');
  const [commentText, setCommentText] = useState('');
  const [requestAiAnalysis, setRequestAiAnalysis] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Load comments from localStorage or initialize with adaptive defaults
  useEffect(() => {
    const storageKey = `dream_comments_${symbolSlug}`;
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      try {
        setComments(JSON.parse(saved));
        return;
      } catch (e) {
        console.error('Failed to parse saved comments', e);
      }
    }

    // Default simulated community UGC
    const cleanTitle = symbolTitle.replace(/^Rüyada\s+/i, '').replace(/\s+Görmek$/i, '');
    const defaultComments: Comment[] = [
      {
        id: '1',
        author: 'Zeynep K.',
        date: '2 gün önce',
        content: `Rüyamda tam olarak ${cleanTitle.toLowerCase()} durumu yaşadım. Uyandığımda kalbim çok hızlı çarpıyordu ama içimde garip bir ferahlama da vardı. Acaba iş hayatımda beklediğim o değişiklikle mi bağlantılı?`,
        aiReply: `Merhaba Zeynep Hanım. ${cleanTitle} sembolü bilinçaltınızda uzun süredir biriken bir belirsizliğin artık çözüme kavuşacağını simgeler. İçinizdeki ferahlık hissi, doğru yolda olduğunuzun ve gelecek yeniliklere ruhsal olarak hazır olduğunuzun en net kanıtıdır.`,
        likes: 14,
      },
      {
        id: '2',
        author: 'Murat S.',
        date: '5 gün önce',
        content: `Ben de geçen hafta sabaha karşı benzer bir rüya gördüm. Rüyayı gördükten 2 gün sonra gerçekten de çok beklediğim bir telefon aldım. Kesinlikle boş bir rüya değil!`,
        aiReply: `Merhaba Murat Bey. Sabaha karşı (fecir vakti) görülen rüyalar, zihnin en berrak ve sezgilerin en yüksek olduğu evrede gerçekleşir. Deneyiminizi toplulukla paylaştığınız için teşekkür ederiz!`,
        likes: 29,
      },
    ];

    setComments(defaultComments);
  }, [symbolSlug, symbolTitle]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!authorName.trim() || !commentText.trim()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const cleanTitle = symbolTitle.replace(/^Rüyada\s+/i, '').replace(/\s+Görmek$/i, '');
      const newComment: Comment = {
        id: Date.now().toString(),
        author: authorName.trim(),
        date: 'Az önce',
        content: commentText.trim(),
        isPendingAi: requestAiAnalysis,
        aiReply: requestAiAnalysis 
          ? `Sayın ${authorName.trim()}, rüyanızdaki ${cleanTitle.toLowerCase()} teması yapay zeka sembolizm motorumuz tarafından incelemeye alınmıştır. İlk izlenimlere göre bu rüya, kişisel sınırlarınızı güçlendirdiğiniz ve yeni bir farkındalık evresine adım attığınız bir dönüşümü işaret ediyor.`
          : undefined,
        likes: 1,
      };

      const updated = [newComment, ...comments];
      setComments(updated);
      localStorage.setItem(`dream_comments_${symbolSlug}`, JSON.stringify(updated));

      setAuthorName('');
      setCommentText('');
      setIsSubmitting(false);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 5000);
    }, 600);
  };

  const handleLike = (id: string) => {
    const updated = comments.map(c => 
      c.id === id ? { ...c, likes: c.likes + 1 } : c
    );
    setComments(updated);
    localStorage.setItem(`dream_comments_${symbolSlug}`, JSON.stringify(updated));
  };

  return (
    <section className="mt-16 pt-12 border-t border-night-800" id="ruya-yorumlari">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mystic-950/80 border border-mystic-500/30 text-mystic-300 text-xs font-semibold mb-3">
            <span className="w-2 h-2 rounded-full bg-mystic-400 animate-ping" />
            Topluluk & AI Etkileşim Alanı
          </div>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-white">
            ✍️ Rüyanı Yaz, Topluluğa ve Yapay Zekaya Sor
          </h2>
        </div>
        <div className="text-sm text-night-400 bg-night-900/60 px-4 py-2 rounded-xl border border-night-800">
          💬 <strong className="text-white">{comments.length}</strong> rüya deneyimi paylaşıldı
        </div>
      </div>

      <p className="text-night-300 mb-8 leading-relaxed">
        Siz de rüyanızda <strong className="text-mystic-200">{symbolTitle}</strong> veya benzeri bir durum mu gördünüz? 
        Detayları aşağıya yazın; hem diğer kullanıcılarla deneyimlerinizi karşılaştırın hem de yapay zeka asistanımızın anlık sembol analizinden faydalanın.
      </p>

      {showSuccess && (
        <div className="mb-8 p-4 rounded-2xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-200 flex items-center gap-3 backdrop-blur-md animate-fade-in shadow-xl shadow-emerald-950/20">
          <span className="text-2xl">🎉</span>
          <div>
            <div className="font-semibold text-white">Rüyanız Başarıyla Paylaşıldı!</div>
            <div className="text-sm text-emerald-300">Deneyiminiz topluluk akışına eklendi ve yapay zeka ön analizi oluşturuldu.</div>
          </div>
        </div>
      )}

      {/* Comment Form */}
      <form onSubmit={handleSubmit} className="bg-night-900/40 border border-night-700/80 rounded-3xl p-6 md:p-8 mb-12 backdrop-blur-xl shadow-2xl relative overflow-hidden group">
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-mystic-600/10 rounded-full blur-3xl pointer-events-none group-hover:bg-mystic-600/20 transition-all duration-500" />
        
        <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
          <span>✨</span> Kendi Rüya Deneyimini Paylaş
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-night-200 mb-2">
              Adınız veya Rumuzunuz *
            </label>
            <input
              type="text"
              required
              placeholder="Örn: Ayşe K. veya RüyaGezgini"
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
              className="w-full bg-night-950/80 border border-night-700 rounded-xl px-4 py-3 text-white placeholder-night-500 focus:outline-none focus:border-mystic-500 focus:ring-1 focus:ring-mystic-500 transition-all"
            />
          </div>
          <div className="flex items-end pb-2">
            <label className="flex items-center gap-3 cursor-pointer text-sm text-night-300 select-none bg-night-950/50 p-3 rounded-xl border border-night-800 w-full hover:border-night-700 transition-all">
              <input
                type="checkbox"
                checked={requestAiAnalysis}
                onChange={(e) => setRequestAiAnalysis(e.target.checked)}
                className="w-5 h-5 rounded border-night-700 text-mystic-600 focus:ring-mystic-500 focus:ring-offset-night-950 bg-night-900 cursor-pointer"
              />
              <span>
                🤖 <strong className="text-mystic-300">AI Sembolizm Motoru</strong> rüyamı analiz etsin
              </span>
            </label>
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-night-200 mb-2">
            Rüyanızın Detayları *
          </label>
          <textarea
            required
            rows={4}
            placeholder="Rüyanızda tam olarak ne oldu? Hangi renkler, duygular veya mekanlar öne çıkıyordu? Ne kadar detay yazarsanız analiz o kadar kesin olur..."
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            className="w-full bg-night-950/80 border border-night-700 rounded-xl px-4 py-3 text-white placeholder-night-500 focus:outline-none focus:border-mystic-500 focus:ring-1 focus:ring-mystic-500 transition-all resize-none"
          />
        </div>

        <div className="flex items-center justify-between flex-wrap gap-4">
          <span className="text-xs text-night-400">
            🔒 Yorumlarınız anonimlik ve topluluk kuralları çerçevesinde yayınlanır.
          </span>
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-gradient-to-r from-mystic-600 to-indigo-600 hover:from-mystic-500 hover:to-indigo-500 text-white font-semibold px-8 py-3.5 rounded-xl shadow-lg shadow-mystic-900/50 hover:shadow-mystic-600/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {isSubmitting ? (
              <>
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Gönderiliyor & Analiz Ediliyor...
              </>
            ) : (
              <>
                <span>🚀</span> Rüyamı Gönder ve Yorumla
              </>
            )}
          </button>
        </div>
      </form>

      {/* Comments List */}
      <div className="space-y-6">
        <h3 className="text-xl font-serif font-bold text-white mb-6 flex items-center gap-2">
          <span>👥</span> Topluluk Deneyimleri ve Yapay Zeka Yorumları ({comments.length})
        </h3>

        {comments.length === 0 ? (
          <div className="text-center py-12 bg-night-900/20 border border-night-800 rounded-2xl">
            <div className="text-3xl mb-2">🌙</div>
            <div className="text-night-300 font-medium">Bu sembol için henüz deneyim paylaşılmamış.</div>
            <div className="text-sm text-night-500 mt-1">İlk rüyayı siz yazın, yapay zeka asistanımız anında yorumlasın!</div>
          </div>
        ) : (
          comments.map((comment) => (
            <div key={comment.id} className="bg-night-900/30 border border-night-800 rounded-2xl p-6 transition-all hover:border-night-700">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-mystic-500 to-night-700 flex items-center justify-center text-white font-bold text-sm shadow-md">
                    {comment.author.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{comment.author}</div>
                    <div className="text-xs text-night-400">{comment.date}</div>
                  </div>
                </div>
                <button
                  onClick={() => handleLike(comment.id)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-night-800/80 hover:bg-night-700 text-night-300 hover:text-mystic-300 text-xs font-medium transition-all border border-night-700/50"
                >
                  <span>👍</span> Faydalı ({comment.likes})
                </button>
              </div>

              <p className="text-night-200 leading-relaxed mb-4 pl-1">
                {comment.content}
              </p>

              {comment.aiReply && (
                <div className="mt-4 pt-4 border-t border-night-800/80 pl-4 md:pl-6 border-l-2 border-l-mystic-500 bg-mystic-950/30 p-4 rounded-r-xl">
                  <div className="flex items-center gap-2 text-xs font-semibold text-mystic-300 mb-2">
                    <span className="text-sm">🤖</span> AI Rüya Sembolizm Asistanı
                    <span className="bg-mystic-500/20 text-mystic-300 px-2 py-0.5 rounded text-[10px] border border-mystic-500/30">
                      Ön Analiz
                    </span>
                  </div>
                  <p className="text-sm text-night-300 leading-relaxed m-0">
                    {comment.aiReply}
                  </p>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </section>
  );
}
