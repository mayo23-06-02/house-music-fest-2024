import Image from 'next/image'
import localFont from '@next/font/local'
import HomeMain from '@/components/UI/HomePage/HomeMain'

const bold_vibes = localFont({
  src: '../public/fonts/Bold Vibes Regular.otf',
  variable: '--font-vibes',
})

const poppins = localFont({
  src: '../public/fonts/Poppins-SemiBold.otf',
  variable: '--font-poppins',
})

export default function Home() {
  return (
    <main
      className={`bg-primary xl:bg-black px-6 xl:px-0  2xl:px-24  2xl:py-36 h-full w-screen ${bold_vibes.className} `}
    >
      <div className=' flex items-center flex-col w-full '>
        <HomeMain />
      </div>
    </main>
  )
}
