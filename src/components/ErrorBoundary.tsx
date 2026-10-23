import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Spoota App Caught Error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center p-4 font-['Vazirmatn',sans-serif]" dir="rtl">
          <div className="max-w-md w-full bg-slate-800 rounded-2xl p-6 border border-slate-700 shadow-xl text-center space-y-4">
            <div className="w-12 h-12 rounded-xl bg-orange-500/20 text-[#F07824] flex items-center justify-center mx-auto text-2xl font-bold">
              !
            </div>
            <h2 className="text-xl font-bold text-white">خطا در بارگذاری سامانه</h2>
            <p className="text-xs text-slate-300 leading-relaxed">
              یک خطای غیرمنتظره در بارگذاری رخ داده است. لطفاً صفحه را بازخوانی فرمایید:
            </p>
            {this.state.error && (
              <div className="p-3 bg-slate-900 rounded-lg text-left text-[11px] font-mono text-rose-400 overflow-x-auto" dir="ltr">
                {this.state.error.message}
              </div>
            )}
            <button
              onClick={() => window.location.reload()}
              className="w-full bg-[#F07824] hover:bg-[#d65f10] text-white py-2.5 rounded-xl font-bold text-xs transition-colors cursor-pointer"
            >
              بازخوانی مجدد صفحه (Reload)
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
