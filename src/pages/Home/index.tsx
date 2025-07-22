import type { ReactNode } from "react";
import OurNumbers from "./sections/OurNumbers";
import Testimonials from "./sections/Testimonials";
import Partners from "./sections/Partners";
import Carousel from "./sections/Carousel";
import WhereAreWe from "./sections/WhereAreWe";
import ProjectThatMoveUs from "./sections/ProjectThatMoveUs";

function Home(): ReactNode {
  return (
    <>
      <Carousel />
      <WhereAreWe />
      <ProjectThatMoveUs />
      <OurNumbers />
      <Testimonials />
      <Partners />
    </>
  );
}

export default Home;
