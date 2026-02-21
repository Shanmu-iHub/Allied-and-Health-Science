import { Link } from 'react-router-dom'
import PageHeader from '../../components/PageHeader'

export default function Radiography() {
    return (
        <>
            <PageHeader title="B.Sc. Radiography & Imaging Technology" subtitle="Advanced training in medical imaging modalities for accurate diagnosis and clinical insights" image="https://snscahs.org/wp-content/uploads/2023/11/B.Sc-Radiography-and-Imaging-Technology.jpg" badge="B.Sc. Radiography & Imaging (4 Years)" />
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-emerald-600 font-bold tracking-wider uppercase text-sm mb-2 block">Imaging Vertical</span>
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">Visualizing Health</h2>
                            <p className="text-lg text-gray-600 leading-relaxed mb-6">Radiography and Imaging Technology is essential in modern medicine. Our program provides in-depth knowledge of radiology imaging techniques and equipment.</p>
                            <p className="text-lg text-gray-600 leading-relaxed">We emphasize safe radiation practices and patient care, training students to produce high-quality diagnostic images using state-of-the-art modalities.</p>
                        </div>
                        <div className="bg-emerald-50 rounded-3xl p-10">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Modalities</h3>
                            <ul className="space-y-4">
                                {['Digital X-Ray Systems', 'Computed Tomography (CT)', 'Magnetic Resonance Imaging (MRI)', 'Ultrasound & Mammography'].map(item => (
                                    <li key={item} className="flex items-start">
                                        <div className="w-6 h-6 rounded-full bg-emerald-200 flex items-center justify-center mr-3 mt-0.5"><i className="fas fa-check text-emerald-700 text-xs"></i></div>
                                        <span className="text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Design Thinking in Imaging</h2>
                        <p className="text-gray-600">Enhancing patient experience and accuracy through clinical empathy.</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        {[['fa-heart', 'text-orange-500', '1. Empathize'], ['fa-crosshairs', 'text-blue-500', '2. Define'], ['fa-lightbulb', 'text-yellow-500', '3. Ideate'], ['fa-tools', 'text-green-500', '4. Prototype'], ['fa-vial', 'text-purple-500', '5. Test']].map(([icon, color, label]) => (
                            <div key={label} className="col-span-1 bg-white p-6 rounded-xl text-center shadow-sm hover:shadow-md transition">
                                <i className={`fas ${icon} text-3xl ${color} mb-3`}></i>
                                <h4 className="font-bold">{label}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="py-24 bg-emerald-900 text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold mb-6">Expertise in Medical Imaging</h2>
                    <p className="text-xl mb-10 text-emerald-100">Launch your career in radiology with our specialized B.Sc. program.</p>
                    <Link to="/admissions" className="bg-white text-emerald-900 hover:bg-gray-100 px-10 py-4 rounded-full font-bold text-lg transition shadow-lg inline-block">Apply for Admission</Link>
                </div>
            </section>
        </>
    )
}
