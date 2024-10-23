import About from "@/components/About";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Roadmap from "@/components/Roadmap";
import SubscribeForm from "@/components/SubscribeForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <Hero />
      <About />
      <Blog />
      <Roadmap />
      <SubscribeForm />
      <Footer />
    </main>
  );
}
