import { GraduationCap, Briefcase, Trophy, Award, Calendar, MapPin } from "lucide-react";

const SectionBar = () => (
    <div className="w-1 h-10 bg-accent rounded-full"></div>
);

const IconBadge = ({ children }) => (
    <div className="p-2 bg-accent/10 border border-accent/30 rounded-lg text-accent">
        {children}
    </div>
);

const DateChip = ({ children }) => (
    <div className="flex items-center gap-2 text-sm text-ink-muted bg-surface border border-line rounded-md px-3 py-1.5 flex-shrink-0">
        <Calendar className="w-4 h-4" />
        <span>{children}</span>
    </div>
);

const About = () => {
    return (
        <section id="about" className="section">
            <div className="container">
                <div className="bg-surface-2 p-7 md:p-12 border border-line-strong rounded-2xl">
                    <div className="flex items-center gap-3 mb-6">
                        <SectionBar />
                        <h2 className="headline-2">About Me</h2>
                    </div>
                    <p className="mb-10 text-ink-muted md:text-lg md:max-w-[60ch] leading-relaxed border-l-2 border-accent pl-4 py-2">
                        I&apos;m a fullstack developer passionate about building modern web applications. I enjoy learning new technologies and tackling innovative challenges.
                    </p>

                    {/* Education */}
                    <div className="mb-10 md:mb-12">
                        <div className="flex items-center gap-3 mb-6">
                            <IconBadge><GraduationCap className="w-5 h-5" /></IconBadge>
                            <h3 className="headline-3">Education</h3>
                        </div>
                        <div className="space-y-4">
                            <div className="group relative bg-surface-3 p-5 border border-line rounded-xl hover:border-accent/40 hover:-translate-y-0.5 transition-all duration-300">
                                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                                    <div className="flex-1">
                                        <div className="flex items-start gap-3">
                                            <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                                            <div className="flex-1">
                                                <h4 className="headline-4 mb-2">Informatic Engineering</h4>
                                                <div className="flex items-center gap-2 text-sm text-ink-muted mb-3">
                                                    <MapPin className="w-4 h-4" />
                                                    <span>Dian Nuswantoro University</span>
                                                </div>
                                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 text-accent text-sm border border-accent/30 rounded-md">
                                                    <Award className="w-4 h-4" />
                                                    <span>GPA: 3.96</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <DateChip>Sep 2022 - Mar 2026</DateChip>
                                </div>
                            </div>
                            <div className="group relative bg-surface-3 p-5 border border-line rounded-xl hover:border-accent/40 hover:-translate-y-0.5 transition-all duration-300">
                                <div className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                                    <div className="flex-1">
                                        <h4 className="headline-4">Loyola Senior High School</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Professional Experience */}
                    <div className="mb-10 md:mb-12">
                        <div className="flex items-center gap-3 mb-6">
                            <IconBadge><Briefcase className="w-5 h-5" /></IconBadge>
                            <h3 className="headline-3">Professional Experience</h3>
                        </div>
                        <div className="relative border-l border-line pl-6">
                            <div className="space-y-4">
                                {[
                                    { role: "Lead Backend Developer", org: "YouApp PT. Macaroon Pte. Ltd.", desc: "Lead backend engineering for the YouApp platform: architecture, delivery, and technical direction across services.", date: "Mar 2026 - present", logo: "/images/logo-experience/youapp.jpg", alt: "YouApp" },
                                    { role: "Backend Developer", org: "YouApp PT. Macaroon Pte. Ltd.", desc: "Developed backend services for the YouApp platform and the fintech web3 product MyFusionPay.", date: "Sep 2025 - Feb 2026", logo: "/images/logo-experience/youapp.jpg", alt: "YouApp" },
                                    { role: "Backend Developer", org: "Monago", desc: "Built decision support systems and chatbot integrations using FastAPI, NestJS, MongoDB, and LangChain.", date: "Nov 2024 - Jul 2025", logo: "/images/logo-experience/monago.jpg", alt: "Monago" },
                                    { role: "Backend Developer", org: "Bengkel Koding", desc: "Developed REST APIs, optimized databases, and deployed machine learning models.", date: "Aug 2024 - present", logo: "/images/logo-experience/bengkel-koding.jpg", alt: "Bengkel Koding" },
                                    { role: "Full Stack Developer", org: "Freelance", desc: "Developed web and mobile apps tailored to client needs.", date: "Aug 2023 - present", logo: null, alt: "Freelance" },
                                ].map((exp, i) => (
                                    <div key={i} className="group relative bg-surface-3 p-5 border border-line rounded-xl hover:border-accent/40 hover:-translate-y-0.5 transition-all duration-300">
                                        <span className="absolute -left-[31px] top-7 w-3 h-3 rounded-full bg-surface-3 border-2 border-accent"></span>
                                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-start gap-3">
                                                    {exp.logo ? (
                                                        <img
                                                            src={exp.logo}
                                                            alt={exp.alt}
                                                            width={56}
                                                            height={56}
                                                            className="w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0 border border-line-strong bg-surface rounded-lg object-contain p-1"
                                                        />
                                                    ) : (
                                                        <div className="w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0 border border-line-strong bg-surface rounded-lg grid place-items-center">
                                                            <Briefcase className="w-5 h-5 text-ink-faint" />
                                                        </div>
                                                    )}
                                                    <div className="flex-1 min-w-0">
                                                        <h4 className="headline-4 mb-1">{exp.role}</h4>
                                                        <p className="text-sm font-medium text-accent mb-2">{exp.org}</p>
                                                        <p className="text-sm text-ink-muted leading-relaxed">{exp.desc}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <DateChip>{exp.date}</DateChip>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Achievements */}
                    <div className="mb-4">
                        <div className="flex items-center gap-3 mb-6">
                            <IconBadge><Trophy className="w-5 h-5" /></IconBadge>
                            <h3 className="headline-3">Achievements</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                { place: "1st Place", highlight: true, date: "Apr 2025", title: "Hi-Technology Competition", sub: "Software Competition 2025" },
                                { place: "1st Place", highlight: true, date: "Jan 2025", title: "ITC 2025", sub: "Website Development Competition" },
                                { place: "2nd Place", highlight: false, date: "Apr 2024", title: "Hi-Technology Competition", sub: "Software Competition 2024" },
                                { place: "2nd Place", highlight: false, date: "Jan 2024", title: "ITC 2024", sub: "Website Development Competition" },
                                { place: "3rd Place", highlight: false, date: "Oct 2023", title: "Programming Competition", sub: "Built Accounting Journal app using Laravel + Vue", span: true },
                            ].map((a, i) => (
                                <div key={i} className={`group relative bg-surface-3 p-5 border border-line rounded-xl hover:border-accent/40 hover:-translate-y-0.5 transition-all duration-300 ${a.span ? "md:col-span-2" : ""}`}>
                                    <div className="flex items-start justify-between gap-3 mb-3">
                                        <div className="flex items-center gap-2">
                                            <Trophy className={`w-5 h-5 ${a.highlight ? "text-accent" : "text-ink-faint"}`} />
                                            <span className={`text-xs font-semibold px-2 py-1 rounded-md border ${a.highlight ? "bg-accent/10 text-accent border-accent/30" : "bg-surface text-ink-muted border-line"}`}>
                                                {a.place}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-1.5 text-xs text-ink-faint">
                                            <Calendar className="w-3.5 h-3.5" />
                                            <span>{a.date}</span>
                                        </div>
                                    </div>
                                    <h4 className="headline-4 mb-1">{a.title}</h4>
                                    <p className="text-sm text-ink-muted">{a.sub}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
