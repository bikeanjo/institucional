import type { JSX } from "react";
import OurNumbers from "./sections/OurNumbers";
import Testimonials from "./sections/Testimonials";
import Partners from "../Components/Partners";
import Carousel from "./sections/Carousel";
import WhereAreWe from "./sections/WhereAreWe";
import ProjectThatMoveUs from "./sections/ProjectThatMoveUs";
import FAQ from "./sections/FAQ";

function Home(): JSX.Element {
  return (
    <>
      <Carousel />
      <FAQ />
      <WhereAreWe />
      <ProjectThatMoveUs />
      <OurNumbers />
      <Testimonials />
      <Partners home />
    </>
  );
}

export default Home;
