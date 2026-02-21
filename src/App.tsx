import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import CardiacTechnology from './pages/courses/CardiacTechnology'
import PhysicianAssistant from './pages/courses/PhysicianAssistant'
import Radiography from './pages/courses/Radiography'
import OperationTheatre from './pages/courses/OperationTheatre'
import Facilities from './pages/Facilities'
import Innovation from './pages/Innovation'
import About from './pages/About'
import Contact from './pages/Contact'
import Admissions from './pages/Admissions'
import MandatoryDisclosure from './pages/MandatoryDisclosure'
import Gallery from './pages/Gallery'
import SportsClubs from './pages/SportsClubs'
import Brochure from './pages/Brochure'
import Transport from './pages/Transport'
import Events from './pages/Events'
import SuccessStories from './pages/SuccessStories'
import StanfordPathway from './pages/StanfordPathway'

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="courses/cardiac-technology" element={<CardiacTechnology />} />
                    <Route path="courses/physician-assistant" element={<PhysicianAssistant />} />
                    <Route path="courses/radiography" element={<Radiography />} />
                    <Route path="courses/operation-theatre" element={<OperationTheatre />} />
                    <Route path="facilities" element={<Facilities />} />
                    <Route path="innovation" element={<Innovation />} />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="admissions" element={<Admissions />} />
                    <Route path="mandatory-disclosure" element={<MandatoryDisclosure />} />
                    <Route path="gallery" element={<Gallery />} />
                    <Route path="sports-clubs" element={<SportsClubs />} />
                    <Route path="brochure" element={<Brochure />} />
                    <Route path="transport" element={<Transport />} />
                    <Route path="events" element={<Events />} />
                    <Route path="success-stories" element={<SuccessStories />} />
                    <Route path="stanford-pathway" element={<StanfordPathway />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
