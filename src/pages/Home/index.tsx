import type { JSX } from "react";
import OurNumbers from "./sections/OurNumbers";
import Testimonials from "./sections/Testimonials";
import { Partners, ScrollSpyMenu, Container } from "@components";
import Carousel from "./sections/Carousel";
import WhereAreWe from "./sections/WhereAreWe";
import ProjectThatMoveUs from "./sections/ProjectThatMoveUs";
import FAQ from "./sections/FAQ";
function Home(): JSX.Element {
  return (
    <>
      <Carousel />
      <ScrollSpyMenu />
      <Container>
        <FAQ />
        <WhereAreWe />
        <ProjectThatMoveUs />
        <OurNumbers />
        <Testimonials />
        <Partners />
      </Container>
    </>
  );
}

export default Home;
