
'use client';

import { Carousel } from 'flowbite-react';

function CarouselHomepage() {
  return (
    <div className="grid h-56 grid-cols-2 gap-4 sm:h-64 xl:h-80 2xl:h-96" style={{backgroundColor: 'gold'}}>
      <Carousel pauseOnHover slideInterval={2000}>
        <img src="/Homepage/Guac.jpg"  />
        <img src="/Homepage/Dancers.jpg" />
        <img src="/Homepage/Taco.jpg" />
        <img src="/Homepage/Quesadilla.jpg" />
      </Carousel>
      <Carousel pauseOnHover indicators={true} slideInterval={2000}>
        <img src="/Homepage/Banners.jpg"/>
        <img src="/Homepage/Poppers.jpg" />
        <img src="/Homepage/Churros.jpg"/>
        <img src="/Homepage/Spices.jpg"/>
      </Carousel>
    </div>
  );
}

export default CarouselHomepage
