import { CheckCircle2, CircleDashed, RefreshCw } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function RubricTable() {
  const { projects, rubric } = portfolioData;
  const totalMilestones = projects.length;
  const completedMilestones = projects.reduce((acc, project) => {
    const reportDone = project.report !== 'Sáº½ cáº­p nháº­t sau' && project.report !== '' && project.report !== 'KhÃ´ng yÃªu cáº§u';
    return acc + (reportDone ? 1 : 0);
  }, 0);
  const progressPercent = Math.round((completedMilestones / totalMilestones) * 100);

  return (
    <div className="rounded-[2rem] border border-academic-border bg-white p-7 md:p-12 lg:p-16">
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <h2 className="text-4xl font-black leading-tight text-academic-ink">
            Tổng kết<br />
            <span className="text-academic-deep-rose">Kết quả đạt được</span>
          </h2>
          <p className="mt-6 text-base italic leading-8 text-academic-muted">
            Hành trình sáu bài tập kết nối quản lý dữ liệu, nghiên cứu thông tin, tư duy AI, cộng tác, sáng tạo và liêm chính học thuật.
          </p>
          <div className="mt-8 rounded-2xl border border-academic-border bg-academic-blush p-6">
            <p className="text-5xl font-black text-academic-deep-rose">{progressPercent}%</p>
            <p className="mt-1 text-xs font-extrabold uppercase tracking-[0.14em] text-academic-muted">Portfolio readiness</p>
            <div className="mt-5 h-3 overflow-hidden rounded-full bg-white">
              <div className="h-full rounded-full bg-academic-deep-rose transition-all duration-700" style={{ width: `${progressPercent}%` }} />
            </div>
            <div className="mt-4 flex items-center gap-2 text-sm text-academic-muted">
              <RefreshCw size={15} />
              <span>{completedMilestones}/{totalMilestones} báo cáo PDF đã được đồng bộ.</span>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:col-span-8">
          {projects.map((project) => {
            const reportDone = project.report !== 'Sáº½ cáº­p nháº­t sau' && project.report !== '' && project.report !== 'KhÃ´ng yÃªu cáº§u';
            const isFullyDone = reportDone;
            const rubricItem = rubric[project.id - 1];

            return (
              <article data-reveal key={project.id} className="reveal border-l border-academic-deep-rose/25 pl-6">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm font-black text-academic-deep-rose">{String(project.id).padStart(2, '0')}</span>
                  {isFullyDone ? <CheckCircle2 className="text-academic-deep-rose" size={19} /> : <CircleDashed className="text-academic-muted" size={19} />}
                </div>
                <h3 className="mt-3 font-black leading-6 text-academic-deep-rose">{project.title}</h3>
                <p className="mt-2 text-sm font-semibold text-academic-ink">{isFullyDone ? 'Đã có báo cáo PDF' : 'Cần bổ sung báo cáo'}</p>
                {rubricItem && <p className="mt-3 text-sm leading-6 text-academic-muted">{rubricItem.action}</p>}
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}
