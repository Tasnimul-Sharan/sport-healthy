import Image from "next/image";
import review1 from "../images/Rectangle 259.png";

export default function Testimonials() {
  return (
    <section className="container mx-auto ">
      <h1 className="text-center font-serif text-4xl my-6">Testimonials</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
        <div className="card container mx-auto 6mx- shadow-lg">
          <p className="my-6 mx-6 max-w-md">
            “It&apos;s great to be able to work out from home and be helped by
            the gymbaran. My day feels fresher when I regularly participate in
            this fun sport. Good luck to the coaches.
          </p>
          <div className="card card-side">
            <div className="w-14 mt-5 mx-5">
              <Image className="" src={review1} alt="programs" />
            </div>

            <div className="card-body">
              <h2 className="card-title shadow-">Suketi Mantapo</h2>
              <p>Designer Graphic</p>
            </div>
          </div>
        </div>

        <div className="card container mx-auto shadow-lg">
          <p className="my-6 mx-6 max-w-md">
            “exercise used to be a boring thing for me, but after following the
            gymbaran I became fond of sports and sports became my new hobby. I
            participate in sports 5 times a week.
          </p>

          <div className="card card-side">
            <div className="w-14 mt-5 mx-5">
              <Image src={review1} alt="programs" />
            </div>

            <div className="card-body">
              <h2 className="card-title shadow-">Ada Apose</h2>
              <p>Designer Graphic</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
