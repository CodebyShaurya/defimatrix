import { IconBrandX, IconMail } from "@tabler/icons-react";

export default function ContactUs() {
  return (
    <div id="contact-us" className="container relative mx-auto 2xl:max-w-screen-2xl">
      <div className="lg:absolute lg:inset-0 lg:left-1/2">
        <img
          className="h-64 w-full object-contain px-8 sm:h-80 lg:absolute lg:h-full"
          src="/images/contact-us-element.svg"
          alt="contact-us-element"
        />
      </div>
      <div className="pt-16 sm:pt-24 lg:mx-auto lg:grid lg:max-w-6xl lg:grid-cols-2 lg:px-8 lg:pt-32 2xl:max-w-7xl">
        <div className="p-4 sm:rounded-3xl sm:bg-black/20 sm:p-8">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-white">Get in touch</h2>
            <p className="mt-2 text-lg leading-8 text-white/80">
              Contact us via email{" "}
              <a href="mailto:support@defimatrix.io" className="font-semibold text-purple-500">
                support@defimatrix.io
              </a>
              <br />
              or X{" "}
              <a href="https://x.com/DeFiMatrixOS" className="font-semibold text-purple-500">
                @DeFiMatrixIO.
              </a>
            </p>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:justify-start">
            <a
              className="group inline-flex items-center justify-center rounded-md border border-white bg-black px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:bg-blue-200 active:text-slate-600"
              color="white"
              href="mailto:support@defimatrix.io"
            >
              <IconMail className="mr-2 h-5 w-5 text-white" />
              Contact by email
            </a>
            <a
              className="group inline-flex items-center justify-center rounded-md border border-white bg-black px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:bg-blue-200 active:text-slate-600"
              color="white"
              href="https://x.com/DeFiMatrixOS"
            >
              <IconBrandX className="mr-2 h-5 w-5 text-white" />
              Contact on X
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
