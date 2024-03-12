import React from 'react';
import Image from 'next/image'; // Import the Image component


import _1 from '../../../public/images/1.jpg'
import _2 from '../../../public/images/2.jpg'
import _3 from '../../../public/images/3.jpg'
import _4 from '../../../public/images/4.jpg'
import _5 from '../../../public/images/5.jpg'
import _6 from '../../../public/images/6.jpg'
import _7 from '../../../public/images/7.jpg'
import _8 from '../../../public/images/8.jpg'
import _9 from '../../../public/images/9.jpg'
import _10 from '../../../public/images/10.jpg'
import _11 from '../../../public/images/11.jpg'
import _12 from '../../../public/images/12.jpg'
import _13 from '../../../public/images/13.jpg'
import _14 from '../../../public/images/14.jpg'
import _15 from '../../../public/images/15.jpg'
import _16 from '../../../public/images/16.jpg'
import _17 from '../../../public/images/17.jpg'
import _18 from '../../../public/images/18.jpg'
import _19 from '../../../public/images/19.jpg'
import _20 from '../../../public/images/20.jpg'
import _21 from '../../../public/images/21.jpg'
import _22 from '../../../public/images/22.jpg'
import _23 from '../../../public/images/23.jpg'
import _24 from '../../../public/images/24.jpg'
import _25 from '../../../public/images/25.jpg'
import _26 from '../../../public/images/26.jpg'
import _27 from '../../../public/images/27.jpg'
import _28 from '../../../public/images/28.jpg'
import _29 from '../../../public/images/29.jpg'
import _30 from '../../../public/images/30.jpg'
import _31 from '../../../public/images/31.jpg'
import _32 from '../../../public/images/32.jpg'
import Link from 'next/link';
import Logo from '../../../assets/images/SVG/Logo.svg'


const ImageGallery = () => {
  return (

    <div className='px-6 xl:px-12'>
      <div>
        <div className={'flex justify-between items-center py-12 xl:py-12'}>
          <Image src={Logo} width={100} height={500} alt={'Logo'} />
          <ul className={'text-white tracking-widest flex space-x-8  text-2xl'}>
            <Link href={'../../../'}>
              <li>
                <p className={'hover:text-black hover:scale-105 transition ease-in-out'}>Home</p>
              </li>
            </Link>
            <Link href={'../../../gallery'}>
              <li>
                <p className={'hover:text-black hover:scale-105 transition ease-in-out'}>Gallery</p>
              </li>
            </Link>
            <Link href={'#contact'}>
              <li>
                <p className={'hover:text-black hover:scale-105 transition ease-in-out'}>Contact Us</p>
              </li>
            </Link>
          </ul>
        </div>
        <div className={'relative h-28'} >
          <p className={'text-red -z-0 translate-x-2 translate-y-1 absolute text-5xl xl:text-8xl'}>Gallery</p>
          <p className={'text-white text-5xl xl:text-8xl absolute z-10'}>Gallery</p>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2  gap-3'>

        <Image src={_1} width={600} height={300} className='object-contain rounded-2xl' />
        <Image src={_2} width={600} height={300} className='object-contain rounded-2xl' />
        <Image src={_3} width={600} height={300} className='object-contain rounded-2xl' />
        <div className='space-y-3'>
          <Image src={_4} width={600} height={300} className='object-contain rounded-2xl' />
          <Image src={_5} width={600} height={300} className='object-contain rounded-2xl' />
        </div>
        <Image src={_6} width={600} height={300} className='object-contain rounded-2xl' />
        <Image src={_7} width={600} height={300} className='object-contain rounded-2xl' />
        <Image src={_8} width={600} height={300} className='object-contain rounded-2xl' />
        <Image src={_9} width={600} height={300} className='object-contain rounded-2xl' />
        <Image src={_11} width={600} height={300} className='object-contain rounded-2xl' />
        <Image src={_12} width={600} height={300} className='object-contain rounded-2xl' />
        <Image src={_13} width={600} height={300} className='object-contain rounded-2xl' />
        <Image src={_14} width={600} height={300} className='object-contain rounded-2xl' />
        <Image src={_15} width={600} height={300} className='object-contain rounded-2xl' />
        <Image src={_16} width={600} height={300} className='object-contain rounded-2xl' />
        <div className='space-y-2'>
          <Image src={_17} width={600} height={300} className='object-contain rounded-2xl' />
          <Image src={_18} width={600} height={300} className='object-contain rounded-2xl' />
        </div>
        <Image src={_19} width={600} height={300} className='object-contain rounded-2xl' />
        <Image src={_20} width={600} height={300} className='object-contain rounded-2xl' />
        <Image src={_21} width={600} height={300} className='object-contain rounded-2xl' />
        <Image src={_22} width={600} height={300} className='object-contain rounded-2xl' />
        <Image src={_23} width={600} height={300} className='object-contain rounded-2xl' />
        <div>
          <Image src={_27} width={600} height={300} className='object-contain rounded-2xl' />

        </div>
        <Image src={_24} width={600} height={300} className='object-contain rounded-2xl' />
        <Image src={_25} width={600} height={300} className='object-contain rounded-2xl' />
        <Image src={_26} width={600} height={300} className='object-contain rounded-2xl' />



      </div>
    </div>

  );
};

export default ImageGallery;
