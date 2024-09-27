import Link from "next/link";
import { fetchClient } from "@/actions/client/fetch-client";
import { fetchProviders } from "@/actions/provider/fetch-provider";
import Header from "@/components/ui/headers/header";
import SubHeader from "@/components/ui/headers/subheader";
import { paths } from "@/paths";

export default async function Page() {
  const client = await fetchClient();
  const providers = await fetchProviders();

  return (
    <main className="flex flex-col gap-16">
      <Header>Welcome, {client.name}</Header>
      <div>
        <SubHeader>Select a provider to create a new reservation</SubHeader>
        <div className="flex flex-col gap-8 mt-4">
          {providers.map((provider) => (
            <Link
              key={provider.id}
              href={paths.clientReservations(provider.id)}
            >
              {provider.name}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
