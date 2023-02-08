import Image from "next/image";
import fitness from "../images/Group 3892.png";
import { BsArrowRight } from "react-icons/bs";

export default function BestFitness() {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content lg:flex-row flex-col-reverse md:flex-col-reverse">
        <Image src={fitness} className="max-w-lg rounded-lg" alt="fitness" />
        <div className="gap-lg">
          <h1 className="text-5xl">
            Best full body <br /> workout to lose fat
          </h1>
          <p className="py-6 max-w-lg">
            Exercise is a very important need for our body. Health and fitness
            will be obtained if you can do regular exercise and run a healthy
            routine. Even at home we still have to be diligent in exercising,
            either alone or with your friends at home.
          </p>
          <button className="bg-blue text-whiteText rounded-md py-2 px-2">
            Get Started
            <BsArrowRight className="inline-block text-whiteText ml-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
