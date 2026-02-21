import PageHeader from '../components/PageHeader'

export default function MandatoryDisclosure() {
    return (
        <>
            <PageHeader
                title="Mandatory Public Disclosure"
                subtitle="Institutional Details & Regulatory Compliance"
                image="/static/images/hero.png"
                badge="Mandatory Disclosure"
            />

            {/* A: General Information */}
            <section className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold mb-8 text-gray-900">A. General Information</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse border border-gray-300">
                            <thead className="bg-orange-100">
                                <tr>
                                    <th className="border border-gray-300 px-4 py-3 text-left font-bold">SL NO.</th>
                                    <th className="border border-gray-300 px-4 py-3 text-left font-bold">INFORMATION</th>
                                    <th className="border border-gray-300 px-4 py-3 text-left font-bold">DETAILS</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    ['1', 'NAME OF THE INSTITUTION', 'SNS College of Allied Health Sciences'],
                                    ['2', 'AFFILIATION', 'The Tamil Nadu Dr.MGR Medical University, Chennai'],
                                    ['3', 'COLLEGE CODE', 'A0701'],
                                    ['4', 'COMPLETE ADDRESS', 'SNS Kalvi Nagar, Sathy Main Road (NH-209), Coimbatore - 641035'],
                                    ['5', 'PRINCIPAL / DEAN', 'Dr. S. Rajalakshmi'],
                                    ['6', 'QUALIFICATION', 'Ph.D., M.Sc., (Relevant Clinical Domain)'],
                                ].map(([no, info, detail]) => (
                                    <tr key={no} className="hover:bg-gray-50">
                                        <td className="border border-gray-300 px-4 py-3">{no}</td>
                                        <td className="border border-gray-300 px-4 py-3 font-semibold">{info}</td>
                                        <td className="border border-gray-300 px-4 py-3">{detail}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* F: Regulatory Compliance */}
            <section className="py-12 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold mb-8 text-gray-900">Information & Documents</h2>
                    <div className="bg-white rounded-xl shadow-lg p-8">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Complete Mandatory Disclosure PDF</h3>
                                <p className="text-gray-600">Download the complete mandatory disclosure document as per University guidelines</p>
                            </div>
                            <a href="https://snsacademy.org/MandatoryDisclosurePDF/" target="_blank" rel="noreferrer" className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-bold transition inline-flex items-center">
                                <i className="fas fa-download mr-2"></i>
                                Download PDF
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
