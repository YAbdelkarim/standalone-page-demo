import { Metadata } from "next";
import dynamic from "next/dynamic";

const AgentDetails = dynamic(() => import("./AgentDetailsClient"), {
  loading: () => <p style={{ padding: 24 }}>Loading…</p>,
});

export const revalidate = 60;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const pretty = decodeURIComponent(slug).replace(/-/g, " ");
  return {
    title: `Agent — ${pretty}`,
    description: `Standalone demo: agent details page for ${pretty}`,
  };
}

export default function Page() {
  return <AgentDetails />;
}
