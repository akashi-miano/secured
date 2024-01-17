const Contact = () => {
  return (
    <section className="py-16 bg-center bg-no-repeat bg-cover bg-contact">
      <div className="container flex items-center justify-center w-full min-h-screen">
        <form action="" className="flow-content--s contact">
          <header className="text-white">
            <h2 className="text-4xl font-medium">
              <span className="special">Contact</span> Us
            </h2>
          </header>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            className="w-full p-2 bg-filter"
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-2"
            id="email"
          />
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            cols="30"
            rows="10"
            placeholder="Enter your message"
            className="w-full p-2"
          ></textarea>
          <button className="btn btn--primary" type="submit">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
