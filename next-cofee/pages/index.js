import About from "@/components/templates/Index/About";
import Slider from "@/components/templates/Index/Slider";
import Services from "@/components/templates/Index/Services";
import Offer from "@/components/templates/Index/Offer";

import Menu from "@/components/templates/Index/Menu";
import Reservation from "@/components/templates/Index/reservation";
import Testimonial from "@/components/templates/Index/Testimonial";

function Index({ data }) {
  return (
    <>
      <Slider />
      <About />
      <Services services={data.services} />
      <Offer />
      <Menu data={data.menu} />
      <Reservation />
      <Testimonial />
    </>
  );
}

export async function getStaticProps() {
  const servicesResponse = await fetch(`http://localhost:4000/services`);
  const servicesData = await servicesResponse.json();

  const menusResponse = await fetch(`http://localhost:4000/menu`);
  const menusData = await menusResponse.json();

  return {
    props: {
      data: {
        services: servicesData,
        menu: menusData,
      },
    },
    revalidate: 43200,
  };
}

export default Index;
