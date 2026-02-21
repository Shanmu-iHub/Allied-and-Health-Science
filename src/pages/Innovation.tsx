import PageHeader from '../components/PageHeader'

export default function Innovation() {
    return (
        <>
            <PageHeader
                title="SNS Innovation Hub"
                subtitle="Redesigning Health Science Education through Design Thinking and Clinical Innovation"
                image="/static/images/pillar_industry.jpg"
                badge="Innovation Hub"
            />

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-4xl font-bold mb-6">About SNS iHub</h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                SNS iHub is our dedicated space for fostering innovation in healthcare. We combine medical expertise with our <strong>Design Thinking framework</strong> to solve complex clinical problems.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                From developing assistive medical devices to optimizing hospital workflows, our students use the iHub to turn empathetic insights into tangible healthcare solutions.
                            </p>
                        </div>
                        <div className="bg-purple-50 rounded-2xl p-8">
                            <h3 className="text-2xl font-bold mb-6">RADICAL Technologies</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start"><i className="fas fa-robot text-orange-600 mr-3 mt-1"></i><span>Robotics & Automation</span></li>
                                <li className="flex items-start"><i className="fas fa-vr-cardboard text-orange-600 mr-3 mt-1"></i><span>AR/VR Technology</span></li>
                                <li className="flex items-start"><i className="fas fa-brain text-orange-600 mr-3 mt-1"></i><span>Data Science/AI/ML</span></li>
                                <li className="flex items-start"><i className="fas fa-network-wired text-orange-600 mr-3 mt-1"></i><span>IoT/Cybersecurity</span></li>
                                <li className="flex items-start"><i className="fas fa-wifi text-orange-600 mr-3 mt-1"></i><span>Communication Tech</span></li>
                                <li className="flex items-start"><i className="fas fa-cube text-orange-600 mr-3 mt-1"></i><span>Additive Manufacturing</span></li>
                                <li className="flex items-start"><i className="fas fa-code text-orange-600 mr-3 mt-1"></i><span>Low Code/No Code</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* SHAAARP Industry Verticals */}
            <section className="py-16 bg-gradient-to-br from-orange-50 to-red-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4">SHAAARP Industry Verticals</h2>
                        <p className="text-xl text-gray-600">Focus areas for innovation and startup development</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
                        {[
                            { icon: 'fa-city', title: 'Smart City & Manufacturing', desc: 'IoT, automation, smart infrastructure', color: 'bg-blue-100' },
                            { icon: 'fa-heartbeat', title: 'Healthcare', desc: 'AI diagnostics, telemedicine', color: 'bg-red-100' },
                            { icon: 'fa-seedling', title: 'Agriculture & Food', desc: 'Precision farming, food tech', color: 'bg-green-100' },
                            { icon: 'fa-shopping-cart', title: 'Retail FMCG', desc: 'E-commerce, consumer goods', color: 'bg-orange-100' },
                            { icon: 'fa-car', title: 'Automotive & Aerospace', desc: 'Autonomous vehicles, aerospace', color: 'bg-purple-100' }
                        ].map((item) => (
                            <div key={item.title} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition duration-300">
                                <div className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                                    <i className={`fas ${item.icon} text-3xl text-orange-600`}></i>
                                </div>
                                <h3 className="font-bold text-lg text-center mb-3">{item.title}</h3>
                                <p className="text-sm text-gray-600 text-center">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-center mb-12">Innovation Labs</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-xl p-8">
                            <h3 className="text-2xl font-bold mb-4">I-TECH Labs</h3>
                            <p className="text-gray-700">Inter-disciplinary research space for AR/VR, AI, IoT, Robotics, and 3D printing innovations.</p>
                        </div>
                        <div className="bg-white rounded-xl p-8">
                            <h3 className="text-2xl font-bold mb-4">BOT Lab</h3>
                            <p className="text-gray-700">Coimbatore's first Center-of-Excellence in Robotics Process Automation with Automation Anywhere.</p>
                        </div>
                        <div className="bg-white rounded-xl p-8">
                            <h3 className="text-2xl font-bold mb-4">Piston Factory</h3>
                            <p className="text-gray-700">Real-time project workspace and vehicle fabrication for national competitions.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
