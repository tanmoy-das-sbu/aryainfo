import data from "../../utils/data.json"
export function Service() {
  return (<>
    {
      data.map((ser, index) =>
      (<section key={index} id={ser.num} className=" w-full py-12 md:py-24 lg:py-32">
        <div className="container relative px-4 md:px-6">
          <h1 className="md:text-9xl font-extrabold tracking-tighter text-6xl text-slate-200 z-0 absolute md:top-10 md:-left-20 -top-8 ">{ser.num}</h1>
          <div
            className="flex flex-col md:flex-row items-center justify-center md:justify-between">
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="space-y-2">
                <h1 className=" relative z-10 text-3xl font-bold tracking-tighter sm:text-6xl">
                  {ser.heading}
                </h1>
                <p
                  className="max-w-[600px] text-gray-500 pt-5 md:text-xl lg:text-base xl:text-xl dark:text-gray-400">
                  {ser.description}
                </p>
              </div>
            </div>
            <img
              alt="Hero"
              className=" overflow-hidden rounded-xl object-cover object-center  "
              height="500"
              src={ser.image}
              width="500" />
          </div>
        </div>
      </section>)
      )
    }
  </>);
}
