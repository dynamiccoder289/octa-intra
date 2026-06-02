import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Stats } from "@/components/site/Stats";
import { Services } from "@/components/site/Services";
import { Industries } from "@/components/site/Industries";
import { HowItWorks } from "@/components/site/HowItWorks";
import { FeaturedJobs } from "@/components/site/FeaturedJobs";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { Partners } from "@/components/site/Partners";
import { Testimonials } from "@/components/site/Testimonials";
import { Blog } from "@/components/site/Blog";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Footer } from "@/components/site/Footer";
import { FloatingActions } from "@/components/site/FloatingActions";

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Industries />
        <HowItWorks />
        <FeaturedJobs />
        <WhyChooseUs />
        <Partners />
        <Testimonials />
        <Blog />
        <CtaBanner />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}

export default App;
