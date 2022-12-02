import Header from "../../components/header";
import Layout from "../../components/layout";
import FooterContact from "../../components/contact";
import SubFooter from "../../components/subfooter";
import Footer from "../../components/footer";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Projects() {
  const router = useRouter();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getProjects();
  }, []);

  const getProjects = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        "https://api.airtable.com/v0/appAkDH0mg6EfwhxY/projects",
        {
          headers: {
            Authorization: `Bearer keyQp9VYM2Kdween6`,
          },
        }
      );
      setData(res.data.records);
      console.log(res.data.records);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  const goToProject = (d) => {
    // console.log(d);
    router.push({
      pathname: "/projects/project",
      query: d,
    });
  };
  return (
    <Layout>
      <Header />

      <div className="relative h-1/2 bg-s-blue bg-cover bg-center bg-no-repeat px-12 py-20 text-white bg-blend-overlay">
        <div className="relative z-30 space-y-6 font-display text-4xl md:text-6xl">
          <div>
            Our <span className="italic text-s-orange">projects.</span>
          </div>
        </div>
      </div>

      <div className="mb-36 grid pt-16 md:pt-36">
        <div className="grid space-y-10 px-12 md:space-y-0">
          
          {loading && (
            <div className="place-self-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
               className="w-10 h-10 text-s-orange fill-current animate-spin"
                viewBox="0 0 24 24"
              >
                <path d="M0 11c.511-6.158 5.685-11 12-11s11.489 4.842 12 11h-2.009c-.506-5.046-4.793-9-9.991-9s-9.485 3.954-9.991 9h-2.009zm21.991 2c-.506 5.046-4.793 9-9.991 9s-9.485-3.954-9.991-9h-2.009c.511 6.158 5.685 11 12 11s11.489-4.842 12-11h-2.009z" />
              </svg>
            </div>
          )}

          <div className="grid-cols-2 gap-10 space-y-10 text-white md:grid md:space-y-0">
            {data?.map((d) => (
              <div
                onClick={() => goToProject(d?.fields)}
                key={d?.id}
                className="flex h-[24rem] cursor-pointer flex-col justify-between border-b-4 border-s-orange bg-s-blue hover:opacity-80"
              >
                <div
                  style={{ backgroundImage: `url(${d?.fields?.image_one})` }}
                  className="h-3/4 bg-cover bg-center"
                ></div>
                <div className="grid p-12">
                  <div className="space-y-6">
                    <div className="font-display capitalize text-2xl">
                      {d?.fields?.title}
                    </div>
                    <div className="font-tall-2 font-extralight">
                      {d?.fields?.subtitle}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <FooterContact />
      <SubFooter />
      <Footer />
    </Layout>
  );
}
