import { Link } from 'react-router-dom'
import PageHeader from '../../components/PageHeader'

export default function CardiacTechnology() {
    return (
        <>
            <PageHeader title="B.Sc. Cardiac Technology" subtitle="Specialized undergraduate program focusing on invasive and non-invasive cardiovascular procedures" image="https://snscahs.org/wp-content/uploads/2023/11/B.Sc-Cardiac-Technology.jpg" badge="B.Sc. Cardiac Technology (4 Years)" />
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-red-600 font-bold tracking-wider uppercase text-sm mb-2 block">Program Focus</span>
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">Mastering Cardiac Care</h2>
                            <p className="text-lg text-gray-600 leading-relaxed mb-6">Cardiac Technology is an area of specialization for allied health professionals who assist physicians in the diagnosis and treatment of cardiac and peripheral vascular conditions.</p>
                            <p className="text-lg text-gray-600 leading-relaxed">At SNSCAHS, students gain hands-on experience in cardiac catheterization laboratories and non-invasive diagnostic centers, learning to operate complex equipment and provide critical support during life-saving procedures.</p>
                        </div>
                        <div>
                            <img src="https://snscahs.org/wp-content/uploads/2023/11/B.Sc-Cardiac-Technology.jpg" alt="Cardiac Technology Lab" className="rounded-2xl shadow-2xl w-full object-cover h-[500px]" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">Course Framework</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">Comprehensive curriculum covering anatomy, physiology, and advanced cardiac care.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: 'fa-heart-pulse', color: 'bg-red-100 text-red-600', title: 'Diagnostics', desc: 'Mastery of ECG, Holter monitoring, and Treadmill Test (TMT) protocols for heart evaluation.' },
                            { icon: 'fa-file-medical', color: 'bg-blue-100 text-blue-600', title: 'Echocardiography', desc: 'Comprehensive training in 2D and 3D Echo, Doppler studies, and ultrasound imaging of the heart.' },
                            { icon: 'fa-stethoscope', color: 'bg-green-100 text-green-600', title: 'Clinical Support', desc: 'Assisting in Angioplasty, Pacemaker implantation, and other invasive cardiac interventions.' },
                        ].map(({ icon, color, title, desc }) => (
                            <div key={title} className="bg-white rounded-2xl p-8 shadow-lg hover:-translate-y-1 transition duration-300">
                                <div className={`w-16 h-16 ${color.split(' ')[0]} rounded-2xl flex items-center justify-center mb-6`}>
                                    <i className={`fas ${icon} text-3xl ${color.split(' ')[1]}`}></i>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="py-24 bg-red-900 text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold mb-6">Secure Your Future in Cardiac Care</h2>
                    <p className="text-xl mb-10 text-red-100">Join the B.Sc. Cardiac Technology program at SNS College of Allied Health Sciences.</p>
                    <Link to="/admissions" className="bg-white text-red-900 hover:bg-gray-100 px-10 py-4 rounded-full font-bold text-lg transition shadow-lg inline-block">Apply for Admission</Link>
                </div>
            </section>
        </>
    )
}
