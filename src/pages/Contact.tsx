import { useEffect } from 'react'
import PageHeader from '../components/PageHeader'

export default function Contact() {
    useEffect(() => {
        // Load Bitrix script
        const script = document.createElement('script')
        script.src = 'https://cdn.bitrix24.com/b11752903/crm/form/loader_18.js'
        script.async = true
        script.dataset.b24Form = 'inline/18/m4ecvi'
        script.dataset.skipMoving = 'true'
        document.body.appendChild(script)

        return () => {
            // Cleanup script if needed (Bitrix loader might not like this)
            // document.body.removeChild(script)
        }
    }, [])

    return (
        <>
            <PageHeader
                title="Contact Us"
                subtitle="We'd love to hear from you. Visit us or get in touch today!"
                image="/static/images/hero.png"
                badge="Contact Us"
            />

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <i className="fas fa-map-marker-alt text-3xl text-orange-600 mr-4"></i>
                                    <div>
                                        <h3 className="font-bold text-xl mb-2">Address</h3>
                                        <p className="text-gray-700">SNS College of Allied Health Sciences,<br />SNS Kalvi Nagar, Sathy Main Road (NH-209),<br />Vazhiyampalayam, Saravanampatti Post,<br />Coimbatore - 641 035.</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <i className="fas fa-phone text-3xl text-orange-600 mr-4"></i>
                                    <div>
                                        <h3 className="font-bold text-xl mb-2">Phone</h3>
                                        <p className="text-gray-700">Admission: +91 99409 56789<br />Office: +91 75503 16701</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <i className="fas fa-envelope text-3xl text-green-600 mr-4"></i>
                                    <div>
                                        <h3 className="font-bold text-xl mb-2">Email</h3>
                                        <p className="text-gray-700">General: office@snscahs.org<br />Admissions: snsadmission@snsgroups.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <i className="fas fa-clock text-3xl text-orange-600 mr-4"></i>
                                    <div>
                                        <h3 className="font-bold text-xl mb-2">Visit Us</h3>
                                        <p className="text-gray-700">Monday - Friday: 9:00 AM - 5:00 PM<br />Saturday: 9:00 AM - 1:00 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-50 rounded-2xl p-8">
                            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">Admission and Enquiry Form</h3>

                            <div id="b24-form-container">
                                {/* Bitrix form will be loaded here by the loader */}
                                {/* Adding manual loader if standard data attributes don't work in React */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
