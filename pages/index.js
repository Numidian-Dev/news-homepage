import Head from "next/head";
import Nav from "../components/nav";
import Spotlight from "../components/spotlight";
import TopArticle from "../components/topArticle";

export default function Home() {
  return (
    <main>
      <Head>
        <link rel="shortcut icon" href="/favicon/favicon-32x32.png" />
      </Head>
      <Nav />
      <Spotlight />
      <TopArticle />
      <div className="attribution">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Frontend Mentor{" "}
        </a>
        . Coded by <a href="#">Kutami</a>.
      </div>
    </main>
  );
}
