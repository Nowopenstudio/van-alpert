import Navbar from "./components/navbar";
import {client} from "./lib/sanity";
import Featured from "./components/featured";





export default async function Home() {
  return (
    <main className="w-full">
      <Featured/>
     
    </main>
  );
}
