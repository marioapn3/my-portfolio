import { ButtonPrimary } from "./Button";

const Footer = () => {

    const sitemap = [
        { label: 'Home', href: '#home' },
        { label: 'About', href: '#about' },
        { label: 'Skills', href: '#skills' },
        { label: 'Projects', href: '#projects' },
        { label: 'Contact me', href: '#contact' }
    ];

    const socials = [
        { label: 'GitHub', href: 'https://github.com/marioapn3' },
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mario-aprilnino/' },
        { label: 'Instagram', href: 'https://www.instagram.com/mario.apn/' },
        { label: 'Whatsapp', href: 'https://wa.me/6281247430546' }
    ];

    return (
        <footer className="section border-t border-line">
            <div className="container">

                <div className="lg:grid lg:grid-cols-2">

                    <div className="mb-10">
                        <h2 className="mb-8 headline-2 lg:max-w-[20ch]">
                            Let&apos;s work together and create something awesome!
                        </h2>

                        <ButtonPrimary
                            href={"mailto:mario.aprilnino27@gmail.com"}
                            label="Start a project"
                            icon="chevron_right"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4 lg:pl-20">

                        <div>
                            <p className="mb-3 text-sm font-semibold text-ink-faint border-b border-line pb-2">Sitemap</p>
                            <ul>
                                {sitemap.map((item, index) => (
                                    <li key={index}>
                                        <a href={item.href} className="block py-1.5 text-sm text-ink-muted hover:text-accent transition-colors">
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <p className="mb-3 text-sm font-semibold text-ink-faint border-b border-line pb-2">Social</p>
                            <ul>
                                {socials.map((item, index) => (
                                    <li key={index}>
                                        <a href={item.href} target="_blank" rel="noreferrer" className="block py-1.5 text-sm text-ink-muted hover:text-accent transition-colors">
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>

                <div className="flex items-center justify-between pt-10 mb-8 border-t border-line mt-8">
                    <a href="" className="border border-line-strong p-1 rounded-lg">
                        <img src="favicon.ico" alt="" className="rounded" width={40} height={40} />
                    </a>

                    <p className="text-sm text-ink-faint">
                        &copy; 2024 <span className="text-ink-muted">Mario Aprilnino Prasetyo</span>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
