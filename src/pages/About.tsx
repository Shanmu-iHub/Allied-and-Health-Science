import PageHeader from '../components/PageHeader'

export default function About() {
    return (
        <>
            <PageHeader
                title="About SNSCAHS"
                subtitle="India's First Institute to Implement Design Thinking in Education"
                image="/static/images/hero.png"
                badge="About Us"
            />

            {/* Vision & Philosophy Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            <div className="absolute -top-4 -left-4 w-24 h-24 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
                            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
                            <img src="/static/images/secondary.png" alt="Students Learning" className="relative rounded-2xl shadow-2xl w-full object-cover h-[500px]" />
                            <div className="absolute bottom-8 right-8 bg-white/90 backdrop-blur p-6 rounded-xl shadow-lg max-w-xs">
                                <p className="text-orange-600 font-bold text-lg mb-1">Our Tagline</p>
                                <p className="text-gray-800 text-sm font-medium">Redesigning Common Minds & Business Towards Excellence</p>
                            </div>
                        </div>

                        <div>
                            <div className="mb-12">
                                <span className="text-orange-600 font-bold tracking-wider uppercase text-sm mb-2 block">Our Vision</span>
                                <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900">
                                    Pioneering <span className="text-orange-600">Allied Health Education</span>
                                </h2>
                                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                    SNS College of Allied Health Sciences is dedicated to producing world-class healthcare professionals through our unique <strong>Design Thinking Framework</strong>. We prioritize clinical excellence, empathy-driven care, and innovative research.
                                </p>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    Affiliated to <strong>The Tamil Nadu Dr.MGR Medical University</strong>, we ensure our students are trained at the highest standards of medical education and ethics.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                                        <i className="fas fa-brain text-xl text-orange-600"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-lg">Design Thinking</h4>
                                        <p className="text-gray-600 text-sm">Solving real-world problems with empathy.</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                                        <i className="fas fa-users text-xl text-blue-600"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-lg">3P Culture</h4>
                                        <p className="text-gray-600 text-sm">Purpose, Process, People driving holistic growth.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5 Pillars Mission */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-orange-600 font-bold tracking-wider uppercase text-sm mb-2 block">Our Mission</span>
                        <h2 className="text-4xl font-bold mb-6 text-gray-900">5 Pillars of Excellence</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            A comprehensive framework designed to nurture well-rounded global citizens.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Pillar 1 */}
                        <div className="bg-white rounded-2xl overflow-hidden shadow-lg group hover:shadow-xl transition duration-300">
                            <div className="h-48 overflow-hidden">
                                <img src="/static/images/Learning.png" alt="Learning" className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700" />
                            </div>
                            <div className="p-8">
                                <h3 className="text-xl font-bold mb-3 text-gray-900">1. Learning & Teaching</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Practice Design Thinking-Based Academic Learning & Teaching. We move from rote memorization to active understanding.
                                </p>
                            </div>
                        </div>

                        {/* Pillar 2 */}
                        <div className="bg-white rounded-2xl overflow-hidden shadow-lg group hover:shadow-xl transition duration-300">
                            <div className="h-48 overflow-hidden">
                                <img src="/static/images/Skill.png" alt="Skill Development" className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700" />
                            </div>
                            <div className="p-8">
                                <h3 className="text-xl font-bold mb-3 text-gray-900">2. Skill & Career Development</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Build life skills through various clubs and contests. Preparing students for careers that don't even exist yet.
                                </p>
                            </div>
                        </div>

                        {/* Pillar 3 */}
                        <div className="bg-white rounded-2xl overflow-hidden shadow-lg group hover:shadow-xl transition duration-300">
                            <div className="h-48 overflow-hidden">
                                <img src="/static/images/Creativity.png" alt="Creativity" className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700" />
                            </div>
                            <div className="p-8">
                                <h3 className="text-xl font-bold mb-3 text-gray-900">3. Centre for Creativity</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Hands-on experience solving key industrial problems with latest technologies in our Innovation Hub.
                                </p>
                            </div>
                        </div>

                        {/* Pillar 4 */}
                        <div className="bg-white rounded-2xl overflow-hidden shadow-lg group hover:shadow-xl transition duration-300">
                            <div className="h-48 overflow-hidden">
                                <img src="/static/images/IIPC.png" alt="Industry Partnership" className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700" />
                            </div>
                            <div className="p-8">
                                <h3 className="text-xl font-bold mb-3 text-gray-900">4. Industry Partnership</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Connecting classrooms with boardrooms. Students learn business sense directly from industry leaders.
                                </p>
                            </div>
                        </div>

                        {/* Pillar 5 */}
                        <div className="bg-white rounded-2xl overflow-hidden shadow-lg group hover:shadow-xl transition duration-300">
                            <div className="h-48 overflow-hidden">
                                <img src="/static/images/SRI.png" alt="Social Responsibility" className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700" />
                            </div>
                            <div className="p-8">
                                <h3 className="text-xl font-bold mb-3 text-gray-900">5. Social Responsibility</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Cultivating compassion. Giving back to society through impactful social service initiatives.
                                </p>
                            </div>
                        </div>

                        {/* 3P Summary Card */}
                        <div className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-lg flex items-center justify-center p-8 text-center text-white">
                            <img src="/static/images/3P.jpg" alt="3P Culture" className="absolute inset-0 w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-black/80"></div>
                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold mb-4">3P Culture</h3>
                                <div className="flex justify-center space-x-4 mb-6">
                                    <span className="bg-white/10 px-3 py-1 rounded text-sm">Purpose</span>
                                    <span className="bg-white/10 px-3 py-1 rounded text-sm">Process</span>
                                    <span className="bg-white/10 px-3 py-1 rounded text-sm">People</span>
                                </div>
                                <p className="text-gray-300 text-sm">
                                    Our holistic operating system for educational excellence.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Leadership Team Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-orange-600 font-bold tracking-wider uppercase text-sm mb-2 block">Our Leadership</span>
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">Visionaries Behind SNS</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Guiding the institution with wisdom, innovation, and a commitment to excellence.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-10">
                        {/* Founder Chairman */}
                        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition duration-300">
                            <div className="flex items-center mb-6">
                                <img src="/static/images/chairman.png" alt="Dr. S.N. Subbramanian" className="w-20 h-20 rounded-full object-cover mr-4 border-2 border-white shadow-sm" />
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900"><span className="text-[70%]">Deiva Thiru</span><br /><span className="text-[90%] font-[900]">Dr. S.N. Subbramanian</span></h3>
                                    <p className="text-orange-600 text-sm font-semibold mt-1">Founder Chairman</p>
                                </div>
                            </div>
                            <p className="text-gray-600 text-sm leading-relaxed italic">
                                "We believe that every child is a design thinker. Through our unique Design Thinking framework and 3P Culture, we prepare students not just for exams, but for life."
                            </p>
                        </div>

                        {/* Correspondent */}
                        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition duration-300">
                            <div className="flex items-center mb-6">
                                <img src="/static/images/correspondent.png" alt="Dr. S. Rajalakshmi" className="w-20 h-20 rounded-full object-cover mr-4 border-2 border-white shadow-sm" />
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900">Dr. S. Rajalakshmi</h3>
                                    <p className="text-orange-600 text-sm font-semibold mt-1">Chairman / Correspondent</p>
                                </div>
                            </div>
                            <p className="text-gray-600 text-sm leading-relaxed italic">
                                "We focus on holistic development through our 5 Pillars Mission. Our experienced faculty nurtures each child's unique potential, preparing them for global opportunities."
                            </p>
                        </div>

                        {/* Technical Director */}
                        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition duration-300">
                            <div className="flex items-center mb-6">
                                <img src="/static/images/td.png" alt="Nalin SNS" className="w-20 h-20 rounded-full object-cover mr-4 border-2 border-white shadow-sm" />
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900">Nalin SNS</h3>
                                    <p className="text-orange-600 text-sm font-semibold mt-1">Technical Director</p>
                                </div>
                            </div>
                            <p className="text-gray-600 text-sm leading-relaxed italic">
                                "We aim to build <strong className='text-gray-900'>1000 AI startups in 10 years</strong>. SNS iHub serves as India's Y-Combinator, focused on SHAAARP industries and RADICAL technologies."
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
