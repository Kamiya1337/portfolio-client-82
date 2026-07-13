import { useEffect, useState } from 'react';
import { BookOpenText, X } from 'lucide-react';
import HomeTab from './components/HomeTab';
import ProjectsTab from './components/ProjectsTab';
import RubricTable from './components/RubricTable';
import Summary from './components/Summary';
import PrintView from './components/PrintView';
import { portfolioData } from './data/portfolioData';

export default function App() {
  const [showPrintView, setShowPrintView] = useState(false);
  const { student } = portfolioData;

  useEffect(() => {
    const revealItems = Array.from(document.querySelectorAll('[data-reveal]'));
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    revealItems.forEach((item, index) => {
      item.style.setProperty('--reveal-delay', `${Math.min(index % 4, 3) * 70}ms`);
    });

    if (reduceMotion || !('IntersectionObserver' in window)) {
      revealItems.forEach((item) => item.classList.add('is-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -48px' },
    );

    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  if (showPrintView) {
    return (
      <div className="min-h-screen bg-white">
        <button
          type="button"
          onClick={() => setShowPrintView(false)}
          className="no-print fixed right-5 top-5 z-[70] inline-flex items-center gap-2 rounded-full border border-academic-border bg-white px-4 py-2 text-sm font-bold text-academic-ink shadow-soft transition hover:border-academic-rose hover:text-academic-deep-rose"
        >
          <X size={17} />
          Quay lại portfolio
        </button>
        <PrintView />
      </div>
    );
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-academic-background text-academic-ink">
      <header className="sticky top-0 z-50 border-b border-academic-border/70 bg-academic-background/88 backdrop-blur-md">
        <div className="mx-auto flex h-auto max-w-[1200px] flex-wrap items-center justify-between gap-2 px-5 py-3 sm:h-20 sm:flex-nowrap md:px-10">
          <a href="#top" className="flex min-w-0 items-center gap-3" aria-label="Ve dau trang">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white p-1 ring-1 ring-academic-border">
              <img src="/logo.png" alt="Logo ULIS" className="h-full w-full object-contain" />
            </span>
            <span className="hidden min-w-0 sm:block">
              <span className="block text-[10px] font-extrabold uppercase tracking-[0.18em] text-academic-deep-rose">
                German Language Portfolio
              </span>
              <span className="block truncate text-sm text-academic-muted">Công nghệ số & AI - ULIS - VNU</span>
            </span>
          </a>

          <div className="contents sm:flex sm:items-center sm:gap-6">
            <nav
              className="order-3 flex w-full items-center justify-center gap-6 border-t border-academic-border/60 pt-2 text-xs font-bold sm:order-none sm:w-auto sm:justify-start sm:gap-7 sm:border-0 sm:pt-0 sm:text-sm"
              aria-label="Dieu huong chinh"
            >
              <a className="nav-link" href="#ho-so">Hồ sơ</a>
              <a className="nav-link" href="#bai-tap">Bài tập</a>
              <a className="nav-link" href="#tong-ket">Tổng kết</a>
            </nav>
          </div>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-[1200px] px-5 pb-20 pt-10 md:px-10 md:pt-16">
        <HomeTab />
        <ProjectsTab />
        <section id="tong-ket" className="section-anchor mt-20 space-y-8 md:mt-28">
          <RubricTable />
          <Summary />
        </section>
      </main>

      <footer className="border-t border-academic-border bg-academic-ivory px-5 py-12 md:px-10">
        <div className="mx-auto flex max-w-[1200px] flex-col justify-between gap-10 md:flex-row md:items-start">
          <div className="max-w-md space-y-4">
            <p className="text-xl font-extrabold text-academic-deep-rose">{student.name}</p>
            <p className="text-sm leading-7 text-academic-muted">
              {student.major}<br />
              {student.university}
            </p>
            <div className="flex items-center gap-2 text-xs font-semibold text-academic-muted">
              <BookOpenText size={14} className="text-academic-rose" />
              <span>German Language & Culture Learning Portfolio</span>
            </div>
          </div>

          <div className="grid gap-8 text-sm sm:grid-cols-2">
            <div>
              <h3 className="section-kicker">Quick links</h3>
              <div className="mt-4 space-y-2 text-academic-muted">
                <a className="block hover:text-academic-deep-rose" href="#ho-so">Hồ sơ</a>
                <a className="block hover:text-academic-deep-rose" href="#bai-tap">Bài tập</a>
                <a className="block hover:text-academic-deep-rose" href="#tong-ket">Tổng kết</a>
              </div>
            </div>
            <div>
              <h3 className="section-kicker">Resources</h3>
              <div className="mt-4 space-y-2 text-academic-muted">
                <a className="block hover:text-academic-deep-rose" href="#bai-tap">Learning index</a>
                <a className="block hover:text-academic-deep-rose" href="#case-studies">Case studies</a>
              </div>
            </div>
          </div>
        </div>
        <p className="mx-auto mt-10 max-w-[1200px] border-t border-academic-border/50 pt-6 text-xs text-academic-muted">
          German Language & Culture Learning Portfolio - 2025-2026
        </p>
      </footer>
    </div>
  );
}
