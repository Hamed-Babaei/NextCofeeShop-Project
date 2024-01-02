import PageHeader from "@/components/modules/PageHeader/PageHeader";
import Pricing from "@/components/templates/Menu/Pricing";
import React from "react";

function Menu({ menu }) {
  return (
    <>
      <PageHeader route={"Menu"} />
      <Pricing data={menu} />
    </>
  );
}

export async function getStaticProps() {
  const menusResponse = await fetch(`http://localhost:4000/menu`);
  const menusData = await menusResponse.json();

  return {
    props: {
      menu: menusData,
    },
    revalidate: 60 * 60 * 12, // ? ISR in every day
  };
}

export default Menu;
