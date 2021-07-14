import Head from 'next/head'
import AboutMe from "../components/Section/AboutMe";
import NavigationBar from "../components/Navbar/NavigationBar";
import Landing from "../components/Section/Landing";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <NavigationBar />
        <Landing />
        <AboutMe />

    </>
  )
}
