import banner from "../images/Group 4227.png";
import brand from "../images/Group 3888.png";
// import brand2 from "../images/Mask Group (1).png";
// import brand3 from "../images/Mask Group (2).png";
// import brand4 from "../images/Mask Group (3).png";
import { IoIosArrowDropright } from "react-icons/io";
import { BsPlayCircleFill } from "react-icons/bs";
import Image from "next/image";

export default function Banner() {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content  lg:flex-row-reverse flex-col-reverse md:flex-col-reverse">
        <Image className="max-w-full rounded-lg" src={banner} alt="hhh" />
        <div>
          <h2 className="mt-16 font-serif text-5xl text-white">
            Healthy in side <br /> <span className="text-sky"> fresh </span> out
            side
          </h2>
          <p>
            Exercise is a very important need for our body. Health and <br />{" "}
            fitness will be obtained if you can do regular exercise and <br />{" "}
            run a healthy routine.
          </p>
          <div className="my-5 flex gap-4">
            <button className="bg-blue text-whiteText rounded-md py-2 px-2">
              Get Started <IoIosArrowDropright className="inline-block ml-4" />
            </button>
            <button className="bg-whiteText shadow-md text-blue rounded-md py-2 px-2">
              <BsPlayCircleFill className="inline-block mr-2" />
              learn more
            </button>
          </div>
          <div>
            <p>Brands:</p>

            <div class="flex max-w-sm my-2 gap-4">
              <Image className=" rounded" src={brand} alt="brand" />
            </div>
          </div>
        </div>
      </div>
    </div>

    // <div className="mt-3 flex container mx-auto">
    //   <div>
    // <h2 className="mt-16 text-4xl text-white">
    //   Healthy in side <br /> <span className="text-sky"> fresh </span> out
    //   side
    // </h2>
    // <p>
    //   Exercise is a very important need for our body. Health and <br />{" "}
    //   fitness will be obtained if you can do regular exercise and <br /> run
    //   a healthy routine.
    // </p>
    //     {/* <div className="mx-5"> */}
    //     {/* <button class="bg-blue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    //       Button
    //       <IoIosArrowDropright />
    //     </button> */}
    //     <div className="flex">
    //       <button class="bg-blue rounded-lg text-white text-start px-6">
    //         Button
    //         <IoIosArrowDropright className="text-neutral-50 mx-5" />
    //       </button>
    //     </div>
    //     {/* </div> */}
    //   </div>
    //   <div>
    // <Image className="w-5/6 h-full" src={banner} alt="hhh" />
    //   </div>
    // </div>
  );
}

// const Banner = () => {
//   return (
//     <div className="mt-3 flex">
//       <h2 className=" text-sm mt-16 shadow-lg md:text-6xl text-white  font-semibold">
//         Experience Life Through Photos
//       </h2>
//       <img className="mx-auto -mt-16" src={banner} alt="hhh" />
//     </div>
//   );
// };

// export default Banner;
