import Head from 'next/head'
import Image from 'next/image'
import ConnectToMetamask from '../components/body/ConnectToMetamask'
import Navbar from "../components/Navbar"
import { useStateValue } from '../StateProvider';
export default function Home() {
  const [{user},dispatch]=useStateValue();
  return (
    <div >
      <Head>
        <title>CourseZila</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
     {!user && <ConnectToMetamask/>}
     
    </div>
  )
}
