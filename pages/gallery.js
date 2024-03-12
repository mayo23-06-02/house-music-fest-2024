import Image from 'next/image'
import localFont from '@next/font/local'
import HomeMain from '@/components/UI/HomePage/HomeMain'
import ImageGallery from '@/components/UI/HomePage/GalleryImages'
import Contact from '@/components/UI/HomePage/Contact'

const bold_vibes = localFont({
  src: '../public/fonts/Bold Vibes Regular.otf',
  variable: '--font-vibes',
})

const poppins = localFont({
  src: '../public/fonts/Poppins-SemiBold.otf',
  variable: '--font-poppins',
})

export default function Gallery() {
  return (
    <main
      className={`bg-primary px-6 xl:px-0  2xl:px-24  2xl:py-36 h-full w-screen ${bold_vibes.className} `}
    >
      <div className='space-y-12 flex items-center flex-col w-full '>
      <ImageGallery />
      <Contact />
      </div>
    </main>
  )
}
