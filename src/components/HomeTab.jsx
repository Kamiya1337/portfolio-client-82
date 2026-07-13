import { portfolioData } from '../data/portfolioData';
import { Languages, Quote, Sparkles } from 'lucide-react';
import avatarImage from '../../docs/avatar.png';

export default function HomeTab() {
  const { student, overview } = portfolioData;

  const studentNumber = '25040628';
  const nameParts = student.name.split(' ');
  const nameFirstLine = nameParts.slice(0, 2).join(' ');
  const nameSecondLine = nameParts.slice(2).join(' ');

  return (
    <div className="space-y-20 md:space-y-28">
      <section data-reveal className="reveal relative overflow-hidden py-8 md:py-14">
        <div className="hero-bg-word left-[-1rem] top-0">ULIS</div>
        <div className="hero-bg-word bottom-0 right-[-6rem] hidden md:block">LANGUAGE</div>

        <div className="relative z-10 grid gap-10 lg:grid-cols-12">
          <div className="min-w-0 lg:col-span-8">
            <span className="inline-flex rounded-full bg-academic-fixed px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.12em] text-academic-deep-rose">
              Công nghệ số & AI - 2025-2026
            </span>
            <h1 className="mt-5 max-w-full break-words text-[2rem] font-black leading-[1.02] tracking-tight text-academic-deep-rose min-[420px]:text-[2.65rem] sm:max-w-4xl sm:text-6xl md:text-7xl">
              <span className="block sm:inline">Portfolio</span>{' '}
              <span className="block sm:inline">học phần</span><br />
              <span className="block text-academic-ink sm:inline">{nameFirstLine}</span>{' '}
              <span className="block text-academic-ink sm:inline">{nameSecondLine}</span>
            </h1>
            <p className="mt-6 max-w-[310px] break-words border-l-4 border-academic-deep-rose bg-white/45 py-2 pl-6 text-base italic leading-8 text-academic-muted min-[420px]:max-w-full md:max-w-2xl md:text-lg">
              {student.bio}
            </p>
          </div>

          <aside className="min-w-0 flex flex-col justify-end gap-5 lg:col-span-4">
            <div className="soft-card rounded-2xl bg-white/60 p-7 backdrop-blur">
              <h2 className="text-xl font-extrabold text-academic-deep-rose">Academic Info</h2>
              <dl className="mt-5 space-y-3 text-sm">
                {[
                  ['Ngành', student.major],
                  ['Trường', 'ULIS - VNU'],
                  ['Mã sinh viên', studentNumber],
                ].map(([label, value]) => (
                  <div key={label} className="grid gap-2 border-b border-academic-border/45 pb-3 sm:grid-cols-[5rem_1fr]">
                    <dt className="w-20 shrink-0 font-bold text-academic-ink">{label}</dt>
                    <dd className="min-w-0 break-words text-left text-academic-muted sm:text-right">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="grid gap-4 min-[420px]:grid-cols-2">
              <div className="soft-card rounded-2xl bg-academic-fixed p-5 text-center">
                <p className="text-3xl font-black text-academic-deep-rose">{String(overview.length).padStart(2, '0')}</p>
                <p className="mt-1 text-[10px] font-extrabold uppercase tracking-[0.14em] text-academic-muted">Skills</p>
              </div>
              <div className="rounded-2xl bg-academic-deep-rose p-5 text-center text-white shadow-[0_16px_36px_rgba(190,24,93,0.24)]">
                <p className="text-3xl font-black">AI</p>
                <p className="mt-1 text-[10px] font-extrabold uppercase tracking-[0.14em] text-white/80">Focused</p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section id="ho-so" className="section-anchor grid items-stretch gap-7 lg:grid-cols-12">
        <div data-reveal className="reveal soft-card relative overflow-hidden rounded-3xl bg-academic-blush p-8 lg:col-span-5">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-academic-border bg-white/35" />
          <div className="absolute bottom-14 right-14 h-36 w-36 rounded-full bg-academic-pastel/25" />
          <Quote className="absolute right-8 top-7 text-academic-border" size={82} strokeWidth={1.2} />

          <div className="relative">
            <span className="section-kicker">Student profile</span>
            <h2 className="mt-5 text-3xl font-black tracking-tight text-academic-ink md:text-4xl">{student.name}</h2>
            <figure className="mx-auto mt-7 w-full max-w-[360px] rounded-3xl border border-academic-border bg-white p-3 shadow-[0_18px_44px_rgba(190,24,93,0.12)]">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-academic-ivory">
                <img
                  src={avatarImage}
                  alt={`Ảnh chân dung ${student.name}`}
                  className="h-full w-full object-cover object-[58%_center]"
                />
                <figcaption className="absolute bottom-4 left-4 rounded-lg bg-white/95 px-4 py-2 text-xs font-extrabold text-academic-rose shadow-sm backdrop-blur-sm">
                  Trần Bảo Nhi
                </figcaption>
              </div>
            </figure>
            <p className="mt-5 text-lg text-academic-muted">{student.id} - ULIS - VNU</p>
            <p className="mt-2 max-w-md text-xl font-extrabold leading-9 text-academic-ink">
              Học ngôn ngữ bằng tư duy số, sự tò mò văn hóa và cách sử dụng AI có trách nhiệm.
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {student.skills.slice(0, 4).map((skill) => <span className="tag" key={skill}>{skill}</span>)}
            </div>
          </div>
        </div>

        <div className="grid gap-7 sm:grid-cols-2 lg:col-span-7">
          <article data-reveal className="reveal soft-card hover-lift rounded-2xl bg-white p-8">
            <Languages className="text-academic-deep-rose" size={28} />
            <span className="section-kicker mt-8 block">Global learning</span>
            <h3 className="mt-3 text-2xl font-black leading-tight">{student.major}</h3>
            <p className="mt-5 text-base leading-8 text-academic-muted">
              Học ngôn ngữ là quá trình đi từ cách dùng từ, đặt câu đến việc hiểu con người và văn hóa phía sau ngôn ngữ đó. Khi có nền tảng văn hóa, việc giao tiếp trở nên tự nhiên và có chiều sâu hơn.
            </p>
          </article>
          <article data-reveal className="reveal soft-card hover-lift rounded-2xl bg-white p-8">
            <Sparkles className="text-academic-deep-rose" size={28} />
            <span className="section-kicker mt-8 block">Digital learning</span>
            <h3 className="mt-3 text-2xl font-black leading-tight">Công nghệ số & AI</h3>
            <p className="mt-5 text-base leading-8 text-academic-muted">
              Công cụ số hỗ trợ người học tìm kiếm tài liệu, ghi chép, hệ thống hóa thông tin và trình bày ý tưởng rõ ràng hơn. Điều quan trọng là biết chọn lọc và sử dụng đúng mục đích.
            </p>
          </article>
          <blockquote data-reveal className="reveal soft-card hover-lift relative rounded-2xl bg-white/60 p-8 sm:col-span-2">
            <Quote className="absolute right-7 top-6 text-academic-pastel" size={52} />
            <span className="section-kicker">A note</span>
            <p className="mt-6 max-w-3xl text-xl italic leading-10 text-academic-ink">
              Công nghệ không thay thế quá trình tự học, nhưng khi được sử dụng một cách tỉnh táo, nó trở thành người bạn đồng hành giúp người học hiểu vấn đề nhanh hơn, học tập chủ động hơn và từng bước làm chủ tri thức.
            </p>
          </blockquote>
        </div>
      </section>

      <section id="bai-tap" data-reveal className="reveal section-anchor">
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="section-kicker">Lộ trình học tập</span>
            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">Learning Index</h2>
          </div>
          <div className="h-1 w-32 rounded-full bg-academic-deep-rose" />
        </div>
        <div className="space-y-4">
          {overview.map((item, index) => {
            const Icon = item.icon;
            return (
              <article
                data-reveal
                key={item.id}
                className="reveal group flex flex-col gap-4 rounded-2xl border border-academic-border bg-white p-5 transition hover:translate-x-1 hover:border-academic-rose hover:bg-academic-blush md:flex-row md:items-center md:gap-6"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-academic-deep-rose text-sm font-black text-white">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg font-extrabold text-academic-ink">{item.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-academic-muted">{item.desc}</p>
                </div>
                <Icon size={20} className="shrink-0 text-academic-muted transition group-hover:text-academic-deep-rose" />
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}
