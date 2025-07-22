const About = () => {
    return (
        <section id="about" className="section">
            <div className="container">
                <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12">
                    <h2 className="mb-2 headline-2">
                        About Me
                    </h2>
                    <p className="mb-4 text-zinc-400 md:mb-8 md:text-xl md:max-w-[60ch]">
                        I’m a fullstack developer passionate about building modern web applications. I enjoy learning new technologies and tackling innovative challenges.
                    </p>

                    <div className="mb-4 md:mb-8">
                        <h3 className="headline-3">Education</h3>
                        <div className="mt-3">
                            <div className="flex justify-between">
                                <h4 className="headline-4">Informatic Engineering - Dian Nuswantoro University</h4>
                                <p className="text-zinc-300">2022 - Now</p>
                            </div>
                            <p className="text-sm text-zinc-400">GPA: 3.96</p>
                        </div>
                        <div className="mt-3">
                            <h4 className="headline-4">Loyola Senior High School</h4>
                        </div>
                    </div>

                    <div className="mb-4 md:mb-8">
                        <h3 className="headline-3">Professional Experience</h3>
                        <div className="mt-3">
                            <div className="flex flex-col justify-between sm:flex-row sm:items-start">
                                <div className="flex-1">
                                    <h4 className="headline-4">Backend Developer - Monago (Intern)</h4>
                                    <p className="text-sm text-zinc-400">Built decision support systems and chatbot integrations using FastAPI, NestJS, MongoDB, and LangChain.</p>
                                </div>
                                <p className="text-zinc-300 text-sm sm:ml-4">Nov 2024 - Jul 2025</p>
                            </div>
                        </div>
                        <div className="mt-3">
                            <div className="flex flex-col justify-between sm:flex-row sm:items-start">
                                <div className="flex-1">
                                    <h4 className="headline-4">Backend Developer - Bengkel Koding (Intern)</h4>
                                    <p className="text-sm text-zinc-400">Developed REST APIs, optimized databases, and deployed machine learning models.</p>
                                </div>
                                <p className="text-zinc-300 text-sm sm:ml-4">Aug 2024 - present</p>
                            </div>
                        </div>
                        <div className="mt-3">
                            <div className="flex flex-col justify-between sm:flex-row sm:items-start">
                                <div className="flex-1">
                                    <h4 className="headline-4">Full Stack Developer - Freelance</h4>
                                    <p className="text-sm text-zinc-400">Developed web and mobile apps tailored to client needs.</p>
                                </div>
                                <p className="text-zinc-300 text-sm sm:ml-4">Aug 2023 - present</p>
                            </div>
                        </div>
                    </div>

                    <div className="mb-4 md:mb-8">
                        <h3 className="headline-3">Achievements</h3>
                        <div className="mt-3">
                            <div className="flex flex-col justify-between sm:flex-row">
                                <div>
                                    <h4 className="headline-4">1nd Place - Hi-Technology Competition</h4>
                                    <p className="text-sm text-zinc-400">Software Competition 2025</p>
                                </div>
                                <p className="text-zinc-300">Apr 2025</p>
                            </div>
                        </div>
                        <div className="mt-3">
                            <div className="flex flex-col justify-between sm:flex-row">
                                <div>
                                    <h4 className="headline-4">1nd Place - ITC 2025</h4>
                                    <p className="text-sm text-zinc-400">Website Development Competition</p>
                                </div>
                                <p className="text-zinc-300">Jan 2025</p>
                            </div>
                        </div>
                        <div className="mt-3">
                            <div className="flex flex-col justify-between sm:flex-row">
                                <div>
                                    <h4 className="headline-4">2nd Place - Hi-Technology Competition</h4>
                                    <p className="text-sm text-zinc-400">Software Competition 2024</p>
                                </div>
                                <p className="text-zinc-300">Apr 2024</p>
                            </div>
                        </div>
                        <div className="mt-3">
                            <div className="flex flex-col justify-between sm:flex-row">
                                <div>
                                    <h4 className="headline-4">2nd Place - ITC 2024</h4>
                                    <p className="text-sm text-zinc-400">Website Development Competition</p>
                                </div>
                                <p className="text-zinc-300">Jan 2024</p>
                            </div>
                        </div>
                        <div className="mt-3">
                            <div className="flex flex-col justify-between sm:flex-row">
                                <div>
                                    <h4 className="headline-4">3rd Place - Programming Competition</h4>
                                    <p className="text-sm text-zinc-400">Built Accounting Journal app using Laravel + Vue</p>
                                </div>
                                <p className="text-zinc-300">Oct 2023</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
