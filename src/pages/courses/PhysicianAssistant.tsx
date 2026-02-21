import { Link } from 'react-router-dom'
import PageHeader from '../../components/PageHeader'

export default function PhysicianAssistant() {
    return (
        <>
            <PageHeader title="B.Sc. Physician Assistant" subtitle="Preparing skilled clinical professionals to support physicians in diverse medical environments" image="https://snscahs.org/wp-content/uploads/2023/11/B.Sc-Physicia-Assistant.jpg" badge="B.Sc. Physician Assistant (4 Years)" />
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-2 block">Clinical Excellence</span>
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">Versatile Healthcare Support</h2>
                            <p className="text-lg text-gray-600 leading-relaxed mb-6">Physician Assistants are healthcare professionals licensed to practice medicine with physician supervision. Our program at SNSCAHS provides a broad medical education that enables graduates to work in various medical and surgical specialties.</p>
                            <p className="text-lg text-gray-600 leading-relaxed">Students are trained to perform physical exams, diagnose and treat illnesses, order and interpret tests, counsel on preventive health care, and assist in surgery.</p>
                        </div>
                        <div>
                            <img src="https://snscahs.org/wp-content/uploads/2023/11/B.Sc-Physicia-Assistant.jpg" alt="Physician Assistant Training" className="rounded-2xl shadow-2xl w-full object-cover h-[400px]" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-3xl p-12 shadow-sm border border-gray-100">
                        <div className="text-center mb-10"><h2 className="text-3xl font-bold text-gray-900">Program Outcomes</h2></div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                { icon: 'fa-stethoscope', color: 'bg-blue-50 text-blue-600', title: 'Clinical Skills', desc: 'Expertise in patient assessment and diagnosis' },
                                { icon: 'fa-notes-medical', color: 'bg-green-50 text-green-600', title: 'Medical Knowledge', desc: 'Deep understanding of medical sciences' },
                                { icon: 'fa-user-md', color: 'bg-orange-50 text-orange-600', title: 'Professionalism', desc: 'Ethical practice and empathetic care' },
                                { icon: 'fa-hospital-user', color: 'bg-purple-50 text-purple-600', title: 'Collaborative Care', desc: 'Working effectively in healthcare teams' },
                            ].map(({ icon, color, title, desc }) => (
                                <div key={title} className="text-center">
                                    <div className={`w-16 h-16 mx-auto ${color.split(' ')[0]} rounded-full flex items-center justify-center mb-4 text-2xl`}>
                                        <i className={`fas ${icon} ${color.split(' ')[1]}`}></i>
                                    </div>
                                    <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                                    <p className="text-sm text-gray-500">{desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-24 bg-blue-900 text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold mb-6">Become a Skilled Physician Assistant</h2>
                    <p className="text-xl mb-10 text-blue-100">Join our industry-aligned program and start your medical career.</p>
                    <Link to="/admissions" className="bg-white text-blue-900 hover:bg-gray-100 px-10 py-4 rounded-full font-bold text-lg transition shadow-lg inline-block">Apply for Admission</Link>
                </div>
            </section>
        </>
    )
}
