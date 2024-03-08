import Image from 'next/image'
import React from 'react'
import bar from '../../../assets/images/1x/bar.png'
import A2 from '../../../assets/images/1x/A2.png'
import A3 from '../../../assets/images/1x/A3.png'


import Artist from './Artist'
import ButtonBG from '../../../assets/images/1x/Asset 4.png'


function LineUp() {
    return (
        <div className={'relative '}>
            <Image src={bar} width={1920} height={200} className={'-translate-y-6'} />
            <div className={'w-full grid pt-8 xl:max-h-[800px]  h-full max-h-[1000px]  grid-rows-2 xl:grid-cols-2 xl:grid-flow-row grid-flow-col'}>
                <div className={'px-6 xl:pl-24 pt-'}>
                    <div className={'w-full flex flex-col items-center justify-center'}>
                        <div className={'relative '}>
                            <p className={'text-[200px] xl:text-[250px]'}>Line</p>
                            <p className={'text-[200px] xl:text-[250px] absolute top-0 text-red -translate-y-4 -translate-x-4'} >Line</p>
                            <p className={'text-[200px] xl:text-[250px]  xl:-translate-y-32 -translate-y-24'} >UP</p>
                            <p className={'text-[200px] xl:text-[250px] absolute top-[31%] text-red -translate-y-4 -translate-x-4'} >UP</p>
                            <div className={'hidden xl:inline'}>
                                <button className={'relative -translate-y-64 xl:-translate-y-36 tra  flex items-center justify-center'}>
                                    <Image src={ButtonBG} width={150} height={60} alt={''} />
                                    <p className={'text-white absolute text-2xl pt-1  hover:text-red hover:scale-105'}>View All Acts</p>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
                <div className={'max-w-2xl xl:translate-y-32 -translate-y-16 flex items-center justify-center'}>
                    <Artist />
                </div>
            </div>
            <Image src={bar} width={1920} height={200} className={'-translate-y-6 rotate-180'} />
            <Image src={A2} width={150} height={200} className={'-translate-y-6 rotate-180 absolute bottom-[5%] xl:bottom-[13%] right-[10%] xl:right-[7%] animate-spin-slow'} />
            <Image src={A3} width={150} height={200} className={'-translate-y-6 rotate-180 absolute xl:top-[60%] xl:left-[35%] top-[30%]  right-10 '} />
        </div>
    )
}

export default LineUp