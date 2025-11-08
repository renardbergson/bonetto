import { NextResponse } from "next/server";

export async function GET() {
  const capModels = [
    {
      value: "promotional",
      label: "Promocional",
      src: "/caps/promotional/01.avif",
    },
    {
      value: "trucker",
      label: "Trucker",
      src: "/caps/trucker/01.jpg",
    },
    {
      value: "american",
      label: "Americano",
      src: "/caps/american/01.webp",
    },
    {
      value: "six-buds",
      label: "6 gomos",
      src: "/caps/six-buds/01.webp",
    },
    {
      value: "dad-hat",
      label: "Dad Hat",
      src: "/caps/dad-hat/01.webp",
    },
    {
      value: "bucket",
      label: "Bucket",
      src: "/caps/bucket/01.webp",
    },
    {
      value: "headband",
      label: "Viseira Esportiva",
      src: "/caps/headband/01.webp",
    },
  ];

  return NextResponse.json(capModels);
}
