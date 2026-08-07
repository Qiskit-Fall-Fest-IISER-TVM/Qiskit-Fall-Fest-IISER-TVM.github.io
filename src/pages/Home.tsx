import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { WhyAttend } from "@/components/WhyAttend";
import { Registration } from "@/components/Registration";
import { Venue } from "@/components/Venue";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <WhyAttend />
      <Registration />
      <Venue />
    </>
  );
}
