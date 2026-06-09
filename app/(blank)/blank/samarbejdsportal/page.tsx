
import SpAnimeredeFigurer from "@/components/SpAnimeredeFigurer";
import SpColors from "@/components/SpColors";
import SpFlyerRollup from "@/components/SpFlyerRollup";
import SpIkon from "@/components/SpIkon";
import SpInstagram from "@/components/SpInstagram";
import SpIntro from "@/components/SpIntro";
import SpLogo from "@/components/SpLogo";
import SpMerch from "@/components/SpMerch";
import SpNyhedsbrev from "@/components/SpNyhedsbrev";
import SpPosters from "@/components/SpPosters";
import SpVideo from "@/components/SpVideo";


export default function PortalPage() {

    return(
       
        <div>
            <SpIntro/>

            <SpLogo/>

            <SpColors/>
            
            <SpPosters/>

            <SpIkon/>

            <SpFlyerRollup/>
            
            <SpNyhedsbrev/>

            <SpMerch/>

            <SpAnimeredeFigurer/>

            <SpVideo/>

            <SpInstagram/>

            
        </div>
    );
}