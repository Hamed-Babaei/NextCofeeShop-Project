import About from "@/components/templates/Index/About";
import Slider from "@/components/templates/Index/Slider";
import Services from "@/components/templates/Index/Services";
import Offer from "@/components/templates/Index/Offer";

import Menu from "@/components/templates/Index/Menu";
import Reservation from "@/components/templates/Index/reservation";
import Testimonials from "@/components/templates/Index/Testimonials";

function Index({ data }) {
  return (
    <>
      <Slider />
      <About />
      <Services services={data.services} />
      <Offer />
      <Menu data={data.menu} />
      <Reservation />
      <Testimonials data={data.comments} />
    </>
  );
}

export async function getStaticProps() {
  const servicesResponse = await fetch(`http://localhost:4000/services`);
  const servicesData = await servicesResponse.json();

  const menusResponse = await fetch(`http://localhost:4000/menu`);
  const menusData = await menusResponse.json();

  const commentsResponse = await fetch(`http://localhost:4000/comments`);
  const commentsData = await commentsResponse.json();

  return {
    props: {
      data: {
        services: servicesData,
        menu: menusData,
        comments: commentsData,
      },
    },
    revalidate: 60 * 60 * 12,
  };
}

export default Index;
