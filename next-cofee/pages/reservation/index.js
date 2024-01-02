import PageHeader from "@/components/modules/PageHeader/PageHeader";
import ReservationForm from "@/components/templates/Index/reservation";
import React from "react";

function Reservation() {
  return (
    <>
      <PageHeader route="Reservation" />
      <ReservationForm />
    </>
  );
}

export default Reservation;
