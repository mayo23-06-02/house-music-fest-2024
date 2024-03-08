import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import _1 from '../../../assets/images/1x/1.png'
import _2 from '../../../assets/images/1x/2.png'
import _3 from '../../../assets/images/1x/3.png'
import _4 from '../../../assets/images/1x/4.png'
import _5 from '../../../assets/images/1x/5.png'
import _6 from '../../../assets/images/1x/6.png'
import _7 from '../../../assets/images/1x/7.png'
import _8 from '../../../assets/images/1x/8.png'
import Image from 'next/image';

export default function Artist() {
    return (
        <Carousel
            autoPlay={true}
            interval={3000}
            infiniteLoop
            showArrows={false}
            showIndicators={false}
            showStatus={false}
        >
            <div>
                <Image src={_1} width={200} height={200} alt='kk' />
            </div>
            <div>
                <Image src={_2} width={200} height={200} alt='kk' />
            </div>
            <div>
                <Image src={_4} width={200} height={200} alt='kk' />
            </div>
            <div>
                <Image src={_3} width={200} height={200} alt='kk' />
            </div>
            <div>
                <Image src={_4} width={200} height={200} alt='kk' />
            </div>
            <div>
                <Image src={_5} width={200} height={200} alt='kk' />
            </div>
            <div>
                <Image src={_6} width={200} height={200} alt='kk' />
            </div>
            <div>
                <Image src={_7} width={200} height={200} alt='kk' />
            </div>
            <div>
                <Image src={_8} width={200} height={200} alt='kk' />
            </div>
           
        </Carousel>
    );
}

