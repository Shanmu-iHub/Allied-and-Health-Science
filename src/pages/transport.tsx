import PageHeader from '../components/PageHeader'

export default function Transport() {
    return (
        <>
            <PageHeader
                title="Transport Services"
                subtitle="Safe and reliable transportation for students across Coimbatore"
                image="/static/images/hero.png"
                badge="Transport"
            />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl font-bold mb-6 text-gray-900">Campus Commute</h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Our fleet of safe and comfortable buses covers over 40 routes across Coimbatore and its suburbs, ensuring that students reach the campus on time and with ease.
                            </p>
                            <div className="space-y-4">
                                {[
                                    'GPS Tracking for all vehicles',
                                    'Experienced and trained drivers',
                                    'Regular safety audits and maintenance',
                                    'Routes covering major residential hubs'
                                ].map((item) => (
                                    <div key={item} className="flex items-center">
                                        <i className="fas fa-check-circle text-orange-600 mr-3"></i>
                                        <span className="text-gray-700 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100 shadow-xl">
                            <i className="fas fa-bus text-6xl text-blue-600 mb-6"></i>
                            <h3 className="text-2xl font-bold mb-4">Route Information</h3>
                            <p className="text-gray-600 mb-6">Contact our transport cell for detailed route maps and timing information.</p>
                            <a href="tel:+917550316701" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold inline-block hover:bg-blue-700 transition">Contact Transport Cell</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
