import Image from "next/image";
import fitness1 from "../images/Rectangle 195 (1).png";
import fitness2 from "../images/Rectangle 195 (2).png";
import fitness3 from "../images/Rectangle 195 (3).png";
import { BsArrowRight } from "react-icons/bs";

export default function FitnessChallenge() {
  return (
    <div className="container mx-auto flex justify-center sm: stats p-5 my-5 bg-gradient-t">
      <div className="stat flex gap-2">
        <div className="text-secondary">
          <Image src={fitness1} alt="fitness" />
        </div>
        <div className=" text-whiteText text-xl">
          Get that 11 line <br /> in 30 days
          <div className="stat-desc text-whiteText text-sm my-2">
            Learn more
            <BsArrowRight className="inline-block text-whiteText ml-4" />
          </div>
        </div>
      </div>

      <div className="stat flex gap-2">
        <div className="text-secondary">
          <Image src={fitness2} alt="fitness" />
        </div>
        <div className=" text-whiteText text-xl">
          14 Days <br /> sherd challenge
          <div className="stat-desc text-whiteText text-sm my-2">
            Learn more
            <BsArrowRight className="inline-block text-whiteText ml-4" />
          </div>
        </div>
      </div>

      <div className="stat flex gap-2">
        <div className="text-secondary">
          <Image src={fitness3} alt="fitness" />
        </div>
        <div className=" text-whiteText text-xl">
          Get flat belly
          <br /> in 30 days
          <div className="stat-desc text-whiteText text-sm my-2">
            Learn more
            <BsArrowRight className="inline-block text-whiteText ml-4" />
          </div>
        </div>
      </div>
    </div>
  );
}
