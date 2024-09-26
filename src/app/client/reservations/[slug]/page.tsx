import { fetchProvider } from "@/actions/provider/fetch-provider";

export default async function Page() {
  const provider = await fetchProvider();

  return <div></div>;
}
