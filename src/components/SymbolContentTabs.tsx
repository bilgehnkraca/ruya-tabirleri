"use client";

import { useState } from 'react';
import { DreamSymbol } from '@/lib/types';
import { Sparkles, BookOpen, Brain, ChevronRight, Zap, Star } from 'lucide-react';
import AdSlot from '@/components/AdSlot';
import PartnerAd from '@/components/PartnerAd';
import TextToSpeech from '@/components/TextToSpeech';
import RichTextWithLinks from '@/components/RichTextWithLinks';

type Tab = 'general' | 'religious' | 'psychological';

export default function SymbolContentTabs({ 
  symbol, 
  allSymbolsLight 
}: { 
  symbol: DreamSymbol;
  allSymbolsLight?: { title: string; slug: string }[];
}) {
  const [activeTab, setActiveTab] = useState<Tab>('general');

  // Generate Answer-First summaries from content to ensure uniqueness across tabs
  const generalSummary = symbol.content.generalMeaning?.split(/[.!?]/)[0]?.trim() || symbol.shortDescription;
  const religiousSummary = symbol.content.religiousMeaning?.split(/[.!?]/)[0]?.trim() || symbol.shortDescription;
  const psychologicalSummary = symbol.content.psychologicalMeaning?.split(/[.!?]/)[0]?.trim() || symbol.shortDescription;

  return (
    <div className="mt-8 mb-12">
      {/* Tab Navigation */}
      <div className="flex flex-col sm:flex-row gap-2 border-b border-night-700/50 pb-4 mb-6">
        <button
          onClick={() => setActiveTab('general')}
          className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-medium transition-all duration-300 ${
            activeTab === 'general'
              ? 'bg-mystic-700 text-white shadow-sm'
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
              ? 'bg-gold-500 text-night-900 shadow-sm'
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
              ? 'bg-blue-700 text-white shadow-sm'
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
            <h2 className="text-2xl font-serif font-bold text-mystic-100 mb-4 border-b border-night-700 pb-2 flex items-center justify-between">
              Rüyada {symbol.title} Görmek - Genel Yorum
            </h2>

            {/* GEO: Answer-First Özet Kutusu */}
            <div className="answer-first-box mb-6 p-4 rounded-xl bg-gradient-to-r from-mystic-900/40 via-night-800/60 to-mystic-900/40 border border-mystic-500/30 shadow-lg shadow-mystic-900/20">
              <div className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-mystic-400 mt-0.5 flex-shrink-0" />
                <p className="text-mystic-100 font-medium text-sm md:text-base leading-relaxed m-0">
                  <strong>Özet:</strong> {generalSummary}
                </p>
              </div>
            </div>

            <TextToSpeech text={symbol.content.generalMeaning} />
            <div className="text-night-200 leading-relaxed bg-night-800/30 p-6 rounded-2xl border-l-4 border-mystic-500 mb-8 whitespace-pre-wrap">
              <RichTextWithLinks text={symbol.content.generalMeaning} symbols={allSymbolsLight} currentSlug={symbol.slug} />
            </div>

            <PartnerAd slug={symbol.slug} className="my-8" />

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
          </div>
        )}

        {/* Religious Tab */}
        {activeTab === 'religious' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-2xl font-serif font-bold text-gold-400 mb-4 border-b border-night-700 pb-2 flex items-center gap-2">
              <BookOpen className="w-6 h-6" /> Rüyada {symbol.title} Görmek - İslami ve Diyanet Tabiri
            </h2>

            {/* GEO: Answer-First Özet Kutusu — İslami */}
            <div className="answer-first-box mb-6 p-4 rounded-xl bg-gradient-to-r from-amber-950/40 via-night-800/60 to-amber-950/40 border border-gold-500/30 shadow-lg shadow-amber-900/20">
              <div className="flex items-start gap-3">
                <BookOpen className="w-5 h-5 text-gold-400 mt-0.5 flex-shrink-0" />
                <p className="text-gold-100 font-medium text-sm md:text-base leading-relaxed m-0">
                  <strong>İslami Özet:</strong> {religiousSummary}
                </p>
              </div>
            </div>

            <TextToSpeech text={symbol.content.religiousMeaning} />
            <div className="text-night-200 leading-relaxed bg-night-800/30 p-6 rounded-2xl border-l-4 border-gold-500 text-lg whitespace-pre-wrap">
              <RichTextWithLinks text={symbol.content.religiousMeaning} symbols={allSymbolsLight} currentSlug={symbol.slug} />
            </div>
            
            <PartnerAd slug={symbol.slug} className="my-8" />

            <div className="mt-4 p-5 rounded-2xl border border-gold-500/30 bg-gradient-to-r from-amber-950/40 to-night-900 text-night-200 text-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-lg">
              <div className="flex items-center gap-3">
                <Star className="w-6 h-6 text-gold-400" /> 
                <div>
                  <h4 className="font-bold text-gold-300 mb-0.5">Manevi Takvim ve Zekat Planlaması</h4>
                  <p className="text-night-300 m-0 text-xs sm:text-sm">
                    İbadet günlerinizi, zekat miktarınızı ve mübarek geceleri planlamak için <a href="https://www.turkiyehesaplama.com/dini-gunler-hesaplama" target="_blank" rel="noopener noreferrer dofollow" className="text-gold-400 hover:text-gold-300 font-bold underline decoration-gold-500/50 underline-offset-4">Türkiye Hesaplama Dini Günler ve Zekat Araçları</a> sisteminden ücretsiz yararlanabilirsiniz.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 text-sm text-night-400 italic bg-night-800/20 p-4 rounded-xl">
              Not: İslami rüya tabirleri İbn Şirin, Nablusi, İmam Cafer-i Sadık gibi kadim alimlerin yorumlarına dayanmaktadır. Rüyaların kesin bir hükmü yoktur, her rüya kişinin kendi yaşantısına göre şekillenir.
            </div>
          </div>
        )}

        {/* Psychological Tab */}
        {activeTab === 'psychological' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-2xl font-serif font-bold text-blue-400 mb-4 border-b border-night-700 pb-2 flex items-center gap-2">
              <Brain className="w-6 h-6" /> Rüyada {symbol.title} Görmek - Psikolojik Analiz
            </h2>

            {/* GEO: Answer-First Özet Kutusu — Psikolojik */}
            <div className="answer-first-box mb-6 p-4 rounded-xl bg-gradient-to-r from-blue-950/40 via-night-800/60 to-blue-950/40 border border-blue-500/30 shadow-lg shadow-blue-900/20">
              <div className="flex items-start gap-3">
                <Brain className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <p className="text-blue-100 font-medium text-sm md:text-base leading-relaxed m-0">
                  <strong>Psikolojik Özet:</strong> {psychologicalSummary}
                </p>
              </div>
            </div>

            <TextToSpeech text={symbol.content.psychologicalMeaning} />
            <div className="text-night-200 leading-relaxed bg-night-800/30 p-6 rounded-2xl border-l-4 border-blue-500 text-lg whitespace-pre-wrap">
              <RichTextWithLinks text={symbol.content.psychologicalMeaning} symbols={allSymbolsLight} currentSlug={symbol.slug} />
            </div>
            
            <PartnerAd slug={symbol.slug} className="my-8" />

            <div className="mt-4 p-5 rounded-2xl border border-blue-500/30 bg-gradient-to-r from-blue-950/40 to-night-900 text-night-200 text-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-lg">
              <div className="flex items-center gap-3">
                <Brain className="w-6 h-6 text-blue-400" /> 
                <div>
                  <h4 className="font-bold text-blue-300 mb-0.5">Analitik Yaşam ve Zaman Yönetimi</h4>
                  <p className="text-night-300 m-0 text-xs sm:text-sm">
                    Bilinçaltınızın mesajlarını çözdükten sonra yaş dönüm noktalarınızı, kariyer hedeflerinizi ve zaman çizelgenizi <a href="https://www.turkiyehesaplama.com" target="_blank" rel="noopener noreferrer dofollow" className="text-blue-400 hover:text-blue-300 font-bold underline decoration-blue-500/50 underline-offset-4">Türkiye Hesaplama Yaşam ve Planlama Sistemleri</a> ile organize edebilirsiniz.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 text-sm text-night-400 italic bg-night-800/20 p-4 rounded-xl">
              Not: Psikolojik analizler, rüyaların bilinçaltı yansımaları olduğunu savunan Jung ve Freud gibi analitik psikologların genel yaklaşımları baz alınarak derlenmiştir.
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
