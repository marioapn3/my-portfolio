import { GraduationCap, Briefcase, Trophy, Award, Calendar, MapPin } from "lucide-react";

const About = () => {
    return (
        <section id="about" className="section">
            <div className="container">
                <div className="bg-white p-7 md:p-12 border-4 border-black">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-2 h-12 bg-teal-400 border-2 border-black"></div>
                        <h2 className="headline-2">
                            About Me
                        </h2>
                    </div>
                    <p className="mb-8 text-black md:text-xl md:max-w-[60ch] leading-relaxed font-mono border-l-4 border-black pl-4 py-2">
                        I'm a fullstack developer passionate about building modern web applications. I enjoy learning new technologies and tackling innovative challenges.
                    </p>

                    {/* Education Section */}
                    <div className="mb-8 md:mb-12">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-teal-400 border-2 border-black">
                                <GraduationCap className="w-5 h-5 text-black" />
                            </div>
                            <h3 className="headline-3">Education</h3>
                        </div>
                        <div className="space-y-4">
                            <div className="group relative bg-white p-5 border-4 border-black hover:bg-teal-400">
                                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                                    <div className="flex-1">
                                        <div className="flex items-start gap-3">
                                            <div className="w-4 h-4 bg-black mt-2 flex-shrink-0 border-2 border-black"></div>
                                            <div className="flex-1">
                                                <h4 className="headline-4 mb-2">Informatic Engineering</h4>
                                                <div className="flex items-center gap-2 text-sm text-black mb-2 font-mono font-bold">
                                                    <MapPin className="w-4 h-4" />
                                                    <span>Dian Nuswantoro University</span>
                                                </div>
                                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-black text-white text-sm font-mono border-2 border-black">
                                                    <Award className="w-4 h-4" />
                                                    <span>GPA: 3.96</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-black bg-white px-3 py-1.5 border-2 border-black font-mono font-bold">
                                        <Calendar className="w-4 h-4" />
                                        <span>Sep 2022 - Mar 2026</span>
                                    </div>
                                </div>
                            </div>
                            <div className="group relative bg-white p-5 border-4 border-black hover:bg-teal-400">
                                <div className="flex items-start gap-3">
                                    <div className="w-4 h-4 bg-black mt-2 flex-shrink-0 border-2 border-black"></div>
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
                            <div className="p-2 bg-teal-400 border-2 border-black">
                                <Briefcase className="w-5 h-5 text-black" />
                            </div>
                            <h3 className="headline-3">Professional Experience</h3>
                        </div>
                        <div className="relative border-l-4 border-black pl-4">
                            <div className="space-y-4">
                                <div className="group relative bg-white p-5 border-4 border-black hover:bg-teal-400">
                                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-start gap-3">
                                                <img
                                                    src="/images/logo-experience/youapp.jpg"
                                                    alt="YouApp"
                                                    width={56}
                                                    height={56}
                                                    className="w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0 border-2 border-black bg-white object-contain"
                                                />
                                                <div className="flex-1 min-w-0">
                                                    <h4 className="headline-4 mb-2">Lead Backend Developer</h4>
                                                    <p className="text-sm font-bold text-black mb-2 font-mono uppercase">YouApp PT. Macaroon Pte. Ltd.</p>
                                                    <p className="text-sm text-black leading-relaxed font-mono">Lead backend engineering for the YouApp platform: architecture, delivery, and technical direction across services.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-black bg-white px-3 py-1.5 border-2 border-black font-mono font-bold flex-shrink-0">
                                            <Calendar className="w-4 h-4" />
                                            <span>Mar 2026 - present</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="group relative bg-white p-5 border-4 border-black hover:bg-teal-400">
                                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-start gap-3">
                                                <img
                                                    src="/images/logo-experience/youapp.jpg"
                                                    alt="YouApp"
                                                    width={56}
                                                    height={56}
                                                    className="w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0 border-2 border-black bg-white object-contain"
                                                />
                                                <div className="flex-1 min-w-0">
                                                    <h4 className="headline-4 mb-2">Backend Developer</h4>
                                                    <p className="text-sm font-bold text-black mb-2 font-mono uppercase">YouApp PT. Macaroon Pte. Ltd.</p>
                                                    <p className="text-sm text-black leading-relaxed font-mono">Developed backend services for the YouApp platform and the fintech web3 product MyFusionPay.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-black bg-white px-3 py-1.5 border-2 border-black font-mono font-bold flex-shrink-0">
                                            <Calendar className="w-4 h-4" />
                                            <span>Sep 2025 - Feb 2026</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="group relative bg-white p-5 border-4 border-black hover:bg-teal-400">
                                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-start gap-3">
                                                <img
                                                    src="/images/logo-experience/monago.jpg"
                                                    alt="Monago"
                                                    width={56}
                                                    height={56}
                                                    className="w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0 border-2 border-black bg-white object-contain"
                                                />
                                                <div className="flex-1 min-w-0">
                                                    <h4 className="headline-4 mb-2">Backend Developer</h4>
                                                    <p className="text-sm font-bold text-black mb-2 font-mono uppercase">Monago</p>
                                                    <p className="text-sm text-black leading-relaxed font-mono">Built decision support systems and chatbot integrations using FastAPI, NestJS, MongoDB, and LangChain.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-black bg-white px-3 py-1.5 border-2 border-black font-mono font-bold flex-shrink-0">
                                            <Calendar className="w-4 h-4" />
                                            <span>Nov 2024 - Jul 2025</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="group relative bg-white p-5 border-4 border-black hover:bg-teal-400">
                                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-start gap-3">
                                                <img
                                                    src="/images/logo-experience/bengkel-koding.jpg"
                                                    alt="Bengkel Koding"
                                                    width={56}
                                                    height={56}
                                                    className="w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0 border-2 border-black bg-white object-contain"
                                                />
                                                <div className="flex-1 min-w-0">
                                                    <h4 className="headline-4 mb-2">Backend Developer</h4>
                                                    <p className="text-sm font-bold text-black mb-2 font-mono uppercase">Bengkel Koding</p>
                                                    <p className="text-sm text-black leading-relaxed font-mono">Developed REST APIs, optimized databases, and deployed machine learning models.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-black bg-white px-3 py-1.5 border-2 border-black font-mono font-bold flex-shrink-0">
                                            <Calendar className="w-4 h-4" />
                                            <span>Aug 2024 - present</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="group relative bg-white p-5 border-4 border-black hover:bg-teal-400">
                                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-start gap-3">
                                                <div className="w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0" aria-hidden />
                                                <div className="flex-1 min-w-0">
                                                    <h4 className="headline-4 mb-2">Full Stack Developer</h4>
                                                    <p className="text-sm font-bold text-black mb-2 font-mono uppercase">Freelance</p>
                                                    <p className="text-sm text-black leading-relaxed font-mono">Developed web and mobile apps tailored to client needs.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-black bg-white px-3 py-1.5 border-2 border-black font-mono font-bold flex-shrink-0">
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
                            <div className="p-2 bg-teal-400 border-2 border-black">
                                <Trophy className="w-5 h-5 text-black" />
                            </div>
                            <h3 className="headline-3">Achievements</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="group relative bg-white p-5 border-4 border-black hover:bg-teal-400">
                                <div className="flex items-start justify-between gap-3 mb-3">
                                    <div className="flex items-center gap-2">
                                        <Trophy className="w-5 h-5 text-black" />
                                        <span className="text-xs font-bold text-black bg-teal-400 px-2 py-1 border-2 border-black font-mono uppercase">1st Place</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 text-xs text-black font-mono font-bold">
                                        <Calendar className="w-3.5 h-3.5" />
                                        <span>Apr 2025</span>
                                    </div>
                                </div>
                                <h4 className="headline-4 mb-1">Hi-Technology Competition</h4>
                                <p className="text-sm text-black font-mono">Software Competition 2025</p>
                            </div>
                            <div className="group relative bg-white p-5 border-4 border-black hover:bg-teal-400">
                                <div className="flex items-start justify-between gap-3 mb-3">
                                    <div className="flex items-center gap-2">
                                        <Trophy className="w-5 h-5 text-black" />
                                        <span className="text-xs font-bold text-black bg-teal-400 px-2 py-1 border-2 border-black font-mono uppercase">1st Place</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 text-xs text-black font-mono font-bold">
                                        <Calendar className="w-3.5 h-3.5" />
                                        <span>Jan 2025</span>
                                    </div>
                                </div>
                                <h4 className="headline-4 mb-1">ITC 2025</h4>
                                <p className="text-sm text-black font-mono">Website Development Competition</p>
                            </div>
                            <div className="group relative bg-white p-5 border-4 border-black hover:bg-teal-400">
                                <div className="flex items-start justify-between gap-3 mb-3">
                                    <div className="flex items-center gap-2">
                                        <Trophy className="w-5 h-5 text-black" />
                                        <span className="text-xs font-bold text-black bg-white px-2 py-1 border-2 border-black font-mono uppercase">2nd Place</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 text-xs text-black font-mono font-bold">
                                        <Calendar className="w-3.5 h-3.5" />
                                        <span>Apr 2024</span>
                                    </div>
                                </div>
                                <h4 className="headline-4 mb-1">Hi-Technology Competition</h4>
                                <p className="text-sm text-black font-mono">Software Competition 2024</p>
                            </div>
                            <div className="group relative bg-white p-5 border-4 border-black hover:bg-teal-400">
                                <div className="flex items-start justify-between gap-3 mb-3">
                                    <div className="flex items-center gap-2">
                                        <Trophy className="w-5 h-5 text-black" />
                                        <span className="text-xs font-bold text-black bg-white px-2 py-1 border-2 border-black font-mono uppercase">2nd Place</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 text-xs text-black font-mono font-bold">
                                        <Calendar className="w-3.5 h-3.5" />
                                        <span>Jan 2024</span>
                                    </div>
                                </div>
                                <h4 className="headline-4 mb-1">ITC 2024</h4>
                                <p className="text-sm text-black font-mono">Website Development Competition</p>
                            </div>
                            <div className="group relative bg-white p-5 border-4 border-black hover:bg-teal-400 md:col-span-2">
                                <div className="flex items-start justify-between gap-3 mb-3">
                                    <div className="flex items-center gap-2">
                                        <Trophy className="w-5 h-5 text-black" />
                                        <span className="text-xs font-bold text-black bg-white px-2 py-1 border-2 border-black font-mono uppercase">3rd Place</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 text-xs text-black font-mono font-bold">
                                        <Calendar className="w-3.5 h-3.5" />
                                        <span>Oct 2023</span>
                                    </div>
                                </div>
                                <h4 className="headline-4 mb-1">Programming Competition</h4>
                                <p className="text-sm text-black font-mono">Built Accounting Journal app using Laravel + Vue</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
