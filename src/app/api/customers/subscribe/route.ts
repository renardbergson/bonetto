import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    return NextResponse.json({ statusCode: 200, body });
  } catch (error) {
    return NextResponse.json({ statusCode: 500, error });
  }
}
