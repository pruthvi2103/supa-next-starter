import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section>
        <h1 className="text-2xl">Supa Next Starter</h1>
        <p className="text">Simple Starter for fast prototyping</p>
        <ul className="list-disc">
          <li>Next 14</li>
          <li>Typescript</li>
          <li>Tailwind</li>
          <li>ShadCN</li>
          <li>React Query</li>
          <li>Supabase</li>
        </ul>
      </section>
    </main>
  );
}
