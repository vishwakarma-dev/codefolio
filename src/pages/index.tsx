import { Hero } from "@app/components/HeroCard";
import { PortfolioDataContext } from "@app/providers/PortfolioDataProvider";
import Head from "next/head";
import { useContext } from "react";

export default function HomePage() {
  const data = useContext(PortfolioDataContext);
  const fullName = data?.USER.fullName ?? "Portfolio User";

  return (
    <>
      <Head>
        <title>{`${fullName} | Portfolio`}</title>
        <meta
          name="description"
          content={`${fullName} - Application Engineer building scalable, high-performance web solutions with .NET and React.`}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero />
      </main>
    </>
  );
}
