import React, { useState } from 'react';
import { RECOMMENDATIONS_PLAYBOOK, MANAGEMENT_FAQ_PLAYBOOK } from '../data/spottaData';
import { 
  Lightbulb, 
  HelpCircle, 
  CheckSquare, 
  AlertOctagon, 
  ChevronDown, 
  ChevronUp, 
  Sparkles, 
  Target, 
  Scale, 
  ShieldAlert,
  FileCheck2,
  ThumbsUp
} from 'lucide-react';

export const RecommendationsPlaybook: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>('همه');

  const categories = ['همه', 'استراتژی ارائه', 'مدیریت ریسک', 'اجرای پایلوت', 'تعامل با پرسنل'];

  const filteredRecommendations = selectedCategory === 'همه' 
    ? RECOMMENDATIONS_PLAYBOOK 
    : RECOMMENDATIONS_PLAYBOOK.filter(r => r.category === selectedCategory);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="space-y-8 sm:space-y-10 animate-fade-in">
      {/* Banner */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-5 sm:p-8 border border-slate-700 shadow-md">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/30 text-xs font-bold mb-3">
            <Lightbulb className="w-3.5 h-3.5 shrink-0" />
            <span>بسته پیشنهادات مدیریتی و تصمیم‌گیری راهبردی</span>
          </div>
          <h2 className="text-xl sm:text-3xl font-black text-white mb-3">
            پیشنهادات مدیریتی جهت استقرار اثربخش و هدایت طرح
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            مدیریت ارشد گروه صنعتی، همواره دغدغه تداوم بی‌وقفه تولید، انضباط مالی و پاسخگویی به تعهدات بازار را دارد. این ۷ توصیه راهبردی، چارچوبی مهندسی‌شده را برای تصمیم‌گیری محتاطانه، بهینه‌سازی منابع و مدیریت ریسک فراهم می‌سازد:
          </p>
        </div>
      </section>

      {/* 7 Recommendations Grid */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <h3 className="text-base sm:text-xl font-black text-slate-900">
            ۷ توصیه کلیدی جهت مدیریت ریسک و اثربخشی فرآیندها
          </h3>
          <div className="flex flex-wrap gap-1.5 text-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer text-xs ${
                  selectedCategory === cat
                    ? 'bg-[#F07824] text-white font-bold'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {filteredRecommendations.map((rec, idx) => (
            <div 
              key={rec.id}
              className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-xs hover:border-orange-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] sm:text-[11px] font-bold px-2.5 py-0.5 rounded-md bg-orange-50 text-[#b95613] border border-orange-200">
                    {rec.category}
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-400">
                    راهبرد #{idx + 1}
                  </span>
                </div>

                <h4 className="text-sm sm:text-base font-bold text-slate-900 mb-2 leading-snug">
                  {rec.title}
                </h4>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4 font-medium">
                  {rec.theRecommendation}
                </p>

                <div className="space-y-2.5 pt-3 border-t border-slate-100 text-xs">
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-700">
                    <strong className="block text-slate-900 mb-1 font-bold">اهمیت برای مدیریت ارشد:</strong>
                    <span>{rec.whyCrucialForManagement}</span>
                  </div>

                  <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-900">
                    <strong className="block text-emerald-800 mb-1 font-bold">اقدام عملیاتی پیشنهادی:</strong>
                    <span>{rec.actionableStep}</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-start gap-1.5 text-[11px] text-rose-700 bg-rose-50/70 p-2 rounded-lg">
                <AlertOctagon className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                <span><strong>ملاحظه کلیدی:</strong> {rec.potentialPitfall}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Management FAQ & Objections Handling */}
      <section className="bg-white rounded-2xl p-5 sm:p-8 border border-slate-200 shadow-xs space-y-5">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#b95613] bg-orange-100 px-2.5 py-1 rounded-md mb-2">
            <HelpCircle className="w-3.5 h-3.5 shrink-0" />
            <span>پاسخ به سوالات و دغدغه‌های اساسی مدیریت</span>
          </div>
          <h3 className="text-lg sm:text-2xl font-black text-slate-900 mb-1">
            پرسش‌های اساسی پیرامون اثرات اجرایی و راهکارهای کارشناسی
          </h3>
          <p className="text-xs sm:text-sm text-slate-500">
            بررسی موشکافانه دغدغه‌های رایج سازمانی و پاسخ‌های مستند به شواهد صنعتی:
          </p>
        </div>

        <div className="space-y-3">
          {MANAGEMENT_FAQ_PLAYBOOK.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div 
                key={idx}
                className="border border-slate-200 rounded-xl overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-3.5 sm:p-5 text-right bg-slate-50 hover:bg-slate-100 flex items-center justify-between gap-3 cursor-pointer transition-colors"
                >
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#F07824] text-white text-xs font-bold flex items-center justify-center shrink-0">
                      ؟
                    </span>
                    <span className="font-bold text-slate-900 text-xs sm:text-base leading-snug">{faq.question}</span>
                  </div>
                  {isOpen ? <ChevronUp className="w-4 h-4 text-slate-500 shrink-0" /> : <ChevronDown className="w-4 h-4 text-slate-500 shrink-0" />}
                </button>

                {isOpen && (
                  <div className="p-4 sm:p-6 bg-white border-t border-slate-200 space-y-3 sm:space-y-4 text-xs sm:text-sm">
                    <div className="p-2.5 sm:p-3 bg-amber-50 rounded-lg border border-amber-200 text-amber-900">
                      <strong>ریشه دغدغه مدیریتی: </strong>
                      {faq.typicalHesitation}
                    </div>

                    <div className="space-y-1">
                      <strong className="block text-slate-900 font-bold">پاسخ تحلیلی و راهکار سیستمی:</strong>
                      <p className="text-slate-800 leading-relaxed font-medium bg-emerald-50/50 p-3 sm:p-3.5 rounded-lg border border-emerald-100">
                        {faq.bulletproofAnswer}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-600 bg-slate-100 p-2.5 rounded-lg">
                      <Sparkles className="w-4 h-4 text-orange-500 shrink-0" />
                      <span><strong>پشتوانه تجربی و صنعتی: </strong>{faq.supportingData}</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* The Decision Gate Approval Form */}
      <section className="bg-gradient-to-r from-orange-50 via-white to-orange-50 rounded-2xl p-5 sm:p-8 border border-orange-200 shadow-sm">
        <div className="max-w-3xl mb-5 sm:mb-6">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-md mb-2">
            <FileCheck2 className="w-3.5 h-3.5 shrink-0" />
            <span>چارچوب تصمیم‌گیری</span>
          </div>
          <h3 className="text-lg sm:text-2xl font-black text-slate-900 mb-2">
            برگه مصوبه پیشنهادی آغاز پایلوت ۹۰ روزه (Decision Gate Memo)
          </h3>
          <p className="text-xs sm:text-sm text-slate-600">
            چارچوب تصمیم‌گیری شفاف برای تصویب دوره آزمایشی با تعیین دقیق شروط کنترل ریسک و عدم تعهدات سنگین مالی:
          </p>
        </div>

        <div className="bg-white rounded-xl p-4 sm:p-6 border border-slate-300 shadow-sm space-y-4 text-xs sm:text-sm">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200">
            <span className="font-extrabold text-slate-900">مصوبه آغاز پایلوت ۹۰ روزه اکوسیستم سرمایه انسانی</span>
            <span className="text-xs text-slate-500 font-mono">کد: SPOOTA-HC-PILOT-800</span>
          </div>

          <div className="space-y-2 text-slate-700 leading-relaxed">
            <p className="flex items-start gap-2">
              <CheckSquare className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>محدوده آزمایشی:</strong> اجرای آزمایشی روی ۳۰ تا ۵۰ نفر از پرسنل داوطلب در واحدهای منتخب خط تولید و پشتیبانی.</span>
            </p>
            <p className="flex items-start gap-2">
              <CheckSquare className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>مدت اعتبار:</strong> ۹۰ روز کاری از تاریخ ابلاغ؛ بدون تعهد برای خرید نرم‌افزار یا ایجاد تعهدات ثابت مالی جدید.</span>
            </p>
            <p className="flex items-start gap-2">
              <CheckSquare className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>دروازه تصمیم روز ۹۰:</strong> ادامه یا اصلاح طرح منوط به گزارش رضایت بالای ۷۵٪ و اثبات عدم اخلال در راندمان شیفت کاری است.</span>
            </p>
            <p className="flex items-start gap-2">
              <CheckSquare className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>وظایف حاکمیتی:</strong> استماع گزارش تحلیلی فصلی ۳۰ دقیقه‌ای و ابلاغ همکاری به مدیران و سرپرستان صف و ستاد.</span>
            </p>
          </div>

          <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="text-slate-600 font-medium">
              تایید و امضای مدیریت ارشد شرکت: ............................................
            </div>
            <div className="inline-flex items-center gap-1.5 text-emerald-700 font-bold bg-emerald-50 px-2.5 sm:px-3 py-1.5 rounded-md border border-emerald-200">
              <ThumbsUp className="w-4 h-4 shrink-0" />
              <span>تضمین کامل عدم تحمیل ریسک یا هزینه سنگین</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
