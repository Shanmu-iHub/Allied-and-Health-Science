import PageHeader from '../components/PageHeader'

export default function SportsClubs() {
    return (
        <>
            <PageHeader
                title="Sports & Clubs"
                subtitle="Building champions in sports, arts, and life skills"
                image="/static/images/gym.jpg"
                badge="Sports & Clubs"
            />

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4">Sports For Life</h2>
                        <p className="text-xl text-gray-600">Well-developed play fields with specialized instructors</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { icon: 'fa-futbol', title: 'Football', color: 'text-green-600', bg: 'bg-green-50' },
                            { icon: 'fa-table-tennis', title: 'Tennis & TT', color: 'text-yellow-600', bg: 'bg-yellow-50' },
                            { icon: 'fa-baseball-ball', title: 'Cricket', color: 'text-red-600', bg: 'bg-red-50' },
                            { icon: 'fa-basketball-ball', title: 'Basketball', color: 'text-orange-600', bg: 'bg-orange-50' },
                            { icon: 'fa-volleyball-ball', title: 'Volleyball', color: 'text-blue-600', bg: 'bg-blue-50' },
                            { icon: 'fa-swimmer', title: 'Swimming', color: 'text-teal-600', bg: 'bg-teal-50' }
                        ].map((item) => (
                            <div key={item.title} className={`${item.bg} rounded-2xl p-8 shadow-lg transition hover:scale-105 duration-300`}>
                                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                                    <i className={`fas ${item.icon} text-4xl ${item.color}`}></i>
                                </div>
                                <h3 className="text-2xl font-bold text-center mb-4">{item.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4">Clubs & Activities</h2>
                        <p className="text-xl text-gray-600">25+ extra-curricular options for holistic development</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: 'fa-music', title: 'Music Club', color: 'text-purple-600' },
                            { icon: 'fa-theater-masks', title: 'Dance Club', color: 'text-pink-600' },
                            { icon: 'fa-palette', title: 'Art Club', color: 'text-yellow-600' },
                            { icon: 'fa-robot', title: 'Robotics Club', color: 'text-blue-600' },
                            { icon: 'fa-microphone-alt', title: 'Toastmasters', color: 'text-red-600' },
                            { icon: 'fa-globe-americas', title: 'MUN', color: 'text-teal-600' },
                            { icon: 'fa-camera', title: 'Photography', color: 'text-purple-600' },
                            { icon: 'fa-chess', title: 'Chess Club', color: 'text-gray-700' }
                        ].map((item) => (
                            <div key={item.title} className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition duration-300 border border-gray-100">
                                <i className={`fas ${item.icon} text-5xl ${item.color} mb-4`}></i>
                                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
