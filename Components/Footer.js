import Image from "next/image";
import foto from "../images/Group 3902 (1).png";
import foto1 from "../images/Rectangle 343 (1).png";

export default function Footer() {
  return (
    <footer className=" mt-6 footer py-6 px-6 bg-nevy text-whiteText ">
      <div>
        <div>
          <Image className="w-auto" src={foto} alt="foto" />
          <p className="my-3">
            We take care of your health with
            <br />
            regular and fun exercise
          </p>
          <div className="flex gap-2 my-3">
            <Image className="w-auto" src={foto1} alt="foto" />
            <Image className="w-auto" src={foto1} alt="foto" />
            <Image className="w-auto" src={foto1} alt="foto" />
            <Image className="w-auto" src={foto1} alt="foto" />
          </div>
        </div>
      </div>
      <div>
        <span className="footer-title text-whiteText">Program</span>
        <a className="link link-hover text-base">Workout</a>
        <a className="link link-hover text-base">Gym</a>
        <a className="link link-hover text-base">Cardio</a>
        <a className="link link-hover text-base">Zumba</a>
      </div>
      <div>
        <span className="footer-title text-whiteText">Blog</span>
        <a className="link link-hover text-base">Daily stretch</a>
        <a className="link link-hover text-base">Daily workout</a>
      </div>
      <div>
        <span className="footer-title text-whiteText">About Us</span>
        <a className="link link-hover text-base">Support</a>
        <a className="link link-hover text-base">Contact</a>
        <a className="link link-hover text-base">Address</a>
      </div>
    </footer>
  );
}
