import React, { useState } from 'react'
import InvestCalculator from './InvestCalculator'
import LotCostCalculator from './LotCostCalculator'
import TargetMoneyCalculator from './TargetMoneyCalculator'
import { EffectCube, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import './styles.css';

const Container = () => {
    return (
        <div >
            <Swiper
                effect={'cube'}
                grabCursor={true}
                cubeEffect={{
                    shadow: true,
                    slideShadows: true,
                    shadowOffset: 20,
                    shadowScale: 0.94,
                }}
                modules={[EffectCube, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <InvestCalculator />
                </SwiperSlide>
                <SwiperSlide>
                    <LotCostCalculator />
                </SwiperSlide>
                <SwiperSlide>
                    <TargetMoneyCalculator />
                </SwiperSlide>
            </Swiper>
        </div>

    )
}

export default Container