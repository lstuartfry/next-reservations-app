import { fetchProvider } from "@/actions/provider/fetch-provider";
import Header from "@/components/ui/headers/header";
import SubHeader from "@/components/ui/headers/subheader";

export default async function Page() {
  const provider = await fetchProvider();

  return (
    <div className="flex flex-col text-center">
      <Header>Welcome, {provider.name}</Header>
      <div>
        <SubHeader>Modify your availability</SubHeader>
      </div>
    </div>
  );
}
