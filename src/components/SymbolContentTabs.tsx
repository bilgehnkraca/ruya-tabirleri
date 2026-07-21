"use client";

import { useState } from 'react';
import { DreamSymbol } from '@/lib/types';
import { Sparkles, BookOpen, Brain, ChevronRight } from 'lucide-react';
import AdSlot from '@/components/AdSlot';
import PartnerAd from '@/components/PartnerAd';

type Tab = 'general' | 'religious' | 'psychological';

export default function SymbolContentTabs({ symbol }: { symbol: DreamSymbol }) {
  const [activeTab, setActiveTab] = useState<Tab>('general');

  return (
    <div className="mt-8 mb-12">
      {/* Tab Navigation */}
      <div className="flex flex-col sm:flex-row gap-2 border-b border-night-700/50 pb-4 mb-6">
        <button
          onClick={() => setActiveTab('general')}
          className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-medium transition-all duration-300 ${
            activeTab === 'general'
              ? 'bg-mystic-600 text-white shadow-[0_0_15px_rgba(112,60,211,0.3)]'
              : 'bg-night-800/50 text-night-300 hover:bg-night-700 hover:text-night-100'
          }`}
        >
          <Sparkles className="w-5 h-5" />
          <span>Genel & Senaryolar</span>
        </button>

        <button
          onClick={() => setActiveTab('religious')}
          className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-medium transition-all duration-300 ${
            activeTab === 'religious'
              ? 'bg-gold-500 text-night-900 shadow-[0_0_15px_rgba(212,175,55,0.3)]'
              : 'bg-night-800/50 text-night-300 hover:bg-night-700 hover:text-night-100'
          }`}
        >
          <BookOpen className="w-5 h-5" />
          <span>İslami & Kadim</span>
        </button>

        <button
          onClick={() => setActiveTab('psychological')}
          className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-medium transition-all duration-300 ${
            activeTab === 'psychological'
              ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.3)]'
              : 'bg-night-800/50 text-night-300 hover:bg-night-700 hover:text-night-100'
          }`}
        >
          <Brain className="w-5 h-5" />
          <span>Psikolojik Analiz</span>
        </button>
      </div>

      {/* Tab Content Panels */}
      <div className="relative min-h-[300px]">
        
        {/* General Tab */}
        {activeTab === 'general' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-2xl font-serif font-bold text-mystic-100 mb-4 border-b border-night-700 pb-2">Genel Yorum</h2>
            <div className="text-night-200 leading-relaxed bg-night-800/30 p-6 rounded-2xl border-l-4 border-mystic-500 mb-8 whitespace-pre-wrap">
              {symbol.content.generalMeaning}
            </div>

            {symbol.content.variations && symbol.content.variations.length > 0 && (
              <div className="mt-8">
                <h2 className="text-2xl font-serif font-bold text-mystic-100 mb-6 border-b border-night-700 pb-2">Sık Görülen Senaryolar</h2>
                <div className="grid gap-6">
                  {symbol.content.variations.map((variation, index) => (
                    <div key={index} className="bg-night-800/50 backdrop-blur-sm border border-night-700 rounded-xl p-5 hover:border-mystic-500/50 transition-colors">
                      <h3 className="text-lg font-bold text-mystic-300 mb-3 flex items-start gap-2">
                        <ChevronRight className="w-5 h-5 mt-0.5 flex-shrink-0 text-mystic-500" />
                        {variation.title}
                      </h3>
                      <p className="text-night-200 pl-7">{variation.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Orta Reklam Alanı (En uzun sekme olan Genel sekmesinde) */}
            <div className="my-10">
               <AdSlot type="adsense" slotId="CONTENT_MIDDLE_1" className="my-10" />
            </div>

            <PartnerAd slug={symbol.slug} />
          </div>
        )}

        {/* Religious Tab */}
        {activeTab === 'religious' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-2xl font-serif font-bold text-gold-400 mb-4 border-b border-night-700 pb-2 flex items-center gap-2">
              <BookOpen className="w-6 h-6" /> Kadim Kaynaklara Göre...
            </h2>
            <div className="text-night-200 leading-relaxed bg-night-800/30 p-6 rounded-2xl border-l-4 border-gold-500 text-lg whitespace-pre-wrap">
              {symbol.content.religiousMeaning}
            </div>
            <div className="mt-6 text-sm text-night-400 italic bg-night-800/20 p-4 rounded-xl">
              Not: İslami rüya tabirleri İbn Şirin, Nablusi, İmam Cafer-i Sadık gibi kadim alimlerin yorumlarına dayanmaktadır. Rüyaların kesin bir hükmü yoktur, her rüya kişinin kendi yaşantısına göre şekillenir.
            </div>
          </div>
        )}

        {/* Psychological Tab */}
        {activeTab === 'psychological' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-2xl font-serif font-bold text-blue-400 mb-4 border-b border-night-700 pb-2 flex items-center gap-2">
              <Brain className="w-6 h-6" /> Bilinçaltınız Aslında Ne Diyor?
            </h2>
            <div className="text-night-200 leading-relaxed bg-night-800/30 p-6 rounded-2xl border-l-4 border-blue-500 text-lg whitespace-pre-wrap">
              {symbol.content.psychologicalMeaning}
            </div>
            <div className="mt-6 text-sm text-night-400 italic bg-night-800/20 p-4 rounded-xl">
              Not: Psikolojik analizler, rüyaların bilinçaltı yansımaları olduğunu savunan Jung ve Freud gibi analitik psikologların genel yaklaşımları baz alınarak derlenmiştir.
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
