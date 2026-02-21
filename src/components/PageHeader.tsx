interface PageHeaderProps {
    title: string
    subtitle: string
    image: string
    badge: string
}

export default function PageHeader({ title, subtitle, image, badge }: PageHeaderProps) {
    return (
        <section className="relative text-white py-20 overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img src={image} alt={title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="inline-flex items-center bg-orange-500/20 border border-orange-400/30 rounded-full px-4 py-2 mb-6">
                    <i className="fas fa-star text-orange-400 mr-2"></i>
                    <span className="text-sm font-semibold">{badge}</span>
                </div>
                <h1 className="text-4xl lg:text-6xl font-extrabold mb-4 leading-tight">{title}</h1>
                <p className="text-xl text-gray-200 max-w-2xl">{subtitle}</p>
            </div>
        </section>
    )
}
