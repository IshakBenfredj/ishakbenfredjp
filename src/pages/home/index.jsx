import { useEffect, useState } from "react";
import Landing from "./Landing";
import About from "./About";
import Skills from "./Skills";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Comments from "./Comments";
import LoadingPage from "../../components/Loading/loading";
import HelmetComp from "../../components/HelmetComp";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return <LoadingPage />;
  }
  return (
    <>
      <HelmetComp
        title={""}
        desc={
          "Your Destination For  Developing Your Program With Modern Technologies  And Designs, And Consulting Us About  Awesome Additions  To Your Idea So That It Keeps Pace With The Technological Development Taking Place."
        }
      />
      <Landing />
      <About />
      <Skills />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Comments />
    </>
  );
}
