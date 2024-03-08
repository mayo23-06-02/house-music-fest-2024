import React from 'react'
import A5 from '../../../assets/images/1x/a5.png'
import A from '../../../assets/images/1x/p.png'

import Image from 'next/image'

function Tickets() {
    return (
        <div className={'bg-black -translate-y-8 relative  px-6 xl:px-24 pb-16 pt-6 xl:grid grid-flow-row grid-cols-6 items-end'}>
            <div className={'col-span-4 '}>
                <p className={'text-white text-4xl top-0  absolute right-[10%] animate-wiggle cursor-pointer  hidden xl:inline  z-10'}>Buy a ticket</p>
                <div>
                    <div className={'relative xl:h-28 h-16'} >
                        <p className={'text-red -z-0 translate-x-2 translate-y-1 absolute text-5xl xl:text-8xl'}>Tickets</p>
                        <p className={'text-white text-5xl xl:text-8xl absolute z-10'}>Tickets</p>

                    </div>
                    <div className={'flex xl:space-x-16 '}>
                        <Image src={A} width={700} />
                    </div>
                </div>
            </div>
            <div className={'flex  items-center xl:justify-center   w-full translate-y-6 col-span-2'}>
                <Image src={A5} width={800} height={200} />
            </div>
        </div >
    )
}

export default Tickets