import React from 'react'
import round from '../../../assets/images/1x/Asset 5.png'
import Image from 'next/image'

function About() {
    return (
        <div className={'bg-black xl:px-32 px-6 py-16 -translate-y-1'}>
            <div className={'relative h-28'} >
                <p className={'text-red -z-0 translate-x-2 translate-y-1 absolute text-5xl xl:text-8xl'}>The house music fest 2024</p>
                <p className={'text-white text-5xl xl:text-8xl absolute z-10'}>The house music fest 2024</p>

            </div>
            <div className={'text-white text-2xl xl:text-4xl xl:pt-8 pt-4 space-y-6'}>
                <p>
                    THIS IS THE ULTIMATE FESTIVAL FOR ALL HOUSE MUSIC LOVERS & LOVERS
                    OF OUTDOOR ENTERTAINMENT. dEEP IN THE LAWNS OF MANZINI CLUB IN
                    THE HUB OF ESWATINI. THIS MAKES IT THE WARMEST FESTIVAL IN
                    ESWATINI.
                </p>
                <p>
                    BRINGING TOGETHER THE PEOPLE OF ESWATINI & NEIGHBOURING COUNTRIES,
                    THIS MAKES THE FESTIVAL A SPECIAL OCCASSION FOR LOVERS, FRIENDS &
                    TOURISTS. THE hmf OPENS THE CALENDAR OF THE ENTERTAINMENT
                    INDUSTRY IN THE BEAUTIFUL ESWATINI AND THE WARMTH OF FESTIVAL
                    AS YOU PURCHASE YOUR TICKET.
                </p>
            </div>
            <div className={'hidden xl:inline'}>
                <div className={'flex justify-between pt-24'}>
                    <Image src={round} width={150} height={150} className={'animate-spin-slow'} />
                    <Image src={round} width={150} height={150} className={'animate-spin-slow'} />
                    <Image src={round} width={150} height={150} className={'animate-spin-slow'} />
                    <Image src={round} width={150} height={150} className={'animate-spin-slow'} />
                    <Image src={round} width={150} height={150} className={'animate-spin-slow'} />

                </div>
            </div>
            <div className={' xl:hidden'}>
            <div className={'flex justify-between pt-8'}>
                <Image src={round} width={50} height={150} className={'animate-spin-slow'} />
                <Image src={round} width={50} height={150} className={'animate-spin-slow'} />
                <Image src={round} width={50} height={150} className={'animate-spin-slow'} />
                <Image src={round} width={50} height={150} className={'animate-spin-slow'} />
                <Image src={round} width={50} height={150} className={'animate-spin-slow'} />

            </div>
        </div>

        </div>
    )
}

export default About