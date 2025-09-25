import type { JSX } from "react";
import OurNumbers from "./sections/OurNumbers";
import Testimonials from "./sections/Testimonials";
import Partners from "@components/Partners";
import Carousel from "./sections/Carousel";
import WhereAreWe from "./sections/WhereAreWe";
import ProjectThatMoveUs from "./sections/ProjectThatMoveUs";
import FAQ from "./sections/FAQ";
import ScrollSpyMenu from "@components/ScrollSpyMenu";
import Container from "@components/Container";

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
        <Partners home />
      </Container>
    </>
  );
}

export default Home;
