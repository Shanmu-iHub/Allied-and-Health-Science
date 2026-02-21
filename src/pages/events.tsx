import PageHeader from '../components/PageHeader'

export default function Events() {
    return (
        <>
            <PageHeader
                title="Events & Celebrations"
                subtitle="Witness the vibrant life and cultural celebrations at SNSCAHS"
                image="/static/images/hero.png"
                badge="Campus Events"
            />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">Unforgettable Moments</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">From cultural fests to international symposiums, our campus is always buzzing with activity.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: 'Annual Cultural Fest', date: 'March 2026', desc: 'A week-long celebration of talent, art, and music.' },
                            { title: 'International Nurses Day', date: 'May 12, 2026', desc: 'Honoring the backbone of healthcare with workshops and events.' },
                            { title: 'Design Thinking Expo', date: 'August 2026', desc: 'Showcasing innovative healthcare solutions developed by students.' }
                        ].map((event) => (
                            <div key={event.title} className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition duration-300">
                                <span className="text-orange-600 font-bold text-sm uppercase tracking-wider mb-2 block">{event.date}</span>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">{event.title}</h3>
                                <p className="text-gray-600 mb-6">{event.desc}</p>
                                <button className="text-orange-600 font-bold hover:underline">Learn More <i className="fas fa-arrow-right ml-1"></i></button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
