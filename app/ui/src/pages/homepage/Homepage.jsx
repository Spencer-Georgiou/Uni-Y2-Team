import OrderButton from "../../components/Homepage/OrderButton"
import CarouselHomepage from "../../components/Homepage/CarouselHomepage";

const homepage = () => {
    return (
        <div>
            <div>
                <img class="h-auto w-full bg-center items-center  " src="/homepage/HomeBannerBackground.png"></img>
            </div>
            <div>
                <img class="h-auto w-full bg-center items-center  " src="/homepage/Slogan.png"></img>
                <img class="h-auto w-full bg-center items-center  " src="/homepage/OrderProcess.png"></img>
                <OrderButton />
            </div>
            <CarouselHomepage />
        </div>


    );

}
export default homepage