import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    ok: true,
    fullName: "Sippakom Khammisawang",
    studentId: "650610813",
  });
};
