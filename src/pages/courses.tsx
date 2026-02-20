
import { PageHeader } from '../components/page-header'

export const CardiacTechnologyPage = () => {
    return `
    ${PageHeader(
        'B.Sc. Cardiac Technology',
        'Specialized undergraduate program focusing on invasive and non-invasive cardiovascular procedures',
        'https://snscahs.org/wp-content/uploads/2023/11/B.Sc-Cardiac-Technology.jpg',
        'B.Sc. Cardiac Technology (4 Years)'
    )}

    <!-- Program Overview -->
    <section class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid md:grid-cols-2 gap-16 items-center">
                <div>
                     <span class="text-red-600 font-bold tracking-wider uppercase text-sm mb-2 block">Program Focus</span>
                    <h2 class="text-4xl font-bold text-gray-900 mb-6">Mastering Cardiac Care</h2>
                    <p class="text-lg text-gray-600 leading-relaxed mb-6">
                        Cardiac Technology is an area of specialization for allied health professionals who assist physicians in the diagnosis and treatment of cardiac (heart) and peripheral vascular (blood vessel) conditions.
                    </p>
                    <p class="text-lg text-gray-600 leading-relaxed">
                        At SNSCAHS, students gain hands-on experience in cardiac catheterization laboratories and non-invasive diagnostic centers, learning to operate complex equipment and provide critical support during life-saving procedures.
                    </p>
                </div>
                <div class="relative">
                    <img src="https://snscahs.org/wp-content/uploads/2023/11/B.Sc-Cardiac-Technology.jpg" alt="Cardiac Technology Lab" class="relative rounded-2xl shadow-2xl w-full object-cover h-[500px]">
                </div>
            </div>
        </div>
    </section>

    <!-- Key Learning Areas -->
    <section class="py-24 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-4xl font-bold text-gray-900 mb-6">Course Framework</h2>
                <p class="text-xl text-gray-600 max-w-2xl mx-auto">Comprehensive curriculum covering anatomy, physiology, and advanced cardiac care.</p>
            </div>
            
            <div class="grid md:grid-cols-3 gap-8">
                <div class="bg-white rounded-2xl p-8 shadow-lg hover:-translate-y-1 transition duration-300">
                    <div class="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
                        <i class="fas fa-heart-pulse text-3xl text-red-600"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-4">Diagnostics</h3>
                    <p class="text-gray-600 mb-6 leading-relaxed text-sm">
                        Mastery of ECG, Holter monitoring, and Treadmill Test (TMT) protocols for heart evaluation.
                    </p>
                </div>

                <div class="bg-white rounded-2xl p-8 shadow-lg hover:-translate-y-1 transition duration-300">
                    <div class="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                        <i class="fas fa-file-medical text-3xl text-blue-600"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-4">Echocardiography</h3>
                    <p class="text-gray-600 mb-6 leading-relaxed text-sm">
                        Comprehensive training in 2D and 3D Echo, Doppler studies, and ultrasound imaging of the heart.
                    </p>
                </div>

                <div class="bg-white rounded-2xl p-8 shadow-lg hover:-translate-y-1 transition duration-300">
                    <div class="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                        <i class="fas fa-stethoscope text-3xl text-green-600"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-4">Clinical Support</h3>
                    <p class="text-gray-600 mb-6 leading-relaxed text-sm">
                        Assisting in Angioplasty, Pacemaker implantation, and other invasive cardiac interventions.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA -->
    <section class="py-24 bg-red-900 text-white relative overflow-hidden">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 class="text-4xl font-bold mb-6">Secure Your Future in Cardiac Care</h2>
            <p class="text-xl mb-10 text-red-100 font-light">
                Join the B.Sc. Cardiac Technology program at SNS College of Allied Health Sciences.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/admissions" class="bg-white text-red-900 hover:bg-gray-100 px-10 py-4 rounded-full font-bold text-lg transition shadow-lg shrink-0">
                    Apply for Admission
                </a>
            </div>
        </div>
    </section>
  `;
};

export const PhysicianAssistantPage = () => {
    return `
    ${PageHeader(
        'B.Sc. Physician Assistant',
        'Preparing skilled clinical professionals to support physicians in diverse medical environments',
        'https://snscahs.org/wp-content/uploads/2023/11/B.Sc-Physicia-Assistant.jpg',
        'B.Sc. Physician Assistant (4 Years)'
    )}

    <!-- Overview -->
    <section class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid md:grid-cols-2 gap-16 items-center">
                <div>
                    <span class="text-blue-600 font-bold tracking-wider uppercase text-sm mb-2 block">Clinical Excellence</span>
                    <h2 class="text-4xl font-bold text-gray-900 mb-6">Versatile Healthcare Support</h2>
                    <p class="text-lg text-gray-600 leading-relaxed mb-6">
                        Physician Assistants are healthcare professionals licensed to practice medicine with physician supervision. Our program at SNSCAHS provides a broad medical education that enables graduates to work in various medical and surgical specialties.
                    </p>
                    <p class="text-lg text-gray-600 leading-relaxed">
                        Students are trained to perform physical exams, diagnose and treat illnesses, order and interpret tests, counsel on preventive health care, and assist in surgery.
                    </p>
                </div>
                <div class="relative">
                    <img src="https://snscahs.org/wp-content/uploads/2023/11/B.Sc-Physicia-Assistant.jpg" alt="Physician Assistant Clinical Training" class="relative rounded-2xl shadow-2xl w-full object-cover h-[400px]">
                </div>
            </div>
        </div>
    </section>

    <!-- Program Goals -->
    <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="bg-white rounded-3xl p-12 shadow-sm border border-gray-100">
                <div class="text-center mb-10">
                    <h2 class="text-3xl font-bold text-gray-900">Program Outcomes</h2>
                </div>
                <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div class="text-center">
                        <div class="w-16 h-16 mx-auto bg-blue-50 rounded-full flex items-center justify-center mb-4 text-blue-600 text-2xl"><i class="fas fa-stethoscope"></i></div>
                        <h3 class="font-bold text-gray-900 mb-2">Clinical Skills</h3>
                        <p class="text-sm text-gray-500">Expertise in patient assessment and diagnosis</p>
                    </div>
                     <div class="text-center">
                        <div class="w-16 h-16 mx-auto bg-green-50 rounded-full flex items-center justify-center mb-4 text-green-600 text-2xl"><i class="fas fa-notes-medical"></i></div>
                        <h3 class="font-bold text-gray-900 mb-2">Medical Knowledge</h3>
                        <p class="text-sm text-gray-500">Deep understanding of medical sciences</p>
                    </div>
                     <div class="text-center">
                        <div class="w-16 h-16 mx-auto bg-orange-50 rounded-full flex items-center justify-center mb-4 text-orange-600 text-2xl"><i class="fas fa-user-md"></i></div>
                        <h3 class="font-bold text-gray-900 mb-2">Professionalism</h3>
                        <p class="text-sm text-gray-500">Ethical practice and empathetic care</p>
                    </div>
                     <div class="text-center">
                        <div class="w-16 h-16 mx-auto bg-purple-50 rounded-full flex items-center justify-center mb-4 text-purple-600 text-2xl"><i class="fas fa-hospital-user"></i></div>
                        <h3 class="font-bold text-gray-900 mb-2">Collaborative Care</h3>
                        <p class="text-sm text-gray-500">Working effectively in healthcare teams</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <!-- CTA -->
    <section class="py-24 bg-blue-900 text-white relative overflow-hidden">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 class="text-4xl font-bold mb-6">Become a Skilled Physician Assistant</h2>
            <p class="text-xl mb-10 text-blue-100 font-light">
                Join our industry-aligned program and start your medical career.
            </p>
             <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/admissions" class="bg-white text-blue-900 hover:bg-gray-100 px-10 py-4 rounded-full font-bold text-lg transition shadow-lg shrink-0">
                    Apply for Admission
                </a>
            </div>
        </div>
    </section>
  `;
}

export const RadiographyPage = () => {
    return `
    ${PageHeader(
        'B.Sc. Radiography & Imaging Technology',
        'Advanced training in medical imaging modalities for accurate diagnosis and clinical insights',
        'https://snscahs.org/wp-content/uploads/2023/11/B.Sc-Radiography-and-Imaging-Technology.jpg',
        'B.Sc. Radiography & Imaging (4 Years)'
    )}

    <!-- Program Overview -->
    <section class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid md:grid-cols-2 gap-16 items-center">
                <div>
                     <span class="text-emerald-600 font-bold tracking-wider uppercase text-sm mb-2 block">Imaging Vertical</span>
                    <h2 class="text-4xl font-bold text-gray-900 mb-6">Visualizing Health</h2>
                    <p class="text-lg text-gray-600 leading-relaxed mb-6">
                        Radiography and Imaging Technology is essential in modern medicine for diagnosing and treating various diseases and injuries. Our program provides in-depth knowledge of radiology imaging techniques and equipment.
                    </p>
                    <p class="text-lg text-gray-600 leading-relaxed">
                        At SNSCAHS, we emphasize safe radiation practices and patient care, training students to produce high-quality diagnostic images using state-of-the-art modalities.
                    </p>
                </div>
                <div class="bg-emerald-50 rounded-3xl p-10">
                    <h3 class="text-2xl font-bold text-gray-900 mb-6">Key Modalities</h3>
                    <ul class="space-y-4">
                        <li class="flex items-start">
                             <div class="w-6 h-6 rounded-full bg-emerald-200 flex items-center justify-center mr-3 mt-0.5"><i class="fas fa-check text-emerald-700 text-xs"></i></div>
                            <span class="text-gray-700">Digital X-Ray Systems</span>
                        </li>
                        <li class="flex items-start">
                             <div class="w-6 h-6 rounded-full bg-emerald-200 flex items-center justify-center mr-3 mt-0.5"><i class="fas fa-check text-emerald-700 text-xs"></i></div>
                            <span class="text-gray-700">Computed Tomography (CT)</span>
                        </li>
                        <li class="flex items-start">
                             <div class="w-6 h-6 rounded-full bg-emerald-200 flex items-center justify-center mr-3 mt-0.5"><i class="fas fa-check text-emerald-700 text-xs"></i></div>
                            <span class="text-gray-700">Magnetic Resonance Imaging (MRI)</span>
                        </li>
                        <li class="flex items-start">
                             <div class="w-6 h-6 rounded-full bg-emerald-200 flex items-center justify-center mr-3 mt-0.5"><i class="fas fa-check text-emerald-700 text-xs"></i></div>
                            <span class="text-gray-700">Ultrasound & Mammography</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- Design Thinking in Medicine -->
    <section class="py-24 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-3xl font-bold text-gray-900 mb-4">Design Thinking in Imaging</h2>
                <p class="text-gray-600">Enhancing patient experience and accuracy through clinical empathy.</p>
            </div>
            
            <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
                <div class="bg-white p-6 rounded-xl text-center shadow-sm hover:shadow-md transition">
                    <i class="fas fa-heart text-3xl text-orange-500 mb-3"></i>
                    <h4 class="font-bold">1. Empathize</h4>
                </div>
                <div class="bg-white p-6 rounded-xl text-center shadow-sm hover:shadow-md transition">
                    <i class="fas fa-crosshairs text-3xl text-blue-500 mb-3"></i>
                    <h4 class="font-bold">2. Define</h4>
                </div>
                <div class="bg-white p-6 rounded-xl text-center shadow-sm hover:shadow-md transition">
                    <i class="fas fa-lightbulb text-3xl text-yellow-500 mb-3"></i>
                    <h4 class="font-bold">3. Ideate</h4>
                </div>
                <div class="bg-white p-6 rounded-xl text-center shadow-sm hover:shadow-md transition">
                    <i class="fas fa-tools text-3xl text-green-500 mb-3"></i>
                    <h4 class="font-bold">4. Prototype</h4>
                </div>
                 <div class="col-span-2 md:col-span-1 bg-white p-6 rounded-xl text-center shadow-sm hover:shadow-md transition">
                    <i class="fas fa-vial text-3xl text-purple-500 mb-3"></i>
                    <h4 class="font-bold">5. Test</h4>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="py-24 bg-emerald-900 text-white relative overflow-hidden">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 class="text-4xl font-bold mb-6">Expertise in Medical Imaging</h2>
            <p class="text-xl mb-10 text-emerald-100 font-light">
                Launch your career in radiology with our specialized B.Sc. program.
            </p>
             <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/admissions" class="bg-white text-emerald-900 hover:bg-gray-100 px-10 py-4 rounded-full font-bold text-lg transition shadow-lg shrink-0">
                    Apply for Admission
                </a>
            </div>
        </div>
    </section>
  `;
}
