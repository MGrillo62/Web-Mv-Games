import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import KeyData from "@/components/KeyData";
import Launches from "@/components/Launches";
import Catalog from "@/components/Catalog";
import ClientLogin from "@/components/ClientLogin";
import Contact from "@/components/Contact";
import { prisma } from "@/lib/prisma";

// Incremental Static Regeneration (ISR) - Refreshes the cache in the
// background every 1 hour. A shorter interval (e.g. 60s) causes Railway
// to constantly re-render the page and triggers "Failed to find Server Action"
// errors when a new deploy invalidates the previous bundle's action hashes.
export const revalidate = 3600;


export default async function Home() {
  // Concurrent database queries
  const [launches, products] = await Promise.all([
    prisma.launch.findMany({
      orderBy: {
        createdAt: "desc",
      },
    }),
    prisma.product.findMany({
      orderBy: {
        name: "asc",
      },
    }),
  ]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <KeyData />
        <Launches data={launches} />
        <Catalog products={products} />
        <ClientLogin />
        <Contact />
      </main>
    </div>
  );
}
