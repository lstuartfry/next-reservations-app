import { fetchProvider } from "@/actions/provider/fetch-provider";
import ReservationList from "@/components/reservations/reservation-list";
import Header from "@/components/ui/headers/header";
import SubHeader from "@/components/ui/headers/subheader";
import Availability from "@/components/availability/availability";

/*
Provider homepage.
NOTE - Along with the Client homepage, this page should also accept a provider ID
which would be used in a top-level query to fetch the appropriate provider user data.
*/
export default async function Page() {
  const provider = await fetchProvider();

  const confirmedReservations = provider.reservations?.filter(
    (reservation) => !reservation.pending
  );

  return (
    <div className="flex flex-col text-center">
      <Header>Welcome, {provider.name}</Header>
      <div className="mt-8">
        <div className="text-base underline">Reservations</div>
        <div className="mt-4">
          <ReservationList reservations={confirmedReservations} />
        </div>
      </div>
      <div className="mt-12">
        <SubHeader>Modify your availability</SubHeader>
        <Availability />
      </div>
    </div>
  );
}
