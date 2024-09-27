import { fetchProvider } from "@/actions/provider/fetch-provider";
import Schedule from "@/components/schedule/schedule";
import Header from "@/components/ui/headers/header";

export default async function Page() {
  const provider = await fetchProvider();

  return (
    <div className="flex flex-col text-center">
      <Header>Select a time for {provider.name}</Header>
      <Schedule
        availabilities={provider.availabilities}
        reservations={provider.reservations}
      />
    </div>
  );
}
