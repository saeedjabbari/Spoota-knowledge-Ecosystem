import React from 'react';
import { CORE_PROPOSAL_SUMMARY } from '../data/spottaData';
import { 
  Users, 
  Sparkles, 
  Repeat, 
  CheckCircle2, 
  Target, 
  ArrowLeft, 
  Layers, 
  Scale, 
  ShieldCheck, 
  TrendingUp,
  Building2,
  GraduationCap
} from 'lucide-react';

interface ExecutiveSummaryProps {
  onGoToMissingLink: () => void;
  onGoToRecommendations: () => void;
  onOpenDeck: () => void;
}

export const ExecutiveSummary: React.FC<ExecutiveSummaryProps> = ({
  onGoToMissingLink,
  onGoToRecommendations,
  onOpenDeck
}) => {
  return (
    <div className="space-y-8 sm:space-y-10 animate-fade-in">
      {/* Hero Executive Banner */}
      <section className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-5 sm:p-10 shadow-xl border border-slate-700/50">
        <div className="absolute top-0 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-60 sm:w-80 h-60 sm:h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none translate-x-1/3 translate-y-1/3" />

        <div className="relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/30 text-xs font-bold mb-4">
            <Sparkles className="w-3.5 h-3.5 shrink-0" />
            <span>گزارش تحلیلی ویژه ارائه به مدیریت ارشد</span>
          </div>

          <h1 className="text-xl sm:text-3xl lg:text-4xl font-black text-white leading-snug sm:leading-tight mb-4 tracking-tight">
            پیشنهاد دقیق چیست؟ <br />
            <span className="text-[#F07824]">اکوسیستم سرمایه انسانی؛</span> گذار از مزایای پراکنده به چرخه ارزش‌آفرین سازمانی
          </h1>

          <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed mb-6 sm:mb-8 max-w-3xl">
            {CORE_PROPOSAL_SUMMARY.conceptDefinition}
          </p>

          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
            <button
              onClick={onOpenDeck}
              className="bg-[#F07824] hover:bg-[#d65f10] text-white px-4 sm:px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-orange-500/25 transition-all cursor-pointer active:scale-95"
            >
              <span>شروع پرزنت</span>
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={onGoToMissingLink}
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-3.5 sm:px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all cursor-pointer"
            >
              مشاهده حلقه مفقوده صنعت
            </button>
            <button
              onClick={onGoToRecommendations}
              className="bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-600 px-3.5 sm:px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all cursor-pointer"
            >
              پیشنهادات مدیریتی
            </button>
          </div>
        </div>

        {/* Highlight Stats Strip */}
        <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          <div className="bg-slate-800/60 p-3 sm:p-4 rounded-xl border border-slate-700/60">
            <span className="text-slate-400 text-[11px] sm:text-xs block mb-1">جامعه تحت پوشش</span>
            <div className="text-xl sm:text-3xl font-black text-white flex items-baseline gap-1">
              ۸۰۰ <span className="text-[11px] sm:text-xs font-normal text-slate-400">نفر</span>
            </div>
            <span className="text-[10px] sm:text-[11px] text-orange-400 font-medium">پرسنل کارخانه + خانواده‌ها</span>
          </div>

          <div className="bg-slate-800/60 p-3 sm:p-4 rounded-xl border border-slate-700/60">
            <span className="text-slate-400 text-[11px] sm:text-xs block mb-1">مقیاس پایلوت پیشنهادی</span>
            <div className="text-xl sm:text-3xl font-black text-white flex items-baseline gap-1">
              ۳۰–۵۰ <span className="text-[11px] sm:text-xs font-normal text-slate-400">نفر</span>
            </div>
            <span className="text-[10px] sm:text-[11px] text-emerald-400 font-medium">ریسک کنترل‌شده و حداقل هزینه</span>
          </div>

          <div className="bg-slate-800/60 p-3 sm:p-4 rounded-xl border border-slate-700/60">
            <span className="text-slate-400 text-[11px] sm:text-xs block mb-1">طول دوره اعتبارسنجی</span>
            <div className="text-xl sm:text-3xl font-black text-white flex items-baseline gap-1">
              ۹۰ <span className="text-[11px] sm:text-xs font-normal text-slate-400">روز</span>
            </div>
            <span className="text-[10px] sm:text-[11px] text-amber-400 font-medium">دروازه تصمیم برای گسترش</span>
          </div>

          <div className="bg-slate-800/60 p-3 sm:p-4 rounded-xl border border-slate-700/60">
            <span className="text-slate-400 text-[11px] sm:text-xs block mb-1">لایه‌های ارزش‌آفرینی</span>
            <div className="text-xl sm:text-3xl font-black text-white flex items-baseline gap-1">
              ۴ <span className="text-[11px] sm:text-xs font-normal text-slate-400">لایه</span>
            </div>
            <span className="text-[10px] sm:text-[11px] text-blue-400 font-medium">کارمند، خانواده، نسل بعد، سازمان</span>
          </div>
        </div>
      </section>

      {/* The Core Proposal: 4 Layers of Value */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <div className="text-xs font-bold text-[#F07824] uppercase tracking-wider">VALUE ARCHITECTURE</div>
            <h2 className="text-lg sm:text-2xl font-black text-slate-900">چهار ستون اصلی اکوسیستم پیشنهادی برای اسپوتا (SPOOTA)</h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 max-w-md">
            هر لایه مکمل لایه بعدی است و فرآیندها مستقیماً به بهره‌وری خطوط تولید پیوند می‌خورند.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {CORE_PROPOSAL_SUMMARY.fourLayers.map((layer) => (
            <div 
              key={layer.level}
              className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-xs hover:shadow-md hover:border-orange-200 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl sm:text-3xl font-black text-[#F07824]/30">{layer.level}</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-600">
                    {layer.english}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">{layer.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">{layer.desc}</p>
              </div>

              <div className="pt-3 border-t border-slate-100 space-y-1.5">
                <span className="text-[10px] sm:text-[11px] font-semibold text-slate-400 block mb-1">خروجی‌های ملموس:</span>
                {layer.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-1.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* The Multiplier Loop: How It Multiplies Value */}
      <section className="bg-gradient-to-r from-orange-50 via-amber-50 to-orange-50 rounded-2xl p-5 sm:p-8 border border-orange-200">
        <div className="max-w-3xl mb-6">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#b95613] bg-orange-100 px-2.5 py-1 rounded-md mb-2">
            <Repeat className="w-3.5 h-3.5" />
            <span>چرخه مولد (The Multiplier Loop)</span>
          </div>
          <h3 className="text-lg sm:text-2xl font-black text-slate-900 mb-2">
            چرا نام این ساختار «اکوسیستم» است، نه صرفاً «آموزش»؟
          </h3>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            در مدل‌های سنتی، آموزش یک سرفصل هزینه‌ای منفرد است که پس از برگزاری دوره پایان می‌یابد. در اکوسیستم اسپوتا، یادگیری تبدیل به چرخه‌ای پویا و خودتکثیرشونده در محیط کار می‌گردد:
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 sm:gap-3 text-center">
          <div className="bg-white p-3.5 sm:p-4 rounded-xl shadow-xs border border-orange-100">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-orange-100 text-[#F07824] mx-auto flex items-center justify-center font-bold text-xs sm:text-sm mb-2">۱</div>
            <strong className="block text-xs sm:text-sm font-bold text-slate-900 mb-1">یاد می‌گیرد</strong>
            <span className="text-[10px] sm:text-[11px] text-slate-500">مهارت فنی یا استانداردهای کاری منطبق با نیاز شغل</span>
          </div>

          <div className="bg-white p-3.5 sm:p-4 rounded-xl shadow-xs border border-orange-100">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-orange-100 text-[#F07824] mx-auto flex items-center justify-center font-bold text-xs sm:text-sm mb-2">۲</div>
            <strong className="block text-xs sm:text-sm font-bold text-slate-900 mb-1">رشد می‌کند</strong>
            <span className="text-[10px] sm:text-[11px] text-slate-500">افزایش تسلط، کاهش خطای کاری و ثبت در گذرنامه</span>
          </div>

          <div className="bg-white p-3.5 sm:p-4 rounded-xl shadow-xs border border-orange-100">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-orange-100 text-[#F07824] mx-auto flex items-center justify-center font-bold text-xs sm:text-sm mb-2">۳</div>
            <strong className="block text-xs sm:text-sm font-bold text-slate-900 mb-1">منتقل می‌کند</strong>
            <span className="text-[10px] sm:text-[11px] text-slate-500">آموزش همکاران جوان‌تر یا سرپرستی کارآموزان</span>
          </div>

          <div className="bg-white p-3.5 sm:p-4 rounded-xl shadow-xs border border-orange-100">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-orange-100 text-[#F07824] mx-auto flex items-center justify-center font-bold text-xs sm:text-sm mb-2">۴</div>
            <strong className="block text-xs sm:text-sm font-bold text-slate-900 mb-1">دیده می‌شود</strong>
            <span className="text-[10px] sm:text-[11px] text-slate-500">پاداش اثر، ارتقای رتبه تخصصی و قدردانی در سازمان</span>
          </div>

          <div className="bg-white p-3.5 sm:p-4 rounded-xl shadow-xs border border-orange-100 col-span-2 sm:col-span-1">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-orange-500 text-white mx-auto flex items-center justify-center font-bold text-xs sm:text-sm mb-2">۵</div>
            <strong className="block text-xs sm:text-sm font-bold text-slate-900 mb-1">توانمند می‌کند</strong>
            <span className="text-[10px] sm:text-[11px] text-slate-500">تکثیر زنجیره‌ای و خلق فرهنگ پایداری صنعتی</span>
          </div>
        </div>

        <div className="mt-5 p-3.5 sm:p-4 rounded-xl bg-white/80 border border-orange-200/60 flex items-start gap-2.5">
          <div className="w-2 h-2 rounded-full bg-[#F07824] mt-2 shrink-0" />
          <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
            <strong>اصل بنیادین: </strong>
            {CORE_PROPOSAL_SUMMARY.corePremise}
          </p>
        </div>
      </section>

      {/* Comparison: Current vs Proposed Ecosystem */}
      <section className="bg-white rounded-2xl p-5 sm:p-8 border border-slate-200 shadow-xs">
        <div className="mb-5 sm:mb-6">
          <div className="text-xs font-bold text-[#F07824] uppercase tracking-wider">THE STRATEGIC SHIFT</div>
          <h3 className="text-lg sm:text-2xl font-black text-slate-900 mb-1">
            مقایسه رویکرد سنتی صنعتی با اکوسیستم پیشنهادی اسپوتا
          </h3>
          <p className="text-xs sm:text-sm text-slate-500">
            تغییرات ساختاری حاصل از استقرار سیستم و بازدهی آن برای مدیریت شرکت:
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-right text-xs sm:text-sm min-w-[600px]">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 text-slate-700 font-bold">
                <th className="py-3 px-3 sm:px-4 rounded-r-lg">حوزه عملیاتی</th>
                <th className="py-3 px-3 sm:px-4 text-rose-700">وضعیت رایج در صنعت</th>
                <th className="py-3 px-3 sm:px-4 text-emerald-700">مدل اکوسیستم اسپوتا</th>
                <th className="py-3 px-3 sm:px-4 rounded-l-lg text-[#b95613]">نتیجه ملموس مدیریتی</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="py-3.5 px-3 sm:px-4 font-bold text-slate-900">آموزش و مهارت</td>
                <td className="py-3.5 px-3 sm:px-4 text-slate-600">دوره‌های عمومی بدون ارزیابی در خط تولید</td>
                <td className="py-3.5 px-3 sm:px-4 text-slate-800 font-medium">آموزش همتا‌به‌همتا توسط استادکاران داخلی با تمرین روی خط</td>
                <td className="py-3.5 px-3 sm:px-4 text-emerald-700 font-bold">کاهش مستقیم ضایعات و صرفه‌جویی آموزشی</td>
              </tr>
              <tr>
                <td className="py-3.5 px-3 sm:px-4 font-bold text-slate-900">شنیدن دیدگاه‌ها</td>
                <td className="py-3.5 px-3 sm:px-4 text-slate-600">صندوق پیشنهادات بدون فرآیند بازخورد</td>
                <td className="py-3.5 px-3 sm:px-4 text-slate-800 font-medium">سامانه «گفتید، پیگیری کردیم» با مهلت پاسخ ۱۰ روزه</td>
                <td className="py-3.5 px-3 sm:px-4 text-emerald-700 font-bold">افزایش اعتماد و کشف ریزبهبودهای فنی</td>
              </tr>
              <tr>
                <td className="py-3.5 px-3 sm:px-4 font-bold text-slate-900">مسیر ارتقای شغلی</td>
                <td className="py-3.5 px-3 sm:px-4 text-slate-600">تنها راه رشد رتبه، تصدی سمت سرپرستی است</td>
                <td className="py-3.5 px-3 sm:px-4 text-slate-800 font-medium">نردبان دوگانه: رشد تخصصی در موازات رشد مدیریتی</td>
                <td className="py-3.5 px-3 sm:px-4 text-emerald-700 font-bold">حفظ تکنسین‌های ماهر در کنار دستگاه‌ها</td>
              </tr>
              <tr>
                <td className="py-3.5 px-3 sm:px-4 font-bold text-slate-900">تامین نیروی کار</td>
                <td className="py-3.5 px-3 sm:px-4 text-slate-600">آگهی‌های پرهزینه و ترک کار در ماه‌های اول</td>
                <td className="py-3.5 px-3 sm:px-4 text-slate-800 font-medium">خط لوله مهارتی آکادمی (فرزندان و جوانان منطقه)</td>
                <td className="py-3.5 px-3 sm:px-4 text-emerald-700 font-bold">جذب افراد آماده به کار با تعهد پایدار</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 6 Non-Negotiable Principles */}
      <section className="bg-slate-900 text-white rounded-2xl p-5 sm:p-8">
        <div className="max-w-2xl mb-5 sm:mb-6">
          <div className="text-xs font-bold text-orange-400 uppercase tracking-wider">GUARDRAILS</div>
          <h3 className="text-lg sm:text-2xl font-black text-white">۶ اصل طراحی غیرقابل مذاکره (تضمین ایمنی، اعتماد و پایداری)</h3>
          <p className="text-xs sm:text-sm text-slate-400">
            اصول حاکم بر طرح جهت اطمینان از هم‌راستایی کامل با اهداف تولید و انضباط مالی:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
          <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700">
            <div className="flex items-center gap-2 text-orange-400 font-bold text-sm mb-1.5">
              <Scale className="w-4 h-4 shrink-0" />
              <span>۱. مکمل حقوق، نه جایگزین آن</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              آموزش و مزایا هرگز نباید به عنوان توجیهی برای دستمزد غیررقابتی استفاده شود.
            </p>
          </div>

          <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700">
            <div className="flex items-center gap-2 text-orange-400 font-bold text-sm mb-1.5">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>۲. واقعی، نه نمایشی</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              هر وعده و گواهی باید به آزمون عملی، مهارت استاندارد و فرصت واقعی متصل باشد.
            </p>
          </div>

          <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700">
            <div className="flex items-center gap-2 text-orange-400 font-bold text-sm mb-1.5">
              <Layers className="w-4 h-4 shrink-0" />
              <span>۳. رشد چندمسیره</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              مسیرهای ارتقای تخصصی برای کارشناسانی که تمایل به مدیریت ندارند نیز فراهم است.
            </p>
          </div>

          <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700">
            <div className="flex items-center gap-2 text-orange-400 font-bold text-sm mb-1.5">
              <Users className="w-4 h-4 shrink-0" />
              <span>۴. داوطلبانه و منصفانه</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              آموزش‌های خارج از ساعت شیفت داوطلبانه است و پاداش انتقال دانش پرداخت می‌شود.
            </p>
          </div>

          <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700">
            <div className="flex items-center gap-2 text-orange-400 font-bold text-sm mb-1.5">
              <TrendingUp className="w-4 h-4 shrink-0" />
              <span>۵. قابل سنجش در خروجی خط</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              تعداد دوره‌ها معیار نیست؛ اثر بر کاهش خطا، ضایعات، ایمنی و سرعت کار سنجیده می‌شود.
            </p>
          </div>

          <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700">
            <div className="flex items-center gap-2 text-orange-400 font-bold text-sm mb-1.5">
              <Target className="w-4 h-4 shrink-0" />
              <span>۶. مرحله‌ای (پایلوت قبل از توسعه)</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              ابتدا آزمایش کنترل‌شده روی ۳۰ تا ۵۰ نفر؛ سپس تصمیم‌گیری بر مبنای داده‌های تجربی.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
