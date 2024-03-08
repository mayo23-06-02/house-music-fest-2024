import React, { useState, useEffect } from 'react'
import Landing_bg from '../../../assets/images/Landing-bg.png'
import Logo from '../../../assets/images/SVG/Logo.svg'
import DateandVenue from '../../../assets/images/1x/DateandVenue.png'
import Days from '../../../assets/images/1x/days.png'
import round from '../../../assets/images/1x/Asset 5.png'

import ButtonBG from '../../../assets/images/1x/Asset 4.png'
import HMF from '../../../assets/images/1x/HMF.png'
import Image from 'next/image'
import Link from 'next/link'

function Landing() {
    const targetDate = '2024-03-30T00:00:00';
    const calculateTimeLeft = () => {
        const difference = new Date(targetDate) - new Date();
        let timeLeft = {};
        if (difference > 0) {
            timeLeft = {
                days: Math.ceil(difference / (1000 * 60 * 60 * 24)), // Use Math.ceil instead of Math.floor
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });


    return (
        <div className={'flex relative h-[1000px] justify-center xl:h-full px-8 space-y-6 xl:space-y-0 xl:py-0 pt-12 xl:px-0'}>
            <div className={'xl:hidden'}>
                <ul className={'text-white tracking-widest flex space-x-8  text-2xl'}>
                    <Link href={'../../../'}>
                        <li>
                            <p className={'hover:text-black hover:scale-105 transition ease-in-out'}>Home</p>
                        </li>
                    </Link>
                    <Link href={'../../../'}>
                        <li>
                            <p className={'hover:text-black hover:scale-105 transition ease-in-out'}>Line-Up</p>
                        </li>
                    </Link>
                    <Link href={'../../../'}>
                        <li>
                            <p className={'hover:text-black hover:scale-105 transition ease-in-out'}>Gallery</p>
                        </li>
                    </Link>
                </ul>
            </div>
            <Image src={Landing_bg} width={1920} height={1080} alt="bg " className={'hidden xl:inline'} />
            <span className={'xl:hidden absolute top-0 z-0 '}>
                <Image src={HMF} width={1080} height={1920} alt="bg " className={' object-contain'} />
                <Image src={HMF} width={1080} height={1920} alt="bg " className={' object-contain'} />
            </span>


            <div className={'absolute xl:left-[10%]  2xl:left-[18%] px-8  2xl:top-[25%] 2xl:space-x-16 xl:top-[15%] xl:px-16  grid xl:grid-cols-2 grid-rows-2 grid-flow-col xl:space-x-20 xl:grid-flow-row'}>
                <div className={' space-y-12 pt-12 '}>
                    <Image src={Logo} width={400} height={500} alt={'Logo'} />
                    <Image src={DateandVenue} width={400} height={500} alt={''} />
                </div>
                <div className={'relative'}>
                    <div className={'hidden xl:inline-block'}>
                        <div className={'pt-8 flex  items-center '}>
                            <ul className={'text-white tracking-widest flex space-x-8  text-2xl'}>
                                <Link href={'../../../'}>
                                    <li>
                                        <p className={'hover:text-black hover:scale-105 transition ease-in-out'}>Home</p>
                                    </li>
                                </Link>
                                <Link href={'../../../'}>
                                    <li>
                                        <p className={'hover:text-black hover:scale-105 transition ease-in-out'}>Line-Up</p>
                                    </li>
                                </Link>
                                <Link href={'../../../'}>
                                    <li>
                                        <p className={'hover:text-black hover:scale-105 transition ease-in-out'}>Gallery</p>
                                    </li>
                                </Link>
                            </ul>
                            <div className={' pl-16 hidden xl:inline'}>
                                <button className={'relative flex items-center justify-center'}>
                                    <Image src={ButtonBG} width={120} height={60} alt={''} />
                                    <p className={'text-white absolute text-2xl pt-1 hover:text-red hover:scale-105'}>Get Ticket</p>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={"pt-16 xl:pt-0"}>
                        <div className={'relative grid grid-flow-row grid-cols-2 -translate-y-12 '}>
                        <p className={'text-white absolute w-9   z-10 top-0 text- xl:text-[300px] text-[250px]'}>
                        {typeof window !== 'undefined' && timeLeft.days}
                    </p>
                            <span className={'absolute flex justify-center  top-0 translate-y-3 translate-x-3'}>
                                <p className={'text-black xl:text-[300px] text-[250px]'}>
                                {typeof window !== 'undefined' && timeLeft.days}

                                </p>
                                <Image src={Days} width={150} height={100} alt='' className={'-translate-y-6 object-contain hidden xl:inline'} />
                                <Image src={Days} width={130} height={100} alt='' className={'-translate-y-6 object-contain  -translate-x-6 xl:hidden'} />
                            </span>
                        </div>
                    </div>
                    <div className={'absolute bottom-[10%] w-full flex xl:flex-none justify-center  xl:bottom-[0%] '}>
                        <div className={'relative items-center justify-center'}>
                            <Image src={ButtonBG} width={400} height={100} alt={'bg'} className={'hidden xl:inline'} />
                            <Image src={ButtonBG} width={360} height={100} alt={'bg'} className={'xl:hidden '} />
                            <div className={'absolute w-full justify-center xl:top-[25%] top-[25%] px-6 flex space-x-4 xl:space-x-6'}>
                                <div className={'flex space-x-1  items-end'}>
                                    <p className={'text-white text-2xl xl:text-4xl'}>{typeof window !== 'undefined' && timeLeft.hours}</p>
                                    <p className={'text-red text-xl xl:text-2xl'}>hours</p>
                                </div>
                                <div className={'flex space-x-1  items-end'}>
                                    <p className={'text-white text-2xl xl:text-4xl'}>{typeof window !== 'undefined' && timeLeft.minutes}</p>
                                    <p className={'text-red text-xl xl:text-2xl'}>minutes</p>
                                </div>
                                <div className={'flex space-x-1  items-end'}>
                                    <p className={'text-white text-2xl xl:text-4xl'}>{typeof window !== 'undefined' && timeLeft.seconds}</p>
                                    <p className={'text-red text-xl xl:text-2xl'}>seconds</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <Image src={round} width={78} height={150} className={'animate-spin-slow absolute 2xl:left-10 2xl:top-6 left-5 hidden xl:inline'} />
            <Image src={round} width={78} height={150} className={'animate-spin-slow absolute left-[47%] 2xl:left-[47.9%] 2xl:top-6 hidden xl:inline'} />
            <Image src={round} width={78} height={150} className={'animate-spin-slow absolute right-5 2xl:right-10 2xl:top-6  hidden xl:inline'} />
            <Image src={round} width={78} height={150} className={'animate-spin-slow absolute bottom-0 2xl:left-10 2xl:bottom-6 left-5 hidden xl:inline'} />
            <Image src={round} width={78} height={150} className={'animate-spin-slow absolute left-[47%] bottom-0 2xl:left-[47.9%] 2xl:bottom-6 hidden xl:inline'} />
            <Image src={round} width={78} height={150} className={'animate-spin-slow absolute right-5 bottom-0 2xl:right-10 2xl:bottom-6 hidden xl:inline'} />


        </div>
    )
}

export default Landing