import React from 'react';
import { Printer, X, CheckSquare, Sparkles } from 'lucide-react';

interface ExecutiveMemoPrintProps {
  onClose: () => void;
}

export const ExecutiveMemoPrint: React.FC<ExecutiveMemoPrintProps> = ({ onClose }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 overflow-y-auto">
      {/* Modal Container */}
      <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-300 relative p-4 sm:p-8 md:p-10 text-slate-800">
        
        {/* Floating Top Controls (Hidden on Print) */}
        <div className="no-print flex items-center justify-between pb-4 sm:pb-6 mb-4 sm:mb-6 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold bg-orange-100 text-[#b95613] px-2.5 py-1 rounded-md">
              نسخه آماده چاپ / PDF
            </span>
            <span className="text-xs text-slate-500 hidden sm:inline">یادداشت اجرایی جهت ارائه به مدیریت ارشد</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 bg-[#F07824] hover:bg-[#d65f10] text-white text-xs font-bold px-3 sm:px-4 py-2 rounded-lg transition-colors cursor-pointer shadow-xs"
            >
              <Printer className="w-4 h-4" />
              <span>چاپ / ذخیره PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* The Printable Memo Content */}
        <div className="space-y-5 sm:space-y-6 text-justify text-xs sm:text-sm leading-relaxed font-normal">
          {/* Memo Official Header */}
          <div className="border-b-2 border-slate-900 pb-3 sm:pb-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
            <div>
              <div className="text-base sm:text-xl font-black text-slate-900">گروه صنعتی اسپوتا (SPOOTA)</div>
              <div className="text-xs text-slate-500 font-bold">معاونت راهبرد و توسعه سرمایه انسانی</div>
            </div>
            <div className="text-left text-xs font-mono text-slate-500">
              <div>کد سند: SPOOTA-HC-STRAT-800</div>
              <div>تاریخ: مهرماه ۱۴۰۵</div>
              <div>طبقه: گزارش راهبردی - ویژه مدیریت ارشد</div>
            </div>
          </div>

          {/* Title */}
          <div className="text-center py-1 sm:py-2">
            <h1 className="text-base sm:text-2xl font-black text-slate-900 mb-1">
              یادداشت اجرایی: طرح راهبردی استقرار اکوسیستم سرمایه انسانی اسپوتا
            </h1>
            <p className="text-xs text-slate-500 font-medium">
              گذار از مزایای پراکنده به چرخه مولد مهارت، کاهش ضایعات و تثبیت پایداری صنعتی
            </p>
          </div>

          {/* 1. What is the Proposal? */}
          <section className="space-y-2">
            <h2 className="text-xs sm:text-sm font-bold text-slate-900 border-r-4 border-[#F07824] pr-2.5">
              ۱. پیشنهاد دقیق چیست؟
            </h2>
            <p className="text-slate-700">
              پیشنهاد حاضر، اجرای یک پکیج آموزشی سنتی یا افزودن رفاهیات تشریفاتی نیست؛ بلکه استقرار یک <strong>«اکوسیستم خودتکثیرشونده سرمایه انسانی»</strong> در ۴ لایه به‌هم‌پیوسته است:
            </p>
            <ul className="list-disc list-inside space-y-1 text-slate-700 pr-2">
              <li><strong>کارکنان:</strong> استقرار نردبان شغلی دوگانه (تخصصی در کنار مدیریتی)، گذرنامه رشد مهارت، سامانه «گفتید، پیگیری کردیم» و قدردانی متصل به اثر واقعی.</li>
              <li><strong>خانواده:</strong> ارائه کارگاه‌های مهارتی، سواد مالی و رویدادهای همبستگی جهت رفع دغدغه فکری سرپرستان خانوار.</li>
              <li><strong>نسل آینده (آکادمی اسپوتا - SPOOTA NEXT):</strong> آموزش عملی نوجوانان و فرزندان پرسنل با اولویت استخدام شایسته‌محور در صورت وجود نیاز سازمانی.</li>
              <li><strong>سازمان و صنعت:</strong> آزادسازی دانش ضمنی، کاهش زمان انطباق نیروهای جدید، کاهش ضایعات خط و خلق برند کارفرمایی اصیل.</li>
            </ul>
          </section>

          {/* 2. The Missing Link */}
          <section className="space-y-2">
            <h2 className="text-xs sm:text-sm font-bold text-slate-900 border-r-4 border-[#F07824] pr-2.5">
              ۲. حلقه مفقوده چیست؟
            </h2>
            <p className="text-slate-700">
              علت ناکارآمدی رویکردهای متداول در صنایع کشور با مقیاس حدود ۸۰۰ نفر، وجود ۵ شکاف ساختاری است:
            </p>
            <ol className="list-decimal list-inside space-y-1 text-slate-700 pr-2">
              <li><strong>حبس دانش فنی:</strong> فوت‌وفن واقعی تولید در سینه چند استادکار محبوس است و با خروج آنها از بین می‌رود؛ حلقه مفقوده «اقتصاد مهارت همتا‌به‌همتا» است.</li>
              <li><strong>شکاف بازخورد:</strong> پیشنهادات کارگران بدون سرانجام مشخص بایگانی می‌شود؛ حلقه مفقوده «سامانه با مهلت پاسخ ۱۰ روزه و شفافیت اقدام» است.</li>
              <li><strong>بی‌توجهی به انگیزه خانواده:</strong> کارکنان برای حقوق کار می‌کنند اما دغدغه اصلی‌شان آینده فرزند است؛ پیوند آموزش فرزند با سازمان تعهدی عمیق می‌سازد.</li>
              <li><strong>تله رشد مدیریتی:</strong> متخصص فنی عالی مجبور است برای حقوق بیشتر سرپرست شود؛ حلقه مفقوده «نردبان ارتقای تخصصی بدون پست اداری» است.</li>
              <li><strong>برند کارفرمایی شعاری:</strong> تبلیغات بدون رضایت کف کارگاه بی‌اثر است؛ حلقه مفقوده «شواهد ملموس رشد» است.</li>
            </ol>
          </section>

          {/* 3. The Future and Vision */}
          <section className="space-y-2">
            <h2 className="text-xs sm:text-sm font-bold text-slate-900 border-r-4 border-[#F07824] pr-2.5">
              ۳. چه آینده‌ای رقم می‌زند و چشم‌انداز چیست؟
            </h2>
            <p className="text-slate-700">
              <strong>چشم‌انداز:</strong> تبدیل اسپوتا به قطب پیشتاز اکوسیستم‌های سرمایه انسانی در صنعت ایران؛ جایی که هیچ استعدادی در بن‌بست نمی‌ماند و دانش تولید به شکل خودجوش در سازمان بازتولید می‌شود.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1 text-xs">
              <div className="p-2 rounded bg-slate-50 border border-slate-200">
                <strong>کوتاه‌مدت (۹۰ روز):</strong> حل ۱۰ مانع کاری در خط و کشف مهارت‌های پنهان پرسنل.
              </div>
              <div className="p-2 rounded bg-slate-50 border border-slate-200">
                <strong>میان‌مدت (۱ سال):</strong> کاهش ۲۰٪ ترک خدمت و استقرار گذرنامه رشد برای ۸۰۰ نفر.
              </div>
              <div className="p-2 rounded bg-slate-50 border border-slate-200">
                <strong>بلندمدت (۳ سال):</strong> تامین ۴۰٪ نیاز استخدامی از درون آکادمی و کاهش ۱۵٪ ضایعات.
              </div>
            </div>
          </section>

          {/* 4. Concrete Decision Gate */}
          <section className="space-y-2 pt-2 border-t border-slate-200">
            <h2 className="text-xs sm:text-sm font-bold text-slate-900 border-r-4 border-emerald-600 pr-2.5">
              ۴. تصمیم پیشنهادی جهت آغاز فرآیند (Approval Gate)
            </h2>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-300 space-y-2">
              <p className="font-semibold text-slate-900">
                مدیریت ارشد محترم با اجرای آزمایشی طرح طبق شروط کنترل ریسک زیر موافقت می‌فرمایند:
              </p>
              <div className="space-y-1.5 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckSquare className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>اجرای پایلوت محدود ۹۰ روزه روی ۳۰ تا ۵۰ نفر از پرسنل داوطلب.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckSquare className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>عدم تعهد به خرید نرم‌افزار گران‌قیمت یا ایجاد ساختارهای پرهزینه در فاز آزمایشی.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckSquare className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>عدم اخلال در برنامه شیفت‌های تولید و اخذ نظر سرپرستان خطوط.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckSquare className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>تشکیل جلسه ارزیابی نهایی در روز ۹۰ جهت اتخاذ تصمیم برای گسترش یا اصلاح.</span>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-200 flex flex-wrap justify-between items-center text-xs text-slate-600 gap-2">
                <span>تایید و ابلاغ مدیریت ارشد شرکت: .......................................</span>
                <span>امضا و تاریخ: .......................................</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
