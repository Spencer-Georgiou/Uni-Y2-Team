import OrderButton from "../../components/Homepage/OrderButton"
import NavBarHomepage from "../../components/Homepage/NavBarHomepage";
import CarouselHomepage from "../../components/Homepage/CarouselHomepage";

const homepage = () => {
    return(
        <div>
            <NavBarHomepage />
            <div>
                <img class="h-auto w-full bg-center items-center  " src="/Homepage/HomeBannerBackground.png"></img>
            </div>
            <div>
                <img class="h-auto w-full bg-center items-center  " src="/Homepage/PullSilla.png"></img>
                <img class="h-auto w-full bg-center items-center  " src="/Homepage/OrderProcess.png"></img>
                <OrderButton />
            </div>
            <CarouselHomepage />

        </div>
        

    );

}
export default homepage