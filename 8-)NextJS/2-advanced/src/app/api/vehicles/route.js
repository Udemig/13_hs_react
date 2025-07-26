import { NextResponse } from "next/server";

export const GET = async (req) => {
  return NextResponse.json({
    vehicles: [
      { id: 1, name: "Car" },
      { id: 2, name: "Bus" },
      { id: 3, name: "Train" },
    ],
  });
};
