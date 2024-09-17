import Header from '@/app/(normal)/Header'
import Footer from '@/app/(normal)/Footer'

export default function NormalLayout({ children }: {
    children: React.ReactNode,
}) {
    return (
        <div className='flex flex-col min-h-full w-full'>
            <Header />
            <main className='flex-1'>
                {children}
            </main>
            <Footer />
        </div>
    )
}