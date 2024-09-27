"use server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { Reservation } from "@/types";
import { paths } from "@/paths";

type Response = {
  status: number;
};

/* 
NOTE - currently, this function only returns a 200 status.
In production, the function body can be rewritten to communicate with a backend API
to create a reservation.
On success, it will redirect back to the client page.
*/
export default async function createReservation(
  reservation: Partial<Reservation>
): Promise<Response> {
  try {
    console.log(reservation);
    return Promise.resolve({ status: 200 });
  } catch (error) {
    // handle error state
    console.error(error);
  } finally {
    // revalidate the client page to ensure newly-created reservation is displayed (once connected to server)
    revalidatePath(paths.clientHome());
    redirect(paths.clientHome());
  }
}
