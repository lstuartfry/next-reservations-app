import { fetchProvider } from "@/actions/provider/fetch-provider";
import Header from "@/components/ui/headers/header";

export default async function Page() {
  const provider = await fetchProvider();

  return (
    <div>
      <Header>Welcome, {provider.name}</Header>

      {/* Schedule */}

      <div>Modify your availability</div>
    </div>
  );
}
