import PageHeader from '../components/PageHeader'

export default function Facilities() {
    return (
        <>
            <PageHeader
                title="World-Class Infrastructure"
                subtitle="Professional-grade facilities designed to foster clinical expertise, innovation, and holistic wellness"
                image="/static/images/hero5.png"
                badge="Facilities"
            />

            {/* SPINE Center */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-orange-600 font-bold tracking-wider uppercase text-sm mb-2 block">Student Life</span>
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">SNS SPINE Activity Center</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            A 5-level premier activity center for sports, wellness, and recreation, ensuring a balanced student life.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: 'Swimming Pool', img: '/static/images/SNS Academy Web/Swim.png', desc: 'Professional-grade swimming pool with trained coaches. Swimming regularly lowers stress and builds physical endurance.' },
                            { title: 'Indoor Cricket', img: '/static/images/SNS Academy Web/Indoor.png', desc: 'All-weather cricket pitch with bowling machines and nets. Professional coaching available for all skill levels.' },
                            { title: 'Fitness Center', img: '/static/images/SNS Academy Web/Fitness.png', desc: 'Fully-equipped gym with treadmills, strength machines, weights, and boxing kits.' },
                            { title: 'Music Studio', img: '/static/images/SNS Academy Web/Music.png', desc: 'Professional music studio with recording equipment and instruments.' },
                            { title: 'Dance Studio', img: '/static/images/SNS Academy Web/Dance.png', desc: 'Dedicated space for various dance styles—from classical to contemporary.' },
                            { title: 'Art Studio', img: '/static/images/SNS Academy Web/Art Studio.png', desc: 'Creative space for drawing, painting, and sculpting.' }
                        ].map((item) => (
                            <div key={item.title} className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500">
                                <div className="h-64 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition z-10"></div>
                                    <img src={item.img} alt={item.title} className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700" />
                                </div>
                                <div className="p-8 bg-white relative z-20">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                                    <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Academic Facilities */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">Academic Infrastructure</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">Modern learning spaces designed to foster innovation and collaboration.</p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { icon: 'fa-chalkboard-teacher', color: 'text-purple-600', bg: 'bg-purple-100', title: 'Smart Classrooms', desc: 'Interactive boards' },
                            { icon: 'fa-flask', color: 'text-blue-600', bg: 'bg-blue-100', title: 'Science Labs', desc: 'Physics, Chem & Bio' },
                            { icon: 'fa-desktop', color: 'text-green-600', bg: 'bg-green-100', title: 'Computer Labs', desc: 'Modern computing' },
                            { icon: 'fa-book', color: 'text-orange-600', bg: 'bg-orange-100', title: 'Library', desc: 'Rich collection' }
                        ].map((item) => (
                            <div key={item.title} className="bg-white rounded-xl p-8 text-center shadow-lg hover:-translate-y-2 transition duration-300">
                                <div className={`w-16 h-16 ${item.bg} rounded-full flex items-center justify-center mx-auto mb-6`}>
                                    <i className={`fas ${item.icon} text-3xl ${item.color}`}></i>
                                </div>
                                <h3 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h3>
                                <p className="text-sm text-gray-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
