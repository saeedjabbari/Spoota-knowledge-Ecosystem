import React, { useState } from 'react';
import { Calculator, TrendingUp, DollarSign, Users, Award, ShieldAlert, Sparkles, RefreshCw } from 'lucide-react';

export const RoiSimulator: React.FC = () => {
  // Configurable sliders for an 800-person industrial company
  const [headcount, setHeadcount] = useState<number>(800);
  const [avgMonthlySalary, setAvgMonthlySalary] = useState<number>(30); // Million Tomans
  const [turnoverRate, setTurnoverRate] = useState<number>(20); // 20% annual turnover
  const [turnoverReductionPercent, setTurnoverReductionPercent] = useState<number>(25); // 25% reduction in turnover
  const [scrapCostAnnual, setScrapCostAnnual] = useState<number>(1200); // 1.2 Billion Tomans (in Millions)
  const [scrapReductionPercent, setScrapReductionPercent] = useState<number>(15); // 15% reduction in scrap
  const [pilotCost, setPilotCost] = useState<number>(60); // 60 Million Tomans for pilot

  // Calculations
  // Cost to replace an industrial employee is usually around 3 to 4 months of total cost (recruiting, onboarding, loss of production)
  const costPerReplacement = avgMonthlySalary * 3.5;
  const currentDepartures = Math.round((headcount * turnoverRate) / 100);
  const savedDepartures = Math.round((currentDepartures * turnoverReductionPercent) / 100);
  const turnoverSavings = savedDepartures * costPerReplacement; // in Million Tomans

  // Scrap savings
  const scrapSavings = (scrapCostAnnual * scrapReductionPercent) / 100; // in Million Tomans

  // Onboarding speedup savings: 25% of new hires reach proficiency 1 month faster
  const onboardingSavings = currentDepartures * (avgMonthlySalary * 0.4);

  // Total Annual Direct Value Created (in Million Tomans)
  const totalAnnualSavings = Math.round(turnoverSavings + scrapSavings + onboardingSavings);
  
  // Annualized operating cost of ecosystem (internal rewards, coordinator, materials)
  const annualSystemCost = pilotCost * 2.5; // ~150 Million Tomans per year
  const netAnnualProfit = totalAnnualSavings - annualSystemCost;
  const roiMultiplier = Math.round((totalAnnualSavings / annualSystemCost) * 10) / 10;

  const resetDefaults = () => {
    setHeadcount(800);
    setAvgMonthlySalary(30);
    setTurnoverRate(20);
    setTurnoverReductionPercent(25);
    setScrapCostAnnual(1200);
    setScrapReductionPercent(15);
    setPilotCost(60);
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Banner */}
      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold mb-3">
              <Calculator className="w-3.5 h-3.5 text-emerald-600" />
              <span>تحلیل مالی: ترازنامه اقتصادی و بازگشت سرمایه (ROI)</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-2">
              شبیه‌ساز اثر مالی و سودآوری اکوسیستم برای گروه صنعتی اسپوتا
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              این ماشین‌حساب نشان می‌دهد که چگونه کاهش اندک در جابه‌جایی نیروهای ماهر و ضایعات خط تولید، کل هزینه‌های اجرای طرح را در همان ۳ تا ۶ ماه اول پوشش می‌دهد:
            </p>
          </div>

          <button
            onClick={resetDefaults}
            className="self-start sm:self-center flex items-center gap-1.5 text-xs font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 px-3 py-2 rounded-lg transition-colors cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>تنظیمات پیش‌فرض (۸۰۰ نفر)</span>
          </button>
        </div>
      </section>

      {/* Simulator Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Controls Column (5 cols) */}
        <div className="lg:col-span-5 bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-6">
          <div className="border-b border-slate-100 pb-3">
            <h3 className="text-base font-bold text-slate-900">متغیرهای عملیاتی کارخانه</h3>
            <span className="text-xs text-slate-500">برای مشاهده اثر بلادرنگ، اسلایدرها را جابه‌جا کنید:</span>
          </div>

          {/* Headcount */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-bold">
              <span className="text-slate-700">تعداد کل پرسنل:</span>
              <span className="text-[#F07824] font-black">{headcount.toLocaleString('fa-IR')} نفر</span>
            </div>
            <input
              type="range"
              min={300}
              max={1500}
              step={50}
              value={headcount}
              onChange={(e) => setHeadcount(Number(e.target.value))}
              className="w-full accent-[#F07824] cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-400">
              <span>۳۰۰ نفر</span>
              <span>۸۰۰ (مقیاس اسپوتا)</span>
              <span>۱۵۰۰ نفر</span>
            </div>
          </div>

          {/* Average Salary */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-bold">
              <span className="text-slate-700">میانگین هزینه ماهانه هر پرسنل (حقوق+بیمه):</span>
              <span className="text-[#F07824] font-black">{avgMonthlySalary.toLocaleString('fa-IR')} میلیون تومان</span>
            </div>
            <input
              type="range"
              min={18}
              max={60}
              step={2}
              value={avgMonthlySalary}
              onChange={(e) => setAvgMonthlySalary(Number(e.target.value))}
              className="w-full accent-[#F07824] cursor-pointer"
            />
          </div>

          {/* Turnover Rate */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-bold">
              <span className="text-slate-700">نرخ ترک خدمت و استعفای سالانه فعلی:</span>
              <span className="text-rose-600 font-black">{turnoverRate}٪ ({currentDepartures} نفر در سال)</span>
            </div>
            <input
              type="range"
              min={10}
              max={40}
              step={1}
              value={turnoverRate}
              onChange={(e) => setTurnoverRate(Number(e.target.value))}
              className="w-full accent-rose-500 cursor-pointer"
            />
          </div>

          {/* Target Turnover Reduction */}
          <div className="space-y-2 bg-orange-50/60 p-3 rounded-xl border border-orange-200">
            <div className="flex justify-between text-xs font-bold">
              <span className="text-orange-950">هدف کاهش نرخ ترک خدمت با طرح اسپوتا:</span>
              <span className="text-emerald-700 font-black">{turnoverReductionPercent}٪ کاهش ({savedDepartures} نفر حفظ بیشتر)</span>
            </div>
            <input
              type="range"
              min={10}
              max={50}
              step={5}
              value={turnoverReductionPercent}
              onChange={(e) => setTurnoverReductionPercent(Number(e.target.value))}
              className="w-full accent-emerald-600 cursor-pointer"
            />
          </div>

          {/* Annual Scrap Cost */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-bold">
              <span className="text-slate-700">هزینه سالانه ضایعات و افت کیفی در خط:</span>
              <span className="text-slate-900 font-black">{scrapCostAnnual.toLocaleString('fa-IR')} میلیون تومان</span>
            </div>
            <input
              type="range"
              min={500}
              max={5000}
              step={100}
              value={scrapCostAnnual}
              onChange={(e) => setScrapCostAnnual(Number(e.target.value))}
              className="w-full accent-slate-700 cursor-pointer"
            />
          </div>

          {/* Target Scrap Reduction */}
          <div className="space-y-2 bg-emerald-50/60 p-3 rounded-xl border border-emerald-200">
            <div className="flex justify-between text-xs font-bold">
              <span className="text-emerald-950">درصد کاهش ضایعات با آموزش همتا‌به‌همتا:</span>
              <span className="text-emerald-700 font-black">{scrapReductionPercent}٪ کاهش</span>
            </div>
            <input
              type="range"
              min={5}
              max={30}
              step={1}
              value={scrapReductionPercent}
              onChange={(e) => setScrapReductionPercent(Number(e.target.value))}
              className="w-full accent-emerald-600 cursor-pointer"
            />
          </div>
        </div>

        {/* Results Column (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Big Output Banner */}
          <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white rounded-2xl p-6 sm:p-8 border border-slate-700 shadow-lg relative overflow-hidden">
            <div className="relative z-10">
              <span className="text-xs font-bold text-orange-400 uppercase tracking-wider block mb-1">
                صرفه‌جویی ناخالص سالانه برآورد شده
              </span>
              <div className="text-3xl sm:text-5xl font-black text-white mb-2 flex items-baseline gap-2">
                {totalAnnualSavings.toLocaleString('fa-IR')}
                <span className="text-sm sm:text-base font-normal text-slate-300">میلیون تومان / سال</span>
              </div>
              <p className="text-xs text-slate-300 max-w-lg mb-6 leading-relaxed">
                حاصل از مهار ترک خدمت {savedDepartures} نیروی ماهر، کاهش ضایعات خط و سرعت انطباق ۲ برابری نیروهای تازه.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-700 text-xs">
                <div>
                  <span className="text-slate-400 block text-[11px] mb-0.5">ضریب بازگشت سرمایه (ROI)</span>
                  <div className="text-xl font-black text-emerald-400 flex items-center gap-1">
                    <TrendingUp className="w-4 h-4" />
                    <span>{roiMultiplier} برابر</span>
                  </div>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px] mb-0.5">سود خالص سالانه</span>
                  <div className="text-xl font-black text-white">
                    {netAnnualProfit.toLocaleString('fa-IR')} م.ت
                  </div>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <span className="text-slate-400 block text-[11px] mb-0.5">بودجه برآورد پایلوت</span>
                  <div className="text-xl font-black text-orange-400">
                    {pilotCost} م.ت
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Breakdown Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-xs text-slate-500 font-bold block mb-1">صرفه‌جویی ترک خدمت</span>
                <div className="text-2xl font-black text-slate-900 mb-1">
                  {Math.round(turnoverSavings).toLocaleString('fa-IR')}
                </div>
                <span className="text-[11px] text-slate-400 block mb-2">میلیون تومان</span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  حفظ {savedDepartures} تکنسین کلیدی و عدم نیاز به آگهی، مصاحبه و آموزش از صفر.
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-slate-100 text-[10px] text-emerald-600 font-bold">
                بزرگ‌ترین منبع ذخیره نقدی
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-xs text-slate-500 font-bold block mb-1">کاهش ضایعات و افت خط</span>
                <div className="text-2xl font-black text-slate-900 mb-1">
                  {Math.round(scrapSavings).toLocaleString('fa-IR')}
                </div>
                <span className="text-[11px] text-slate-400 block mb-2">میلیون تومان</span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  کاهش خطاهای اپراتوری به دلیل آموزش تکنیک‌های استادکاران در پایلوت.
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-slate-100 text-[10px] text-emerald-600 font-bold">
                اثر مستقیم بر بهای تمام‌شده کالا
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-xs text-slate-500 font-bold block mb-1">سرعت بازدهی نیروهای جدید</span>
                <div className="text-2xl font-black text-slate-900 mb-1">
                  {Math.round(onboardingSavings).toLocaleString('fa-IR')}
                </div>
                <span className="text-[11px] text-slate-400 block mb-2">میلیون تومان</span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  نیروی تازه به جای ۳ ماه، ظرف ۱ ماه با همراهی مربی (Buddy) به سودآوری می‌رسد.
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-slate-100 text-[10px] text-emerald-600 font-bold">
                رهایی سرپرستان از سوالات تکراری
              </div>
            </div>
          </div>

          {/* Executive Argument for Management */}
          <div className="bg-orange-50 border border-orange-200 p-5 rounded-2xl text-xs sm:text-sm text-slate-800 leading-relaxed">
            <strong className="block text-[#b95613] text-sm font-bold mb-1.5 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#F07824]" />
              <span>تحلیل اقتصادی در جمع‌بندی مدیریتی:</span>
            </strong>
            <p className="font-medium">
              «مدیریت محترم؛ هزینه آزمایشی این پایلوت ۹۰ روزه تنها <strong>{pilotCost} میلیون تومان</strong> برآورد می‌شود، در حالی که صرفاً پیشگیری از خروج نابهنگام <strong>یک نفر سرپرست یا تکنسین ماهر خط</strong> یا کاهش ۵ درصدی ضایعات ماهانه، بیش از <strong>{Math.round(costPerReplacement)} میلیون تومان</strong> برای شرکت صرفه‌جویی نقدی به همراه دارد. این طرح از منظر مدیریت مالی، یک سرمایه‌گذاری خودگردان و بدون ریسک به شمار می‌آید.»
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
