import Image from "next/image";
import workout from "../images/Group 3883.png";
import { BsArrowRight } from "react-icons/bs";

export default function WorkOutSection() {
  return (
    <div className="hero ">
      <div className="hero-content lg:flex-row-reverse flex-col-reverse md:flex-col-reverse">
        <Image src={workout} className="max-w-lg rounded-lg" alt="workout" />
        <div className="text-start">
          <h1 className="text-5xl">
            Best full body <br /> workout to lose fat
          </h1>
          <p className="py-6">
            Exercise is a very important need for our body. Health and fitness
            will be obtained if you can do regular exercise and run a healthy
            routine. Even at home we still have to be diligent in exercising,
            either alone or with your friends at home.
          </p>
          <button className="bg-blue text-whiteText rounded-md py-2 px-2">
            Get Started
            <BsArrowRight className="inline-block ml-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
