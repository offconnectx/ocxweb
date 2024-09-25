const AboutUs = () => {
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
          <div className="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
            <div className="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
              <img
                className=" rounded-xl md:w-10/12 w-1/2 object-cover"
                src="/mock_3.png"
                alt="about Us image"
              />
            </div>
            <img
              className="sm:ml-0 ml-auto md:w-10/12 w-1/2 rounded-xl object-cover"
              src="/mock_4.png"
              alt="about Us image"
            />
          </div>
          <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
            <div className="w-full flex-col justify-center items-start gap-8 flex">
              <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                <h2 className="text-blue-800 text-xl font-semibold font-mono leading-normal lg:text-start text-center">
                  {`Why OCX?`}
                </h2>
                <h2 className="text-gray-900 text-4xl font-bold font-mono leading-normal lg:text-start text-center">
                  Redefining Offline Payments
                </h2>
                <p className="text-gray-500 text-base font-mono leading-relaxed lg:text-start text-center">
                  {`OCX allows users to perform secure financial transactions even
                  when they don’t have access to the internet. Whether you're in
                  an area with poor connectivity, traveling, or simply without a
                  signal, the app ensures your payments are processed seamlessly
                  and stored securely until you're back online.`}
                </p>
              </div>
              <div className="w-full lg:justify-start justify-center items-center sm:gap-10 gap-5 inline-flex">
                <div className="flex-col justify-start items-start inline-flex">
                  <h3 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">
                    {`33+`}
                  </h3>
                  <h6 className="text-gray-500 text-base font-mono leading-relaxed">
                    Offline Payments
                  </h6>
                </div>
                <div className="flex-col justify-start items-start inline-flex">
                  <h4 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">
                    {`125+`}
                  </h4>
                  <h6 className="text-gray-500 text-base font-mono leading-relaxed">
                    Secure and Reliable
                  </h6>
                </div>
                <div className="flex-col justify-start items-start inline-flex">
                  <h4 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">
                    {`52+`}
                  </h4>
                  <h6 className="text-gray-500 text-base font-mono leading-relaxed">
                    Automatic Syncing
                  </h6>
                </div>
              </div>
            </div>
            <button className="sm:w-fit w-full px-3.5 py-2 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
              <span className="px-4  text-white font-mono text-md font-semibold leading-8">
                Download
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
