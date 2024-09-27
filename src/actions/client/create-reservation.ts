"use server";

import { Reservation } from "@/types";

type Response = {
  status: number;
};

/* 
NOTE - currently, this function only returns a 200 status.
In production, the function body can be rewritten to communicate with a backend API
to create a reservation.
*/
export default async function createReservation(
  reservation: Partial<Reservation>
): Promise<Response> {
  console.log(reservation);
  return Promise.resolve({ status: 200 });
}
