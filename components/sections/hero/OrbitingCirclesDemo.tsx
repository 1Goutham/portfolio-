/* eslint-disable no-unused-vars */
import OrbitingCircles from "../../ui/orbiting-circles";
import Image from "next/image";

// Updated imports for your new icons
import Icon1 from "../../../public/assets/icon1.png";
import Icon2 from "../../../public/assets/icon2.png";
import Icon3 from "../../../public/assets/icon3.png";
import Icon4 from "../../../public/assets/icon4.png";

export function OrbitingCirclesDemo() {
  return (
    <div className="relative hidden h-[500px] w-full flex-col items-center justify-center overflow-hidden sm:flex">
      
      {/* Inner Orbit Icons */}
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        duration={20}
        delay={20}
        radius={80}
      >
        <Image src={Icon1} alt="icon1" />
      </OrbitingCircles>

      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        duration={20}
        delay={10}
        radius={80}
      >
        <Image src={Icon2} alt="icon2" />
      </OrbitingCircles>

      {/* Outer Orbit Icons */}
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={190}
        duration={20}
        reverse
      >
        <Image src={Icon3} alt="icon3" />
      </OrbitingCircles>

      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={190}
        duration={20}
        delay={20}
        reverse
      >
        <Image src={Icon4} alt="icon4" />
      </OrbitingCircles>
    </div>
  );
}
