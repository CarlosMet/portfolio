import Hero from "./components/Hero";
import Navbar from "./components/Navbar";


export default function Home() {
  return (
    <main className="px-6 lg:px-16 xl:px-20 2xl:px-56">
      <Navbar />
      <Hero />
    </main>
  )
}
