import Image from "next/image";
import program1 from "../images/Rectangle 197 (1) (1).png";
import program2 from "../images/Rectangle 199 (2) (1).png";
import program3 from "../images/Rectangle 201 (1).png";
import program4 from "../images/Rectangle 198 (1) (1).png";
import program5 from "../images/Rectangle 200 (1) (1).png";
import program6 from "../images/Rectangle 202 (2) (1).png";

export default function OurPrograms() {
  return (
    <section className="container mx-auto">
      <h1 className="text-center font-serif text-4xl my-6">
        Programs that can <br /> be taken
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="card card-side shadow-xl">
          {/* w-14 mt-5 mx-5 */}
          <div className="w-32 mt-5">
            {/* <div className="w-6"> */}
            <Image src={program1} className="" alt="programs" />
            {/* </div> */}
          </div>
          <div className="card-body">
            <h2 className="card-title">Gets ABS in 2 weeks</h2>
            <p>Exercise is a very important need for our body.</p>
          </div>
        </div>
        <div className="card card-side shadow-xl">
          {/* <div className="avatar"> */}
          <div className="w-24 mt-5">
            <Image src={program2} alt="programs" />
          </div>
          {/* </div> */}
          <div className="card-body">
            <h2 className="card-title">25 Mins full body workout</h2>
            <p>Exercise is a very important need for our body. </p>
          </div>
        </div>
        <div className="card card-side shadow-xl">
          {/* <div className="avatar"> */}
          <div className="w-24 mt-5">
            <Image src={program3} alt="programs" />
          </div>
          {/* </div> */}
          <div className="card-body">
            <h2 className="card-title">10 Mins toned arms workout</h2>
            <p>Exercise is a very important need for our body. </p>
          </div>
        </div>
        <div className="card card-side shadow-xl">
          {/* <div className="avatar"> */}
          <div className="w-24 mt-5">
            <Image src={program4} alt="programs" />
          </div>
          {/* </div> */}
          <div className="card-body">
            <h2 className="card-title">15 Mins full body fat burn</h2>
            <p>Exercise is a very important need for our body. </p>
          </div>
        </div>
        <div className="card card-side bg-base-100 shadow-xl">
          {/* <div className="avatar"> */}
          <div className="w-24 mt-5">
            <Image src={program5} alt="programs" />
          </div>
          {/* </div> */}
          <div className="card-body">
            <h2 className="card-title">25 Mins HIIT workout</h2>
            <p>Exercise is a very important need for our body. </p>
          </div>
        </div>
        <div className="card card-side bg-base-100 shadow-xl">
          {/* <div className="avatar"> */}
          <div className="w-24 mt-5">
            <Image src={program6} alt="programs" />
          </div>
          {/* </div> */}
          <div className="card-body">
            <h2 className="card-title">Intense lower Abs workout</h2>
            <p>Exercise is a very important need for our body.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
