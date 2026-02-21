import { Link } from 'react-router-dom'
import PageHeader from '../../components/PageHeader'

export default function OperationTheatre() {
    return (
        <>
            <PageHeader title="B.Sc. Operation Theatre & Anesthesia Technology" subtitle="Specialized training in surgical assistance, sterilization protocols, and anesthesia equipment management." image="/static/images/secondary.png" badge="B.Sc. OT & Anesthesia Technology (4 Years)" />
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold mb-6">Program Excellence</h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">The B.Sc. in Operation Theatre and Anesthesia Technology program prepares students to become highly skilled professionals who support surgical teams and manage anesthesia protocols in specialized medical environments.</p>
                            <p className="text-lg text-gray-700 leading-relaxed">Our curriculum integrates Design Thinking to foster empathy and innovative problem-solving in the high-stakes environment of the operating room.</p>
                        </div>
                        <div className="bg-green-50 rounded-2xl p-8">
                            <h3 className="text-2xl font-bold mb-6">Program Objectives</h3>
                            <ul className="space-y-4">
                                {['Mastery of Surgical Sterilization & Hygiene', 'Anesthesia Equipment Management', 'Clinical Excellence in PT Monitoring', 'Emergency & Trauma Care Protocols'].map(item => (
                                    <li key={item} className="flex items-start">
                                        <i className="fas fa-check-circle text-green-600 mt-1 mr-3"></i>
                                        <span className="text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-24 bg-green-900 text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold mb-6">Master Surgical Excellence</h2>
                    <p className="text-xl mb-10 text-green-100">Join our specialized program and support life-saving surgical procedures.</p>
                    <Link to="/admissions" className="bg-white text-green-900 hover:bg-gray-100 px-10 py-4 rounded-full font-bold text-lg transition shadow-lg inline-block">Apply for Admission</Link>
                </div>
            </section>
        </>
    )
}
