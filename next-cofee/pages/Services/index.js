import PageHeader from "@/components/modules/PageHeader/PageHeader";
import ServicesDetails from "@/components/templates/Services/ServicesDetails";
import React from "react";

function Services({ services }) {
  return (
    <>
      <PageHeader route={"Services"} />

      <ServicesDetails data={services} />
    </>
  );
}

export async function getStaticProps() {
  const servicesResponse = await fetch(`http://localhost:4000/services`);
  const servicesData = await servicesResponse.json();

  return {
    props: {
      services: servicesData,
    },
    revalidate: 60 * 60 * 12, // ? ISR => every day
  };
}

export default Services;
