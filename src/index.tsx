import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { Layout, PageHeader } from './components/layout'
import { HomePage } from './pages/home'
import { PrePrimaryPage, PrimaryPage, MiddleSchoolPage } from './pages/academics'
import { FacilitiesPage } from './pages/facilities'
import { InnovationPage, AboutPage, ContactPage, AdmissionsPage } from './pages/remaining'
import { MandatoryDisclosurePage } from './pages/mandatory-disclosure'
import { GalleryPage, SportsClubsPage, BrochurePage } from './pages/gallery-sports'
import { TransportPage } from './pages/transport'
import { EventsPage } from './pages/events'
import { SuccessStoriesPage } from './pages/success-stories'
import { StanfordPathwayPage } from './pages/stanford-pathway'

const app = new Hono()

// Diagnostic route
app.get('/health', (c) => c.text('Hono is running!'))
app.get('/api/test', (c) => c.json({ status: 'ok', runtime: 'edge' }))

// Enable CORS for API routes
app.use('/api/*', cors())

// API route for admission inquiry
app.post('/api/admission-inquiry', async (c) => {
    const data = await c.req.json()
    console.log('Admission Inquiry:', data)

    // In production, you would send email or save to database
    return c.json({
        success: true,
        message: 'Thank you! Our admissions team will contact you within 24 hours.'
    })
})

// Home Page
app.get('/', (c) => {
    return c.html(Layout(HomePage(), 'Home', 'home'))
})

// Course Pages (Previously Academic Pages)
app.get('/courses/cardiac-technology', (c) => {
    return c.html(Layout(PrePrimaryPage(), 'B.Sc. Cardiac Technology', 'courses-cardiac'))
})

app.get('/courses/physician-assistant', (c) => {
    return c.html(Layout(PrimaryPage(), 'B.Sc. Physician Assistant', 'courses-physician'))
})

app.get('/courses/radiography', (c) => {
    return c.html(Layout(MiddleSchoolPage(), 'B.Sc. Radiography & Imaging Technology', 'courses-radiography'))
})

app.get('/courses/operation-theatre', (c) => {
    const content = `
    ${PageHeader(
        'B.Sc. Operation Theatre & Anesthesia Technology',
        'Specialized training in surgical assistance, sterilization protocols, and anesthesia equipment management for clinical excellence.',
        '/static/images/secondary.png',
        'B.Sc. OT & Anesthesia Technology (4 Years)'
    )}

    <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 class="text-4xl font-bold mb-6">Program Excellence</h2>
                    <p class="text-lg text-gray-700 leading-relaxed mb-6">
                        The B.Sc. in Operation Theatre and Anesthesia Technology program at SNS College of Allied Health Sciences prepares students to become highly skilled professionals who support surgical teams and manage anesthesia protocols in specialized medical environments.
                    </p>
                    <p class="text-lg text-gray-700 leading-relaxed">
                        Our curriculum integrates Design Thinking to foster empathy and innovative problem-solving in the high-stakes environment of the operating room, ensuring patient safety and clinical efficiency.
                    </p>
                </div>
                <div class="bg-green-50 rounded-2xl p-8">
                    <h3 class="text-2xl font-bold mb-6">Program Objectives</h3>
                    <ul class="space-y-4">
                        <li class="flex items-start">
                            <i class="fas fa-check-circle text-green-600 mt-1 mr-3"></i>
                            <span class="text-gray-700">Mastery of Surgical Sterilization & Hygiene</span>
                        </li>
                        <li class="flex items-start">
                            <i class="fas fa-check-circle text-green-600 mt-1 mr-3"></i>
                            <span class="text-gray-700">Anesthesia Equipment Management</span>
                        </li>
                        <li class="flex items-start">
                            <i class="fas fa-check-circle text-green-600 mt-1 mr-3"></i>
                            <span class="text-gray-700">Clinical Excellence in PT Monitoring</span>
                        </li>
                        <li class="flex items-start">
                            <i class="fas fa-check-circle text-green-600 mt-1 mr-3"></i>
                            <span class="text-gray-700">Emergency & Trauma Care Protocols</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    `;
    return c.html(Layout(content, 'B.Sc. Operation Theatre & Anesthesia Technology', 'courses-operation-theatre'))
})

// Remove the old /academics/senior-secondary route (merged with secondary)
app.get('/academics/senior-secondary', (c) => {
    // Redirect to the combined secondary page
    return c.redirect('/academics/secondary', 301)
})

// Facilities Page
app.get('/facilities', (c) => {
    return c.html(Layout(FacilitiesPage(), 'Facilities', 'facilities'))
})

// Innovation Hub Page
app.get('/innovation', (c) => {
    return c.html(Layout(InnovationPage(), 'Innovation Hub', 'innovation'))
})

// About Page
app.get('/about', (c) => {
    return c.html(Layout(AboutPage(), 'About Us', 'about'))
})

// Contact Page
app.get('/contact', (c) => {
    return c.html(Layout(ContactPage(), 'Contact Us', 'contact'))
})

// Mandatory Disclosure Page
app.get('/mandatory-disclosure', (c) => {
    return c.html(Layout(MandatoryDisclosurePage(), 'Mandatory Disclosure', 'mandatory-disclosure'))
})

// Admissions Page
app.get('/admissions', (c) => {
    return c.html(Layout(AdmissionsPage(), 'Admissions', 'admissions'))
})

// Gallery Page
app.get('/gallery', (c) => {
    return c.html(Layout(GalleryPage(), 'Campus Gallery', 'gallery'))
})

// Sports & Clubs Page
app.get('/sports-clubs', (c) => {
    return c.html(Layout(SportsClubsPage(), 'Sports & Clubs', 'sports-clubs'))
})

// Brochure Page
app.get('/brochure', (c) => {
    return c.html(Layout(BrochurePage(), 'Digital Brochure', 'brochure'))
})

// Transport Page
app.get('/transport', (c) => {
    return c.html(Layout(TransportPage(), 'Transport Services', 'transport'))
})

// Events & Celebrations Page
app.get('/events', (c) => {
    return c.html(Layout(EventsPage(), 'Events & Celebrations', 'events'))
})

// Success Stories Page
app.get('/success-stories', (c) => {
    return c.html(Layout(SuccessStoriesPage(), 'Success Stories', 'success-stories'))
})

// Stanford Pathway Page
app.get('/stanford-pathway', (c) => {
    return c.html(Layout(StanfordPathwayPage(), 'Pathway to Stanford', 'stanford-pathway'))
})

export default app
