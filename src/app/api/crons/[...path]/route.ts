import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const maxDuration = 300;

const CLOUD_RUN_URL = "https://digdig-admin-server-204026641998.asia-northeast1.run.app";

export async function GET(
  request: NextRequest,
  { params }: { params: { path: string[] } }
) {
  const cronPath = params.path.join("/");
  
  const response = await fetch(`${CLOUD_RUN_URL}/api/crons/${cronPath}`, {
    headers: Object.fromEntries(request.headers.entries()),
  });

  return NextResponse.json(await response.json(), { status: response.status });
}
