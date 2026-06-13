import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/site/Layout";

// Home page sections
import { Hero }           from "@/components/site/Hero";
import { Stats }          from "@/components/site/Stats";
import { Services }       from "@/components/site/Services";
import { Industries }     from "@/components/site/Industries";
import { HowItWorks }     from "@/components/site/HowItWorks";
import { FeaturedJobs }   from "@/components/site/FeaturedJobs";
import { WhyChooseUs }    from "@/components/site/WhyChooseUs";
import { Partners }       from "@/components/site/Partners";
import { Testimonials }   from "@/components/site/Testimonials";
import { Blog }           from "@/components/site/Blog";
import { CtaBanner }      from "@/components/site/CtaBanner";

// Sub-pages
import { FindJobPage }      from "@/pages/FindJobPage";
import { JobSearchPage }    from "@/pages/JobSearchPage";
import { UploadResumePage } from "@/pages/UploadResumePage";
import { CareerAdvicePage } from "@/pages/CareerAdvicePage";
import { JobAlertsPage }    from "@/pages/JobAlertsPage";
import { FindTalentPage }   from "@/pages/FindTalentPage";
import { IndustriesPage }   from "@/pages/IndustriesPage";
import { AboutPage }        from "@/pages/AboutPage";
import { ContactPage }      from "@/pages/ContactPage";

function HomePage() {
  return (
    <>
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
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {/* Home */}
          <Route path="/"               element={<HomePage />} />

          {/* Find a Job */}
          <Route path="/find-job"       element={<FindJobPage />} />
          <Route path="/job-search"     element={<JobSearchPage />} />
          <Route path="/upload-resume"  element={<UploadResumePage />} />
          <Route path="/career-advice"  element={<CareerAdvicePage />} />
          <Route path="/job-alerts"     element={<JobAlertsPage />} />

          {/* Find Talent */}
          <Route path="/find-talent"    element={<FindTalentPage />} />

          {/* Industries */}
          <Route path="/industries"     element={<IndustriesPage />} />

          {/* About */}
          <Route path="/about"          element={<AboutPage />} />

          {/* Contact */}
          <Route path="/contact"        element={<ContactPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
