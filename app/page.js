import Header from "../components/Header"
import HeroSection from "../components/HeroSection"
import FAQSection from "../components/FAQSection"
import Footer from "../components/Footer"
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main className="min-h-screen flex flex-col">
      <Header session={session} />
      <HeroSection session={session} />
      <FAQSection />
      <Footer />
    </main>
  )
}
