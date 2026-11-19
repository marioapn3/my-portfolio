import { Github, Linkedin, Mail } from "lucide-react"
import { ButtonPrimary } from "./Button"


const Hero = () => {
    return (
        <section id="home" className="pt-32 lg:pt-44 pb-10">
            <div className="container items-center lg:grid lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">

                <div>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="flex items-center gap-1.5 text-accent text-sm font-medium tracking-wide border border-accent/30 bg-accent/10 px-3.5 py-1.5 rounded-full">
                            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                            Available for work
                        </div>
                    </div>

                    <h1 className="headline-1 max-w-[14ch] mb-3">
                        Mario Aprilnino
                    </h1>
                    <h2 className="text-3xl lg:text-5xl font-bold tracking-tight max-w-[20ch] mb-6">
                        <span className="text-gradient">Backend Developer</span>
                    </h2>
                    <p className="text-ink-muted text-base lg:text-lg leading-relaxed max-w-[48ch] mb-9 border-l-2 border-accent/50 pl-4">
                        I&apos;m passionate about building software that solves real-world problems — from scalable backend services to full-stack applications.
                    </p>

                    <div className="flex items-center gap-3 flex-wrap">
                        <ButtonPrimary label="Download CV" icon="download" href={"https://drive.google.com/drive/folders/1CKmUia2MfHLnG029Ke1ONyIT4W4aJ6Z3?usp=sharing"} target="_blank" />

                        <a className="btn btn-outline" href="https://www.linkedin.com/in/mario-aprilnino/" target="_blank" rel="noreferrer">
                            <Linkedin size={20} />
                        </a>
                        <a className="btn btn-outline" href="https://github.com/marioapn3" target="_blank" rel="noreferrer">
                            <Github size={20} />
                        </a>
                        <a className="btn btn-outline" href="mailto:mario.aprilnino27@gmail.com" target="_blank" rel="noreferrer">
                            <Mail size={20} />
                        </a>
                    </div>
                </div>

                <div className="hidden lg:block relative">
                    {/* glow ring */}
                    <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-accent/20 via-sky-400/10 to-transparent blur-2xl"></div>
                    <figure className="relative w-full max-w-[440px] ml-auto rounded-[1.75rem] border border-white/10 overflow-hidden p-2 bg-white/[0.04] backdrop-blur-xl">
                        <img src="/images/mario.webp"
                            width={656}
                            height={800}
                            alt="Mario Aprilnino"
                            className="w-full rounded-[1.4rem]"
                            loading="lazy"
                        />
                    </figure>
                </div>

            </div>
        </section>
    )
}

export default Hero
