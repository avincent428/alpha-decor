import React, { useState } from "react";
import "./Testimonial.css";

const Testimonials = () => {
  const [selected, setSelected] = useState([true, false, false]);
  return (
    <div>
      <div className="testimonial-container">
        <div className="name-container">
          <div
            className={
              selected[0] ? "selected testimonial-header" : "testimonial-header"
            }
            onClick={() => setSelected([true, false, false])}
          >
            <h2 className="testimonial-name">Merlyn Mathew D'Silva</h2>
          </div>
          <div
            className={
              selected[1] ? "selected testimonial-header" : "testimonial-header"
            }
            onClick={() => setSelected([false, true, false])}
          >
            <h2 className="testimonial-name">Jer Lynn Stan</h2>
          </div>
          <div
            className={
              selected[2] ? "selected testimonial-header" : "testimonial-header"
            }
            onClick={() => setSelected([false, false, true])}
          >
            <h2 className="testimonial-name">Ashley George Rajan</h2>
          </div>
        </div>

        <div className="text-container">
          <p className={selected[0] ? "" : "hide-text"}>
            I had the opportunity to work with Alpha Decor Team recently and I
            must say they went above and beyond to make all my decor dream and
            vision come to life. They delivered beyond my imagination and I was
            absolutely in awe of my decor and the ambiance they created
            throughout the entire ballroom with their creativity and eye for
            detail. My husband and I definitely had a jaw-dropping moment went
            we entered our reception ballroom. Vinod and Hena truly outdid
            themselves. Hena did an amazing job making my bouquet and the
            bouquets for my bridesmaid, she delivered beyond my imagination and
            I absolutely love that. I am so happy I gave Alpha Decor the
            opportunity to make all my decor dreams come true. Till today all
            our guests are raving about how beautiful the decor and our
            photobooth looked! Thank you so much Alpha Decor and team for making
            my day absolutely beautiful!
          </p>
          <p className={selected[1] ? "" : "hide-text"}>
            Firstly, thank you so much Vinod and team for making our big day SO
            beautiful and beyond expectations! We chose Alpha Decor because they
            were easy to communicate and work with. They worked with our likes
            and dislikes and was very open with suggesting the best outcome for
            us. Also, we have to mention that Vinod was so helpful with not only
            providing decor suggestions but also with venue recommendations. We
            were so happy and surprised to see the magical work of Vinod & his
            team. Everything was on point and on time, from setting up to
            tearing down. They offer the best prices as well while working with
            our budget. We will recommend alpha decor for any event any day!
          </p>
          <p className={selected[2] ? "" : "hide-text"}>
            Alpha Events and Decor offered us a great deal for a great price.
            Vinod Uncle and Hena Aunty were so helpful during the entire
            process. Whenever I had any changes or issues, Vinod Uncle and Hena
            Aunty were so accommodating. On the day of our wedding, everything
            looked so beautiful. I still hear comments about how beautiful
            everything looked together and I loved staring at all the photos of
            the decor. If you're looking for quality decor at an affordable
            price, my husband and I would definitely recommend Alpha Events and
            Decor.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
