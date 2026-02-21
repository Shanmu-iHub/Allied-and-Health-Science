import PageHeader from '../components/PageHeader'

export default function Brochure() {
    return (
        <>
            <PageHeader
                title="Digital Brochure"
                subtitle="Download our complete prospectus and learn more about SNS Allied Health Sciences"
                image="/static/images/hero.png"
                badge="Brochure"
            />

            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-12 text-center shadow-xl">
                        <i className="fas fa-file-pdf text-8xl text-red-600 mb-8"></i>
                        <h2 className="text-4xl font-bold mb-4">SNSCAHS Prospectus</h2>
                        <p className="text-xl text-gray-700 mb-8">
                            Comprehensive guide with complete information about our B.Sc. programs, facilities, and clinical hospital connect.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                            <a href="https://snsacademy.org/brochure/" target="_blank" rel="noreferrer" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition inline-flex items-center justify-center shadow-lg">
                                <i className="fas fa-download mr-2"></i>
                                Download Brochure
                            </a>
                            <a href="https://snsacademy.org/brochure/" target="_blank" rel="noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition inline-flex items-center justify-center shadow-lg">
                                <i className="fas fa-external-link-alt mr-2"></i>
                                View Online
                            </a>
                        </div>

                        <p className="text-sm text-gray-600">
                            For admissions assistance, contact us at <a href="tel:+919940956789" className="text-blue-600 hover:underline">+91 99409 56789</a>
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}
