import Link from "next/link";
import { fetchClient } from "@/actions/client/fetch-client";
import { fetchProviders } from "@/actions/provider/fetch-provider";
import Header from "@/components/ui/headers/header";
import SubHeader from "@/components/ui/headers/subheader";
import { paths } from "@/paths";
import ProviderSVG from "public/provider.svg";
import ReservationList from "@/components/reservations/reservation-list";

/*
Client homepage.
NOTE - Along with the Provider homepage, this page should also accept a client ID
which would be used in a top-level query to fetch the appropriate client user data.
*/
export default async function Page() {
  const client = await fetchClient();
  const providers = await fetchProviders();

  const pendingReservations = client.reservations?.filter(
    (reservation) => reservation.pending
  );
  const confirmedReservations = client.reservations?.filter(
    (reservation) => !reservation.pending
  );

  return (
    <div className="flex flex-col text-center">
      <Header>Welcome, {client.name}</Header>

      <div className="mt-12">
        <SubHeader>Your Reservations</SubHeader>
        <div className="mt-8">
          <div className="text-base underline">Pending</div>
          <div className="mt-4">
            <ReservationList reservations={pendingReservations} />
          </div>
        </div>
        <div className="mt-8">
          <div className="text-base underline">Confirmed</div>
          <div className="mt-4">
            <ReservationList reservations={confirmedReservations} />
          </div>
        </div>
      </div>

      <div className="mt-12">
        <SubHeader>Book a reservation</SubHeader>
        <div className="flex flex-col gap-8 mt-8 bg-emerald-600 rounded-full px-4 py-2 text-white items-center">
          {providers.map((provider) => (
            <Link
              className="flex justify-center gap-6 items-center"
              key={provider.id}
              href={paths.clientReservations(provider.id)}
            >
              <ProviderSVG className="fill-white" width={32} height={32} />
              {provider.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
