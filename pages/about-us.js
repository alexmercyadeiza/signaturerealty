import FooterContact from "../components/contact";
import Footer from "../components/footer";
import Header from "../components/header";
import Layout from "../components/layout";
import SubFooter from "../components/subfooter";

export default function About() {
  return (
    <Layout>
      <Header />

      <div className="relative h-1/2 bg-s-blue bg-cover bg-center bg-no-repeat px-12 py-20 text-white bg-blend-overlay">
        <div className="relative z-30 space-y-11 font-display text-4xl md:text-6xl">
          <div>
            A proven years of <span className="italic text-s-orange">dedication.</span>
          </div>
        </div>
      </div>

      <div className="mb-36 grid place-items-center pt-16 md:pt-36">
        <div className="grid space-y-10 px-12 md:grid-cols-3 md:space-y-0">
          <div>
            <div className="font-tall-2 text-sm uppercase tracking-widest">
              our signature hallmark
            </div>
            <div className="font-display text-4xl">
              Quality by <span className="italic">design.</span>
            </div>
          </div>

          <div className="col-span-2 grid-cols-2 gap-10 space-y-10 text-white md:grid md:space-y-0">
            <div className="flex h-[20rem] flex-col justify-between bg-s-blue">
              <div className="grid p-12">
                <div className="space-y-6">
                  <div className="font-display text-2xl">Quality</div>
                  <div className="font-tall-2 font-extralight">
                    We build to a consistently high standard across all our
                    projects.
                  </div>
                </div>
              </div>
              <div className="h-1/3 bg-[url('https://res.cloudinary.com/damms5yog/image/upload/v1668772445/signaturerealty/quality_ojnvmz.jpg')] bg-cover bg-center"></div>
            </div>

            <div className="flex h-[20rem] flex-col justify-between bg-s-orange">
              <div className="grid p-12">
                <div className="space-y-6">
                  <div className="font-display text-2xl">Value</div>
                  <div className="font-tall-2 font-extralight">
                    We challenge the market to ensure we deliver value for money
                    at all times.
                  </div>
                </div>
              </div>
              <div className="h-1/2 bg-[url('https://res.cloudinary.com/damms5yog/image/upload/v1668772465/signaturerealty/value_chmsnf.jpg')] bg-cover bg-center"></div>
            </div>

            <div className="flex h-[20rem] flex-col justify-between bg-s-orange">
              <div className="grid p-12">
                <div className="space-y-6">
                  <div className="font-display text-2xl">Unique</div>
                  <div className="font-tall-2 font-extralight">
                    We build unique properties in a range of styles.
                  </div>
                </div>
              </div>
              <div className="h-1/2 w-full bg-[url('https://res.cloudinary.com/damms5yog/image/upload/v1669072089/signaturerealty/uique_bincxw.jpg')] bg-cover bg-center"></div>
            </div>

            <div className="flex h-[20rem] flex-col justify-between bg-s-blue">
              <div className="grid p-12">
                <div className="space-y-6">
                  <div className="font-display text-2xl">Flexible</div>
                  <div className="font-tall-2 font-extralight">
                    We offer flexible services to meet the needs of our clients,
                    whether they are individuals, architects or developers. We
                    do more than build
                  </div>
                </div>
              </div>
              <div className="h-1/2 bg-[url('https://res.cloudinary.com/damms5yog/image/upload/v1668772493/signaturerealty/flexible_wavy95.jpg')] bg-cover bg-center"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-16 grid md:mb-36">
        <div className="grid pb-14 md:grid-cols-3">
          <div className="bg-s-orange p-16">
            <div className="font-display text-4xl text-white">
              We do more than build <span className="italic">luxury </span>{" "}
              homes.
            </div>
          </div>

          <div className="col-span-2 grid grid-cols-2 bg-slate-50 p-16 text-black">
            <div className="col-span-2 grid md:grid-cols-2 md:border-b">
              <div className="space-y-8 pb-16 md:border-r md:pr-16">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-12 fill-current text-s-orange"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 4v12h-20v-12h20zm2-2h-24v16h24v-16zm-7 18h-10v2h10v-2z" />
                </svg>
                <div className="font-display text-2xl capitalize">
                  Technology
                </div>
                <div className="font-tall-2 text-sm font-extralight">
                  The mechanical and electrical installation doesn&rsquo;t just cover
                  your plugs and taps, it has to allow for the technological
                  world which we live in. Smart Home solutions can touch on just
                  about every aspect of a new home, from wifi streaming of your
                  favourite content to fully integrated intelligent home
                  automation, we can provide the right level of installation to
                  meet your needs and budget. We offer a wide range of options
                  when it comes to the Mechanical & Electrical installation of
                  your new home, whether you already have a design or you want
                  to explore your options.
                </div>
              </div>

              <div className="space-y-8 md:pl-16 md:pb-16">
                <svg
                  className="w-12 fill-current text-s-orange"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                >
                  <path d="M10.5 24h-7c-1.4 0-2.5-1.14-2.5-2.5v-11.64c-.662-.473-1-1.201-1-1.941 0-.376.089-.75.289-1.129 1.065-1.898 2.153-3.783 3.265-5.654.462-.737 1.211-1.136 2.045-1.136.635 0 .972.204 1.445.479.662.386 9 5.352 12.512 7.441.087.052 3.366 1.988 3.449 2.045.663.49.995 1.197.995 1.934 0 .375-.092.745-.295 1.13-1.064 1.899-2.153 3.784-3.265 5.655-.577.92-1.615 1.29-2.496 1.088-.392.234-5.826 3.75-6.252 3.968-.413.212-.762.26-1.192.26m-7.5-10.763v8.263c0 .274.221.5.5.5h4.588c-1.72-2.906-3.417-5.827-5.088-8.763m1.606-1.238c.053.092 5.681 9.797 5.726 9.859.108.139.299.181.455.098.164-.092 5.081-3.251 5.081-3.251-.639-.377-8.144-4.851-11.262-6.706m.659-9.829c-.913 1.456-3.199 5.525-3.235 5.61-.07.171-.008.366.149.464.201.12 16.023 9.547 16.177 9.571.151.022.297-.045.377-.174.942-1.584 3.206-5.55 3.232-5.601.069-.172.007-.367-.15-.465-.201-.12-15.983-9.499-16.09-9.546-.18-.074-.365-.002-.46.141m1.557 2.695c1.104 0 2 .897 2 2 0 1.104-.896 2-2 2s-2-.896-2-2c0-1.103.896-2 2-2" />
                </svg>
                <div className="font-display text-2xl capitalize">
                  Interior Design
                </div>
                <div className="font-tall-2 text-sm font-extralight">
                  Working closely with our bespoke clients, we can advise you on
                  your interiors and finishes, designing layouts for furniture
                  and lighting, as well as taking you to see different
                  suppliers. It&rsquo;s our job to keep you well-informed, which
                  means Oakbridge Bespoke will co-ordinate between departments
                  to make sure everything is running smoothly.
                </div>
              </div>
            </div>

            <div className="col-span-2 grid md:grid-cols-2">
              <div className="space-y-8 pb-16 pt-16 md:border-r md:pr-16">
                <svg
                  className="w-16 fill-current text-s-orange"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.925l-.976 2.014-2.217.305 1.615 1.552-.395 2.204 1.973-1.057 1.973 1.056-.393-2.203 1.613-1.552-2.217-.305-.976-2.014zm-7.807 0l-.976 2.014-2.217.305 1.615 1.552-.395 2.204 1.973-1.057 1.973 1.056-.393-2.203 1.613-1.552-2.217-.305-.976-2.014zm15.614 0l-.976 2.014-2.217.305 1.615 1.552-.395 2.204 1.973-1.057 1.973 1.056-.393-2.203 1.613-1.552-2.217-.305-.976-2.014zm-8.307 3.52l-.512-.491.702-.097.31-.639.31.639.703.097-.511.491.125.699-.627-.335-.625.334.125-.698zm-7.807 0l-.512-.491.702-.097.31-.639.31.639.703.097-.511.491.125.699-.627-.335-.625.334.125-.698zm15.614 0l-.512-.491.702-.097.31-.639.31.639.703.097-.511.491.125.699-.627-.335-.625.334.125-.698zm1.693-4.445h-17.997l-.003-1.162c-.009-2.446.372-3.273 2.938-3.858 2.661-.601 3.739-.995 3.126-2.123-1.718-3.16-2.043-5.94-.916-7.828.769-1.29 2.175-2.029 3.852-2.029 1.666 0 3.06.729 3.828 1.999 1.126 1.865.811 4.654-.89 7.854-.632 1.194.621 1.56 3.159 2.135 2.512.573 2.913 1.406 2.903 3.868v1.144zm-16.996-1h15.992c.013-1.965.071-2.536-2.121-3.037-1.783-.404-3.465-.786-3.974-1.89-.229-.499-.178-1.067.151-1.688 1.529-2.878 1.854-5.317.917-6.87-.59-.977-1.645-1.515-2.969-1.515-1.334 0-2.397.547-2.99 1.541-.94 1.572-.607 4.001.936 6.84.336.619.392 1.187.165 1.687-.505 1.108-2.257 1.505-3.952 1.888-2.171.495-2.167.949-2.155 3.044z" />
                </svg>
                <div className="font-display text-2xl capitalize">
                  Customer care
                </div>
                <div className="font-tall-2 text-sm font-extralight">
                  Through rigorous on site management, with close attention to
                  detail throughout the project, we produce high quality homes
                  which people aspire to own. Our dedicated site team ensure
                  that your home is impeccably finished to the highest
                  standards.
                </div>
              </div>

              <div className="space-y-7 md:pl-16 md:pt-16">
                <svg
                  className="w-12 fill-current text-s-orange"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 357.96 497.78"
                >
                  <path d="M179,218.12a11.16,11.16,0,0,0,11.18-11.18V179a11.19,11.19,0,0,0-22.37,0v28A11.16,11.16,0,0,0,179,218.12Z" />
                  <path d="M235.69,192.15A11.19,11.19,0,1,0,253.79,179l-16.43-22.62a11.19,11.19,0,1,0-18.11,13.15Z" />
                  <path d="M113.24,196.77a11.15,11.15,0,0,0,9.05-4.62l16.44-22.62a11.19,11.19,0,0,0-18.11-13.15L104.19,179a11.18,11.18,0,0,0,9,17.76Z" />
                  <path d="M305.6,52.35A179.08,179.08,0,0,0,0,179V486.6a11.2,11.2,0,0,0,11.18,11.18H346.77A11.2,11.2,0,0,0,358,486.6V179A177.91,177.91,0,0,0,305.6,52.35Zm30,213.32H302V218.12h33.56ZM290.85,288h44.74v47.54H232.11V288ZM220.93,358H335.59V405.5H162.2V358Zm-42-275,36.21,36.21a114.82,114.82,0,0,1-72.41,0ZM22.37,179a156.71,156.71,0,0,1,145.43-156V62.47l-52.66,52.66a11.19,11.19,0,0,0,2.91,17.92,136.89,136.89,0,0,0,121.87,0,11.19,11.19,0,0,0,2.91-17.92L190.17,62.47V22.91A156.07,156.07,0,0,1,335.6,179v16.78H290.85a11.18,11.18,0,0,0-11.18,11.18v58.73H220.94a11.2,11.2,0,0,0-11.19,11.19v58.73H151a11.16,11.16,0,0,0-11.18,11.18v58.73H81.11a11.18,11.18,0,0,0-11.18,11.19v58.73H22.38ZM335.59,475.41H92.29V427.87h243.3Z" />
                </svg>

                <div className="font-display text-2xl capitalize">
                  Basements
                </div>
                <div className="font-tall-2 text-sm font-extralight">
                  In recent years the majority of our projects have included
                  basements to give clients the opportunity to maximise their
                  homes and the luxury of; cinemas, games rooms, wine stores,
                  gyms, golf simulators, swimming pools and even car lifts to
                  subterranean garaging. Sometimes all of those and more.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-36 grid">
        <div className="grid space-y-16 px-12 pb-14 md:grid-cols-3">
          <div className="md:w-2/3">
            <div className="font-tall-2 text-sm uppercase tracking-widest">
              Not forgetting the past.
            </div>
            <div className="font-display text-4xl text-s-orange">
              Our <span className="italic">history </span>.
            </div>
          </div>

          <div className="col-span-2">
            <div className="border-b pb-10 font-tall-2 md:text-xl">
              Founded by{" "}
              <span className="font-display font-semibold italic">
                Tunde R. Olomolehin,
              </span>{" "}
              Since its inception, Signature Realty has developed a passion for
              Diversity, Imagination, and Vibrancy which is strongly reflected
              in its prestigious portfolio of contemporary individual homes. By
              developing the way we live today, Signature Realty has a choice
              for the Development, Sales, and Marketing of unique family
              dwellings.
            </div>
            <div className="grid gap-10 md:grid-cols-3">
              <div className="border-b pb-10 pt-10 pr-0 font-tall-2 font-light md:border-r md:border-b-0 md:py-10 md:pr-10 md:pb-0">
                Signature Realty&rsquo;s approach to its projects is to acquire,
                develop and manage properties for{" "}
                <span className="font-display italic">
                  long-term ownership and growth.
                </span>
              </div>
              <div className="border-b pr-10 pb-10 font-tall-2 font-light md:border-b-0 md:border-r md:py-10 md:pb-10">
                <span className="font-display italic">
                  {" "}
                  Its corporate philosophy is to maintain an entrepreneurial
                  staff
                </span>{" "}
                to carefully select new opportunities that maintain a healthy
                rate of growth.
              </div>
              <div className="font-tall-2 font-light md:py-10">
                <span className="font-display italic">
                  {" "}
                  The company engages the services of experienced,
                </span>{" "}
                outside consultants while maintaining a hands-on approach,
                supervising the development of its projects.
              </div>
            </div>
          </div>

          <div className="col-span-2"></div>
        </div>
      </div>

      <FooterContact />
      <SubFooter />
      <Footer />
    </Layout>
  );
}
