import Link from "next/link";
import Header from "@/components/ui/headers/header";
import SubHeader from "@/components/ui/headers/subheader";
import { paths } from "@/paths";
import ClientSVG from "public/client.svg";
import ProviderSVG from "public/provider.svg";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center">
      <div className="flex flex-col gap-8 items-center">
        <Header className="text-center">
          Welcome to the Reservations Portal!
        </Header>
        <SubHeader>Who are you?</SubHeader>
      </div>
      <div className="mt-12 flex flex-col gap-12 items-center justify-between lg:flex-row">
        <div className="rounded-lg bg-emerald-600 px-6 py-3">
          <Link
            className="flex flex-col gap-4 items-center"
            href={paths.clientHome()}
          >
            <span className="text-lg font-bold text-white">Client</span>
            <ClientSVG className="fill-white" width={150} height={150} />
          </Link>
        </div>
        <div className="rounded-lg bg-emerald-600 px-6 py-3">
          <Link
            className="flex flex-col gap-4 items-center"
            href={paths.providerHome()}
          >
            <span className="text-lg font-bold text-white">Provider</span>
            <ProviderSVG className="fill-white" width={150} height={150} />
          </Link>
        </div>
      </div>
    </main>
  );
}
