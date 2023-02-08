import Image from "next/image";
import howWorks from "../images/Group 3885.png";

export default function HowWorks() {
  return (
    <div className="hero">
      <div className="hero-content  lg:flex-row flex-col-reverse md:flex-col-reverse">
        <Image
          src={howWorks}
          className="max-w-lg rounded-lg "
          alt="how-works"
        />
        <div>
          <h1 className="text-5xl">How it works?</h1>
          <p className="py-3 p-2 rounded-md md:shadow-md hover:shadow-lg">
            The body becomes sick because of rarely exercise
          </p>
          <p className="py-3 shadow-sm">
            The body becomes sick because of rarely exercise
          </p>
          <p className="py-3 shadow-sm">
            Don&apos;t give up in order to get a healthy and ideal body
          </p>
        </div>
      </div>
    </div>
  );
}
