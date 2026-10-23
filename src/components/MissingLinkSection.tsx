import React, { useState } from 'react';
import { MISSING_LINKS } from '../data/spottaData';
import { 
  BrainCircuit, 
  MessageSquare, 
  HeartHandshake, 
  GitFork, 
  Award, 
  AlertTriangle, 
  CheckCircle, 
  ArrowRight, 
  TrendingUp,
  Zap,
  HelpCircle
} from 'lucide-react';

export const MissingLinkSection: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>(MISSING_LINKS[0].id);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'BrainCircuit': return <BrainCircuit className="w-5 h-5" />;
      case 'MessageSquareCheck': 
      case 'MessageSquare': return <MessageSquare className="w-5 h-5" />;
      case 'HeartHandshake': return <HeartHandshake className="w-5 h-5" />;
      case 'GitFork': return <GitFork className="w-5 h-5" />;
      case 'Award': return <Award className="w-5 h-5" />;
      default: return <Zap className="w-5 h-5" />;
    }
  };

  const activeLink = MISSING_LINKS.find((item) => item.id === selectedId) || MISSING_LINKS[0];

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header Banner */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 text-rose-700 border border-rose-200 text-xs font-bold mb-3">
            <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
            <span>ریشه‌یابی بزرگ‌ترین معضل صنایع کشور</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-3 tracking-tight">
            حلقه مفقوده چیه؟ چرا روش‌های سنتی در سازمانی با ۸۰۰ نفر جواب نمی‌دهند؟
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            در اکثر کارخانه‌ها، مدیریت منابع انسانی یا درگیر کارهای اداری، بیمه و حضور‌وغیاب است یا دوره‌های آموزشی گران‌قیمتی برگزار می‌کند که هیچ اثری بر کف خط تولید ندارد. 
            <strong> ۵ حلقه مفقوده بنیادین </strong> وجود دارد که این طرح دقیقاً آن‌ها را هدف گرفته است:
          </p>
        </div>

        {/* 5 Tabs Navigation */}
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-2.5 mt-8">
          {MISSING_LINKS.map((item, idx) => {
            const isSelected = item.id === selectedId;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedId(item.id)}
                className={`p-3.5 rounded-xl text-right transition-all cursor-pointer border text-xs flex flex-col justify-between ${
                  isSelected
                    ? 'bg-slate-900 text-white border-slate-900 shadow-md ring-2 ring-orange-500/50'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-orange-50/50 hover:border-orange-200'
                }`}
              >
                <div className="flex items-center justify-between w-full mb-2">
                  <span className={`p-1.5 rounded-lg ${isSelected ? 'bg-orange-500 text-white' : 'bg-white text-slate-500 border border-slate-200'}`}>
                    {getIcon(item.iconName)}
                  </span>
                  <span className={`text-[10px] font-mono ${isSelected ? 'text-slate-400' : 'text-slate-400'}`}>
                    ۰{idx + 1}
                  </span>
                </div>
                <div className="font-bold leading-snug line-clamp-2">{item.title}</div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Missing Link Detailed Breakdown Card */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-md transition-all">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-orange-100 text-[#F07824] flex items-center justify-center font-bold">
              {getIcon(activeLink.iconName)}
            </div>
            <div>
              <span className="text-[11px] font-bold text-[#b95613] bg-orange-50 px-2 py-0.5 rounded border border-orange-200">
                حلقه مفقوده شماره {MISSING_LINKS.findIndex(x => x.id === selectedId) + 1}
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">{activeLink.title}</h3>
              <p className="text-xs sm:text-sm text-slate-500">{activeLink.subtitle}</p>
            </div>
          </div>

          <div className="bg-rose-50 border border-rose-200 text-rose-800 p-3 rounded-xl text-xs max-w-sm">
            <div className="flex items-center gap-1.5 font-bold mb-1 text-rose-900">
              <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />
              <span>ریسک اگر نادیده گرفته شود:</span>
            </div>
            <p className="leading-relaxed">{activeLink.riskIfIgnored}</p>
          </div>
        </div>

        {/* 3 Step Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
          {/* 1: Current Pain */}
          <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-rose-600 text-xs font-bold mb-3">
                <span className="w-2 h-2 rounded-full bg-rose-500" />
                <span>۱. درد و ناکارآمدی فعلی در صنعت</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {activeLink.currentPain}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-200/80 text-[11px] text-slate-500">
              در اکثر صنایع، این مشکل با راه‌حل‌های سطحی مانند افزایش حقوق یا خرید دوره‌های بیرونی پوشانده می‌شود.
            </div>
          </div>

          {/* 2: The Missing Link */}
          <div className="bg-amber-50/80 rounded-xl p-5 border border-amber-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-amber-700 text-xs font-bold mb-3">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                <span>۲. هسته حلقه مفقوده (The Root Gap)</span>
              </div>
              <p className="text-xs sm:text-sm text-amber-950 font-medium leading-relaxed">
                {activeLink.theMissingLink}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-amber-200 text-[11px] text-amber-800 font-semibold">
              کلید حل معما: ایجاد انگیزه و ساختار جهت پیوند تجربه افراد به منافع سازمان.
            </div>
          </div>

          {/* 3: The Spotta Solution & Business Impact */}
          <div className="bg-emerald-50/80 rounded-xl p-5 border border-emerald-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-emerald-700 text-xs font-bold mb-3">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <span>۳. راهکار اسپوتا و سودآوری برای کارخانه</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-800 leading-relaxed mb-3">
                {activeLink.spottaSolution}
              </p>
              <div className="bg-white p-3 rounded-lg border border-emerald-200 text-xs font-bold text-emerald-900 flex items-start gap-2">
                <TrendingUp className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[10px] text-emerald-600 font-medium">اثر مستقیم بر سودآوری (ROI):</span>
                  {activeLink.businessImpact}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Summary Matrix of all 5 Missing Links */}
      <section className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8">
        <div className="mb-6">
          <div className="text-xs font-bold text-orange-400 uppercase tracking-wider">EXECUTIVE MATRIX</div>
          <h3 className="text-xl sm:text-2xl font-black text-white">جمع‌بندی ۵ حلقه مفقوده در یک نگاه برای مدیریت ارشد</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
          <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
            <strong className="block text-sm text-orange-400 font-bold mb-1">۱. دانش در سینه افراد است</strong>
            <p className="text-slate-300 leading-relaxed mb-2">با رفتن استادکار خط، دانش می‌رود. راهکار اسپوتا: «اقتصاد مهارت داخلی» با تبدیل کارگران ماهر به مدرس پاداش‌بگیر.</p>
            <span className="text-emerald-400 font-semibold">نتیجه: دانش در اسپوتا بومی و ابدی می‌شود.</span>
          </div>

          <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
            <strong className="block text-sm text-orange-400 font-bold mb-1">۲. نظرسنجی بدون پاسخ اعتماد را می‌کشد</strong>
            <p className="text-slate-300 leading-relaxed mb-2">پرسنل پیشنهادات زیادی دارند اما باور ندارند شنیده شود. راهکار: سامانه «گفتید، پیگیری کردیم» با مهلت پاسخ ۱۰ روزه.</p>
            <span className="text-emerald-400 font-semibold">نتیجه: پرسنل تبدیل به چشم و گوش بهبود کیفیت در خط می‌شوند.</span>
          </div>

          <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
            <strong className="block text-sm text-orange-400 font-bold mb-1">۳. دغدغه فرزند، قوی‌تر از حقوق ماهانه</strong>
            <p className="text-slate-300 leading-relaxed mb-2">کارگر نگران آینده بیکاری فرزندش است. راهکار: آکادمی مهارت اسپوتا و آموزش نسل جوان با اولویت استخدام شایسته‌محور.</p>
            <span className="text-emerald-400 font-semibold">نتیجه: تعهد عاطفی ناگسستنی و امنیت خاطر خانواده.</span>
          </div>

          <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
            <strong className="block text-sm text-orange-400 font-bold mb-1">۴. اجبار به مدیریت برای دریافت حقوق بهتر</strong>
            <p className="text-slate-300 leading-relaxed mb-2">تکنسین عالی مجبور است سرپرست شود تا حقوقش بالا برود. راهکار: نردبان رشد دوگانه تخصصی-فنی در کنار سرپرستی.</p>
            <span className="text-emerald-400 font-semibold">نتیجه: حفظ نوابغ فنی در کنار ماشین‌آلات و کاهش خطاهای مهندسی.</span>
          </div>

          <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
            <strong className="block text-sm text-orange-400 font-bold mb-1">۵. تبلیغات پرزرق‌وبرق در برابر واقعیت کارخانه</strong>
            <p className="text-slate-300 leading-relaxed mb-2">کلیپ‌های اینستاگرامی بدون رضایت واقعی بدنه کارگری بی‌ارزش است. راهکار: برندسازی کارفرمایی بر پایه شواهد واقعی رشد.</p>
            <span className="text-emerald-400 font-semibold">نتیجه: جذب بدون دردسر نخبگان فنی منطقه به واسطه خوش‌نامی واقعی.</span>
          </div>

          <div className="bg-gradient-to-br from-orange-600/40 to-slate-800 p-4 rounded-xl border border-orange-500/50 flex flex-col justify-between">
            <div>
              <strong className="block text-sm text-white font-bold mb-1">چرا اتصال این ۵ حلقه تحول‌آفرین است؟</strong>
              <p className="text-slate-200 leading-relaxed">
                حل هر یک به تنهایی مثل یک وصله پینه‌دوزی است؛ تجمیع این ۵ حلقه در یک «اکوسیستم» است که اسپوتا را به برترین کارفرمای صنعتی منطقه تبدیل می‌کند.
              </p>
            </div>
            <div className="text-[11px] text-orange-300 font-bold mt-2">
              بسته حاضر، نقشه مهندسی همین اتصال راهبردی است.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
