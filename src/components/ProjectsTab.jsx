import { useEffect, useState } from 'react';
import { ArrowLeft, ExternalLink, FileText, Maximize2, ShieldCheck, X } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const unavailable = (value) => !value || value === 'Sáº½ cáº­p nháº­t sau';
const notRequired = (value) => value === 'KhÃ´ng yÃªu cáº§u';

function PreviewModal({ previewData, onClose }) {
  useEffect(() => {
    if (!previewData.isOpen) return undefined;
    const handleEscape = (event) => event.key === 'Escape' && onClose();
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [previewData.isOpen, onClose]);

  if (!previewData.isOpen) return null;

  return (
    <div className="fixed inset-0 z-[90] flex items-center justify-center bg-academic-ink/75 p-4 backdrop-blur-sm" onMouseDown={onClose}>
      <div className="flex h-[88vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl" onMouseDown={(event) => event.stopPropagation()}>
        <div className="flex items-center justify-between gap-4 border-b border-academic-border bg-academic-ivory px-5 py-4">
          <div>
            <p className="section-kicker">Preview</p>
            <h3 className="mt-1 font-bold text-academic-ink">Trình xem PDF</h3>
          </div>
          <div className="flex items-center gap-2">
            <a href={previewData.url} target="_blank" rel="noreferrer" className="icon-button" aria-label="Mở trong tab mới"><ExternalLink size={18} /></a>
            <button type="button" onClick={onClose} className="icon-button" aria-label="Đóng bản xem trước"><X size={20} /></button>
          </div>
        </div>
        <div className="min-h-0 flex-1 overflow-hidden bg-academic-ivory">
          <iframe
            src={previewData.url}
            title="Bản xem trước báo cáo PDF"
            className="block h-full w-full border-0 bg-transparent"
          />
        </div>
      </div>
    </div>
  );
}

function ResourceAction({ value, type, onPreview }) {
  const config = {
    pdf: { label: 'Báo cáo PDF', icon: FileText },
  }[type];
  const Icon = config.icon;

  if (unavailable(value)) return <span className="resource-disabled"><Icon size={17} /> Sẽ cập nhật sau</span>;
  if (notRequired(value)) return <span className="resource-disabled"><Icon size={17} /> Không yêu cầu</span>;

  return (
    <a
      href={value}
      onClick={(event) => onPreview(event, value, type)}
      className="resource-action"
    >
      <Icon size={17} />
      {config.label}
      <Maximize2 size={14} />
    </a>
  );
}

export default function ProjectsTab() {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState(null);
  const [previewData, setPreviewData] = useState({ isOpen: false, url: '', type: '' });

  const openPreview = (event, url, type) => {
    event.preventDefault();
    setPreviewData({ isOpen: true, url, type });
  };
  const closePreview = () => setPreviewData({ isOpen: false, url: '', type: '' });

  return (
    <section id="case-studies" data-reveal className="reveal section-anchor mt-20 space-y-12 md:mt-28" aria-labelledby="cases-title">
      <PreviewModal previewData={previewData} onClose={closePreview} />

      <div className="mx-auto max-w-3xl text-center">
        <h2 id="cases-title" className="text-4xl font-black tracking-tight text-academic-deep-rose md:text-6xl">Case Studies</h2>
        <p className="mt-4 text-sm leading-7 text-academic-muted md:text-base">
          Sáu bài tập ghi lại cách kiến thức được chuyển thành sản phẩm, minh chứng và trải nghiệm học tập thực tế.
        </p>
      </div>

      {selectedProject && (
        <article className="soft-card soft-pink-glow overflow-hidden rounded-3xl bg-white">
          <div className="bg-academic-blush p-7 text-black md:p-10">
            <button type="button" onClick={() => setSelectedProject(null)} className="mb-7 inline-flex items-center gap-2 rounded-full border border-academic-border bg-white/70 px-4 py-2 text-sm font-bold text-academic-ink transition hover:bg-white hover:text-academic-deep-rose">
              <ArrowLeft size={17} /> Trở lại 6 case
            </button>
            <p className="section-kicker">Case {String(selectedProject.id).padStart(2, '0')} - {selectedProject.chapter}</p>
            <h3 className="mt-3 max-w-4xl text-3xl font-black leading-tight md:text-5xl">{selectedProject.title}</h3>
            <p className="mt-4 max-w-3xl text-base leading-7 text-academic-muted">{selectedProject.shortDesc}</p>
          </div>

          <div className="grid gap-6 p-7 md:p-10 lg:grid-cols-2">
            <div className="space-y-6">
              <div className="rounded-2xl bg-academic-blush p-6 ring-1 ring-academic-border">
                <span className="section-kicker">Mục tiêu</span>
                <p className="mt-3 leading-7 text-academic-ink">{selectedProject.target}</p>
              </div>
              <div className="rounded-2xl bg-white p-6 ring-1 ring-academic-border">
                <span className="section-kicker">Kỹ năng</span>
                <div className="mt-4 flex flex-wrap gap-2">{selectedProject.skills?.map((skill) => <span className="tag" key={skill}>{skill}</span>)}</div>
              </div>
            </div>
            <div className="rounded-2xl bg-academic-ivory p-6 ring-1 ring-academic-border">
              <span className="section-kicker">Quá trình thực hiện</span>
              <p className="mt-3 text-sm leading-7 text-academic-muted">{selectedProject.process}</p>
            </div>
          </div>

          <div className="border-t border-academic-border bg-academic-blush/50 p-7 md:px-10">
            <p className="section-kicker mb-4">Tài liệu báo cáo</p>
            <div className="flex flex-wrap gap-3">
              <ResourceAction value={selectedProject.report} type="pdf" onPreview={openPreview} />
            </div>
          </div>
        </article>
      )}

      <div className={`${selectedProject ? 'hidden' : 'grid'} gap-7 md:grid-cols-2 lg:grid-cols-3`} aria-hidden={Boolean(selectedProject)}>
        {projects.map((project, index) => (
          <article
            data-reveal
            key={project.id}
            className={`reveal soft-card hover-lift group flex min-h-[310px] flex-col overflow-hidden rounded-2xl bg-white transition hover:border-academic-rose ${index === 3 ? 'lg:col-span-2 lg:flex-row' : ''}`}
          >
            <div className={`${index === 3 ? 'lg:w-2/3' : ''} flex flex-1 flex-col p-7`}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="section-kicker">Case {String(project.id).padStart(2, '0')}</span>
                  <p className="mt-2 text-xs font-bold uppercase tracking-wider text-academic-muted">{project.chapter}</p>
                </div>
                <span className="rounded-full bg-academic-blush px-3 py-1 text-xs font-bold text-academic-deep-rose">{project.status}</span>
              </div>
              <h3 className="mt-5 text-xl font-black leading-7 text-academic-ink">{project.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-6 text-academic-muted">{project.shortDesc}</p>
              <div className="mt-5 flex flex-wrap gap-2">{project.skills?.slice(0, 3).map((skill) => <span className="tag" key={skill}>{skill}</span>)}</div>
              <div className="mt-6 flex items-center justify-between border-t border-academic-border pt-5">
                <button type="button" onClick={() => setSelectedProject(project)} className="editorial-button rounded-full px-4 py-2 text-sm font-bold">Xem chi tiết</button>
                <button type="button" onClick={(event) => openPreview(event, project.report, 'pdf')} disabled={unavailable(project.report) || notRequired(project.report)} className="icon-button disabled:cursor-not-allowed disabled:opacity-35" aria-label={`Xem báo cáo ${project.title}`}><FileText size={18} /></button>
              </div>
            </div>
            {index === 3 && (
              <div className="flex items-center justify-center bg-academic-fixed p-7 lg:w-1/3">
                <div className="flex aspect-square w-full max-w-44 items-center justify-center rounded-3xl bg-white text-academic-deep-rose shadow-[0_18px_36px_rgba(190,24,93,0.16)]">
                  <ShieldCheck size={54} strokeWidth={1.5} />
                </div>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
