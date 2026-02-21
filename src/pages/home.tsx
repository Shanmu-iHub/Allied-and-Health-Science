import { Link } from 'react-router-dom'

const testimonials = [
    { name: 'Priya Suresh', role: 'B.Sc. Cardiac Technology, 2023', text: 'The clinical training at SNSCAHS is unparalleled. I secured a position at a leading cardiac center before even graduating!', img: 'https://randomuser.me/api/portraits/women/44.jpg' },
    { name: 'Arjun Rajan', role: 'B.Sc. Physician Assistant, 2023', text: 'The Design Thinking approach completely changed how I see patient care. I am now working at Apollo Hospitals.', img: 'https://randomuser.me/api/portraits/men/32.jpg' },
    { name: 'Meena Krishnan', role: 'B.Sc. Radiography, 2022', text: 'World-class labs and dedicated faculty. The best decision of my life was choosing SNSCAHS.', img: 'https://randomuser.me/api/portraits/women/68.jpg' },
]

const courses = [
    { href: '/courses/cardiac-technology', img: 'https://snscahs.org/wp-content/uploads/2023/11/B.Sc-Cardiac-Technology.jpg', title: 'Cardiac Technology', color: 'text-orange-600', desc: 'Specialized training in invasive and non-invasive cardiovascular procedures.' },
    { href: '/courses/physician-assistant', img: 'https://snscahs.org/wp-content/uploads/2023/11/B.Sc-Physicia-Assistant.jpg', title: 'Physician Assistant', color: 'text-blue-600', desc: 'Comprehensive clinical practice training to support physicians.' },
    { href: '/courses/radiography', img: 'https://snscahs.org/wp-content/uploads/2023/11/B.Sc-Radiography-and-Imaging-Technology.jpg', title: 'Radiography & Imaging', color: 'text-purple-600', desc: 'Advanced training in medical imaging technologies.' },
    { href: '/courses/operation-theatre', img: 'https://snscahs.org/wp-content/uploads/2023/11/B.Sc-Operation-Theater-and-Anaesthesia-Technology.jpg', title: 'OT & Anesthesia', color: 'text-green-600', desc: 'Specialized training in surgical assistance and anesthesia equipment.' },
]

export default function Home() {
    return (
        <>
            {/* Hero */}
            <section className="relative text-white py-24 lg:py-32 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src="/static/images/hero.png" alt="SNSCAHS Campus" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-6">
                                <i className="fas fa-trophy text-yellow-400 mr-2"></i>
                                <span className="text-sm font-semibold tracking-wide">First Indian Institute to Implement Design Thinking in Education</span>
                            </div>
                            <h1 className="text-5xl lg:text-7xl font-extrabold mb-6 leading-tight">
                                <Link to="/about" className="hover:text-orange-400 transition duration-300">
                                    SNS College of <br />
                                    <span className="text-orange-500 text-4xl lg:text-5xl uppercase block mt-2">Allied Health Science</span>
                                </Link>
                            </h1>
                            <div className="h-1 w-24 bg-orange-500 mb-8 rounded-full"></div>
                            <p className="text-xl lg:text-2xl mb-6 text-gray-200 leading-relaxed max-w-xl">
                                Affiliated to <strong className="text-white">The Tamil Nadu Dr.MGR Medical University, Chennai</strong>. Redesigning health science education through clinical excellence.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 mb-10">
                                <Link to="/admissions" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg transition transform hover:-translate-y-1 flex items-center justify-center">
                                    Apply for 2026-27 <i className="fas fa-arrow-right ml-2 text-sm"></i>
                                </Link>
                                <Link to="/about" className="bg-white/10 hover:bg-white/20 backdrop-blur border border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg transition flex items-center justify-center">
                                    <i className="fas fa-play mr-2 text-sm"></i> About Us
                                </Link>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4 text-xs text-gray-200">
                                <div className="inline-flex items-center"><i className="fas fa-circle-check text-green-400 mr-2"></i>Dr.MGR Medical University Affiliated</div>
                                <div className="inline-flex items-center"><i className="fas fa-hospital text-green-400 mr-2"></i>Clinical Hospital Connect</div>
                                <div className="inline-flex items-center"><i className="fas fa-calendar text-green-400 mr-2"></i>Innovative Learning</div>
                            </div>
                        </div>
                        <div className="hidden lg:block">
                            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-2xl">
                                <div className="grid grid-cols-2 gap-4">
                                    {[['10:1', 'Student Teacher Ratio'], ['60%', '10+ Years Experience'], ['25+', 'Extra Curricular'], ['100%', 'Placement Support']].map(([val, label]) => (
                                        <div key={label} className="bg-white/10 border border-white/10 rounded-xl p-5 text-center transition-all duration-300 hover:scale-105 hover:bg-white/20">
                                            <div className="text-4xl font-extrabold text-white">{val}</div>
                                            <div className="text-xs text-gray-200 mt-1">{label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Bar */}
            <section className="py-10 bg-white border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center text-center divide-x divide-gray-100">
                        {[['100%', 'Clinical Training'], ['5+', 'Specialized B.Sc. Programs'], ['MoUs', 'with Leading Hospitals'], ['SNS iHub', 'Tech & Innovation Lab']].map(([val, label]) => (
                            <div key={label} className="p-4">
                                <div className="text-4xl font-bold text-gray-900 mb-2">{val}</div>
                                <div className="text-sm text-gray-500 font-medium uppercase tracking-wide">{label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why SNS */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-orange-600">Why Aspirants Choose SNS Allied Health Science</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">We don't just teach subjects—we redesign professional minds through design thinking.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { icon: 'fa-lightbulb', color: 'bg-orange-100 text-orange-600', title: "India's 1st Design Thinking Institute", desc: "Redesigning health science education through Empathy. Our students learn to identify clinical problems and develop human-centric solutions." },
                            { icon: 'fa-users', color: 'bg-blue-100 text-blue-600', title: 'Clinical Hospital Connect', desc: 'Collaborative partnerships with premier multi-specialty hospitals for intensive hands-on clinical training.' },
                            { icon: 'fa-hand-holding-heart', color: 'bg-green-100 text-green-600', title: 'Expert Medical Faculty', desc: 'Learn from experienced healthcare professionals dedicated to nurturing the next generation of allied health specialists.' },
                            { icon: 'fa-rocket', color: 'bg-purple-100 text-purple-600', title: 'SNS Innovation Hub', desc: "Access to SNS iHub—India's Y-Combinator equivalent. Students work with AI, IoT, Robotics, AR/VR labs." },
                            { icon: 'fa-building', color: 'bg-pink-100 text-pink-600', title: 'World-Class SPINE Center', desc: '5-level activity center with swimming pool, indoor cricket, gym, music studio, dance studio, theater, and more.' },
                            { icon: 'fa-layer-group', color: 'bg-indigo-100 text-indigo-600', title: '5 Pillars Development', desc: 'Learning, Upskilling, Innovation, Networking, Character Building—comprehensive development for future leaders.' },
                        ].map(({ icon, color, title, desc }) => (
                            <div key={title} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition duration-300 border border-gray-100 group">
                                <div className={`w-16 h-16 ${color.split(' ')[0]} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition`}>
                                    <i className={`fas ${icon} text-3xl ${color.split(' ')[1]}`}></i>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
                                <p className="text-gray-600 leading-relaxed">{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Academic Programs */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
                            <span className="text-orange-600">Excellence in Health Science Education</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">World-class curriculum enhanced with design thinking and clinical excellence.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {courses.map(({ href, img, title, color, desc }) => (
                            <Link key={href} to={href} className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500">
                                <div className="h-56 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition z-10"></div>
                                    <img src={img} alt={title} className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700" />
                                </div>
                                <div className="p-6 bg-white">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{title}</h3>
                                    <p className={`${color} font-semibold text-sm mb-3`}>4-Year Degree Program</p>
                                    <p className="text-gray-600 text-sm line-clamp-3">{desc}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Student Success Stories</h2>
                        <p className="text-xl text-gray-600">Hear from our graduates who are making an impact in healthcare.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map(({ name, role, text, img }) => (
                            <div key={name} className="bg-white rounded-2xl p-8 shadow-lg">
                                <div className="flex items-center mb-6">
                                    <img src={img} alt={name} className="w-16 h-16 rounded-full object-cover mr-4" />
                                    <div>
                                        <h4 className="font-bold text-gray-900">{name}</h4>
                                        <p className="text-orange-600 text-sm">{role}</p>
                                    </div>
                                </div>
                                <p className="text-gray-600 italic">"{text}"</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl lg:text-5xl font-bold mb-4">Ready to Shape Your Medical Career?</h2>
                    <p className="text-xl opacity-90 mb-8">Admissions open for Academic Year 2026-27. Secure your future in healthcare.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/admissions" className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-lg transition shadow-xl">
                            <i className="fas fa-pen-to-square mr-2"></i>Apply Now
                        </Link>
                        <Link to="/contact" className="bg-white/20 backdrop-blur-lg hover:bg-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg transition">
                            <i className="fas fa-phone mr-2"></i>Schedule Campus Visit
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}
