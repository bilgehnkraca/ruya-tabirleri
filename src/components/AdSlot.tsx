'use client';

import { useEffect, useRef, useId } from 'react';

type AdSlotProps = {
  type: 'adsense' | 'yandex';
  slotId?: string; // For AdSense
  yandexId?: string; // For Yandex e.g., 'R-A-123456-1'
  className?: string;
  format?: 'auto' | 'fluid' | 'rectangle';
  responsive?: boolean;
};

export default function AdSlot({ type, slotId, yandexId, className = '', format = 'auto', responsive = true }: AdSlotProps) {
  const adRef = useRef<HTMLDivElement>(null);
  const reactId = useId();

  useEffect(() => {
    // Only run in production and if consent is granted (assumed logic)
    if (process.env.NODE_ENV !== 'production') return;

    try {
      if (type === 'adsense' && slotId) {
        // @ts-ignore
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } else if (type === 'yandex' && yandexId && adRef.current) {
        // @ts-ignore
        window.yaContextCb.push(() => {
          // @ts-ignore
          Ya.Context.AdvManager.render({
            renderTo: adRef.current?.id,
            blockId: yandexId
          })
        });
      }
    } catch (e) {
      console.error(`${type} ad error:`, e);
    }
  }, [type, slotId, yandexId]);

  if (type === 'yandex' && !yandexId) return null;

  if (process.env.NODE_ENV !== 'production') {
    return (
      <div className={`w-full h-[90px] bg-night-800/50 rounded-xl border border-night-700/50 flex flex-col items-center justify-center text-night-500 text-sm ${className}`}>
        <span>Reklam Alanı ({type === 'adsense' ? 'Google AdSense' : 'Yandex'})</span>
        <span className="text-xs text-night-600">ID: {slotId || yandexId || 'Belirtilmedi'}</span>
      </div>
    );
  }

  const uniqueId = `yandex_rtb_${yandexId}_${reactId.replace(/:/g, '')}`;

  if (type === 'yandex') {
    return <div id={uniqueId} ref={adRef} className={`w-full min-h-[90px] ${className}`}></div>;
  }

  return (
    <div className={`w-full min-h-[90px] overflow-hidden ${className}`}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={process.env.NEXT_PUBLIC_ADSENSE_PUB_ID || "ca-pub-3922046877246889"}
        data-ad-slot={slotId}
        data-ad-format={format}
        data-full-width-responsive={responsive ? "true" : "false"}
      />
    </div>
  );
}
