import { Github, Linkedin, Mail } from "lucide-react"
import { ButtonPrimary } from "./Button"


const Hero = () => {
    return (
        <section id="home" className="pt-28 lg:pt-36">

            <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">

                <div>
                    <div className="flex items-center gap-3 mb-4">
                        <div className="flex items-center gap-1.5 text-black text-md font-bold uppercase tracking-wider border-2 border-black px-3 py-1 bg-teal-400">
                            Hello everyone👋🏻 my name is
                        </div>
                    </div>

                    <h2 className="headline-1 max-w-[20ch] sm:max-w-[25ch] lg:max-w-[15ch] mb-2">
                        Mario Aprilnino Prasetyo</h2>
                    <h2 className="headline-2 max-w-[25ch] sm:max-w-[25ch] lg:max-w-[30ch] mb-4">
                        Backend Developer </h2>
                    <div className="flex items-center gap-1.5 text-black text-md font-bold uppercase tracking-wide mt-2 mb-8 lg:mb-10 border-l-4 border-black pl-4">
                        I&apos;m passionate about building software that solves real-world problems.
                    </div>
                    <div className="flex items-center gap-2 flex-wrap">
                        <ButtonPrimary label="Download CV" icon="download" href={"https://drive.google.com/drive/folders/1CKmUia2MfHLnG029Ke1ONyIT4W4aJ6Z3?usp=sharing"} target="_blank" />

                        <a className="btn btn-outline"
                            href="https://www.linkedin.com/in/mario-aprilnino/"
                            target="_blank"
                        >
                            <Linkedin size={22} className="text-black" />
                        </a>
                        <a className="btn btn-outline"
                            href="https://github.com/marioapn3"
                            target="_blank"
                        >
                            <Github size={22} className="text-black" />
                        </a>
                        <a className="btn btn-outline"
                            href="mailto:mario.aprilnino27@gmail.com"
                            target="_blank"
                        >
                            <Mail size={22} className="text-black" />
                        </a>
                    </div>
                </div>

                <div className="hidden lg:block">
                    <figure className="w-full max-w-[480px] ml-auto border-4 border-black bg-white overflow-hidden">
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