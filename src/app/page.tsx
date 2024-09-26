import Image from "next/image";
import Header from "@/components/ui/headers/header";
import SubHeader from "@/components/ui/headers/subheader";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex flex-col gap-8 items-center">
          <Header className="text-center">
            Welcome to the Reservations Portal!
          </Header>
          <SubHeader>Please select your user</SubHeader>
        </div>
      </main>
    </div>
  );
}
