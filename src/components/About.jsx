import { GraduationCap, Briefcase, Trophy, Award, Calendar, MapPin } from "lucide-react";

const About = () => {
    return (
        <section id="about" className="section">
            <div className="container">
                <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 backdrop-blur-sm border border-zinc-700/50">
                    <div className="flex items-center gap-3 mb-4">
                        <h2 className="headline-2">
                            About Me
                        </h2>
                    </div>
                    <p className="mb-8 text-zinc-400 md:text-xl md:max-w-[60ch] leading-relaxed">
                        I'm a fullstack developer passionate about building modern web applications. I enjoy learning new technologies and tackling innovative challenges.
                    </p>

                    {/* Education Section */}
                    <div className="mb-8 md:mb-12">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-sky-400/10 rounded-lg">
                                <GraduationCap className="w-5 h-5 text-sky-400" />
                            </div>
                            <h3 className="headline-3">Education</h3>
                        </div>
                        <div className="space-y-4">
                            <div className="group relative bg-zinc-900/50 p-5 rounded-xl border border-zinc-700/30 hover:border-sky-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-sky-400/10">
                                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                                    <div className="flex-1">
                                        <div className="flex items-start gap-3">
                                            <div className="w-2 h-2 rounded-full bg-sky-400 mt-2 flex-shrink-0"></div>
                                            <div className="flex-1">
                                                <h4 className="headline-4 mb-1">Informatic Engineering</h4>
                                                <div className="flex items-center gap-2 text-sm text-zinc-400 mb-2">
                                                    <MapPin className="w-4 h-4" />
                                                    <span>Dian Nuswantoro University</span>
                                                </div>
                                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-400/10 rounded-lg text-sm text-sky-300">
                                                    <Award className="w-4 h-4" />
                                                    <span>GPA: 3.96</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-zinc-300 bg-zinc-800/50 px-3 py-1.5 rounded-lg">
                                        <Calendar className="w-4 h-4" />
                                        <span>2022 - Now</span>
                                    </div>
                                </div>
                            </div>
                            <div className="group relative bg-zinc-900/50 p-5 rounded-xl border border-zinc-700/30 hover:border-sky-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-sky-400/10">
                                <div className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-sky-400 mt-2 flex-shrink-0"></div>
                                    <div className="flex-1">
                                        <h4 className="headline-4">Loyola Senior High School</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Professional Experience Section */}
                    <div className="mb-8 md:mb-12">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-sky-400/10 rounded-lg">
                                <Briefcase className="w-5 h-5 text-sky-400" />
                            </div>
                            <h3 className="headline-3">Professional Experience</h3>
                        </div>
                        <div className="relative">
                            <div className="space-y-6">
                                <div className="group relative bg-zinc-900/50 p-5 rounded-xl border border-zinc-700/30 hover:border-sky-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-sky-400/10 ">
                                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                                        <div className="flex-1">
                                            <h4 className="headline-4 mb-2">Backend Developer</h4>
                                            <p className="text-sm font-medium text-sky-300 mb-2">YouApp PT. Macaroon Pte. Ltd.</p>
                                            <p className="text-sm text-zinc-400 leading-relaxed">Developed backend services for the YouApp platform and developed the fintech web3 product MyFusionPay.</p>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-zinc-300 bg-zinc-800/50 px-3 py-1.5 rounded-lg flex-shrink-0">
                                            <Calendar className="w-4 h-4" />
                                            <span>Sep 2025 - present</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="group relative bg-zinc-900/50 p-5 rounded-xl border border-zinc-700/30 hover:border-sky-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-sky-400/10">

                                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                                        <div className="flex-1">
                                            <h4 className="headline-4 mb-2">Backend Developer</h4>
                                            <p className="text-sm font-medium text-sky-300 mb-2">Monago</p>
                                            <p className="text-sm text-zinc-400 leading-relaxed">Built decision support systems and chatbot integrations using FastAPI, NestJS, MongoDB, and LangChain.</p>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-zinc-300 bg-zinc-800/50 px-3 py-1.5 rounded-lg flex-shrink-0">
                                            <Calendar className="w-4 h-4" />
                                            <span>Nov 2024 - Jul 2025</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="group relative bg-zinc-900/50 p-5 rounded-xl border border-zinc-700/30 hover:border-sky-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-sky-400/10 ">

                                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                                        <div className="flex-1">
                                            <h4 className="headline-4 mb-2">Backend Developer</h4>
                                            <p className="text-sm font-medium text-sky-300 mb-2">Bengkel Koding</p>
                                            <p className="text-sm text-zinc-400 leading-relaxed">Developed REST APIs, optimized databases, and deployed machine learning models.</p>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-zinc-300 bg-zinc-800/50 px-3 py-1.5 rounded-lg flex-shrink-0">
                                            <Calendar className="w-4 h-4" />
                                            <span>Aug 2024 - present</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="group relative bg-zinc-900/50 p-5 rounded-xl border border-zinc-700/30 hover:border-sky-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-sky-400/10 ">

                                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                                        <div className="flex-1">
                                            <h4 className="headline-4 mb-2">Full Stack Developer</h4>
                                            <p className="text-sm font-medium text-sky-300 mb-2">Freelance</p>
                                            <p className="text-sm text-zinc-400 leading-relaxed">Developed web and mobile apps tailored to client needs.</p>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-zinc-300 bg-zinc-800/50 px-3 py-1.5 rounded-lg flex-shrink-0">
                                            <Calendar className="w-4 h-4" />
                                            <span>Aug 2023 - present</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Achievements Section */}
                    <div className="mb-4">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-sky-400/10 rounded-lg">
                                <Trophy className="w-5 h-5 text-sky-400" />
                            </div>
                            <h3 className="headline-3">Achievements</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="group relative bg-gradient-to-br from-zinc-900/50 to-zinc-800/30 p-5 rounded-xl border border-sky-400/20 hover:border-sky-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-sky-400/20 hover:-translate-y-1">
                                <div className="flex items-start justify-between gap-3 mb-3">
                                    <div className="flex items-center gap-2">
                                        <Trophy className="w-5 h-5 text-yellow-400" />
                                        <span className="text-xs font-semibold text-yellow-400 bg-yellow-400/10 px-2 py-1 rounded">1st Place</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 text-xs text-zinc-400">
                                        <Calendar className="w-3.5 h-3.5" />
                                        <span>Apr 2025</span>
                                    </div>
                                </div>
                                <h4 className="headline-4 mb-1">Hi-Technology Competition</h4>
                                <p className="text-sm text-zinc-400">Software Competition 2025</p>
                            </div>
                            <div className="group relative bg-gradient-to-br from-zinc-900/50 to-zinc-800/30 p-5 rounded-xl border border-sky-400/20 hover:border-sky-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-sky-400/20 hover:-translate-y-1">
                                <div className="flex items-start justify-between gap-3 mb-3">
                                    <div className="flex items-center gap-2">
                                        <Trophy className="w-5 h-5 text-yellow-400" />
                                        <span className="text-xs font-semibold text-yellow-400 bg-yellow-400/10 px-2 py-1 rounded">1st Place</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 text-xs text-zinc-400">
                                        <Calendar className="w-3.5 h-3.5" />
                                        <span>Jan 2025</span>
                                    </div>
                                </div>
                                <h4 className="headline-4 mb-1">ITC 2025</h4>
                                <p className="text-sm text-zinc-400">Website Development Competition</p>
                            </div>
                            <div className="group relative bg-gradient-to-br from-zinc-900/50 to-zinc-800/30 p-5 rounded-xl border border-sky-400/20 hover:border-sky-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-sky-400/20 hover:-translate-y-1">
                                <div className="flex items-start justify-between gap-3 mb-3">
                                    <div className="flex items-center gap-2">
                                        <Trophy className="w-5 h-5 text-zinc-400" />
                                        <span className="text-xs font-semibold text-zinc-300 bg-zinc-700/50 px-2 py-1 rounded">2nd Place</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 text-xs text-zinc-400">
                                        <Calendar className="w-3.5 h-3.5" />
                                        <span>Apr 2024</span>
                                    </div>
                                </div>
                                <h4 className="headline-4 mb-1">Hi-Technology Competition</h4>
                                <p className="text-sm text-zinc-400">Software Competition 2024</p>
                            </div>
                            <div className="group relative bg-gradient-to-br from-zinc-900/50 to-zinc-800/30 p-5 rounded-xl border border-sky-400/20 hover:border-sky-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-sky-400/20 hover:-translate-y-1">
                                <div className="flex items-start justify-between gap-3 mb-3">
                                    <div className="flex items-center gap-2">
                                        <Trophy className="w-5 h-5 text-zinc-400" />
                                        <span className="text-xs font-semibold text-zinc-300 bg-zinc-700/50 px-2 py-1 rounded">2nd Place</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 text-xs text-zinc-400">
                                        <Calendar className="w-3.5 h-3.5" />
                                        <span>Jan 2024</span>
                                    </div>
                                </div>
                                <h4 className="headline-4 mb-1">ITC 2024</h4>
                                <p className="text-sm text-zinc-400">Website Development Competition</p>
                            </div>
                            <div className="group relative bg-gradient-to-br from-zinc-900/50 to-zinc-800/30 p-5 rounded-xl border border-sky-400/20 hover:border-sky-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-sky-400/20 hover:-translate-y-1 md:col-span-2">
                                <div className="flex items-start justify-between gap-3 mb-3">
                                    <div className="flex items-center gap-2">
                                        <Trophy className="w-5 h-5 text-amber-600" />
                                        <span className="text-xs font-semibold text-amber-400 bg-amber-400/10 px-2 py-1 rounded">3rd Place</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 text-xs text-zinc-400">
                                        <Calendar className="w-3.5 h-3.5" />
                                        <span>Oct 2023</span>
                                    </div>
                                </div>
                                <h4 className="headline-4 mb-1">Programming Competition</h4>
                                <p className="text-sm text-zinc-400">Built Accounting Journal app using Laravel + Vue</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
