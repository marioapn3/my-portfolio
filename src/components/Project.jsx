import ProjectCard from './ProjectCard';

const projects = [
    {
        title: "MyFusionPay",
        href: "https://play.google.com/store/apps/details?id=com.myfusionpay.app",
        dates: "Oktober - December 2025",
        active: true,
        description: "FusionPay is a non-custodial Web3 connector that simplifies cross-border payments, smart wallet access, and real-world crypto utility with no accounts or complexity.",
        technologies: [
            "Golang",
            "PostgreSQL",
            "Redis",
            "OneSignal",
            "Web3 Integrations: Simplex, Superex, Particle Network",
            "Payment Integrations: Aleta Visa Card",
            "Blockchain APIs: Etherscan, Alchemy"
        ],
        image: "/images/portofolio/myfusionpay.png",
        website: "https://play.google.com/store/apps/details?id=com.myfusionpay.app",
        role: "Backend Web3 Developer",
        modalImages : [
            "/images/detail-projects/fusion/fusion-1.jpg",
            "/images/detail-projects/fusion/fusion-2.jpg",
            "/images/detail-projects/fusion/fusion-3.jpg",
            "/images/detail-projects/fusion/fusion-4.jpg",
        ]
    },
    {
        title: "YouApp: Trips & Experiences",
        href: "https://play.google.com/store/apps/details?id=com.youapp.you_app&hl=en&gl=US",
        dates: "September - November 2025",
        active: true,
        description: "YouApp is a trusted experiences platform that lets you discover, book, and join real local activities hosted by verified and certified locals for meaningful, authentic travel and lifestyle experiences.",
        technologies: [
            "NestJS",
            "MongoDB",
            "Socket.IO",
            "RabbitMQ",
            "Redis",
            "Firebase",
            "Stripe",
            "Betterpay",
            "Google Maps API"
        ],
        image: "/images/portofolio/youapp.png",
        website: "https://play.google.com/store/apps/details?id=com.youapp.you_app&hl=en&gl=US",
        role: "Backend Developer",
        modalImages : [
            "/images/detail-projects/youapp/youapp-1.png",
            "/images/detail-projects/youapp/youapp-2.png",
            "/images/detail-projects/youapp/youapp-3.png",
            "/images/detail-projects/youapp/youapp-4.png",
        ]
    },
    {
        title: "Maharbote Social",
        href: "https://play.google.com/store/apps/details?id=com.maharbote.ai&hl=en&pli=1",
        dates: "September - November 2025",
        active: true,
        description: "A global social media app with real-time chat that combines authentic Myanmar Maharbote and modern AI to connect Myanmar communities worldwide through meaningful friendships, communities, and real-life events.",
        technologies: [
            "NestJS",
            "PostgreSQL",
            "Socket.IO",
            "Firebase",
            "Google Maps API"
        ],
        image: "/images/portofolio/maharbote2.png",
        website: "https://play.google.com/store/apps/details?id=com.maharbote.ai&hl=en&pli=1",
        role: "Backend Developer"
    },
    {
        title: "BeSTI Chatbot",
        href: "https://sti.dinus.id",
        dates: "April 2025",
        active: true,
        description: "BeSTI Chatbot is a chatbot that can answer questions about the STI (Sarjana Teknik Informatika) program at Udinus.",
        technologies: [
            "FastApi",
            "MongoDB",
            "Gemini",
            "Langchain",
            "ChromaDB",
        ],
        image: "/images/portofolio/besti.webp",
        website: "https://sti.dinus.id",
        role: "Backend Developer"
    },
    {
        title: "STI (Sarjana Teknik Informatika) Apps Udinus",
        href: "https://sti.dinus.id",
        dates: "Maret 2025",
        active: true,
        description: "STI Apps is a web application for the STI (Sarjana Teknik Informatika) program at Udinus.",
        technologies: [
            "Laravel",
            "NextJS",
            "TailwindCSS",
            "MySQL",
        ],
        image: "/images/portofolio/sti.webp",
        website: "https://sti.dinus.id",
        role: "Backend Developer"
    },
    {
        title: "Reservasi Udinus",
        href: "https://reservasi.bengkelkoding.dinus.id",
        dates: "April 2025",
        active: true,
        description: "Reservasi Udinus is a web application for the Udinus (Dian Nuswantoro University) program at Udinus.",
        technologies: [
            "Laravel",
            "NextJS",
            "TailwindCSS",
            "PostgreSQL",
        ],
        image: "/images/portofolio/reservasi.webp",
        website: "https://reservasi.bengkelkoding.dinus.id",
        role: "DevOps"
    },
    {
        title: "Konteks",
        href: "https://konteks.biz",
        dates: "Maret 2025",
        active: true,
        description: "Konteks B2B supply chain web application with ai integration",
        technologies: [
            "NestJS",
            "MongoDB",
            "OpenAI",
            "Langchain",
            "ChromaDB",
        ],
        image: "/images/portofolio/konteks.webp",
        website: "https://konteks.biz",
        role: "Backend Developer"
    },
    {
        title: "Monago",
        href: "https://monago.io",
        dates: "November 2024",
        active: true,
        description: "Monago accelerates your business with secure synthetic data and AI-powered predictions, helping you gain insights and make smarter decisions.",
        technologies: [
            "FastApi",
            "MongoDB",
            "OpenAI",
            "Langchain",
            "Deepseek-chat",
            "Redis Stack",
            "ChromaDB",
        ],
        image: "/images/portofolio/monago.webp",
        website: "https://monago.io",
        role: "Backend Developer"
    },

    {
        title: "BSP Tracking",
        href: "https://bsptracking.my.id/",
        dates: "Jan - Feb 2024",
        active: true,
        description: "BSP Tracking is a Vehicle Delivery Management System developed by PT BSP Semarang. It includes a web-based application for monitoring vehicle deliveries and a mobile application used by drivers to submit delivery reports.",
        technologies: [
            "Laravel",
            "Vue",
            "InertiaJS",
            "TailwindCSS",
            "Firebase",
            "MySQL",
        ],
        image: "/images/portofolio/bsp.svg",
        website: "https://bsptracking.my.id/",
        role: "Fullstack Developer"
    },

    {
        title: "Senikita",
        href: "https://senikita.my.id",
        dates: "Jan - Feb 2024",
        active: true,
        description: "Senikita is a marketplace that provides a platform for Indonesian regional arts and culture",
        technologies: [
            "Laravel",
            "React",
            "TailwindCSS",
            "MySQL",
            "TensorflowJS",
            "Xendit",
        ],
        image: "/images/portofolio/senikita.my.id.svg ",
        website: "https://senikita.my.id",
        role: "Backend Developer"
    },



    {
        title: "StudyNest",
        href: "https://studynest.dnccudinus.org/",
        dates: "Jan - Feb 2024",
        active: true,
        description: "StudyNest is a learning companion platform designed to enhance the learning experience by utilizing proven effective techniques.",
        technologies: [
            "Laravel",
            "Alpine",
            "TailwindCSS",
            "MySQL",
        ],
        image: "/images/portofolio/studynest.svg",
        website: "https://studynest.dnccudinus.org/",
        role: "Backend Developer"
    },

    {
        title: "Jurnalin",
        href: "https://jurnalin.dnccudinus.org",
        dates: "Jan - Feb 2024",
        active: true,
        description: "Jurnalin is an advanced accounting app that simplifies managing financial records for companies. Jurnalin makes it easy to record, track, and analyze all ledger transactions. From daily entries to generating reports and ensuring compliance.",
        technologies: [
            "Laravel",
            "Vue",
            "InertiaJS",
            "TailwindCSS",
            "MySQL",
        ],
        image: "/images/portofolio/jurnalin1.svg  ",
        website: "https://jurnalin.dnccudinus.org",
        role: "Fullstack Developer"
    },
    {
        title: "Sirekam Poltekes Yogyakarta",
        href: "https://sirekampolkesyogya.com/",
        dates: "Jan - Feb 2024",
        active: true,
        description: "Sirekam is an application used for managing student activity credit units at Poltekkes Yogyakarta. It facilitates the tracking and management of student extracurricular activities for academic credit purposes.",
        technologies: [
            "Laravel",
            "TailwindCSS",
            "MySQL",
        ],
        image: "/images/portofolio/sirekam.svg",
        website: "https://sirekampolkesyogya.com/",
        role: "Backend Developer"
    },

    {
        title: "Dinacom DNCC",
        href: "https://dinacom.dnccudinus.org/",
        dates: "Jan - Feb 2024",
        active: true,
        description: "This website is specifically designed to facilitate participant registration and manage documentation related to the DINACOM competition organized by DNCC.",
        technologies: [
            "Laravel",
            "Alpine",
            "Flowbite",
            "TailwindCSS",
            "MySQL",
        ],
        image: "/images/portofolio/dinacom.svg",
        website: "https://dinacom.dnccudinus.org/",
        role: "Fullstack Developer"
    },
    {
        title: "Devlearn",
        href: "https://learn.dnccudinus.org/",
        dates: "Jan - Feb 2024",
        active: true,
        description: "Devlearn is a learning platform for students to create and sell programming-related video content, offering a space to share knowledge and earn from their expertise.",
        technologies: [
            "Laravel",
            "TailwindCSS",
            "MySQL",
        ],
        image: "/images/portofolio/devlearn.svg",
        website: "https://learn.dnccudinus.org/",
        role: "Fullstack Developer"
    },
    {
        title: "Getasan Apps",
        href: "https://github.com/marioapn3/AsetGetasan",
        dates: "Jan - Feb 2024",
        active: true,
        description: "Getasan Apps is an application used by the Getasan District in Semarang Regency to receive reports from residents.",
        technologies: [
            "Flutter",
            "BLOC",
            "Golang",
            "MySQL",
        ],
        image: "/images/portofolio/getasan.svg",
        github: "https://github.com/marioapn3/AsetGetasan",
        role: "Fullstack Developer"
    },
    {
        title: "Kompas Clone",
        href: "https://github.com/marioapn3/slicing_ui_kompas_clone",
        dates: "Jan - Feb 2024",
        active: true,
        description: "Flutter Slicing UI Mobile Application Kompas News Clone. This project is for learning purposes only.",
        technologies: [
            "Flutter",
        ],
        image: "/images/portofolio/ui_compas.svg  ",
        github: "https://github.com/marioapn3/slicing_ui_kompas_clone",
        role: "Mobile Developer"
    },
];

const Project = () => {
    return (
        <section className='section' id='projects'>
            <div className="container">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-2 h-12 bg-teal-400 border-2 border-black"></div>
                    <h2 className="headline-2">
                        All Projects
                    </h2>
                </div>

                <p className="mt-3 mb-8 text-black max-w-[70ch] font-mono border-l-4 border-black pl-4 py-2">
                    Here are all my projects that I have worked on. I have worked on various projects ranging from web development, mobile development, and machine learning
                </p>

                <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.title}
                            href={project.href}
                            title={project.title}
                            description={project.description}
                            dates={project.dates}
                            tags={project.technologies}
                            image={project.image}
                            video={project.video}
                            links={project.links}
                            github={project.github}
                            website={project.website}
                            role={project.role}
                            modalImages={project.modalImages}
                        />
                    ))}
                </div>
            </div>

        </section>
    );
};

export default Project;
