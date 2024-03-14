import OrderButton from "../../components/homepage/OrderButton";
import CarouselHomepage from "../../components/homepage/CarouselHomepage";

/**Home page which displays slogan, order explanation and pictures of the restaurant.
 *
 */
const homepage = () => {
  return (
    <div>
      <div>
        <img
          class="h-auto w-full bg-center items-center  "
          src="/homepage/HomeBannerBackground_2048.jpg"
        ></img>
      </div>
      <div>
        <img
          class="h-auto w-full bg-center items-center  "
          src="/homepage/Slogan_without_shadow.jpg"
        ></img>
        <img
          class="h-auto w-full bg-center items-center  "
          src="/homepage/OrderProcess.png"
        ></img>
        <OrderButton />
      </div>
      <CarouselHomepage />
    </div>
  );
};
export default homepage;
