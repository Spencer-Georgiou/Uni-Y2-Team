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
      <div className="flex flex-col items-center justify-center w-full text-lemon font-bold bg-amber">
        <h1 className="text-3xl mt-3">Gallery</h1>
        <div className="w-full">
          <CarouselHomepage />
        </div>
      </div>
    </div>
  );
};
export default homepage;
