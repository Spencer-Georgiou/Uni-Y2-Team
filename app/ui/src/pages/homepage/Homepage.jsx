import OrderButton from "../../components/Homepage/OrderButton"
import CarouselHomepage from "../../components/Homepage/CarouselHomepage";

const homepage = () => {
    return (
        <div>
            <div>
                <img class="h-auto w-full bg-center items-center  " src="/homepage/HomeBannerBackground_2048.jpg"></img>
            </div>
            <div>
                <img class="h-auto w-full bg-center items-center  " src="/homepage/Slogan_without_shadow.jpg"></img>
                <img class="h-auto w-full bg-center items-center  " src="/homepage/OrderProcess.png"></img>
                <OrderButton />
            </div>
            <CarouselHomepage />
        </div>


    );

}
export default homepage