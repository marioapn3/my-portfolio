import { Github, Linkedin, Mail } from "lucide-react"
import { ButtonPrimary } from "./Button"


const Hero = () => {
    return (
        <section id="home" className="pt-28 lg:pt-36">

            <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">

                <div>
                    <div className="flex items-center gap-3">


                        <div className="flex items-center gap-1.5 text-zinc-400 text-md tracking-wide">
                            Hello everyone👋🏻, my name is
                        </div>

                    </div>

                    <h2 className="headline-1 max-w-[20ch] sm:max-w-[25ch] lg:max-w-[15ch] ">
                        Mario Aprilnino Prasetyo</h2>
                    <h2 className="headline-3 max-w-[25ch] sm:max-w-[25ch] lg:max-w-[30ch] ">
                        I am a Backend Developer </h2>
                    <div className="flex items-center gap-1.5 text-zinc-400 text-md tracking-wide mt-2  mb-8 lg:mb-10">
                        I&apos;m passionate about building software that solves real-world problems.
                    </div>
                    <div className="flex items-center gap-2">
                        <ButtonPrimary label="Download CV" icon="download" href={"https://drive.google.com/drive/folders/1CKmUia2MfHLnG029Ke1ONyIT4W4aJ6Z3?usp=sharing"} target="_blank" />

                        <a className="btn btn-outline"
                            href="https://www.linkedin.com/in/mario-aprilnino/"
                            target="_blank"
                        >
                            <Linkedin size={22} className="text-zinc-50" />
                        </a>
                        <a className="btn btn-outline"
                            href="https://github.com/marioapn3"
                            target="_blank"
                        >
                            <Github size={22} className="text-zinc-50" />
                        </a>
                        <a className="btn btn-outline"
                            href="mailto:mario.aprilnino27@gmail.com"
                            target="_blank"
                        >
                            <Mail size={22} className="text-zinc-50" />
                        </a>


                    </div>

                </div>

                <div className="hidden lg:block">
                    <figure className="w-full max-w-[480px] ml-auto bg-gradient-to-t from-sky-400
                        via-25% via-sky-400/40 to-65% rounded-[60px] overflow-hidden
                    ">
                        <img src="/images/mario.webp"
                            width={656}
                            height={800}
                            alt="Mario Aprilnino"
                            className="w-full"
                            loading="lazy"
                        />
                    </figure>
                </div>

            </div>
        </section>
    )
}

export default Hero