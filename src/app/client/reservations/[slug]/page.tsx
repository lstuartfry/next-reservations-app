import { fetchProvider } from "@/actions/provider/fetch-provider";
import Schedule from "@/components/schedule/schedule";
import Header from "@/components/ui/headers/header";

export default async function Page() {
  const provider = await fetchProvider();

  return (
    <div>
      <Header>Select an available time for {provider.name}</Header>
      <Schedule
        availabilities={provider.availabilities}
        reservations={provider.reservations}
      />
    </div>
  );
}
