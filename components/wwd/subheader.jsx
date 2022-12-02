export default function SubHeaderWwd({ d, design, arch, sales }) {
  const active =
    "grid place-content-center bg-s-orange p-6 font-display capitalize italic text-white";
  const inactive =
    "grid cursor-pointer place-content-center p-6 font-tall-2 capitalize text-black hover:bg-s-orange hover:font-display hover:italic hover:text-white";

  return (
    <>
      <div className="mx-12 mt-36 mb-16 grid grid-cols-3 overflow-hidden rounded-2xl border border-s-orange bg-gray-100 text-xl">
        <div onClick={design} className={d.design ? active : inactive}>
          design + build
        </div>
        <div onClick={arch} className={d.arch ? active : inactive}>
          Architecture + engineering
        </div>
        <div onClick={sales} className={d.sales ? active : inactive}>
          Sales & marketing of Projects developed
        </div>
      </div>
    </>
  );
}
