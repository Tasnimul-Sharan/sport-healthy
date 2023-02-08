import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Banner from "@/Components/Banner";
import HealthArticle from "@/Components/HealthArticle";
import BestFitness from "@/Components/BestFitness";
import WorkOutSection from "@/Components/WorkOutSection";
import Header from "@/Components/Header";
import HowWorks from "@/Components/HowWorks";
import OurPrograms from "@/Components/OurPrograms";
import Testimonials from "@/Components/Testimonials";
import Footer from "@/Components/Footer";
import FitnessChallenge from "@/Components/FitnessChallenge";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <HealthArticle />
      <FitnessChallenge />
      <BestFitness />
      <WorkOutSection />
      <HowWorks />
      <OurPrograms />
      <Testimonials />
      <Footer />
    </div>
  );
}
