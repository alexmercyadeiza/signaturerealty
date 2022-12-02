import Header from "../components/header";
import Layout from "../components/layout";
import FooterContact from "../components/contact";
import SubFooter from "../components/subfooter";
import Footer from "../components/footer";

export default function Contact() {
  return (
    <Layout>
      <Header />
      <div className="relative h-1/2 bg-s-blue bg-cover bg-center bg-no-repeat px-12 py-20 text-white bg-blend-overlay">
        <div className="relative z-30 space-y-6 font-display text-4xl md:text-6xl">
          <div>
            We want to hear from{" "}
            <span className="italic text-s-orange">you.</span>
          </div>
        </div>
      </div>

      <div className="mb-16 grid pt-16">
        <div className="m-16 grid space-y-10 border border-s-blue p-12 md:grid-cols-3 md:space-y-0">
          <div className="col-span-3 space-y-3 pb-12">
            <div className="font-display text-4xl text-s-blue">
              Have questions?
            </div>
            <div className="font-display text-4xl font-bold italic text-s-orange">
              Speak to our team.
            </div>
          </div>
          <div className="grid h-full auto-cols-max grid-flow-col gap-10">
            <div className="border-r border-s-blue pr-10 font-tall-2 text-xl font-bold text-s-blue">
              Office
            </div>
            <div>
              Signature Realty. <br />
              3, Sankuru Close, Maitama, <br />
              Abuja, Nigeria .
            </div>
          </div>

          <div className="grid auto-cols-max grid-flow-col gap-10">
            <div className="self-start border-r border-s-blue pr-10 font-tall-2 text-xl font-bold text-s-blue">
              Call
            </div>
            <div>
              <a href="tel:+234 809 765 0000"> +234 809 765 0000 (Office)</a>
            </div>
          </div>

          <div className="grid auto-cols-max grid-flow-col gap-10">
            <div className="self-start border-r border-s-blue pr-10 font-tall-2 text-xl font-bold text-s-blue">
              Email
            </div>
            <div>
              <a href="tel:+234 809 765 0000"> +234 809 765 0000 (Office)</a>
            </div>
          </div>
        </div>
      </div>

      <FooterContact />
      <SubFooter />
      <Footer />
    </Layout>
  );
}
