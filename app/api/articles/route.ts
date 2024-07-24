import { data } from '@/app/lib/api-data';

export async function GET() {
  return Response.json({ data });
}
