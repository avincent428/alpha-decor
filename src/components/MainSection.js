import React from "react";
import "./MainSection.css";

const MainSection = () => {
  return (
    <div className="section-container">
      <section className="section" id="section-1">
        <div className="section-text" id="section-1-text">
          <h1>Dallas’ Top Event Decorator</h1>
          <p>
            Alpha Decor is a team of talented decorators that helps you create
            your ideal event. We strive to create the perfect reflection of your
            vision.
          </p>
          <br />
          <p>
            We decorate for all kinds of events including weddings, corporate
            events, and various life events.
          </p>
          <br />
          <p>
            If you’re interested in beautiful decor that creates a one-of-a-kind
            experience for events, we can help.
          </p>
        </div>

        <img
          className="section-photo"
          id="photo-1"
          src="/images/main/section-1-photo.jpeg"
          alt="wedding"
        />
      </section>

      <section className="section-alt" id="section-2">
        <div className="section-alt-text" id="section-2-text">
          <h1>5+ Years of Decorating Experience</h1>
          <p>
            When creating the perfect decor, experience makes a difference. All
            of our clients receive expert advice on what will look best and how
            to use their budget effectively.
          </p>
          <br />
          <p>
            Our goal is to create the event of your dreams - as experienced
            decorators, we’ve learned that communication is one of the most
            important factors in accomplishing this.
          </p>
          <br />
          <ul>
            <li>&nbsp;&nbsp;&nbsp;&nbsp;Experts in Event Decoration</li>
            <li>&nbsp;&nbsp;&nbsp;&nbsp;Communicative and Imaginative Staff</li>
            <li>&nbsp;&nbsp;&nbsp;&nbsp;Works Well with Hotels</li>
            <li>&nbsp;&nbsp;&nbsp;&nbsp;Friendly with Several Vendors</li>
          </ul>
        </div>
        <div className="section-alt-photo" id="photo-2"></div>
      </section>

      <section className="section" id="section-3">
        <div className="section-text" id="section-3-text">
          <h1>Luxurious Events at an Affordable Price</h1>
          <p>
            Get ready to have your dream event! Whatever your budget may be, we
            will help make your event as grand and lavish as it should be.
          </p>
          <br />
          <p>
            We strive to bring only the best. Our utmost attention and
            imagination is given to even the smallest detail to ensure your
            event looks and feels picture-perfect.
          </p>
          <br />
          <p>
            You can rest assured that every part of your decor will be taken
            care of with love and effort - no sub-standards.
          </p>
        </div>

        <img
          className="section-photo"
          id="photo-3"
          src="/images/main/section-3-photo.jpg"
          alt="wedding"
        />
      </section>

      <div className="cta" id="cta-1">
        <div className="cta-text" id="cta-1-text">
          Start Creating Your Decor Today
        </div>
        <button className="cta-button" id="cta-1-button">
          Book Your First Call
        </button>
      </div>

      <section className="section-alt" id="section-4">
        <div className="section-alt-text" id="section-4-text">
          <h1>The Best Floral Arrangements</h1>
          <p>
            Interested in adding some flowers to your event? You’ve come to the
            right place. We pride ourselves on creating floral arrangements that
            will make your guests say "wow!".
          </p>
          <br />
          <p>
            Our team specializes in making both fresh and artificial floral
            arrangements.
          </p>
        </div>

        <div className="section-alt-photo" id="photo-4"></div>
      </section>

      <section className="section" id="section-5">
        <div className="section-text" id="section-5-text">
          <h1>Work With a Team That Puts You First</h1>
          <p>
            Our number 1 focus is our clients - this means making sure we listen
            to the client’s requests and deliver a decor that exceeds their
            expectations and requirements.
          </p>
          <br />
          <p>
            Every decor is tailored to your specific needs. After our first
            meeting with clients, we make a draft of the decor and let you make
            changes as needed to ensure that we’ve met all your needs.
          </p>
        </div>
        <img
          className="section-photo"
          id="photo-5"
          src="/images/main/section-5-photo.png"
          alt="wedding"
        />
      </section>

      <div className="cta" id="cta-2">
        <div className="cta-text" id="cta-text-2">
          Have a Decor Design in Mind?
        </div>
        <button className="cta-button" id="cta-button-2">
          Get Started Today
        </button>
      </div>

      <section className="section-alt" id="section-6">
        <div className="section-alt-text" id="section-6-text">
          <h1>Bring Your Dream Wedding to Life</h1>
          <p>
            Each wedding tells a different story, a unique story told between
            two lovers. It’s a reflection of the personality and vision that the
            two have united together which results in the creation of something
            truly beautiful.
          </p>
          <br />
          <p>
            It’s a privilege to know that we’ve helped so many enjoy their
            special day to the fullest through our decorations. We’d be honored
            to help you as well.
          </p>
        </div>
        <div className="section-alt-photo" id="photo-6"></div>
      </section>

      <section className="section" id="section-7">
        <div className="section-text" id="section-7-text">
          <h1>
            Create the Perfect Environment to Celebrate Your Company and
            Colleagues
          </h1>
          <p>
            Company culture is a key to any successful business. So why not show
            your colleagues appreciation by throwing a gorgeous event for them?
          </p>
          <br />
          <p>
            Whether you’re celebrating your successes or bringing your team
            closer together, adding beautiful decor to your event shows your
            team members that they are valued and important.
          </p>
        </div>

        <img
          className="section-photo"
          id="photo-7"
          src="/images/img-home.jpg"
          alt="wedding"
        />
      </section>

      <div className="cta" id="cta-3">
        <div className="cta-text" id="cta-text-3">
          Ready to Decorate?
        </div>
        <button className="cta-button" id="cta-button-3">
          Book a Call
        </button>
      </div>
    </div>
  );
};

export default MainSection;
