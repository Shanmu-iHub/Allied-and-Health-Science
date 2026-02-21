import PageHeader from '../components/PageHeader'

const stories = [
    { name: 'Priya Suresh', role: 'B.Sc. Cardiac Technology, 2023', text: 'The clinical training at SNSCAHS is unparalleled. I secured a position at a leading cardiac center before even graduating!', img: 'https://randomuser.me/api/portraits/women/44.jpg' },
    { name: 'Arjun Rajan', role: 'B.Sc. Physician Assistant, 2023', text: 'The Design Thinking approach completely changed how I see patient care. I am now working at Apollo Hospitals.', img: 'https://randomuser.me/api/portraits/men/32.jpg' },
    { name: 'Meena Krishnan', role: 'B.Sc. Radiography, 2022', text: 'World-class labs and dedicated faculty. The best decision of my life was choosing SNSCAHS.', img: 'https://randomuser.me/api/portraits/women/68.jpg' },
    { name: 'Sanjay Kumar', role: 'B.Sc. OT & Anesthesia, 2023', text: 'The hands-on experience in the operating theatre was crucial for my career. The faculty guided me every step of the way.', img: 'https://randomuser.me/api/portraits/men/45.jpg' }
]

export default function SuccessStories() {
    return (
        <>
            <PageHeader
                title="Success Stories"
                subtitle="Voices of our accomplished alumni making waves in the healthcare industry"
                image="/static/images/hero.png"
                badge="Alumni Success"
            />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12">
                        {stories.map((story) => (
                            <div key={story.name} className="bg-gray-50 rounded-3xl p-8 flex flex-col md:flex-row gap-8 items-center border border-gray-100 shadow-sm hover:shadow-md transition">
                                <img src={story.img} alt={story.name} className="w-32 h-32 rounded-2xl object-cover shadow-lg" />
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{story.name}</h3>
                                    <p className="text-orange-600 font-semibold text-sm mb-4">{story.role}</p>
                                    <p className="text-gray-600 italic leading-relaxed">"{story.text}"</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
