"use server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { Availability } from "@/types";
import { paths } from "@/paths";

type Response = {
  status: number;
};

/* 
NOTE - currently, this function only returns a 200 status.
In production, the function body can be rewritten to communicate with a backend API
to create a span of availability.
On success, it will redirect back to the provider page.
*/
export default async function createAvailability(
  availability: Availability
): Promise<Response> {
  try {
    console.log(availability);
    return Promise.resolve({ status: 200 });
  } catch (error) {
    // handle error state
    console.error(error);
  } finally {
    // revalidate the provider page to ensure newly-created availability span is displayed (once connected to server)
    revalidatePath(paths.providerHome());
    redirect(paths.providerHome());
  }
}
