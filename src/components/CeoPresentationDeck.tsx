import React, { useState, useEffect } from 'react';
import { 
  X, 
  ChevronRight, 
  ChevronLeft, 
  CheckCircle2, 
  AlertTriangle, 
  Lightbulb, 
  TrendingUp, 
  Sparkles,
  Layers,
  Heart,
  ShieldCheck,
  Award,
  Users,
  Target
} from 'lucide-react';

interface CeoPresentationDeckProps {
  onClose: () => void;
}

interface Slide {
  id: number;
  title: string;
  kicker: string;
  headline: string;
  bullets: string[];
  callout: string;
  managementNotes: string; // Tailored directly for executives
}

export const CeoPresentationDeck: React.FC<CeoPresentationDeckProps> = ({ onClose }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);

  const slides: Slide[] = [
    {
      id: 1,
      kicker: 'طرح راهبردی برای گروه صنعتی اسپوتا (SPOOTA) • ۸۰۰ نفر پرسنل',
      title: 'اکوسیستم سرمایه انسانی اسپوتا',
      headline: 'گذار از «مزایای پراکنده و آموزش‌های سنتی» به «چرخه مولد شایستگی و بهره‌وری کارخانه»',
      bullets: [
        'در سازمانی صنعتی با حدود ۸۰۰ نفر پرسنل، بخش عمده‌ای از ظرفیت تجربی و مهارتی کارکنان در شرح شغل‌های رسمی پنهان مانده است.',
        'دوره‌های آموزشی برون‌سازمانی عمومی، ارتباط ملموسی با نیازها و چالش‌های واقعی کف خطوط تولید ندارند.',
        'این طرح نه به دنبال افزایش هزینه‌های جاری، بلکه در پی سازماندهی و فعال‌سازی سرمایه انسانی موجود برای کاهش ضایعات و ثبات پایدار کارخانه است.'
      ],
      callout: 'محور اصلی تصمیم‌گیری: تصویب یک دوره کشف و پایلوت کنترل‌شده ۹۰ روزه روی ۳۰ تا ۵۰ نفر بدون هیچ‌گونه تعهد بودجه‌ای کلان.',
      managementNotes: 'ملاحظه راهبردی: رویکرد مرحله‌ای و متمرکز بر پایلوت، هرگونه ریسک عملیاتی و مالی را منتفی نموده و استمرار بدون وقفه تولید را تضمین می‌نماید.'
    },
    {
      id: 2,
      kicker: 'پیشنهاد دقیق چیست؟',
      title: 'مدل ضرب‌کننده سرمایه انسانی (The Multiplier Ecosystem)',
      headline: 'اسپوتا مالک آینده افراد نیست؛ بلکه بستر رشد، شایستگی و تکثیر توانمندی آنان است',
      bullets: [
        'یاد می‌گیرد: آموزش استانداردهای فنی، کار با ماشین‌آلات و مهارت‌های حل مسئله در کف کارگاه.',
        'رشد می‌کند: ثبت مستمر در «گذرنامه مهارت» و باز شدن مسیرهای ارتقای تخصصی بدون نیاز اجباری به صندلی مدیریت.',
        'منتقل می‌کند: تکنسین‌های باسابقه دانش عملی خود را با انگیزه و پاداش مشخص به همکاران جوان‌تر انتقال می‌دهند.',
        'دیده می‌شود: دریافت پاداش اثر و قدردانی رسمی در سازمان به پاس کاهش خطا و صرفه‌جویی زمان.',
        'توانمند می‌کند: چرخه بسته حمایت متقابل که از کارکنان به خانواده‌ها و نسل آینده گسترش می‌یابد.'
      ],
      callout: 'تفاوت اساسی: در این ساختار، آموزش یک سرفصل مصرفی نیست؛ سرمایه‌ای است که در کاهش بهای تمام‌شده سود می‌سازد.',
      managementNotes: 'ملاحظه راهبردی: این مدل وابستگی پرخطر سازمان به افراد خاص را از میان برده و دانش تولید را به سرمایه ماندگار شرکتی تبدیل می‌کند.'
    },
    {
      id: 3,
      kicker: 'حلقه مفقوده چیست؟',
      title: '۵ شکاف اساسی در صنایع سنتی',
      headline: 'ریشه‌یابی عدم اثربخشی روش‌های متداول با وجود پرداخت حقوق و پاداش',
      bullets: [
        '۱. محبوس بودن دانش ضمنی در سینه چند استادکار (با خروج آنان، دانش فنی از دست می‌رود).',
        '۲. بی‌اعتمادی به صندوق پیشنهادات به دلیل نبود چرخه بازخورد «گفتید، پیگیری کردیم».',
        '۳. نادیده گرفتن اساسی‌ترین دغدغه روحی سرپرست خانوار پیرامون آینده و اشتغال فرزندان.',
        '۴. تله ارتقای تک‌مسیره: هدایت اجباری متخصصان فنی به پست‌های مدیریتی صرفاً برای افزایش حقوق.',
        '۵. اتکای صرف به تبلیغات رسانه‌ای به جای ساخت تجربه و رضایت واقعی در کف کارگاه.'
      ],
      callout: 'اکوسیستم اسپوتا این ۵ حلقه گسسته را به هم پیوند زده و به یک زنجیره ارزش عملیاتی تبدیل می‌نماید.',
      managementNotes: 'ملاحظه راهبردی: حل این ۵ شکاف، مانع از توقفات پرهزینه خط و اتلاف هزینه‌های استخدامی مکرر خواهد شد.'
    },
    {
      id: 4,
      kicker: 'چهار لایه ارزش‌آفرینی',
      title: 'از کارگاه خط تولید تا اعتبار صنعتی اسپوتا',
      headline: 'معماری چهارسطحی ارزش در اکوسیستم',
      bullets: [
        'سطح ۱ (کارکنان): نردبان دوگانه رشد، گذرنامه مهارت، شنیده شدن واقعی دیدگاه‌ها و قدردانی اثرمحور.',
        'سطح ۲ (خانواده): کارگاه‌های کاربردی، سواد مالی، روز خانواده و آرامش فکری سرپرست خانوار.',
        'سطح ۳ (نسل آینده): آکادمی SPOOTA NEXT، آموزش نوجوانان، پروژه عملی و مسیر اولویت در مصاحبه شغلی.',
        'سطح ۴ (سازمان و صنعت): کاهش ضایعات، ارتقای راندمان شیفت، کاهش هزینه جذب و ثبت برند کارفرمایی ممتاز.'
      ],
      callout: 'همراهی کانون خانواده با محیط کارخانه، بالاترین سطح تعهد و وفاداری سازمانی را به ارمغان می‌آورد.',
      managementNotes: 'ملاحظه راهبردی: رقبا می‌توانند دستمزد را کپی نمایند، اما بازتولید این عمق از پیوند خانوادگی و تعلق سازمانی برای رقبا غیرممکن است.'
    },
    {
      id: 5,
      kicker: 'اقتصاد مهارت داخلی',
      title: 'P2P Skill Economy: جریان آزاد دانش در کارخانه',
      headline: '«چه مهارتی دارید که در شرح شغل رسمی قید نشده است؟»',
      bullets: [
        'سرشماری مهارت (Skill Census): کشف مهارت‌های فنی، کار با دستگاه، اکسل، زبان، جوشکاری و ایمنی صنعتی.',
        'تربیت مدرس داخلی: استادکاران باسابقه روش کار استاندارد را به نیروهای تازه منتقل می‌کنند.',
        'پاداش انتقال دانش: پرداخت حق‌الزحمه مربی‌گری داخلی که بسیار اقتصادی‌تر از موسسات برون‌سازمانی است.',
        'تفکیک دو مسیر: «چه چیزی می‌توانم آموزش دهم» از «برای رشدم چه باید یاد بگیرم» کاملاً تفکیک شده است.'
      ],
      callout: 'حداکثر بهره‌وری آموزشی با حداقل هزینه، زیرا مربیان دقیقاً با تجهیزات و شرایط اسپوتا آشنا هستند.',
      managementNotes: 'ملاحظه راهبردی: این شیوه موجب حفظ انگیزه و منزلت استادکاران باسابقه و انطباق سریع نیروهای جدید می‌گردد.'
    },
    {
      id: 6,
      kicker: 'آکادمی اسپوتا (SPOOTA NEXT)',
      title: 'آماده‌سازی شغلی نسل جوان با مسیر اولویت‌دار',
      headline: 'فرآیندی شایسته‌محور و مبتنی بر مهارت واقعی، نه استخدام صوری و فرمایشی',
      bullets: [
        'فرزندان پرسنل و جوانان منطقه در کارگاه‌های ایمن، مهارت‌های کاربردی و فنی را فرامی‌گیرند.',
        'ارزیابی عملی و اعطای گواهی معتبر با تشریح دقیق شایستگی‌های احراز شده.',
        'مسیر اولویت بررسی برای استخدام: فارغ‌التحصیلان برتر صرفاً در صورت نیاز کارخانه و داشتن صلاحیت، در اولویت گزینش قرار می‌گیرند.',
        'رعایت استانداردهای ایمنی، رضایت اولیا، پوشش بیمه مسئولیت و عدم ورود به خطوط پرخطر تولید.'
      ],
      callout: 'پیشگیری از بحران کمبود نیروی کار صنعتی در سال‌های آتی از طریق تربیت نیروهای بومی و متعهد از سنین نوجوانی.',
      managementNotes: 'ملاحظه راهبردی: استانداردهای شایستگی و نیاز واقعی کارخانه، شرط اصلی است؛ لذا هیچ تعهد استخدام بدون ارزیابی ایجاد نمی‌شود.'
    },
    {
      id: 7,
      kicker: 'اثر بر ترازنامه مالی و سودآوری',
      title: 'توجیه اقتصادی و بازگشت سرمایه (Business ROI)',
      headline: 'پوشش کامل هزینه‌های برنامه در بازه ۳ تا ۶ ماه از محل صرفه‌جویی‌های مستقیم',
      bullets: [
        'کاهش هزینه‌های ترک خدمت: جایگزینی یک تکنسین ماهر معادل ۳ تا ۴ ماه حقوق برای سازمان هزینه دارد.',
        'کاهش ۱۵٪ ضایعات ناشی از اشتباهات اپراتوری با آموزش حین کار استادکاران.',
        'کاهش زمان انطباق (Onboarding) از ۳ ماه به ۱ ماه با سیستم همراهی (Buddy).',
        'بودجه آزمایشی ۹۰ روزه: کمتر از ۶۰ میلیون تومان در برابر صرفه‌جویی صدها میلیون تومانی خط.'
      ],
      callout: 'ضریب بازگشت سرمایه تخمینی: بیش از ۷ برابر در سال اول استقرار کامل.',
      managementNotes: 'ملاحظه راهبردی: فقط جلوگیری از خرابی یک قالب صنعتی یا خطای تنظیم دستگاه، چند برابر کل بودجه پایلوت ارزش اقتصادی خلق می‌کند.'
    },
    {
      id: 8,
      kicker: 'چشم‌انداز و نقشه راه',
      title: 'تحول در سه افق زمانی (کوتاه‌مدت، میان‌مدت، بلندمدت)',
      headline: 'پیشروی گام‌به‌گام و متکی بر شواهد عینی بدون تحمیل شوک سازمانی',
      bullets: [
        'افق اول (ماه ۱ تا ۳): پایلوت روی ۳۰ تا ۵۰ نفر، سرشماری مهارت، رفع ۱۰ مانع کاری با «گفتید، پیگیری کردیم».',
        'افق دوم (ماه ۴ تا ۱۲): گسترش به تمام ۸۰۰ پرسنل، راه‌اندازی گذرنامه رشد، اولین دوره SPOOTA NEXT.',
        'افق سوم (سال ۲ و ۳): تبدیل آکادمی به قطب آموزش صنعتی منطقه و خودکفایی در تامین نیروهای زبده.'
      ],
      callout: 'مدیریت ارشد مجبور به ریسک یکباره نیست؛ در پایان هر افق، دروازه تصمیم و بررسی شواهد مستقر است.',
      managementNotes: 'ملاحظه راهبردی: انعطاف‌پذیری نقشه راه به سازمان اجازه می‌دهد بر اساس تحولات بازار و شرایط صنعتی، سرعت پیشرفت را تنظیم نماید.'
    },
    {
      id: 9,
      kicker: '۶ اصل ایمنی و عدم تعارض با تولید',
      title: 'تضمین‌های قطعی جهت حفظ پیوستگی خطوط تولید',
      headline: 'شروط اجرایی جهت پیشگیری از هرگونه وقفه یا اصطکاک در تولید کارخانه',
      bullets: [
        '۱. مکمل حقوق، نه جایگزین آن: این برنامه ابزاری برای جبران یا توجیه دستمزد ناکافی نخواهد بود.',
        '۲. عدم توقف خط تولید: آموزش‌ها در شیفت‌های هم‌پوشان یا خردآموزش‌های ۱۵ دقیقه‌ای برگزار می‌شود.',
        '۳. همراهی سرپرستان خط: سرپرستان مربی‌پرور از پاداش عملکرد و اثر بهره‌مند خواهند شد.',
        '۴. عدم تحمیل هزینه نرم‌افزاری: بهره‌گیری کامل از ابزارها و کاربرگ‌های سازمانی موجود در پایلوت.',
        '۵. عدم تعهد استخدامی خودکار: ضوابط گزینش همواره شایسته‌محور و تابع ظرفیت واقعی کارخانه است.',
        '۶. ساختار سبک مدیریتی: استماع گزارش تحلیلی در ۴ جلسه نیم‌ساعته فصلی در طول سال.'
      ],
      callout: 'طراحی فرآیندها به نحوی است که کمترین بار اداری را بر مدیران تحمیل نماید.',
      managementNotes: 'ملاحظه راهبردی: این اصول اطمینان می‌دهد که برنامه بدون ایجاد حاشیه یا اصطکاک، مستقیماً در خدمت اهداف عملیاتی کارخانه باشد.'
    },
    {
      id: 10,
      kicker: 'چارچوب تصمیم نهایی',
      title: 'برگه تصویب آغاز پایلوت ۹۰ روزه',
      headline: 'پیشنهاد مشخص جهت آغاز فرآیند آزمایشی در گروه صنعتی اسپوتا',
      bullets: [
        '۱. موافقت با آغاز دوره کشف و پایلوت ۹۰ روزه با حضور ۳۰ تا ۵۰ نفر پرسنل داوطلب.',
        '۲. تخصیص تنخواه محدود (حدود ۵۰ تا ۶۰ میلیون تومان) جهت پاداش مربیان داخلی و اقلام ضروری.',
        '۳. ابلاغ همراهی به مدیران تولید و پشتیبانی جهت شناسایی و معرفی نفرات داوطلب.',
        '۴. تعیین تاریخ جلسه ارزیابی در روز نودم جهت بررسی نتایج و اتخاذ تصمیم برای فازهای بعدی.'
      ],
      callout: 'با تصویب این پایلوت کم‌ریسک، اسپوتا گامی بنیادین در جهت پایداری مهارت و پیشگامی در صنعت برمی‌دارد.',
      managementNotes: 'ملاحظه راهبردی: این مصوبه هیچ‌گونه بار تعهدی بلندمدت ایجاد نکرده و صرفاً امکان سنجش عملی مدل را در ابعاد محدود فراهم می‌سازد.'
    }
  ];

  const currentSlide = slides[currentSlideIndex];

  const nextSlide = () => {
    if (currentSlideIndex < slides.length - 1) {
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(currentSlideIndex - 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' || e.key === 'Space') {
        nextSlide();
      } else if (e.key === 'ArrowRight') {
        prevSlide();
      } else if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlideIndex]);

  return (
    <div className="fixed inset-0 z-50 bg-slate-950 text-white flex flex-col justify-between p-3 sm:p-6 md:p-8 overflow-y-auto">
      {/* Top Deck Navigation Bar */}
      <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-slate-800">
        <div className="flex items-center gap-2.5 sm:gap-3">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#F07824] flex items-center justify-center font-bold text-white text-xs sm:text-sm shrink-0">
            S
          </div>
          <div>
            <span className="font-extrabold text-xs sm:text-base text-white block sm:inline">گروه صنعتی اسپوتا (SPOOTA)</span>
            <span className="text-[11px] sm:text-xs text-slate-400 sm:mr-2">اکوسیستم سرمایه انسانی • ارائه مدیریتی</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[11px] font-mono text-slate-400 bg-slate-900 px-2 py-1 rounded-md border border-slate-800">
            {currentSlideIndex + 1} / {slides.length}
          </span>
          <button
            onClick={onClose}
            className="p-1.5 sm:p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors cursor-pointer"
            title="بستن اسلایدها (Escape)"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>

      {/* Main Slide Card */}
      <div className="max-w-5xl mx-auto w-full my-auto py-4 sm:py-8">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 shadow-2xl relative">
          <div className="flex items-center justify-between mb-3 sm:mb-4">
            <span className="text-[11px] sm:text-xs font-bold text-[#F07824] tracking-wider uppercase">
              {currentSlide.kicker}
            </span>
            <span className="text-[10px] sm:text-xs font-mono font-bold text-slate-400 bg-slate-800 px-2.5 py-0.5 rounded-full">
              اسلاید {currentSlideIndex + 1} از {slides.length}
            </span>
          </div>

          <h2 className="text-xl sm:text-3xl md:text-4xl font-black text-white mb-2 sm:mb-3 tracking-tight">
            {currentSlide.title}
          </h2>

          <p className="text-xs sm:text-base md:text-lg text-slate-300 font-medium mb-5 sm:mb-8 leading-relaxed">
            {currentSlide.headline}
          </p>

          <div className="space-y-2.5 sm:space-y-3.5 mb-5 sm:mb-8">
            {currentSlide.bullets.map((bullet, idx) => (
              <div key={idx} className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#F07824] shrink-0 mt-0.5" />
                <span className="leading-relaxed">{bullet}</span>
              </div>
            ))}
          </div>

          <div className="p-3 sm:p-4 rounded-xl bg-gradient-to-r from-orange-950/60 to-slate-900 border border-orange-500/40 text-xs sm:text-sm text-orange-200 font-semibold flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-orange-400 shrink-0" />
            <span>{currentSlide.callout}</span>
          </div>

          {/* Management Strategic Notes (Integrated directly into the slide for executives) */}
          <div className="mt-4 pt-4 border-t border-slate-800/80 flex items-start gap-2.5 text-xs text-slate-300 bg-slate-950/40 p-3 sm:p-3.5 rounded-xl border border-slate-800">
            <Target className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
            <p className="leading-relaxed font-medium">
              <strong className="text-orange-300 font-bold ml-1">تحلیل مدیریتی:</strong>
              {currentSlide.managementNotes}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Deck Controls */}
      <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-slate-800 max-w-5xl mx-auto w-full">
        <button
          onClick={prevSlide}
          disabled={currentSlideIndex === 0}
          className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
            currentSlideIndex === 0
              ? 'opacity-40 cursor-not-allowed bg-slate-800 text-slate-500'
              : 'bg-slate-800 hover:bg-slate-700 text-white'
          }`}
        >
          <ChevronRight className="w-4 h-4" />
          <span>اسلاید قبلی</span>
        </button>

        {/* Dot Indicators */}
        <div className="hidden sm:flex items-center gap-1.5">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlideIndex(idx)}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                idx === currentSlideIndex ? 'w-6 bg-[#F07824]' : 'w-2 bg-slate-700 hover:bg-slate-600'
              }`}
              title={`اسلاید ${idx + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          disabled={currentSlideIndex === slides.length - 1}
          className={`flex items-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
            currentSlideIndex === slides.length - 1
              ? 'opacity-40 cursor-not-allowed bg-slate-800 text-slate-500'
              : 'bg-[#F07824] hover:bg-[#d65f10] text-white shadow-lg shadow-orange-500/20'
          }`}
        >
          <span>اسلاید بعدی</span>
          <ChevronLeft className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
