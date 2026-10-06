import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowUpRight,
  Award,
  BookOpen,
  BriefcaseBusiness,
  Code2,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
  Users,
} from "lucide-react";
import resumeAsset from "@/assets/Rajasekaran_Resume.pdf.asset.json";
import { NeuralBackground } from "@/components/neural-background";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rajasekaran S | AI & Data Science Engineer" },
      { name: "description", content: "Explore Rajasekaran S's work in AI, machine learning, data science, and web development." },
      { property: "og:title", content: "Rajasekaran S | AI & Data Science Engineer" },
      { property: "og:description", content: "AI engineering portfolio featuring skills, experience, projects, and achievements." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const navItems = ["Profile", "Education", "Skills", "Internship", "Projects", "Achievements"];
const skills = ["Python", "SQL", "Java", "Machine Learning", "TensorFlow", "Scikit-learn", "Flask", "Data Analytics"];

function SectionTitle({ number, children }: { number: string; children: React.ReactNode }) {
  return (
    <div className="mb-10 flex items-end gap-4 border-b border-border pb-4">
      <span className="font-display text-sm font-semibold text-primary">{number}</span>
      <h2 className="font-display text-3xl font-semibold text-foreground sm:text-4xl">{children}</h2>
    </div>
  );
}

function Portfolio() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <div aria-hidden="true" className="pointer-events-none fixed inset-[-8%] z-0 living-grid opacity-30" />
      <div aria-hidden="true" className="pointer-events-none fixed left-0 top-0 z-0 size-[28rem] roaming-light-one" />
      <div aria-hidden="true" className="pointer-events-none fixed left-0 top-0 z-0 size-[34rem] roaming-light-two" />
      <NeuralBackground />
      <div aria-hidden="true" className="pointer-events-none fixed inset-x-0 top-0 z-0 h-px scan-beam opacity-60" />

      <header className="fixed inset-x-0 top-0 z-40 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
          <a href="#top" className="font-display text-lg font-bold text-foreground" aria-label="Rajasekaran S home">
            RS<span className="text-primary">.</span>
          </a>
          <nav className="hidden items-center gap-6 md:flex" aria-label="Portfolio sections">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-xs font-semibold uppercase text-muted-foreground transition-colors hover:text-primary">
                {item}
              </a>
            ))}
          </nav>
          <a href={resumeAsset.url} download className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-bold text-primary-foreground transition-transform hover:-translate-y-0.5">
            <Download className="size-4" /> Resume
          </a>
        </div>
      </header>

      <section id="top" className="relative z-10 mx-auto flex min-h-[92vh] max-w-7xl items-center px-5 pb-14 pt-28 lg:px-8">
        <div className="grid w-full items-end gap-14 lg:grid-cols-[1fr_280px]">
          <div>
            <div className="mb-8 inline-flex items-center gap-2 border-l-2 border-primary pl-3 text-sm font-semibold text-primary">
              <Sparkles className="size-4" /> Available for opportunities
            </div>
            <p className="mb-4 font-display text-lg text-muted-foreground">Hello, I’m</p>
            <h1 className="max-w-5xl font-display text-6xl font-bold leading-[0.94] text-balance sm:text-7xl lg:text-8xl">
              Rajasekaran <span className="text-primary">S.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-xl leading-relaxed text-muted-foreground sm:text-2xl">
              AI & Data Science Engineer building intelligent systems that turn complex data into useful, human outcomes.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-bold text-primary-foreground transition-transform hover:-translate-y-0.5">
                Explore my work <ArrowDown className="size-4" />
              </a>
              <a href="mailto:rajasekaranselvam55@gmail.com" className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-6 py-3 font-bold text-foreground transition-colors hover:border-primary">
                Let’s connect <ArrowUpRight className="size-4" />
              </a>
            </div>
          </div>
          <aside className="border-t border-border pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            <p className="mb-5 text-xs font-bold uppercase text-muted-foreground">Quick connect</p>
            <div className="space-y-4 text-sm">
              <a className="flex items-center gap-3 text-foreground hover:text-primary" href="mailto:rajasekaranselvam55@gmail.com"><Mail className="size-4 text-primary" /> Email me</a>
              <a className="flex items-center gap-3 text-foreground hover:text-primary" href="https://www.linkedin.com/in/rajasekaran-s-8344042a5" target="_blank" rel="noreferrer"><Linkedin className="size-4 text-primary" /> LinkedIn</a>
              <span className="flex items-center gap-3 text-muted-foreground"><MapPin className="size-4 text-primary" /> Karur, Tamil Nadu</span>
            </div>
          </aside>
        </div>
      </section>

      <div className="relative z-10">
        <section id="profile" className="border-y border-border bg-surface py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.7fr_1.3fr] lg:px-8">
            <div><SectionTitle number="01">Profile</SectionTitle></div>
            <p className="max-w-3xl text-xl leading-relaxed text-muted-foreground sm:text-2xl">Motivated and detail-oriented AI Engineer with a strong foundation in machine learning, deep learning, and data analytics. Passionate about building intelligent systems and applying AI to solve real-world problems.</p>
          </div>
        </section>

        <section id="education" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <SectionTitle number="02">Education</SectionTitle>
          <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2">
            <article className="bg-surface-raised p-7 sm:p-9"><BookOpen className="mb-8 size-6 text-primary" /><p className="text-sm font-bold text-signal">2023 — 2027</p><h3 className="mt-3 font-display text-2xl font-semibold">B.Tech, AI & Data Science</h3><p className="mt-2 text-muted-foreground">VSB Engineering College, Karur · Anna University</p><p className="mt-6 font-display text-3xl font-bold text-primary">7.58 <span className="text-sm font-medium text-muted-foreground">CGPA</span></p></article>
            <article className="bg-surface-raised p-7 sm:p-9"><Award className="mb-8 size-6 text-primary" /><p className="text-sm font-bold text-signal">School Education</p><h3 className="mt-3 font-display text-2xl font-semibold">Cheran Matric Hr. Sec. School</h3><p className="mt-2 text-muted-foreground">Karur, Tamil Nadu</p><div className="mt-6 flex gap-10"><p className="font-display text-3xl font-bold text-primary">100% <span className="block text-sm font-medium text-muted-foreground">10th</span></p><p className="font-display text-3xl font-bold text-primary">80% <span className="block text-sm font-medium text-muted-foreground">12th</span></p></div></article>
          </div>
        </section>

        <section id="skills" className="border-y border-border bg-surface py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8"><SectionTitle number="03">Technical Skills</SectionTitle><div className="flex flex-wrap gap-3">{skills.map((skill, index) => <span key={skill} className={`rounded-md border px-5 py-3 font-semibold ${index < 4 ? "border-primary/40 bg-primary/10 text-primary" : "border-border bg-surface-raised text-foreground"}`}>{skill}</span>)}</div></div>
        </section>

        <section id="internship" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <SectionTitle number="04">Internship</SectionTitle>
          <div className="grid gap-8 lg:grid-cols-[260px_1fr]"><div><p className="font-display text-5xl font-bold text-primary">2024</p><p className="mt-2 text-muted-foreground">June — July</p></div><article className="border-l-2 border-primary pl-7"><BriefcaseBusiness className="mb-5 size-6 text-primary" /><h3 className="font-display text-2xl font-semibold">Web Development Intern</h3><p className="mt-1 font-semibold text-signal">We Touch Technologies</p><ul className="mt-6 space-y-3 text-muted-foreground"><li>Developed and maintained responsive web pages.</li><li>Collaborated with team members to translate requirements into web solutions.</li><li>Built practical experience in web development, debugging, and testing.</li></ul></article></div>
        </section>

        <section id="projects" className="border-y border-border bg-surface py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8"><SectionTitle number="05">Featured Project</SectionTitle><article className="grid overflow-hidden rounded-lg border border-border bg-surface-raised lg:grid-cols-[1fr_1.2fr]"><div className="flex min-h-72 flex-col justify-between border-b border-border p-8 lg:border-b-0 lg:border-r"><div className="flex justify-between"><Code2 className="size-8 text-primary" /><span className="font-display text-6xl font-bold text-primary/20">01</span></div><div><p className="text-sm font-bold text-signal">AI-POWERED FINTECH</p><h3 className="mt-2 font-display text-4xl font-semibold">Budget Planning Agent</h3></div></div><div className="p-8"><p className="text-lg leading-relaxed text-muted-foreground">A personalized budgeting application that uses income, expenses, savings goals, and financial habits to create monthly plans. Users can monitor spending, track categories, analyze trends, and receive smart recommendations through an interactive dashboard.</p><div className="mt-8 flex flex-wrap gap-2">{["Python", "Flask", "HTML", "CSS", "SQL", "Chart.js"].map((tech) => <span key={tech} className="rounded border border-border bg-background/50 px-3 py-1.5 text-sm text-muted-foreground">{tech}</span>)}</div></div></article></div>
        </section>

        <section id="achievements" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <SectionTitle number="06">Achievements & Certifications</SectionTitle>
          <div className="grid gap-5 md:grid-cols-2"><article className="rounded-lg border border-border bg-surface p-7"><Award className="mb-8 size-7 text-signal" /><p className="text-xs font-bold uppercase text-primary">Bronze achievement</p><h3 className="mt-2 font-display text-xl font-semibold">Generative AI Certification</h3><p className="mt-2 text-muted-foreground">NASSCOM FutureSkills Prime</p></article><article className="rounded-lg border border-border bg-surface p-7"><Sparkles className="mb-8 size-7 text-signal" /><p className="text-xs font-bold uppercase text-primary">2025 participant</p><h3 className="mt-2 font-display text-xl font-semibold">AI Tools Workshop</h3><p className="mt-2 text-muted-foreground">FewInfos</p></article></div>
        </section>

        <section id="soft-skills" className="border-y border-border bg-surface py-24"><div className="mx-auto max-w-7xl px-5 lg:px-8"><SectionTitle number="07">Soft Skills</SectionTitle><div className="grid gap-px rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">{["Teamwork", "Leadership", "Time Management", "Communication"].map((skill, i) => <div key={skill} className="bg-surface-raised p-7"><Users className="mb-10 size-5 text-primary" /><span className="text-xs text-muted-foreground">0{i + 1}</span><p className="mt-2 font-display text-xl font-semibold">{skill}</p></div>)}</div></div></section>

        <footer className="mx-auto max-w-7xl px-5 py-16 lg:px-8"><div className="flex flex-col justify-between gap-8 border-b border-border pb-14 md:flex-row md:items-end"><div><p className="text-sm font-bold text-primary">LET’S BUILD SOMETHING MEANINGFUL</p><h2 className="mt-3 max-w-2xl font-display text-4xl font-semibold text-balance sm:text-5xl">Have an opportunity in AI or software?</h2></div><a href="mailto:rajasekaranselvam55@gmail.com" className="inline-flex w-fit items-center gap-2 rounded-md bg-signal px-6 py-3 font-bold text-signal-foreground">Start a conversation <ArrowUpRight className="size-4" /></a></div><div className="flex flex-col justify-between gap-4 pt-6 text-sm text-muted-foreground sm:flex-row"><p>© 2026 Rajasekaran S</p><div className="flex gap-5"><a href="https://www.linkedin.com/in/rajasekaran-s-8344042a5" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin className="size-5" /></a><a href="mailto:rajasekaranselvam55@gmail.com" aria-label="Email"><Mail className="size-5" /></a><span aria-label="GitHub"><Github className="size-5" /></span></div></div></footer>
      </div>
    </main>
  );
}