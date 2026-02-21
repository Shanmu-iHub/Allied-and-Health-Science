import PageHeader from '../components/PageHeader'

export default function Gallery() {
    return (
        <>
            <PageHeader
                title="Campus Gallery"
                subtitle="Explore our world-class infrastructure and vibrant campus life"
                image="/static/images/hero5.png"
                badge="Gallery"
            />

            {/* Life at SNSCAHS */}
            <section className="py-16 bg-gradient-to-br from-yellow-50 to-orange-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4">Life @ SNSCAHS</h2>
                        <p className="text-xl text-gray-600">Where clinical excellence meets academic brilliance!</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: 'Graduation Ceremony', img: '/static/images/pre-primary.png', icon: 'fa-graduation-cap', desc: 'Celebrating the success of our future healthcare leaders' },
                            { title: 'Collaborative Work', img: '/static/images/SNS Academy Web/Colla Work.png', icon: 'fa-users', desc: 'Students working together on innovative projects' },
                            { title: 'Nurturing Excellence', img: '/static/images/SNS Academy Web/Happy Envirn.png', icon: 'fa-smile-beam', desc: 'Fostering a professional and supportive atmosphere' }
                        ].map((item) => (
                            <div key={item.title} className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300 group">
                                <div className="h-64 relative overflow-hidden">
                                    <img src={item.img} alt={item.title} className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                                    <div className="absolute bottom-4 left-4 text-white">
                                        <i className={`fas ${item.icon} text-3xl mb-2`}></i>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                                    <p className="text-gray-600">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-center mb-4">College Campus</h2>
                    <p className="text-center text-xl text-gray-600 mb-12">Advanced campus facilities with specialized clinical labs</p>

                    <div className="grid md:grid-cols-4 gap-6">
                        {[
                            { icon: 'fa-hospital-user', color: 'text-indigo-600', title: 'Clinical Reception' },
                            { icon: 'fa-microscope', color: 'text-blue-600', title: 'Advanced Bio-Labs' },
                            { icon: 'fa-stethoscope', color: 'text-pink-600', title: 'Diagnostic Wing' },
                            { icon: 'fa-search-plus', color: 'text-purple-600', title: 'Research Center' }
                        ].map((item) => (
                            <div key={item.title} className="bg-white rounded-xl p-6 shadow-md text-center border border-gray-100 hover:shadow-lg transition">
                                <i className={`fas ${item.icon} text-4xl ${item.color} mb-3`}></i>
                                <h4 className="font-bold">{item.title}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
