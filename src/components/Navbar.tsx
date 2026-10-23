import React from 'react';
import { ActiveTab } from '../types';
import { 
  LayoutDashboard, 
  Search, 
  Telescope, 
  Lightbulb, 
  Calculator, 
  Milestone, 
  FolderArchive, 
  Presentation,
  Printer
} from 'lucide-react';

interface NavbarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  onOpenDeck: () => void;
  onOpenPrintMemo: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenDeck,
  onOpenPrintMemo,
}) => {
  const navItems: { id: ActiveTab; label: string; icon: React.ReactNode; badge?: string }[] = [
    { id: 'overview', label: 'پیشنهاد چیست؟', icon: <LayoutDashboard className="w-4 h-4 shrink-0" /> },
    { id: 'missing-link', label: 'حلقه مفقوده', icon: <Search className="w-4 h-4 shrink-0" />, badge: 'کلیدی' },
    { id: 'vision-future', label: 'آینده و چشم‌انداز', icon: <Telescope className="w-4 h-4 shrink-0" /> },
    { id: 'recommendations', label: 'پیشنهادات مدیریتی', icon: <Lightbulb className="w-4 h-4 shrink-0" />, badge: 'ارائه' },
    { id: 'roi-simulator', label: 'شبیه‌ساز سودآوری', icon: <Calculator className="w-4 h-4 shrink-0" /> },
    { id: 'pilot-roadmap', label: 'نقشه راه و پایلوت', icon: <Milestone className="w-4 h-4 shrink-0" /> },
    { id: 'original-site', label: 'آرشیو طرح اولیه', icon: <FolderArchive className="w-4 h-4 shrink-0" /> },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs no-print">
      {/* Top Bar with Brand & Fast Action Buttons */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-3 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5 sm:gap-3">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-[#F07824] to-[#d65f10] text-white flex items-center justify-center font-black text-lg sm:text-xl shadow-md shadow-orange-500/20 shrink-0">
            S
          </div>
          <div>
            <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
              <span className="font-extrabold text-slate-900 text-base sm:text-lg tracking-tight">گروه صنعتی اسپوتا</span>
              <span className="text-[10px] font-bold bg-orange-100 text-[#b95613] px-2 py-0.5 rounded-full border border-orange-200">
                SPOOTA • ۸۰۰ نفر
              </span>
            </div>
            <p className="text-[11px] sm:text-xs text-slate-500 font-medium">اکوسیستم سرمایه انسانی | بسته تحلیل راهبردی مدیریت ارشد</p>
          </div>
        </div>

        {/* Action Buttons for Pitch and Print */}
        <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
          <button
            onClick={onOpenDeck}
            className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 bg-[#F07824] hover:bg-[#d65f10] text-white text-xs sm:text-sm font-bold px-3 sm:px-4 py-2 rounded-lg transition-all shadow-xs hover:shadow-md cursor-pointer active:scale-95"
            title="نمایش اسلایدهای پرزنت مدیریتی"
          >
            <Presentation className="w-4 h-4 shrink-0" />
            <span>شروع پرزنت</span>
          </button>
          <button
            onClick={onOpenPrintMemo}
            className="flex items-center justify-center gap-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs sm:text-sm font-medium px-2.5 sm:px-3 py-2 rounded-lg border border-slate-300 transition-colors cursor-pointer"
            title="یادداشت اجرایی جهت ارائه به مدیریت"
          >
            <Printer className="w-4 h-4 text-slate-500 shrink-0" />
            <span className="hidden xs:inline">یادداشت مدیریتی</span>
          </button>
        </div>
      </div>

      {/* Navigation Tabs - Optimized for touch scrolling on mobile */}
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 border-t border-slate-100 sm:border-t-0">
        <nav className="flex space-x-1 space-x-reverse overflow-x-auto pb-1.5 pt-1 scrollbar-none text-xs sm:text-sm font-medium">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-1.5 py-2 px-3 sm:px-3.5 border-b-2 font-medium whitespace-nowrap transition-colors cursor-pointer shrink-0 ${
                  isActive
                    ? 'border-[#F07824] text-[#F07824] font-bold bg-orange-50/70 rounded-t-md'
                    : 'border-transparent text-slate-600 hover:text-slate-900 hover:border-slate-300'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
                {item.badge && (
                  <span className={`text-[9px] px-1.5 py-0.2 rounded-full font-bold ${
                    isActive ? 'bg-[#F07824] text-white' : 'bg-slate-200 text-slate-600'
                  }`}>
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
