import Link from "next/link";
import { Button } from "@/components/ui/button";

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
  return (
    <div className="max-w-7xl mx-auto px-6">

      {/* LOG UD (til forsiden) */}
      <div className="flex justify-end mr-6 -mt-20 mb-20">
    <Link href="/">
      <Button variant="purple">
        Log ud
      </Button>
    </Link>
  </div>

      <SpIntro />

      <SpLogo />

      <SpColors />

      <SpPosters />

      <SpIkon />

      <SpFlyerRollup />

      <SpNyhedsbrev />

      <SpMerch />

      <SpAnimeredeFigurer />

      <SpVideo />

      <SpInstagram />

    </div>
  );
}