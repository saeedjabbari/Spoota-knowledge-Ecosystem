import React, { useState } from 'react';
import { ORIGINAL_SECTIONS_DATA } from '../data/spottaData';
import { 
  FolderArchive, 
  FileText, 
  CheckCircle2, 
  Quote, 
  Sparkles, 
  ArrowLeft, 
  ExternalLink 
} from 'lucide-react';

export const OriginalSiteExplorer: React.FC = () => {
  const [selectedSectionId, setSelectedSectionId] = useState<string>(ORIGINAL_SECTIONS_DATA[0].id);

  const currentSection = ORIGINAL_SECTIONS_DATA.find(s => s.id === selectedSectionId) || ORIGINAL_SECTIONS_DATA[0];

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Banner */}
      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200 text-xs font-bold mb-3">
            <FolderArchive className="w-3.5 h-3.5 text-slate-500" />
            <span>آرشیو و مرور کامل سند اولیه</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-3">
            کاوشگر محتوای ۷ صفحه اصلی وب‌سایت پیشنهادی اسپوتا
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            در این بخش می‌توانید ساختار و نکات کلیدی هر یک از ۷ بخش سند طراحی شده برای اسپوتا را همراه با برداشت مدیریتی (Executive Takeaway) مطالعه کنید:
          </p>
        </div>

        {/* Section Tabs */}
        <div className="flex flex-wrap gap-2 mt-6">
          {ORIGINAL_SECTIONS_DATA.map((sec) => {
            const isSelected = sec.id === selectedSectionId;
            return (
              <button
                key={sec.id}
                onClick={() => setSelectedSectionId(sec.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#F07824] text-white shadow-md'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>{sec.title}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Selected Section Detail View */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
          <div>
            <span className="text-[11px] font-mono font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded">
              {currentSection.englishTitle}
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">{currentSection.title}</h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">{currentSection.shortDesc}</p>
          </div>
        </div>

        {/* Quote if exists */}
        {currentSection.quote && (
          <div className="p-4 rounded-xl bg-orange-50/70 border-r-4 border-[#F07824] text-slate-800 text-xs sm:text-sm font-semibold flex items-start gap-3">
            <Quote className="w-5 h-5 text-[#F07824] shrink-0 rotate-180 mt-0.5" />
            <p className="leading-relaxed">{currentSection.quote}</p>
          </div>
        )}

        {/* Key Points */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>نکات و مفاهیم کلیدی این بخش:</span>
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {currentSection.keyPoints.map((point, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 leading-relaxed flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F07824] mt-2 shrink-0" />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Executive Takeaway */}
        <div className="p-4 rounded-xl bg-slate-900 text-white space-y-1.5">
          <div className="flex items-center gap-1.5 text-orange-400 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>پیام این بخش در مذاکره با مدیرعامل (Executive Takeaway):</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
            {currentSection.executiveTakeaway}
          </p>
        </div>
      </div>
    </div>
  );
};
