import Navbar from "./Navbar";
import Footer from "./Footer";

const Cloud = () => {
  return (
    <>
      <section className="min-h-screen py-16 cloud-overlay" id="cloud">
        <div className="container">
          <header className="flex flex-col justify-center min-h-screen text-white flow-content--m ">
            <h2 className="text-4xl font-medium">
              <span className="special">Cloud</span> Security
            </h2>
            <p className="max-w-[500px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum nisi itaque rerum laborum libero ducimus sint? Dolorem
              explicabo vel, hic omnis voluptatibus sint eligendi recusandae,
              dignissimos laboriosam tempora voluptas consectetur.
            </p>
            <a href="" className="btn btn--primary">
              Sign Up
            </a>
          </header>
        </div>
      </section>
    </>
  );
};

export default Cloud;
