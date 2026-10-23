import React, { useState } from 'react';
import { ActiveTab } from './types';
import { Navbar } from './components/Navbar';
import { ExecutiveSummary } from './components/ExecutiveSummary';
import { MissingLinkSection } from './components/MissingLinkSection';
import { FutureAndVision } from './components/FutureAndVision';
import { RecommendationsPlaybook } from './components/RecommendationsPlaybook';
import { RoiSimulator } from './components/RoiSimulator';
import { PilotRoadmap } from './components/PilotRoadmap';
import { OriginalSiteExplorer } from './components/OriginalSiteExplorer';
import { CeoPresentationDeck } from './components/CeoPresentationDeck';
import { ExecutiveMemoPrint } from './components/ExecutiveMemoPrint';
import { Presentation, Printer, Sparkles, Building2, Heart, ShieldCheck } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('overview');
  const [isDeckOpen, setIsDeckOpen] = useState<boolean>(false);
  const [isPrintMemoOpen, setIsPrintMemoOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-['Vazirmatn',system-ui,sans-serif] selection:bg-orange-500 selection:text-white">
      {/* Top Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenDeck={() => setIsDeckOpen(true)}
        onOpenPrintMemo={() => setIsPrintMemoOpen(true)}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'overview' && (
          <ExecutiveSummary
            onGoToMissingLink={() => setActiveTab('missing-link')}
            onGoToRecommendations={() => setActiveTab('recommendations')}
            onOpenDeck={() => setIsDeckOpen(true)}
          />
        )}

        {activeTab === 'missing-link' && <MissingLinkSection />}

        {activeTab === 'vision-future' && <FutureAndVision />}

        {activeTab === 'recommendations' && <RecommendationsPlaybook />}

        {activeTab === 'roi-simulator' && <RoiSimulator />}

        {activeTab === 'pilot-roadmap' && <PilotRoadmap />}

        {activeTab === 'original-site' && <OriginalSiteExplorer />}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 mt-16 py-10 no-print">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800 text-xs sm:text-sm">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#F07824] flex items-center justify-center font-bold text-white text-base">
                S
              </div>
              <div>
                <span className="font-bold text-white text-base block">گروه صنعتی اسپوتا (SPOOTA)</span>
                <span className="text-slate-400 text-xs">اکوسیستم سرمایه انسانی | Human Capital Multiplier Ecosystem</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-xs">
              <button onClick={() => setActiveTab('overview')} className="hover:text-white transition-colors cursor-pointer">
                پیشنهاد چیست؟
              </button>
              <button onClick={() => setActiveTab('missing-link')} className="hover:text-white transition-colors cursor-pointer">
                حلقه مفقوده
              </button>
              <button onClick={() => setActiveTab('vision-future')} className="hover:text-white transition-colors cursor-pointer">
                آینده و چشم‌انداز
              </button>
              <button onClick={() => setActiveTab('recommendations')} className="hover:text-white transition-colors cursor-pointer">
                پیشنهادات مدیریتی
              </button>
              <button onClick={() => setActiveTab('roi-simulator')} className="hover:text-white transition-colors cursor-pointer">
                شبیه‌ساز سودآوری
              </button>
              <button onClick={() => setIsDeckOpen(true)} className="text-[#F07824] font-bold hover:underline cursor-pointer">
                اسلایدهای پرزنت
              </button>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <p>
              بسته تحلیلی و دفاعیه راهبردی ویژه ارائه به مدیریت ارشد • مقیاس سازمانی: حدود ۸۰۰ نفر پرسنل
            </p>
            <p className="text-slate-400">
              «اسپوتا مالک آینده آدم‌ها نیست؛ بستر ساختن آینده آن‌هاست.»
            </p>
          </div>
        </div>
      </footer>

      {/* Full-Screen Presentation Deck Modal */}
      {isDeckOpen && <CeoPresentationDeck onClose={() => setIsDeckOpen(false)} />}

      {/* Printable Executive Memo Modal */}
      {isPrintMemoOpen && <ExecutiveMemoPrint onClose={() => setIsPrintMemoOpen(false)} />}
    </div>
  );
}
