import { motion } from "framer-motion";
import Header from "../components/header";
import Layout from "../components/layout";
import FooterContact from '../components/contact';
import SubFooter from "../components/subfooter";
import Footer from "../components/footer";

export default function Home() {
  return (
    <>
      <Layout>
        <Header />

        <div className="relative h-screen bg-gray-600 bg-[url('https://res.cloudinary.com/damms5yog/image/upload/v1668772391/signaturerealty/lowerbd_elv1kb.jpg')] bg-cover bg-center bg-no-repeat md:px-40 px-12 py-20 text-white bg-blend-overlay">
          <div className="absolute top-0 left-0 z-10 h-full w-full overflow-hidden">
            <video
              className="absolute min-h-full min-w-full object-cover"
              src="https://res.cloudinary.com/damms5yog/video/upload/v1668779053/signaturerealty/pexels-kindel-media-7578552_oebce0.mp4"
              type="video/mp4"
              autoPlay
              muted
              loop
            ></video>
          </div>

          <div className="relative z-30 md:w-1/4 space-y-11 font-display text-6xl">
            <div>
              Designed with <span className="italic">you</span> in mind.
            </div>
            <div className="flex items-center space-x-2">
              <a
                href="#"
                className="font-tall-2 text-sm font-medium uppercase tracking-widest"
              >
                view projects
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="mb-36 grid place-items-center pt-16">
          <div className="grid h-[40rem] px-12 md:px-0 md:w-2/3 md:grid-cols-2 md:bg-slate-50">
            <div className="">
              <div className="grid md:h-1/2 place-items-center md:px-20 p-10">
                <div className="space-y-6">
                  <div className="font-display text-4xl">Design + Build</div>
                  <div className="font-tall-2 text-lg">
                    The design, craft & construction of your luxury home to
                    specification.
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="font-tall-2 text-sm font-medium uppercase tracking-widest">
                      learn more
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="hidden md:flex h-1/2 bg-[url('https://res.cloudinary.com/damms5yog/image/upload/v1668772406/signaturerealty/bp1_hxh9yk.jpg')] bg-cover bg-center"></div>
            </div>

            <div className="">
              <div className="h-1/2 bg-[url('https://res.cloudinary.com/damms5yog/image/upload/v1668772424/signaturerealty/des_ax7ydd.jpg')] bg-cover bg-center"></div>
              <div className="grid md:h-1/2 place-items-center md:px-20 p-10 md:p-0">
                <div className="space-y-6">
                  <div className="font-display text-4xl">
                    Architecture + Engineering
                  </div>
                  <div className="font-tall-2  text-lg">
                    Have planned designs? Let&rsquo;s work collaboratively to build
                    your bespoke home.
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="font-tall-2 text-sm font-medium uppercase tracking-widest">
                      learn more
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <FooterContact />
        <SubFooter />
        <Footer />
      </Layout>
    </>
  );
}
