import PageHeader from "@/components/modules/PageHeader/PageHeader";
import Result from "@/components/templates/Search/Result";

import React from "react";

function Search({ data }) {
  return (
    <>
      <PageHeader route={"Search"} />
      <Result searchResult={data} />
    </>
  );
}

export async function getServerSideProps(context) {
  const { query } = context;

  const response = await fetch(`http://localhost:4000/menu`);
  const data = await response.json();

  const searchResult = data.filter(
    (item) =>
      item.type.toLowerCase().includes(query.q.toLowerCase()) ||
      item.title.toLowerCase().includes(query.q.toLowerCase())
  );

  console.log("searchResult:", searchResult);
  console.log("context:", context);

  return {
    props: {
      data: searchResult,
    },
  };
}
export default Search;
