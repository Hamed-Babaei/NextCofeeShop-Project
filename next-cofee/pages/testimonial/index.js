import PageHeader from "@/components/modules/PageHeader/PageHeader";
import Comments from "@/components/templates/Testimonial/Comments";
import React from "react";

function Testimonial({ comment }) {
  return (
    <>
      <PageHeader route={"Testimonial"} />
      <Comments data={comment} />
    </>
  );
}
export async function getStaticProps() {
  const commentsResponse = await fetch(`http://localhost:4000/comments`);
  const commentsData = await commentsResponse.json();

  return {
    props: {
      comment: commentsData,
    },
    revalidate: 60 * 60 * 12,
  };
}
export default Testimonial;
