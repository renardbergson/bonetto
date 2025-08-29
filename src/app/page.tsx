import Link from "next/link";

import { Header } from "./components/Header";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="h-full">
      <Header />

      <main className="flex h-full flex-col">
        <video
          className="h-96 w-full bg-[var(--primary-color)] shadow-2xl"
          src="/home-video.MP4"
          autoPlay
          muted
        />

        <div className="mx-auto w-[80%] flex-1 space-y-20 p-4 text-center font-light text-[var(--secondary-color)]">
          <p className="text-sm">
            Sua marca merece mais que <br /> um boné, ela merece um Bonetto
          </p>

          <Button
            className="text-1xl w-[80%] rounded-full hover:cursor-pointer hover:bg-[var(--secondary-color)] hover:text-[var(--primary-color)]"
            variant="outline"
            asChild
          >
            <Link href={"#"}>Orçamento</Link>
          </Button>

          <div>
            <span>★★★★★</span>
            <p className="mt-3 text-xs text-[var(--secondary-color)] uppercase">
              Qualidade excepcional e design exclusivo
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
