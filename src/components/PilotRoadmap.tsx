import React from 'react';
import { 
  Milestone, 
  Calendar, 
  CheckCircle2, 
  Users, 
  AlertTriangle, 
  ShieldCheck, 
  HelpCircle,
  FileText,
  Clock,
  ArrowRight
} from 'lucide-react';

export const PilotRoadmap: React.FC = () => {
  return (
    <div className="space-y-10 animate-fade-in">
      {/* Banner */}
      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 text-[#b95613] border border-orange-200 text-xs font-bold mb-3">
            <Milestone className="w-3.5 h-3.5 text-[#F07824]" />
            <span>اجرای چابک و گام‌به‌گام</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-3">
            نقشه راه یک‌ساله با تمرکز بر پایلوت ۹۰ روزه (۳۰ تا ۵۰ نفر)
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            اجرای موفق از خرید نرم‌افزار یا راه‌اندازی پروژه‌های بزرگ سازمانی آغاز نمی‌شود؛ بلکه از شناخت عمیق پرسنل و یک آزمایش کنترل‌شده ۳ ماهه شروع می‌شود تا بدون ریسک، ظرفیت سازمان اثبات شود:
          </p>
        </div>
      </section>

      {/* The 90-Day Pilot Breakdown (3 Months) */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg sm:text-xl font-black text-slate-900">
            برنامه تفصیلی پایلوت ۹۰ روزه (سه اسپرینت ۳۰ روزه)
          </h3>
          <span className="text-xs font-bold text-orange-600 bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
            گروه هدف: ۳۰ تا ۵۰ نفر
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Month 1 */}
          <div className="bg-white rounded-2xl p-6 border-2 border-orange-200 shadow-sm flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 left-0 h-1.5 bg-[#F07824]" />
            <div>
              <div className="flex items-center justify-between mb-3 pt-1">
                <span className="text-xs font-black text-white bg-[#F07824] px-2.5 py-0.5 rounded-md">
                  ماه اول
                </span>
                <span className="text-xs font-bold text-slate-400">روز ۱ تا ۳۰</span>
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">شنیدن، کشف و سرشماری مهارت</h4>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                کشف مهارت‌های خاموش و ریشه‌یابی موانع واقعی کار در کف کارخانه.
              </p>

              <div className="space-y-2 text-xs text-slate-700">
                <div className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>انجام مصاحبه‌های عمیق با ۳۰ نفر (۱۰ خط تولید، ۵ اداری، ۵ سرپرست، ۵ مدیر، ۵ جوان).</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>توزیع فرم ساده «سرشماری مهارت» در گروه پایلوت.</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>بررسی ساختار شیفت‌ها و ساعات بدون اصطکاک برای آموزش.</span>
                </div>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-100 bg-slate-50 -mx-6 -mb-6 p-4 rounded-b-2xl">
              <span className="text-[11px] font-bold text-slate-900 block mb-0.5">خروجی پایان ماه اول:</span>
              <p className="text-xs text-slate-600">نقشه نیازها و مهارت‌های کشف‌شده + گزارش اولیه به مدیریت ارشد</p>
            </div>
          </div>

          {/* Month 2 */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 left-0 h-1.5 bg-slate-400" />
            <div>
              <div className="flex items-center justify-between mb-3 pt-1">
                <span className="text-xs font-black text-slate-800 bg-slate-100 px-2.5 py-0.5 rounded-md">
                  ماه دوم
                </span>
                <span className="text-xs font-bold text-slate-400">روز ۳۱ تا ۶۰</span>
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">طراحی حداقل سیستم (MVP)</h4>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                تدوین نقشه‌های رشد و ابزارهای ساده شنیدن بدون نرم‌افزار گران‌قیمت.
              </p>

              <div className="space-y-2 text-xs text-slate-700">
                <div className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>تدوین مسیر رشد برای ۲ شغل کلیدی (مثلاً اپراتور خط و تکنسین نگهداری).</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>راه‌اندازی برد یا کانال «گفتید، پیگیری کردیم» برای گروه پایلوت.</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>تطبیق اولیه ۱۰ مدرس داخلی داوطلب با ۳۰ یادگیرنده.</span>
                </div>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-100 bg-slate-50 -mx-6 -mb-6 p-4 rounded-b-2xl">
              <span className="text-[11px] font-bold text-slate-900 block mb-0.5">خروجی پایان ماه دوم:</span>
              <p className="text-xs text-slate-600">گذرنامه رشد اولیه + قواعد آموزش همتا‌به‌همتا</p>
            </div>
          </div>

          {/* Month 3 */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 left-0 h-1.5 bg-emerald-500" />
            <div>
              <div className="flex items-center justify-between mb-3 pt-1">
                <span className="text-xs font-black text-white bg-emerald-600 px-2.5 py-0.5 rounded-md">
                  ماه سوم
                </span>
                <span className="text-xs font-bold text-slate-400">روز ۶۱ تا ۹۰</span>
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">اجرای پایلوت و دروازه تصمیم</h4>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                آزمایش عملی کلاس‌ها، حل فوری ۵ مانع پیشنهادی و استخراج آمار.
              </p>

              <div className="space-y-2 text-xs text-slate-700">
                <div className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>برگزاری کارگاه‌های انتقال مهارت با نظارت ایمنی و سنجش عملی.</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>حل و فصل علنی حداقل ۵ پیشنهاد ثبت‌شده در کارخانه.</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>تدوین گزارش بازگشت سرمایه و رضایت‌سنجی برای ارائه به مدیریت ارشد.</span>
                </div>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-100 bg-emerald-50/60 -mx-6 -mb-6 p-4 rounded-b-2xl">
              <span className="text-[11px] font-bold text-emerald-900 block mb-0.5">خروجی نهایی روز ۹۰:</span>
              <p className="text-xs text-emerald-800 font-medium">جلسه ۳۰ دقیقه‌ای با مدیریت ارشد جهت تصمیم‌گیری برای گسترش به کل سازمان</p>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables on Day 90 */}
      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
        <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-4">
          خروجی‌های تحویل‌شدنی به مدیریت ارشد در روز ۹۰ (Deliverables)
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <span className="text-2xl font-black text-[#F07824] block mb-1">۰۱</span>
            <strong className="block text-sm font-bold text-slate-900 mb-1">بانک مهارت‌های ثبت‌شده</strong>
            <p className="text-xs text-slate-600">فهرست مهارت‌های تاییدشده پرسنل فراتر از شرح شغل و مدرسان آماده تدریس.</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <span className="text-2xl font-black text-[#F07824] block mb-1">۰۲</span>
            <strong className="block text-sm font-bold text-slate-900 mb-1">کارنامه «گفتید، پیگیری کردیم»</strong>
            <p className="text-xs text-slate-600">گزارش شفاف ایده‌های ارسالی، زمان پاسخ، مسائل حل‌شده و بازخورد پرسنل خط.</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <span className="text-2xl font-black text-[#F07824] block mb-1">۰۳</span>
            <strong className="block text-sm font-bold text-slate-900 mb-1">ترازنامه مالی پایلوت</strong>
            <p className="text-xs text-slate-600">هزینه‌کرد واقعی پایلوت در مقایسه با تخمین صرفه‌جویی حاصل از کاهش خطاها.</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <span className="text-2xl font-black text-[#F07824] block mb-1">۰۴</span>
            <strong className="block text-sm font-bold text-slate-900 mb-1">طرح آزمایشی آکادمی خانواده</strong>
            <p className="text-xs text-slate-600">نیازسنجی والدین و پیش‌نویس اولین دوره مهارتی SPOOTA NEXT برای فرزندان.</p>
          </div>
        </div>
      </section>

      {/* 7 Key Risks & Mitigations */}
      <section className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8">
        <div className="max-w-2xl mb-6">
          <div className="text-xs font-bold text-orange-400 uppercase tracking-wider">RISK REGISTER</div>
          <h3 className="text-xl sm:text-2xl font-black text-white">ماتریس ریسک‌های اجرایی و کنترل‌های پیشگیرانه</h3>
          <p className="text-xs sm:text-sm text-slate-400">
            مدیریت ارشد اطمینان می‌یابد که تمام مخاطرات احتمالی پیش‌بینی و مهار شده‌اند:
          </p>
        </div>

        <div className="space-y-3 text-xs">
          <div className="p-3.5 rounded-xl bg-slate-800 border border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <strong className="text-sm font-bold text-rose-400 block mb-0.5">ریسک ۱: حس سوءاستفاده یا جایگزینی حقوق با مزایا</strong>
              <p className="text-slate-300">کنترل: شفافیت کامل از روز اول؛ برنامه توسعه مکمل پرداخت‌های قانونی و مصوب است.</p>
            </div>
            <span className="text-[11px] px-2.5 py-1 rounded-md bg-emerald-950 text-emerald-400 border border-emerald-800 shrink-0">مهار قطعی</span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-800 border border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <strong className="text-sm font-bold text-rose-400 block mb-0.5">ریسک ۲: مقاومت سرپرستان خط تولید</strong>
              <p className="text-slate-300">کنترل: عدم اخلال در برنامه شیفت؛ اعطای امتیاز و پاداش به سرپرستانی که در شیفت خود مربی تربیت کنند.</p>
            </div>
            <span className="text-[11px] px-2.5 py-1 rounded-md bg-emerald-950 text-emerald-400 border border-emerald-800 shrink-0">مهار قطعی</span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-800 border border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <strong className="text-sm font-bold text-rose-400 block mb-0.5">ریسک ۳: توقع کاذب استخدام قطعی همه فرزندان</strong>
              <p className="text-slate-300">کنترل: ابلاغ صریح آیین‌نامه؛ آکادمی مهارت‌افزا است و استخدام صرفاً بر پایه نیاز واقعی و آزمون شایستگی است.</p>
            </div>
            <span className="text-[11px] px-2.5 py-1 rounded-md bg-emerald-950 text-emerald-400 border border-emerald-800 shrink-0">مهار قطعی</span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-800 border border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <strong className="text-sm font-bold text-rose-400 block mb-0.5">ریسک ۴: رعایت ایمنی کارگاه‌ها برای نوجوانان</strong>
              <p className="text-slate-300">کنترل: اخذ رضایت‌نامه اولیا، بیمه مسئولیت مدنی، و برگزاری کارگاه‌ها صرفاً در محیط‌های شبیه‌سازی‌شده امن.</p>
            </div>
            <span className="text-[11px] px-2.5 py-1 rounded-md bg-emerald-950 text-emerald-400 border border-emerald-800 shrink-0">مهار قطعی</span>
          </div>
        </div>
      </section>
    </div>
  );
};
