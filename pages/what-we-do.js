import FooterContact from "../components/contact";
import Footer from "../components/footer";
import Header from "../components/header";
import Layout from "../components/layout";
import SubFooter from "../components/subfooter";
import SubHeaderWwd from "../components/wwd/subheader";
import DesignBuild from "../components/wwd/designbuild";
import ArchEng from "../components/wwd/archeng";
import SalesMkt from "../components/wwd/salesmkt";
import { useState } from "react";

export default function WhatWeDo() {
  const [data, setData] = useState({
    main: true,
    design: false,
    arch: false,
    sales: false,
  });

  const toggleDesign = () => {
    setData({ ...data, main: false, design: true, arch: false, sales: false });
  };

  const toggleArch = () => {
    setData({ ...data, main: false, design: false, arch: true, sales: false });
  };

  const toggleSales = () => {
    setData({ ...data, main: false, design: false, arch: false, sales: true });
  };

  return (
    <Layout>
      <Header />

      <div className="relative h-1/2 bg-s-blue bg-cover bg-center bg-no-repeat px-12 py-20 text-white bg-blend-overlay">
        <div className="relative z-30 space-y-6 font-display text-4xl md:text-6xl">
          <div>
            <span className="italic text-s-orange">Creative</span> excellence.
          </div>
          <div>
            Quality <span className="italic text-s-orange">builds.</span>
          </div>
        </div>
      </div>

      {data.main && (
        <div className="mb-36 grid place-items-center pt-16 md:pt-36">
          <div className="grid space-y-10 px-12 md:grid-cols-3 md:space-y-0">
            {/* <!-- <div>
        <div className="font-tall-2 text-sm uppercase tracking-widest">our signature hallmark</div>
        <div className="font-display text-4xl">Quality by <span className="italic">design.</span></div>
      </div> --> */}

            <div className="col-span-3 grid font-tall-2 grid-cols-3 pb-10">
              <div className="flex items-center">
                <div className="grid h-12 w-14 place-items-center place-self-start rounded-full bg-s-blue text-white">
                  1
                </div>
                <div className="h-0 w-full border-b border-s-blue"></div>
              </div>
              <div className="flex items-center">
                <div className="grid h-12 w-14 place-items-center place-self-start rounded-full bg-s-orange text-white">
                  2
                </div>
                <div className="h-0 w-full border-b border-s-orange"></div>
              </div>
              <div className="flex items-center">
                <div className="grid h-12 w-14 place-items-center place-self-start rounded-full bg-s-blue text-white">
                  3
                </div>
                <div className="h-0 w-full border-b border-s-blue"></div>
              </div>
            </div>

            <div className="col-span-3 grid-cols-3 gap-2 space-y-10 text-white md:grid md:space-y-0">
              <div
                onClick={() => toggleDesign()}
                className="flex h-[24rem] cursor-pointer hover:opacity-90 flex-col justify-between border-b-4 border-s-orange bg-s-blue"
              >
                <div className="grid p-12">
                  <div className="space-y-6">
                    <div className="font-display text-2xl">Design + Build</div>
                    <div className="font-tall-2 font-extralight">
                      We guide you through your project from beginning to end,
                      either delivering a design you&rsquo;ve had commissioned
                      or starting from the very beginning.
                    </div>
                  </div>
                </div>
                <div className="h-1/3 bg-[url('https://res.cloudinary.com/damms5yog/image/upload/v1668772445/signaturerealty/quality_ojnvmz.jpg')] bg-cover bg-center"></div>
              </div>

              <div
                onClick={() => toggleArch()}
                className="flex h-[24rem] cursor-pointer hover:opacity-90 flex-col justify-between border-b-4 border-s-blue bg-s-orange"
              >
                <div className="grid p-12">
                  <div className="space-y-6">
                    <div className="font-display text-2xl">
                      Architecture + Engineering
                    </div>
                    <div className="font-tall-2 font-extralight">
                      With our team of diverse professionals, we have the
                      experience and track record in working on multiple areas
                      of a development from Architectural designs.
                    </div>
                  </div>
                </div>
                <div className="h-1/3 bg-[url('https://res.cloudinary.com/damms5yog/image/upload/v1668772465/signaturerealty/value_chmsnf.jpg')] bg-cover bg-center"></div>
              </div>

              <div
                onClick={() => toggleSales()}
                className="flex h-[24rem] cursor-pointer hover:opacity-90 flex-col justify-between border-b-4 border-s-orange bg-s-blue"
              >
                <div className="grid p-12">
                  <div className="space-y-6">
                    <div className="font-display text-2xl">
                      Sales & Marketing of Projects Developed
                    </div>
                    <div className="font-tall-2 font-extralight">
                      We deliver a fully integrated marketing and sales
                      presentation program of our projects to high end clients
                      and their brand through creative development.
                    </div>
                  </div>
                </div>
                <div className="h-1/3 bg-[url('https://res.cloudinary.com/damms5yog/image/upload/v1668772493/signaturerealty/flexible_wavy95.jpg')] bg-cover bg-center"></div>
              </div>
            </div>
          </div>
        </div>
      )}

      {!data.main && (
        <>
          <SubHeaderWwd
            d={data}
            design={toggleDesign}
            arch={toggleArch}
            sales={toggleSales}
          />

          {data.design && <DesignBuild />}

          {data.arch && <ArchEng />}

          {data.sales && <SalesMkt />}
        </>
      )}

      <FooterContact />
      <SubFooter />
      <Footer />
    </Layout>
  );
}
