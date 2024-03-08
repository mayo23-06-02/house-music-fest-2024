import React from 'react'
import bar from '../../../assets/images/1x/bar.png'
import Image from 'next/image'
import Logo from '../../../assets/images/SVG/Logo.svg'
import { BiCopyright, BiLogoFacebook, BiLogoInstagram, BiLogoTiktok, BiLogoTwitter } from 'react-icons/bi'
import Link from 'next/link'

export default function Contact() {
    return (
        <div className={'xl:pb-24 pb-8 '} >
            <Image src={bar} width={1920} height={200} className={'-translate-y-10'} />
            <div className={'flex flex-col xl:flex-row justify-between space-x-12 xl:px-24 px-6'}>
                <div className={' w-full space-y-12'}>
                    <div className={'relative xl:h-28 h-16'} >
                        <p className={'text-black -z-0 translate-x-2 translate-y-1 absolute text-5xl'}>Contact Us</p>
                        <p className={'text-white text-5xl absolute z-10'}>Contact Us</p>
                    </div>
                    <div className={'flex flex-col xl:flex-row xl:space-x-24 space-y-8 xl:space-y-0'}>
                        <div className={'space-y-6'}>
                            <p className={'text-red text-4xl xl:text-6xl '}>Phone</p>
                            <div className={'space-y-2 '}>
                                <div className={'flex items-end'}>
                                    <p className={'text-black text-2xl xl:text-4xl'}>+268 7800 000</p>
                                </div>
                                <div className={'flex items-end'}>
                                    <p className={'text-black text-2xl xl:text-4xl'}>+268 7800 000</p>
                                </div>
                            </div>
                        </div>
                        <div className={'space-y-6'}>
                            <p className={'text-red text-4xl xl:text-6xl '}>Email</p>
                            <div className={'space-y-2 '}>
                                <div className={'flex items-end'}>
                                    <p className={'text-black text-2xl xl:text-4xl'}>info@hmf2024.com</p>
                                </div>
                                <div className={'flex items-end'}>
                                    <p className={'text-black text-2xl xl:text-4xl'}>housemusicfest@hmf2024.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'flex w-full items-center xl:justify-between pt-8 xl:pt-0'}>
                    <div />
                    <Image src={Logo} width={300} height={500} alt={'Logo'} className={'hidden xl:inline'} />
                    <div>
                        <ul className={'flex justify-center items-center xl:space-x-0 space-x-6 xl:flex-col text-4xl'}>

                            <Link href={'instagram.com'}>
                                <li><p className={''}><BiLogoInstagram /></p></li>
                            </Link>
                            <Link href={'facebook.com'}>
                                <li><p className={''}><BiLogoFacebook /></p></li>
                            </Link>
                            <Link href={'twitter.com'}>
                                <li><p className={''}><BiLogoTwitter /></p></li>
                            </Link>
                            <Link href={'tiktok.com'}>
                                <li><p className={''}><BiLogoTiktok /></p></li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={'flex w-full items-center pt-6 justify-center flex-col'}>
                <p className={' whitespace-nowrap flex'}>HMF<BiCopyright />2024</p>
            </div>
        </div>
    )
}
