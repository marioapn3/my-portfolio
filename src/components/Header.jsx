import { useState } from "react";
import Navbar from "./Navbar"


const Header = () => {
    const [navOpen, setNavOpen] = useState();

    return (
        <header className="fixed top-0 left-0 z-40 flex items-center w-full h-20 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
            <div className="flex items-center justify-between w-full px-4 mx-auto max-w-screen-2xl md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]">

                <h1>
                    <a href="/" className="logo">
                        <img src="/favicon.ico" width={40} height={40} alt="Mario Aprilnino">

                        </img>
                    </a>
                </h1>

                <div className="relative md:justify-self-center">
                    <button
                        className="menu-btn md:hidden"
                        onClick={() => setNavOpen(!navOpen)}
                    >
                        <span className="material-symbols-rounded">
                            {navOpen ? 'close' : 'menu'}
                        </span>
                    </button>
                    <Navbar navOpen={navOpen} />
                </div>
                <a href="#contact" className="btn btn-tertiary">Contact Me</a>


            </div>

        </header>

    )
}

export default Header