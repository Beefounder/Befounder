const FAQs: React.FC = () => {
  return (
    <main className="md:px-16 px-4 mb-12">
      <h1 className="text-[#090A2A] font-semibold text-3xl md:text-5xl mt-14 mb-10 text-center">
        Frequently Asked Questions
      </h1>
      <hr className="mb-8 text-[#090A2A]" />

      <div>
        <div className="bg-[#F7F7FD] p-6 rounded-3xl mb-8 flex  md:gap-20">
          <div>
            <h2 className="text-[#090A2A] text-xl md:text-2xl font-semibold mb-5">
              What is Befounder?
            </h2>
            <p className="text-[#494A50] text-lg md:text-xl">
              Befounder is a community that connects developers, designers and
              other people with a shared interest in building and developing
              projects.
            </p>
          </div>
          <span className="text-[#090A2A] font-medium text-4xl">-</span>
        </div>

        <div className="bg-[#F7F7FD] p-6 rounded-3xl mb-8 flex md:gap-20">
          <div>
            <h2 className="text-[#090A2A] text-xl md:text-2xl font-semibold mb-5">
              How do i post an offer for others to apply?
            </h2>
            <p className="text-[#494A50] text-lg md:text-xl">
              You can publicly post an offer on the offers page. You will be
              asked to provide a project title, project description, the role
              you need for your project, Required hours, and project duration
              before posting.
            </p>
          </div>
          <span className="text-[#090A2A] font-medium text-4xl">-</span>
        </div>

        <div className="bg-[#F7F7FD] p-6 rounded-3xl mb-8 flex md:gap-20">
          <div>
            <h2 className="text-[#090A2A] text-xl md:text-2xl font-semibold mb-5">
              What types of projects are available for Offers?{" "}
            </h2>
            <p className="text-[#494A50] text-lg md:text-xl">
              Anything you can think of or need for your own project. Some
              projects like: websites, bots (WhatsApp, Discord, Slack, Telegram)
              and more.
            </p>
          </div>
          <span className="text-[#090A2A] font-medium text-4xl">-</span>
        </div>

        <div className="bg-[#F7F7FD] p-6 rounded-3xl mb-8 flex md:gap-20">
          <div>
            <h2 className="text-[#090A2A] text-xl md:text-2xl font-semibold mb-5">
              What should I name my Offer?{" "}
            </h2>
            <p className="text-[#494A50] text-lg md:text-xl">
              Keep it simple and descriptive! The name should highlight what is
              distinctive about that particular Offer. Try to think about what
              will catch someone attentive.
            </p>
          </div>
          <span className="text-[#090A2A] font-medium text-4xl">-</span>
        </div>

        <div className="bg-[#F7F7FD] p-6 rounded-3xl mb-8 flex md:gap-[44rem]">
          <div>
            <h2 className="text-[#090A2A] text-xl md:text-2xl font-semibold mb-5">
              Are there any fees for posting an Offer?{" "}
            </h2>
            <p className="text-[#494A50] text-lg md:text-xl">
              No, it’s free to post an Offer on Befounder.
            </p>
          </div>
          <span className="text-[#090A2A] font-medium text-4xl">-</span>
        </div>

        <div className="bg-[#F7F7FD] p-6 rounded-3xl mb-8 flex md:gap-20">
          <div>
            <h2 className="text-[#090A2A] text-xl md:text-2xl font-semibold mb-5">
              How do I contact the Offer Poster or the person who applied for an
              Offer?{" "}
            </h2>
            <p className="text-[#494A50] text-lg md:text-xl">
              If you have questions for the Offer Poster, you can include them
              in the application message, or reach out through any social media
              platforms linked in the user’s profile. The Poster will indicate a
              preferred communication channel (such as email) in the Offer post
              for discussions throughout the project.
            </p>
          </div>
          <span className="text-[#090A2A] font-medium text-4xl">-</span>
        </div>

        <div className="bg-[#F7F7FD] p-6 rounded-3xl mb-8 flex md:gap-20">
          <div>
            <h2 className="text-[#090A2A] text-xl md:text-2xl font-semibold mb-5">
              What if I have a dispute with Offer Poster or a problem with the
              work?{" "}
            </h2>
            <p className="text-[#494A50] text-lg md:text-xl">
              We encourage our Offer Posters and the person who applied for an
              offer to try and settle conflicts among themselves. If for any
              reason this fails, users can contact us via the “Contact Us”
              button under the “FAQ” at the bottom end of the website.
            </p>
          </div>
          <span className="text-[#090A2A] font-medium text-4xl">-</span>
        </div>
      </div>
    </main>
  );
};

export default FAQs;
