import React from 'react';
import { Carousel } from 'antd';

const contentStyle = {
    width: '100%',
    height: '100%',
};

const CarouselHome = () => (
    <>
        <Carousel arrows infinite={false}>
            <div style={{ width: '100%' }}>
                <img src='/school1.jpg' style={{ contentStyle }} />
            </div>
            <div style={{ width: '100%' }}>
                <img src='/post1.jpg' style={{ contentStyle }} />
            </div>
            <div style={{ width: '100%' }}>
                <img src='/post2.jpg' style={{ contentStyle }} />
            </div>

        </Carousel>
        {/* <br /> */}
    </>
);
export default CarouselHome;