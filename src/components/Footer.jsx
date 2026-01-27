import { ButtonPrimary } from "./Button";

const Footer = () => {

    const sitemap = [
        {
            label: 'Home',
            href: '#home'
        },
        {
            label: 'About',
            href: '#about'
        },
        {
            label: 'Skills',
            href: '#skills'
        },
        {
            label: 'Projects',
            href: '#projects'
        },
        {
            label: 'Contact me',
            href: '#contact'
        }
    ];

    const socials = [
        {
            label: 'GitHub',
            href: 'https://github.com/marioapn3'
        },
        {
            label: 'LinkedIn',
            href: 'https://www.linkedin.com/in/mario-aprilnino/'
        },

        {
            label: 'Instagram',
            href: 'https://www.instagram.com/mario.apn/'
        },
        {
            label: 'Whatsapp',
            href: 'https://wa.me/6281247430546'
        }
    ];

    return (
        <footer className="section border-t-4 border-black bg-white">
            <div className="container">

                <div className="lg:grid lg:grid-cols-2">

                    <div className="mb-10">
                        <h2 className="mb-8 headline-2 lg:max-w-[20ch]">
                            Let's work together and create something awesome!
                        </h2>

                        <ButtonPrimary
                            href={"mailto:mario.aprilnino27@gmail.com"}
                            label="Start a project"
                            icon="chevron_right"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4 lg:pl-20">

                        <div className="">
                            <p className="mb-2 font-bold text-black font-mono uppercase border-b-2 border-black pb-1">Sitemap</p>
                            <ul className="">
                                {sitemap.map((item, index) => (
                                    <li key={index}>
                                        <a href={item.href} className="block py-1 text-sm text-black hover:bg-teal-400 font-mono uppercase border-l-2 border-transparent hover:border-black pl-2">
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="">
                            <p className="mb-2 font-bold text-black font-mono uppercase border-b-2 border-black pb-1">Social</p>
                            <ul className="">
                                {socials.map((item, index) => (
                                    <li key={index}>
                                        <a href={item.href} target="_blank" className="block py-1 text-sm text-black hover:bg-teal-400 font-mono uppercase border-l-2 border-transparent hover:border-black pl-2">
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>

                <div className="flex items-center justify-between pt-10 mb-8 border-t-4 border-black mt-8">
                    <a href="" className="border-2 border-black p-1">
                        <img src="favicon.ico" alt="" className="border-2 border-black" width={40} height={40} />
                    </a>

                    <p className="text-sm text-black font-mono font-bold">
                        &copy; 2024 <span className="bg-teal-400 px-2 py-1 border-2 border-black">Mario Aprilnino Prasetyo</span>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer