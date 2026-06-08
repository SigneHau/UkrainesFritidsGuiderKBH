import SpColors from "@/components/SpColors";
import SpIkon from "@/components/SpIkon";
import SpIntro from "@/components/SpIntro";
import SpLogo from "@/components/SpLogo";
import SpMerch from "@/components/SpMerch";
import SpNyhedsbrev from "@/components/SpNyhedsbrev";
import SpPosters from "@/components/SpPosters";






export default function PortalPage() {

    return(
       
        <div>
            <SpIntro/>

            <SpLogo/>

            <SpColors/>
            
            <SpPosters/>

            <SpIkon/>

            <SpNyhedsbrev/>
            
            <SpMerch/>

            
        </div>
    );
}