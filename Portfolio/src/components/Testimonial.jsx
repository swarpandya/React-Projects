import React from "react";

const Testimonial = () => {
  return (
    <div id="testimonial">
      <h2>Testimonial</h2>

      <section>
        <TestimonialCard
          name={"Swar"}
          feedback={"your education is your biggest strength"}
        />
        <TestimonialCard
          name={"Rohan"}
          feedback={"Your skills are appreciable"}
        />
        <TestimonialCard
          name={"Dhrumil"}
          feedback={"Your confidence is your key"}
        />
      </section>
    </div>
  );
};

const TestimonialCard = ({ name, feedback }) => (
  <article>
    <img
      src="https://www.caehm.com/wp-content/uploads/2020/12/Person-Icon-e1626540139554.png"
      alt="User"
    />
    <h4>{name}</h4>
    <p>{feedback}</p>
  </article>
);

export default Testimonial;
