import Link from "next/link";
import { fetchClient } from "@/actions/client/fetch-client";
import { fetchProviders } from "@/actions/provider/fetch-provider";
import Header from "@/components/ui/headers/header";
import SubHeader from "@/components/ui/headers/subheader";
import { paths } from "@/paths";
import ProviderSVG from "public/provider.svg";

export default async function Page() {
  const client = await fetchClient();
  const providers = await fetchProviders();

  return (
    <div className="flex flex-col text-center">
      <Header>Welcome, {client.name}</Header>
      <div className="mt-12">
        <SubHeader>Select a provider</SubHeader>
        <div className="flex flex-col gap-8 mt-8 bg-emerald-600 rounded-full px-4 py-2 text-white items-center">
          {providers.map((provider) => (
            <Link
              className="flex justify-center gap-6"
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
