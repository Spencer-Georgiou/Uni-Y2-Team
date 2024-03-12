'use client';

import { Carousel } from 'flowbite-react';

{/*Displays pictures of the restaurant on two carousels.*/}
function CarouselHomepage() {
  return (
    <div className="grid h-56 grid-cols-2 gap-2 sm:h-64 xl:h-80 2xl:h-96 bg-lemon py-3 pl-3 pr-3">
      <Carousel pauseOnHover slideInterval={2000}>
        <img src="/Homepage/Guac_1024.jpg" />
        <img src="/Homepage/Dancers_1024.jpg" />
        <img src="/Homepage/Taco_1000.jpg" />
        <img src="/Homepage/Quesadilla_1000.jpg" />
      </Carousel>
      <Carousel pauseOnHover indicators={true} slideInterval={2000}>
        <img src="/Homepage/Banners_1000.jpg" />
        <img src="/Homepage/Poppers_1024.jpg" />
        <img src="/Homepage/Churros_1000.jpg" />
        <img src="/Homepage/Spices_1000.jpg" />
      </Carousel>
    </div>
  );
}

export default CarouselHomepage
