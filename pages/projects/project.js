import FooterContact from "../../components/contact";
import SubFooter from "../../components/subfooter";
import Footer from "../../components/footer";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Project() {
  const router = useRouter();

  useEffect(() => {
    console.log(router.query);
  }, []);

  return (
    <>
      <div
        style={{ backgroundImage: `url(${router?.query?.image_one})` }}
        className="flex h-screen w-full flex-col justify-between bg-cover bg-center"
      >
        <div>
          <div className="pb-12">
            <div className="flex justify-between bg-[#294f74] px-12 py-5 text-white">
              <div className="space-y-2 font-tall-2 text-xs md:flex md:space-x-9 md:space-y-0">
                <div className="flex items-center space-x-1.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M0 12l11 3.1 7-8.1-8.156 5.672-4.312-1.202 15.362-7.68-3.974 14.57-3.75-3.339-2.17 2.925v-.769l-2-.56v7.383l4.473-6.031 4.527 4.031 6-22z" />
                  </svg>
                  <a href="mailto:info@signaturerealtyng.com">
                    info@signaturerealtyng.com
                  </a>
                </div>

                <div className="flex items-center space-x-1.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9.762 1.322l2.843-1.322 4.041 7.89-2.725 1.341c-.537 1.259 2.159 6.289 3.297 6.372.09-.058 2.672-1.328 2.672-1.328l4.11 7.933s-2.764 1.354-2.854 1.396c-7.861 3.59-19.101-18.259-11.384-22.282zm1.929 1.274l-1.023.504c-5.293 2.762 4.178 21.185 9.648 18.686l.972-.474-2.271-4.383-1.026.5c-3.163 1.547-8.262-8.219-5.055-9.938l1.007-.497-2.252-4.398zm-.759 18.382c-1.474 1.442-3.914 1.708-4.604.522-.47-.809-.311-1.728-.127-2.793.201-1.161.429-2.478-.295-3.71-1.219-2.077-3.897-1.983-5.906-.671l.956 1.463c.829-.542 1.784-.775 2.493-.609 1.653.388 1.151 2.526 1.03 3.229-.212 1.223-.45 2.61.337 3.968 1.331 2.294 5.054 2.047 7.29-.091-.397-.407-.789-.84-1.174-1.308z" />
                  </svg>
                  <a href="tel:+234 809 765 0000">+234 809 765 0000 (Office)</a>
                </div>
              </div>

              <div className="flex space-x-10 place-self-end self-center">
                <div className="flex items-center space-x-4 text-white">
                  <a
                    href="https://instagram.com/signaturerealtyng"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="w-4"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                    </svg>
                  </a>

                  <a
                    href="https://facebook.com/signaturerealtyng"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="w-4"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="m-12 flex grid-cols-2 justify-between">
              <div
                onClick={() => router.push("/projects")}
                className="h-24 w-24 cursor-pointer rounded-full bg-s-blue hover:bg-s-blue"
              >
                <svg
                  clipRule="evenodd"
                  fillRule="evenodd"
                  strokeLinejoin="round"
                  className="fill-current text-white"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m12.017 1.995c5.517 0 9.997 4.48 9.997 9.998s-4.48 9.998-9.997 9.998c-5.518 0-9.998-4.48-9.998-9.998s4.48-9.998 9.998-9.998zm0 1.5c-4.69 0-8.498 3.808-8.498 8.498s3.808 8.498 8.498 8.498 8.497-3.808 8.497-8.498-3.807-8.498-8.497-8.498zm-1.528 4.715s-1.502 1.505-3.255 3.259c-.147.147-.22.339-.22.531s.073.383.22.53c1.753 1.754 3.254 3.258 3.254 3.258.145.145.335.217.526.217.192-.001.384-.074.531-.221.292-.293.294-.766.003-1.057l-1.977-1.977h6.693c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-6.693l1.978-1.979c.29-.289.287-.762-.006-1.054-.147-.147-.339-.221-.53-.222-.19 0-.38.071-.524.215z"
                    fillRule="nonzero"
                  />
                </svg>
              </div>

              <div
                onClick={() => router.push("/")}
                className="cursor-pointer place-self-end self-center hover:opacity-75"
              >
                <img
                  src="https://res.cloudinary.com/damms5yog/image/upload/v1668772172/signaturerealty/SIGNATURE_2_awetyq.png"
                  className="w-48"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-5 bg-s-blue p-12 text-white">
          <div className="self-center col-span-2 font-display text-5xl capitalize">
            {router?.query?.title}
          </div>

          <div className="col-span-3 grid grid grid-cols-3 place-items-center">
            <div className="self-center font-tall-2">
              <div className="uppercase tracking-widest">Location</div>
              <div className="text-3xl capitalize">
                {router?.query?.location}
              </div>
            </div>

            <div className="self-center font-tall-2">
              <div className="uppercase tracking-widest">contract</div>
              <div className="text-3xl">Signature Realty</div>
            </div>

            <div className="self-center font-tall-2">
              <div className="uppercase tracking-widest">Project type</div>
              <div className="text-3xl capitalize"> {router?.query?.type}</div>
            </div>
          </div>
        </div>
      </div>

      {/** SUB */}
      <div className="pt-24 space-y-24">
        <div className="grid grid-cols-3 gap-16 px-12">
          <div className="space-y-9 border-l border-s-orange bg-s-blue bg-opacity-5 p-12 font-tall-2 text-lg">
            <div className="font-display text-2xl">{router?.query?.quote}</div>
            <div className="text-sm">
              <div>Signature Realty</div>
              <div>Property Developer</div>
            </div>
          </div>
          <div className="col-span-2 space-y-6 self-center">
            <div className="font-tall-2 text-2xl">
              {router?.query?.text_one}
            </div>
            <div className="font-tall-2 text-xl">{router?.query?.text_two}</div>
          </div>
        </div>

        <div
          style={{ backgroundImage: `url(${router?.query?.image_two})` }}
          className="h-[40rem] bg-s-blue bg-cover bg-top py-24"
        ></div>

        <div className="space-y-6 px-60">
          <div className="font-tall-2 text-xl">{router?.query?.text_three}</div>
          {/* <div className="font-tall-2 text-xl">
            Sitting on 715m??, the 5 Bedroom (Esuite with Terraces) Penthouse
            comes with a secured elevator access, swimming pool and mulitple
            lounges. As open-plan living with an emphasis on natural lighting
            and contemporary fixures and fitting. An exceptional home designed
            for entertainment annd may be dubbed the party penthouse of Ikoyi.
          </div> */}
        </div>

        <div className="grid grid-cols-3 gap-6">
          <div
            style={{
              backgroundImage: `url(${router?.query?.group_image_one})`,
            }}
            className="h-[30rem] bg-cover bg-center"
          ></div>
          <div
            style={{
              backgroundImage: `url(${router?.query?.group_image_two})`,
            }}
            className="h-[30rem] bg-cover bg-center"
          ></div>
          <div
            style={{
              backgroundImage: `url(${router?.query?.group_image_three})`,
            }}
            className="h-[30rem] bg-cover bg-center"
          ></div>
        </div>

        <div className="space-y-6 px-60">
          <div className="font-tall-2 text-xl">{router?.query?.text_four}</div>
        </div>

        <div
          style={{ backgroundImage: `url(${router?.query?.image_three})` }}
          className="h-[50rem] bg-[url(})] bg-cover bg-center"
        ></div>
      </div>

      <FooterContact />
      <SubFooter />
      <Footer />
    </>
  );
}
