import PageHeader from '../components/PageHeader'

export default function Admissions() {
    return (
        <>
            <PageHeader
                title="Admissions"
                subtitle="Join India's leading Design Thinking Allied Health Science college"
                image="/static/images/hero.png"
                badge="Admissions 2026-27"
            />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl font-bold mb-6 text-gray-900">Admission Process</h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                We seek students who are not only academically proficient but also possess empathy, curiosity, and a drive to innovate in the healthcare sector.
                            </p>

                            <div className="space-y-8">
                                {[
                                    { step: '1', title: 'Application', desc: 'Fill out the online application form or visit our campus for a physical form.' },
                                    { step: '2', title: 'Counseling', desc: 'Attend the counseling session where we discuss your career goals and program fit.' },
                                    { step: '3', title: 'Verification', desc: 'Submit your original documents for verification by the University authorities.' },
                                    { step: '4', title: 'Enrollment', desc: 'Secure your seat by paying the admission fees and completing the enrollment.' }
                                ].map((item) => (
                                    <div key={item.step} className="flex items-start">
                                        <div className="w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                                            {item.step}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 text-xl mb-1">{item.title}</h4>
                                            <p className="text-gray-600">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-gray-50 rounded-3xl p-10 shadow-xl border border-gray-100">
                            <h3 className="text-2xl font-bold mb-6 text-gray-900">Eligibility Criteria</h3>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-start">
                                    <i className="fas fa-check-circle text-green-600 mt-1 mr-3"></i>
                                    <span className="text-gray-700">10+2 / Higher Secondary with PCB (Physics, Chemistry, Biology)</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-check-circle text-green-600 mt-1 mr-3"></i>
                                    <span className="text-gray-700">Minimum 50% aggregate in core subjects</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-check-circle text-green-600 mt-1 mr-3"></i>
                                    <span className="text-gray-700">English as a mandatory subject</span>
                                </li>
                            </ul>

                            <div className="bg-orange-600 rounded-2xl p-6 text-white">
                                <h4 className="font-bold mb-2">Need Help?</h4>
                                <p className="text-sm opacity-90 mb-4">Our admissions team is available to guide you through the process.</p>
                                <a href="tel:+919940956789" className="bg-white text-orange-600 px-6 py-2 rounded-lg font-bold block text-center transition hover:bg-gray-100">
                                    Call: +91 99409 56789
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
