'use client';

import { useState } from 'react';
import { contentBilingual as content } from "@/data/content";

type Language = 'en' | 'sk';

function LanguageToggle({ currentLang, onToggle }: { currentLang: Language; onToggle: (lang: Language) => void }) {
  return (
    <div className="flex gap-2 text-xs font-medium">
      <button
        onClick={() => onToggle('en')}
        className={`px-3 py-1.5 transition-colors ${
          currentLang === 'en'
            ? 'text-zinc-900 border-b-2 border-zinc-900'
            : 'text-zinc-400 hover:text-zinc-600'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => onToggle('sk')}
        className={`px-3 py-1.5 transition-colors ${
          currentLang === 'sk'
            ? 'text-zinc-900 border-b-2 border-zinc-900'
            : 'text-zinc-400 hover:text-zinc-600'
        }`}
      >
        SK
      </button>
    </div>
  );
}

export default function Home() {
  const [language, setLanguage] = useState<Language>('en');

  return (
    <main className="max-w-2xl mx-auto">
      
      {/* Language Toggle */}
      <div className="px-6 pt-8 pb-4 flex justify-end">
        <LanguageToggle currentLang={language} onToggle={setLanguage} />
      </div>

      {/* Opening Block */}
      <header className="px-6 pt-16 pb-24 md:pt-24 md:pb-32">
        <h1 className="text-xs font-medium tracking-[0.3em] uppercase text-zinc-500 mb-16 md:mb-20">
          {content.name}
        </h1>
        <p className="text-2xl md:text-3xl font-light leading-[1.3] text-zinc-900 tracking-tight max-w-[85%] md:max-w-[75%]">
          {language === 'en' ? content.opening.en : content.opening.sk}
        </p>
      </header>

      {/* Working Context */}
      <section className="px-6 py-16 md:py-24 bg-zinc-50/50 border-y border-zinc-100">
        <div className="max-w-xl ml-0 md:ml-8">
          <h2 className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-300 mb-8">
            {language === 'en' ? content.workingContext.heading.en : content.workingContext.heading.sk}
          </h2>
          <div className="text-base md:text-lg text-zinc-700 leading-relaxed font-light whitespace-pre-line">
            {language === 'en' ? content.workingContext.text.en : content.workingContext.text.sk}
          </div>
        </div>
      </section>

      {/* Work Scenes */}
      <section className="px-6 py-24 md:py-32">
        <div className="space-y-32 md:space-y-40">
          {content.workScenes.map((scene, index) => (
            <article key={index} className={index % 2 === 0 ? "max-w-xl" : "max-w-xl ml-auto"}>
              <h2 className="text-xl md:text-2xl font-medium text-zinc-900 mb-6 tracking-tight">
                {language === 'en' ? scene.heading.en : scene.heading.sk}
              </h2>
              <div className="text-[15px] md:text-base text-zinc-600 leading-[1.7] mb-4 font-light whitespace-pre-line">
                {language === 'en' ? scene.description.en : scene.description.sk}
              </div>
              <p className="text-xs text-zinc-400 font-medium tracking-wide uppercase">
                {language === 'en' ? scene.context.en : scene.context.sk}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Technical Scope */}
      <section className="px-6 py-20 md:py-28 bg-zinc-50/30">
        <div className="max-w-xl">
          <h2 className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-300 mb-8">
            {language === 'en' ? content.technicalScope.heading.en : content.technicalScope.heading.sk}
          </h2>
          <div className="text-[15px] md:text-base text-zinc-600 leading-[1.7] font-light whitespace-pre-line">
            {language === 'en' ? content.technicalScope.text.en : content.technicalScope.text.sk}
          </div>
        </div>
      </section>

      {/* Background */}
      <section className="px-6 py-20 md:py-28">
        <div className="max-w-xl ml-0 md:ml-12">
          <h2 className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-300 mb-8">
            {language === 'en' ? content.background.heading.en : content.background.heading.sk}
          </h2>
          <div className="text-[15px] md:text-base text-zinc-600 leading-[1.7] font-light">
            {language === 'en' ? content.background.text.en : content.background.text.sk}
          </div>
        </div>
      </section>

      {/* Additional Training */}
      <section className="px-6 py-20 md:py-28">
        <div className="max-w-xl">
          <h2 className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-300 mb-8">
            {language === 'en' ? content.additionalTraining.heading.en : content.additionalTraining.heading.sk}
          </h2>
          <div className="text-[15px] md:text-base text-zinc-600 leading-[1.7] font-light">
            {language === 'en' ? content.additionalTraining.text.en : content.additionalTraining.text.sk}
          </div>
        </div>
      </section>

      {/* Languages and Licenses */}
      <section className="px-6 py-20 md:py-28">
        <div className="max-w-xl ml-0 md:ml-12">
          <h2 className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-300 mb-8">
            {language === 'en' ? content.languagesLicenses.heading.en : content.languagesLicenses.heading.sk}
          </h2>
          <div className="text-[15px] md:text-base text-zinc-600 leading-[1.7] font-light whitespace-pre-line">
            {language === 'en' ? content.languagesLicenses.text.en : content.languagesLicenses.text.sk}
          </div>
        </div>
      </section>

      {/* Contact */}
      <footer className="px-6 pt-24 pb-32 md:pt-32 md:pb-48 border-t border-zinc-200 mt-16">
        <div className="max-w-xl">
          <h2 className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-300 mb-8">
            {language === 'en' ? content.contact.heading.en : content.contact.heading.sk}
          </h2>
          <div className="text-lg md:text-xl text-zinc-900 mb-12 font-light leading-relaxed whitespace-pre-line">
            {language === 'en' ? content.contact.text.en : content.contact.text.sk}
          </div>
          <div className="flex flex-col gap-3 text-sm">
            <a 
              href={`mailto:${content.contact.email}`} 
              className="text-zinc-900 font-medium hover:text-zinc-500 transition-colors w-fit"
            >
              {content.contact.email}
            </a>
            <span className="text-[9px] uppercase tracking-[0.25em] text-zinc-300 font-bold mt-8">
              {content.contact.location}
            </span>
          </div>
        </div>
      </footer>

    </main>
  );
}
