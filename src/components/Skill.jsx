import SkillCard from "./SkillCard";

const Skill = () => {
    const skillItem = [
        {
            imgSrc: '/images/rmq.png',
            label: 'RabbitMQ',
            desc: 'Message Broker'
        },
        {
            imgSrc: '/images/nestjs.svg',
            label: 'NestJS',
            desc: 'Backend Tools'
        },
        {
            imgSrc: '/images/golang.svg',
            label: 'Golang',
            desc: 'Backend Tools'
        },
        {
            imgSrc: '/images/expressjs.svg',
            label: 'ExpressJS',
            desc: 'Backend Tools'
        },
        {
            imgSrc: '/images/fastapi.svg',
            label: 'FastAPI',
            desc: 'Backend Tools'
        },
        {
            imgSrc: '/images/laravel.svg',
            label: 'Laravel',
            desc: 'Fullstack Tools'
        },

        {
            imgSrc: '/images/react.svg',
            label: 'React',
            desc: 'Frontend Tools'
        },
        {
            imgSrc: '/images/nextjs.svg',
            label: 'NextJS',
            desc: 'Frontend Tools'
        },
        {
            imgSrc: '/images/vue.svg',
            label: 'Vue',
            desc: 'Framework Tools'
        },
        {
            imgSrc: '/images/tailwindcss.svg',
            label: 'TailwindCSS',
            desc: 'Styling Tools'
        },
        {
            imgSrc: '/images/langchain.svg',
            label: 'Langchain',
            desc: 'AI Tools'
        },
        {
            imgSrc: '/images/chroma.svg',
            label: 'ChromaDB',
            desc: 'Database'
        },
        {
            imgSrc: '/images/mongo.svg',
            label: 'MongoDB',
            desc: 'Database'
        },
       
      

        {
            imgSrc: '/images/postgresql.svg',
            label: 'PostgreSQL',
            desc: 'Database'
        },

        {
            imgSrc: '/images/firebase_.svg',
            label: 'Firebase',
            desc: 'Database'
        },
        {
            imgSrc: '/images/mysql.svg',
            label: 'MySQL',
            desc: 'Database'
        },


    ];

    return (
        <section className="section" id="skills">
            <div className="container">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-2 h-12 bg-teal-400 border-2 border-black"></div>
                    <h2 className="headline-2">
                        Essensial Tools & Technologies
                    </h2>
                </div>

                <p className="mt-3 mb-8 text-black max-w-[50ch] font-mono border-l-4 border-black pl-4 py-2">
                    Discover the tools and technologies that I use to build modern websites and applications.
                </p>

                <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(180px,_1fr))] ">
                    {
                        skillItem.map((item, index) => (
                            <SkillCard
                                key={index}
                                imgSrc={item.imgSrc}
                                label={item.label}
                                desc={item.desc}
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Skill