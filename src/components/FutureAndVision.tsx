import React from 'react';
import { STRATEGIC_VISION } from '../data/spottaData';
import { 
  Telescope, 
  Flag, 
  Calendar, 
  CheckCircle2, 
  TrendingUp, 
  Compass, 
  ShieldCheck, 
  Award,
  Factory,
  Sparkles
} from 'lucide-react';

export const FutureAndVision: React.FC = () => {
  return (
    <div className="space-y-10 animate-fade-in">
      {/* Vision Statement Hero */}
      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-900 via-orange-950 to-slate-900 text-white p-6 sm:p-10 border border-orange-500/30 shadow-xl">
        <div className="relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/30 text-xs font-bold mb-4">
            <Telescope className="w-3.5 h-3.5" />
            <span>چشم‌انداز راهبردی گروه صنعتی اسپوتا</span>
          </div>

          <h2 className="text-xl sm:text-3xl lg:text-4xl font-black text-white leading-relaxed mb-6">
            {STRATEGIC_VISION.visionStatement}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
            <div className="bg-white/10 backdrop-blur-xs p-3.5 rounded-xl border border-white/10">
              <strong className="block text-orange-400 font-bold text-sm mb-1">رشد بی‌پایان</strong>
              <p className="text-slate-300">هیچ کارمند شایسته‌ای احساس بن‌بست شغلی یا نادیده گرفته شدن نمی‌کند.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-xs p-3.5 rounded-xl border border-white/10">
              <strong className="block text-orange-400 font-bold text-sm mb-1">دانش ماندگار</strong>
              <p className="text-slate-300">دانش فنی در سازمان جاری است و به بازنشستگی ۱ یا ۲ فرد گره نخورده است.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-xs p-3.5 rounded-xl border border-white/10">
              <strong className="block text-orange-400 font-bold text-sm mb-1">آرامش خانواده</strong>
              <p className="text-slate-300">فرزندان پرسنل با مهارت‌های عملی تجهیز شده و آینده شغلی روشن‌تری دارند.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-xs p-3.5 rounded-xl border border-white/10">
              <strong className="block text-orange-400 font-bold text-sm mb-1">بهره‌وری ناب</strong>
              <p className="text-slate-300">سرمایه انسانی موتور کاهش ضایعات، ارتقای کیفیت و سودآوری کارخانه است.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Strategic Horizons */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <div className="text-xs font-bold text-[#F07824] uppercase tracking-wider">STRATEGIC ROADMAP</div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900">
              چه آینده‌ای برای شرکت رقم می‌زند؟ تحول در ۳ افق زمانی
            </h3>
          </div>
          <span className="text-xs text-slate-500">گذار گام‌به‌گام و بدون شوک سازمانی</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {STRATEGIC_VISION.horizons.map((horizon, idx) => (
            <div 
              key={idx}
              className={`rounded-2xl p-6 border transition-all flex flex-col justify-between ${
                idx === 0 
                  ? 'bg-orange-50/60 border-orange-200 shadow-xs' 
                  : idx === 1
                  ? 'bg-white border-slate-200 shadow-xs'
                  : 'bg-slate-900 text-white border-slate-800 shadow-md'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-black px-2.5 py-1 rounded-md ${
                    idx === 0 ? 'bg-orange-500 text-white' : idx === 1 ? 'bg-slate-100 text-slate-800' : 'bg-slate-800 text-orange-400'
                  }`}>
                    {horizon.phase}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-slate-500">
                    <Calendar className="w-3.5 h-3.5" />
                    <span className={idx === 2 ? 'text-slate-400' : 'text-slate-600'}>{horizon.timeframe}</span>
                  </div>
                </div>

                <h4 className={`text-lg font-bold mb-2 ${idx === 2 ? 'text-white' : 'text-slate-900'}`}>
                  {horizon.title}
                </h4>

                <div className="space-y-2 my-4">
                  <span className={`text-[11px] font-bold block ${idx === 2 ? 'text-slate-400' : 'text-slate-500'}`}>
                    نقاط عطف و دستاوردها:
                  </span>
                  {horizon.milestones.map((m, mIdx) => (
                    <div key={mIdx} className="flex items-start gap-2 text-xs">
                      <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${idx === 0 ? 'text-[#F07824]' : 'text-emerald-500'}`} />
                      <span className={idx === 2 ? 'text-slate-300' : 'text-slate-700'}>{m}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={`pt-4 border-t ${idx === 2 ? 'border-slate-800' : 'border-slate-200'} space-y-3`}>
                <div>
                  <span className={`text-[11px] font-bold block mb-1 ${idx === 2 ? 'text-orange-400' : 'text-[#b95613]'}`}>
                    شاخص‌های کلیدی عملکرد (KPIs):
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {horizon.kpis.map((kpi, kIdx) => (
                      <span key={kIdx} className={`text-[10px] px-2 py-0.5 rounded-md font-medium ${
                        idx === 2 ? 'bg-slate-800 text-slate-300 border border-slate-700' : 'bg-white text-slate-700 border border-slate-200'
                      }`}>
                        {kpi}
                      </span>
                    ))}
                  </div>
                </div>

                <div className={`p-2.5 rounded-lg text-[11px] font-medium leading-relaxed ${
                  idx === 2 ? 'bg-slate-800/80 text-slate-300' : 'bg-slate-100 text-slate-700'
                }`}>
                  <strong>اثر سازمانی: </strong>
                  {horizon.organizationalImpact}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* The Concrete Future: Before vs After Transformation */}
      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
        <div className="mb-6">
          <div className="text-xs font-bold text-[#F07824] uppercase tracking-wider">BUSINESS TRANSFORMATION</div>
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-1">
            تصویر ملموس اسپوتا پس از استقرار اکوسیستم (وضع موجود در برابر وضع مطلوب)
          </h3>
          <p className="text-xs sm:text-sm text-slate-500">
            این جدول نشان می‌دهد سرمایه‌گذاری در اکوسیستم مهارت چگونه کسب‌وکار را در برابر بحران‌های پیش‌رو واکسینه می‌کند:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50">
            <div className="text-xs font-bold text-slate-500 mb-2 flex items-center justify-between">
              <span>۱. ثبات و نگه‌داشت نیروهای کلیدی</span>
              <Factory className="w-4 h-4 text-slate-400" />
            </div>
            <div className="space-y-2 text-xs">
              <div className="p-2 rounded bg-rose-50 text-rose-800 border border-rose-200">
                <strong>وضع موجود:</strong> خروج ناگهانی اپراتورهای ماهر به خاطر پیشنهاد جزئی رقبا یا نبود چشم‌انداز رشد.
              </div>
              <div className="p-2 rounded bg-emerald-50 text-emerald-800 border border-emerald-200 font-medium">
                <strong>آینده با اسپوتا:</strong> کاهش ۳۵٪ خروج نیروهای کلیدی به واسطه نردبان شفاف تخصصی و وابستگی خانواده.
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50">
            <div className="text-xs font-bold text-slate-500 mb-2 flex items-center justify-between">
              <span>۲. ضایعات تولید و خطای اپراتوری</span>
              <TrendingUp className="w-4 h-4 text-slate-400" />
            </div>
            <div className="space-y-2 text-xs">
              <div className="p-2 rounded bg-rose-50 text-rose-800 border border-rose-200">
                <strong>وضع موجود:</strong> ضایعات بالا در ماه‌های اول شروع به کار پرسنل جدید به دلیل آموزش‌های ناقص سرپایی.
              </div>
              <div className="p-2 rounded bg-emerald-50 text-emerald-800 border border-emerald-200 font-medium">
                <strong>آینده با اسپوتا:</strong> انتقال استاندارد فوت‌وفن کار توسط مدرسان داخلی تاییدشده و کاهش ۱۵٪ ضایعات خط.
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50">
            <div className="text-xs font-bold text-slate-500 mb-2 flex items-center justify-between">
              <span>۳. سرعت انطباق تازه‌واردها (Onboarding)</span>
              <Sparkles className="w-4 h-4 text-slate-400" />
            </div>
            <div className="space-y-2 text-xs">
              <div className="p-2 rounded bg-rose-50 text-rose-800 border border-rose-200">
                <strong>وضع موجود:</strong> ۲ تا ۳ ماه سردرگمی نیروی جدید و اتلاف وقت سرپرستان برای پاسخ به سوالات تکراری.
              </div>
              <div className="p-2 rounded bg-emerald-50 text-emerald-800 border border-emerald-200 font-medium">
                <strong>آینده با اسپوتا:</strong> سیستم همراهی (Buddy) + دوره ۹۰ روزه ساختارمند و رسیدن به بازدهی در هفته دوم.
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50">
            <div className="text-xs font-bold text-slate-500 mb-2 flex items-center justify-between">
              <span>۴. تامین نسل بعدی پرسنل ماهر</span>
              <Compass className="w-4 h-4 text-slate-400" />
            </div>
            <div className="space-y-2 text-xs">
              <div className="p-2 rounded bg-rose-50 text-rose-800 border border-rose-200">
                <strong>وضع موجود:</strong> بحران کمبود جوانان علاقه‌مند به کار صنعتی در منطقه و هزینه‌های سرسام‌آور استخدام.
              </div>
              <div className="p-2 rounded bg-emerald-50 text-emerald-800 border border-emerald-200 font-medium">
                <strong>آینده با اسپوتا:</strong> خط لوله آماده و آموزش‌دیده از فرزندان کارکنان و نخبگان هنرستان‌های منطقه.
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50">
            <div className="text-xs font-bold text-slate-500 mb-2 flex items-center justify-between">
              <span>۵. فرهنگ کارخانه و فضای روانی</span>
              <ShieldCheck className="w-4 h-4 text-slate-400" />
            </div>
            <div className="space-y-2 text-xs">
              <div className="p-2 rounded bg-rose-50 text-rose-800 border border-rose-200">
                <strong>وضع موجود:</strong> بی‌تفاوتی، بدبینی نسبت به تصمیمات بالا، و بی میلی به انتقال تجربیات به تازه کارها.
              </div>
              <div className="p-2 rounded bg-emerald-50 text-emerald-800 border border-emerald-200 font-medium">
                <strong>آینده با اسپوتا:</strong> فرهنگ مربی‌گری، قدردانی مبتنی بر اثر، و افتخار خانواده به کار در اسپوتا.
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50">
            <div className="text-xs font-bold text-slate-500 mb-2 flex items-center justify-between">
              <span>۶. برند کارفرمایی و شهرت در صنعت</span>
              <Award className="w-4 h-4 text-slate-400" />
            </div>
            <div className="space-y-2 text-xs">
              <div className="p-2 rounded bg-rose-50 text-rose-800 border border-rose-200">
                <strong>وضع موجود:</strong> ناشناخته بودن تمایزهای واقعی اسپوتا در بازار کار و رقابت صرف بر سر حقوق پایه.
              </div>
              <div className="p-2 rounded bg-emerald-50 text-emerald-800 border border-emerald-200 font-medium">
                <strong>آینده با اسپوتا:</strong> شناخته شدن به عنوان «برترین مقصد رشد استعدادهای صنعتی» و اولویت اول نخبگان.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
