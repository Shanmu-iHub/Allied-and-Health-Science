import PageHeader from '../components/PageHeader'

export default function StanfordPathway() {
    return (
        <>
            <PageHeader
                title="Pathway to Stanford"
                subtitle="Exclusive opportunities for international clinical exposure and advanced certifications"
                image="/static/images/hero.png"
                badge="Stanford Pathway"
            />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            <img src="/static/images/secondary.png" alt="International Opportunity" className="rounded-3xl shadow-2xl" />
                            <div className="absolute -bottom-6 -right-6 bg-orange-600 text-white p-8 rounded-2xl shadow-xl max-w-xs">
                                <h4 className="text-2xl font-bold mb-2">Global Vision</h4>
                                <p className="text-sm opacity-90">Prepare for international healthcare standards and certifications.</p>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-4xl font-bold mb-6 text-gray-900">Global Clinical Excellence</h2>
                            <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                Through our unique Pathway to Stanford initiative, we provide students with the resources and guidance to prepare for global certifications and international clinical rotations.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                We integrate international best practices and case studies into our curriculum, ensuring our graduates are competitive on a global scale.
                            </p>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                                    <h4 className="font-bold text-gray-900 mb-2">Certifications</h4>
                                    <p className="text-sm text-gray-600">Guidance for international professional licensing exams.</p>
                                </div>
                                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                                    <h4 className="font-bold text-gray-900 mb-2">Workshops</h4>
                                    <p className="text-sm text-gray-600">Virtual sessions with international healthcare experts.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
