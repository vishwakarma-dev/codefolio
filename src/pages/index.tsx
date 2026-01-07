import Head from 'next/head';
import { Hero } from '@app/components/HeroCard';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Vaibhav Satokar | Portfolio</title>
        <meta
          name="description"
          content="Vaibhav Satokar — Application Engineer building scalable, high-performance web solutions with .NET and React."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Page content only — layout already provides <main> */}
      <main>
        <Hero />
      </main>
    </>
  );
}
