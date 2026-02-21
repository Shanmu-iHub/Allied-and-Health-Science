import { useState } from 'react'
import { Link, useLocation, Outlet } from 'react-router-dom'

export default function Layout() {
    const [mobileOpen, setMobileOpen] = useState(false)
    const [openMobileSection, setOpenMobileSection] = useState<string | null>(null)
    const location = useLocation()
    const path = location.pathname

    const toggleSection = (section: string) => {
        setOpenMobileSection(openMobileSection === section ? null : section)
    }

    const navLink = (href: string, label: string) => (
        <Link
            to={href}
            className={`block px-4 py-2 hover:bg-orange-50 text-gray-700 ${path === href ? 'text-orange-600 font-semibold' : ''}`}
            onClick={() => setMobileOpen(false)}
        >
            {label}
        </Link>
    )

    return (
        <>
            {/* Hanging Tag: Affiliation */}
            <div className="fixed top-[22%] right-0 z-50 swing">
                <div className="bg-gradient-to-br from-green-600 to-emerald-600 text-white px-4 py-6 rounded-l-2xl shadow-2xl">
                    <span className="font-extrabold text-sm uppercase tracking-widest" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', letterSpacing: '0.2em' }}>MGR UNIV</span>
                </div>
            </div>

            {/* Hanging Tag: Brochure */}
            <div className="fixed top-[36%] right-0 z-50 swing" style={{ animationDelay: '0.3s' }}>
                <a href="https://snsacademy.org/brochure/" target="_blank" rel="noreferrer" className="bg-gradient-to-br from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white px-4 py-8 rounded-l-2xl shadow-2xl flex flex-col items-center space-y-3 group transition-all">
                    <i className="fas fa-file-pdf text-2xl group-hover:scale-110 transition-transform duration-300"></i>
                    <span className="font-extrabold text-sm uppercase tracking-widest" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', letterSpacing: '0.2em' }}>BROCHURE</span>
                </a>
            </div>

            {/* Mobile Apply Button */}
            <div className="fixed bottom-6 left-6 z-50 lg:hidden">
                <Link to="/admissions" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-4 rounded-full shadow-2xl flex items-center space-x-2">
                    <i className="fas fa-pen-to-square"></i>
                    <span className="font-bold">Apply Now</span>
                </Link>
            </div>

            {/* Navigation */}
            <nav className="bg-white shadow-md sticky top-0 z-40">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <Link to="/" className="flex items-center space-x-3">
                            <img src="https://static.ambitionbox.com/assets/v2/images/rs:fit:1280:960:false:false/aHR0cHM6Ly9tZWRpYS5uYXVrcmkuY29tL21lZGlhL2FiY29tcGxvZ28vc25zLWNvbGxlZ2Utb2YtYWxsaWVkLWhlYWx0aC1zY2llbmNlcy1vcmlnaW5hbC5qcGc.png" alt="SNS Allied Health Science Logo" className="h-16 w-auto" />
                            <div>
                                <h1 className="text-xl font-bold text-gray-900 leading-tight">SNS College of <br />Allied Health Sciences</h1>
                            </div>
                        </Link>

                        {/* Desktop Nav */}
                        <div className="hidden md:flex items-center space-x-6">
                            <Link to="/" className={`font-medium ${path === '/' ? 'text-orange-600 font-bold' : 'text-gray-700 hover:text-orange-600'}`}>Home</Link>

                            {/* Programs Dropdown */}
                            <div className="relative group">
                                <button className={`font-medium flex items-center ${path.startsWith('/courses') || path === '/stanford-pathway' ? 'text-orange-600 font-bold' : 'text-gray-700 hover:text-orange-600'}`}>
                                    Programs <i className="fas fa-chevron-down ml-1 text-xs"></i>
                                </button>
                                <div className="absolute hidden group-hover:block bg-white shadow-xl rounded-lg py-2 w-64 mt-0 z-50">
                                    {navLink('/courses/cardiac-technology', 'Cardiac Technology')}
                                    {navLink('/courses/physician-assistant', 'Physician Assistant')}
                                    {navLink('/courses/radiography', 'Radiography & Imaging')}
                                    {navLink('/courses/operation-theatre', 'OT & Anesthesia Technology')}
                                </div>
                            </div>

                            {/* Infrastructure Dropdown */}
                            <div className="relative group">
                                <button className={`font-medium flex items-center ${['/facilities', '/gallery', '/transport'].includes(path) ? 'text-orange-600 font-bold' : 'text-gray-700 hover:text-orange-600'}`}>
                                    Infrastructure <i className="fas fa-chevron-down ml-1 text-xs"></i>
                                </button>
                                <div className="absolute hidden group-hover:block bg-white shadow-xl rounded-lg py-2 w-48 mt-0 z-50">
                                    {navLink('/facilities', 'Facilities')}
                                    {navLink('/gallery', 'Gallery')}
                                    {navLink('/transport', 'Transport')}
                                </div>
                            </div>

                            {/* Beyond Programs Dropdown */}
                            <div className="relative group">
                                <button className={`font-medium flex items-center ${['/sports-clubs', '/innovation', '/events', '/success-stories'].includes(path) ? 'text-orange-600 font-bold' : 'text-gray-700 hover:text-orange-600'}`}>
                                    Beyond Programs <i className="fas fa-chevron-down ml-1 text-xs"></i>
                                </button>
                                <div className="absolute hidden group-hover:block bg-white shadow-xl rounded-lg py-2 w-56 mt-0 z-50">
                                    {navLink('/sports-clubs', 'Sports & Clubs')}
                                    {navLink('/innovation', 'Innovation Hub')}
                                    {navLink('/events', 'Events & Celebrations')}
                                    {navLink('/success-stories', 'Success Stories')}
                                </div>
                            </div>

                            {/* Meet Us Dropdown */}
                            <div className="relative group">
                                <button className={`font-medium flex items-center ${['/about', '/contact', '/mandatory-disclosure'].includes(path) ? 'text-orange-600 font-bold' : 'text-gray-700 hover:text-orange-600'}`}>
                                    Meet Us <i className="fas fa-chevron-down ml-1 text-xs"></i>
                                </button>
                                <div className="absolute hidden group-hover:block bg-white shadow-xl rounded-lg py-2 w-56 mt-0 z-50">
                                    {navLink('/about', 'About Us')}
                                    {navLink('/contact', 'Contact Us')}
                                    {navLink('/mandatory-disclosure', 'Mandatory Disclosure')}
                                </div>
                            </div>

                            <Link to="/admissions" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-bold transition">
                                Apply Now <i className="fas fa-arrow-right ml-2"></i>
                            </Link>
                        </div>

                        <button className="md:hidden text-gray-700" onClick={() => setMobileOpen(!mobileOpen)}>
                            <i className="fas fa-bars text-2xl"></i>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileOpen && (
                    <div className="md:hidden bg-white border-t">
                        <div className="px-4 py-4 space-y-3">
                            <Link to="/" className="block text-gray-700 hover:text-orange-600 font-medium py-2" onClick={() => setMobileOpen(false)}>Home</Link>

                            {[
                                {
                                    key: 'programs', label: 'Programs', links: [
                                        ['/courses/cardiac-technology', 'Cardiac Technology'],
                                        ['/courses/physician-assistant', 'Physician Assistant'],
                                        ['/courses/radiography', 'Radiography & Imaging'],
                                        ['/courses/operation-theatre', 'OT & Anesthesia Technology'],
                                    ]
                                },
                                {
                                    key: 'infra', label: 'Infrastructure', links: [
                                        ['/facilities', 'Facilities'],
                                        ['/gallery', 'Gallery'],
                                        ['/transport', 'Transport'],
                                    ]
                                },
                                {
                                    key: 'beyond', label: 'Beyond Programs', links: [
                                        ['/sports-clubs', 'Sports & Clubs'],
                                        ['/innovation', 'Innovation Hub'],
                                        ['/events', 'Events & Celebrations'],
                                        ['/success-stories', 'Success Stories'],
                                    ]
                                },
                                {
                                    key: 'meetus', label: 'Meet Us', links: [
                                        ['/about', 'About Us'],
                                        ['/contact', 'Contact Us'],
                                        ['/mandatory-disclosure', 'Mandatory Disclosure'],
                                    ]
                                },
                            ].map(section => (
                                <div key={section.key}>
                                    <button className="w-full text-left text-gray-700 font-medium py-2 flex justify-between items-center" onClick={() => toggleSection(section.key)}>
                                        {section.label} <i className="fas fa-chevron-down"></i>
                                    </button>
                                    {openMobileSection === section.key && (
                                        <div className="pl-4 space-y-2 mt-2">
                                            {section.links.map(([href, label]) => (
                                                <Link key={href} to={href} className="block text-gray-600 hover:text-orange-600 py-1" onClick={() => setMobileOpen(false)}>
                                                    {label}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}

                            <Link to="/admissions" className="block bg-orange-500 text-white text-center px-6 py-3 rounded-lg font-bold" onClick={() => setMobileOpen(false)}>
                                Apply Now <i className="fas fa-arrow-right ml-2"></i>
                            </Link>
                        </div>
                    </div>
                )}
            </nav>

            {/* Page Content */}
            <main>
                <Outlet />
            </main>

            {/* Footer */}
            <footer className="bg-gray-900 text-gray-300 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-4 gap-8 mb-8">
                        <div>
                            <div className="flex items-center space-x-3 mb-4">
                                <img src="https://static.ambitionbox.com/assets/v2/images/rs:fit:1280:960:false:false/aHR0cHM6Ly9tZWRpYS5uYXVrcmkuY29tL21lZGlhL2FiY29tcGxvZ28vc25zLWNvbGxlZ2Utb2YtYWxsaWVkLWhlYWx0aC1zY2llbmNlcy1vcmlnaW5hbC5qcGc.png" alt="SNS Allied Health Science Logo" className="h-12 w-auto bg-white rounded p-1" />
                                <div><h3 className="text-white font-bold leading-tight">SNS College of Allied Health Sciences</h3></div>
                            </div>
                            <p className="text-sm leading-relaxed">SNS Kalvi Nagar, Sathy Main Road (NH-209), Kurumbapalayam, Saravanampatti Post, Coimbatore - 641 035.</p>
                        </div>

                        <div>
                            <h4 className="text-white font-bold mb-4">Quick Links</h4>
                            <ul className="space-y-2 text-sm">
                                {[['/', 'Home'], ['/about', 'About Us'], ['/facilities', 'Facilities'], ['/gallery', 'Gallery'], ['/sports-clubs', 'Sports & Clubs'], ['/events', 'Events'], ['/success-stories', 'Success Stories'], ['/transport', 'Transport'], ['/innovation', 'Innovation Hub'], ['/admissions', 'Admissions'], ['/contact', 'Contact']].map(([href, label]) => (
                                    <li key={href}><Link to={href} className="hover:text-white transition">{label}</Link></li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-white font-bold mb-4">Programs</h4>
                            <ul className="space-y-2 text-sm">
                                {[
                                    ['/courses/cardiac-technology', 'Cardiac Technology'],
                                    ['/courses/physician-assistant', 'Physician Assistant'],
                                    ['/courses/radiography', 'Radiography & Imaging'],
                                    ['/courses/operation-theatre', 'OT & Anesthesia'],
                                    ['/stanford-pathway', 'Pathway to Stanford'],
                                    ['/mandatory-disclosure', 'Mandatory Disclosure'],
                                ].map(([href, label]) => (
                                    <li key={href}><Link to={href} className="hover:text-white transition">{label}</Link></li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-white font-bold mb-4">Connect</h4>
                            <ul className="space-y-2 text-sm mb-4">
                                <li><i className="fas fa-map-marker-alt mr-2"></i>SNS Kalvi Nagar, Sathy Main Road (NH-209), Coimbatore - 641 035.</li>
                                <li><a href="tel:+919940956789" className="hover:text-white transition"><i className="fas fa-phone mr-2"></i>Admission: +91 99409 56789</a></li>
                                <li><a href="tel:+917550316701" className="hover:text-white transition"><i className="fas fa-phone mr-2"></i>Office: +91 75503 16701</a></li>
                                <li><a href="mailto:office@snscahs.org" className="hover:text-white transition"><i className="fas fa-envelope mr-2"></i>office@snscahs.org</a></li>
                            </ul>
                            <div className="flex space-x-3">
                                {[
                                    ['https://www.facebook.com/snsinstitutions', 'fab fa-facebook-f'],
                                    ['https://www.instagram.com/snsacademyorg', 'fab fa-instagram'],
                                    ['https://www.youtube.com/@snsinstitutions', 'fab fa-youtube'],
                                    ['https://www.linkedin.com/school/snsinstitutions/', 'fab fa-linkedin-in'],
                                ].map(([href, icon]) => (
                                    <a key={href} href={href} target="_blank" rel="noreferrer" className="w-10 h-10 bg-gray-800 hover:bg-orange-600 rounded-lg flex items-center justify-center transition">
                                        <i className={icon}></i>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 pt-8 text-center text-sm">
                        <p>&copy; 2026 SNS College of Allied Health Sciences. All rights reserved.</p>
                        <p className="mt-2 text-orange-400 font-semibold">Redesigning Common Minds | We are Design Thinkers</p>
                        <p className="mt-1 text-xs">SNS Core Value: Sincerity, Nobility, Service</p>
                        <p className="mt-3 text-orange-400 font-bold"><i className="fas fa-headset mr-2"></i>Helpline: 95644 23456</p>
                    </div>
                </div>
            </footer>

            {/* Floating Buttons */}
            <a href="https://www.instagram.com/snsinstitutions" className="instagram-float" target="_blank" rel="noreferrer" title="Follow us on Instagram">
                <i className="fab fa-instagram"></i>
            </a>
            <a href="https://wa.me/919940956789" className="whatsapp-float" target="_blank" rel="noreferrer" title="Chat with us on WhatsApp">
                <i className="fab fa-whatsapp"></i>
            </a>
        </>
    )
}
