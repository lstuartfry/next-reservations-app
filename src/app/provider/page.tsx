import { fetchProvider } from "@/actions/provider/fetch-provider";
import Header from "@/components/ui/headers/header";
import SubHeader from "@/components/ui/headers/subheader";
import Schedule from "@/components/schedule/schedule";

export default async function Page() {
  const provider = await fetchProvider();

  return (
    <div>
      <Header>Welcome, {provider.name}</Header>

      <div>
        <SubHeader>Modify your availability</SubHeader>
        <Schedule />
      </div>
    </div>
  );
}
