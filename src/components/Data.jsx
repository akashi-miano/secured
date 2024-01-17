import dataImg from "../assets/data-bg.png";
import Navbar from "./Navbar";
import Footer from "./Footer";
const Data = ({ recovery = false }) => {
  return (
    <>
      <section
        className={
          recovery
            ? "bg-center bg-no-repeat bg-cover bg-recovery py-32 text-white h-screen"
            : "py-16 !bg-none"
        }
        id="recovery"
      >
        <div className="container grid justify-center gap-4 md:grid-cols-2 item-center">
          <header
            className={
              recovery
                ? "h-full flex flex-col justify-center flow-content--m"
                : "flow-content--m"
            }
          >
            <h2 className="text-4xl font-medium">
              <span className="special">Data</span> Recovery
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum nisi itaque rerum laborum libero ducimus sint? Dolorem
              explicabo vel, hic omnis voluptatibus sint eligendi recusandae,
              dignissimos laboriosam tempora voluptas consectetur.
            </p>
            <a href="" className="btn btn--primary">
              Sign Up
            </a>
          </header>
          <div className={recovery ? "hidden" : "img-wrapper order-[-1]"}>
            <img
              src={dataImg}
              alt="Data recovery img"
              className="w-full mx-auto"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Data;
