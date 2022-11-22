export default function SubFooter() {
    return (
      <div>
        <div className="flex justify-between bg-s-blue bg-[url('https://res.cloudinary.com/damms5yog/image/upload/v1668772506/signaturerealty/abt1_fhlzww.jpg')] bg-cover text-white bg-blend-luminosity">
          <div className="hidden cursor-pointer items-center space-x-5 p-12 hover:text-s-orange md:flex">
            <svg
              clipRule="evenodd"
              className="w-7 fill-current"
              fillRule="evenodd"
              strokeLinejoin="round"
              strokeMiterlimit="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m9.474 5.209s-4.501 4.505-6.254 6.259c-.147.146-.22.338-.22.53s.073.384.22.53c1.752 1.754 6.252 6.257 6.252 6.257.145.145.336.217.527.217.191-.001.383-.074.53-.221.293-.293.294-.766.004-1.057l-4.976-4.976h14.692c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-14.692l4.978-4.979c.289-.289.287-.761-.006-1.054-.147-.147-.339-.221-.53-.221-.191-.001-.38.071-.525.215z"
                fillRule="nonzero"
              />
            </svg>
            <div className="font-tall-2 uppercase tracking-widest">home</div>
          </div>
          <div className="flex cursor-pointer items-center space-x-5 p-12 hover:text-s-orange">
            <div className="font-tall-2 uppercase tracking-widest">
              see our projects
            </div>
            <svg
              clipRule="evenodd"
              className="w-7 rotate-180 transform fill-current"
              fillRule="evenodd"
              strokeLinejoin="round"
              strokeliterlimit="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m9.474 5.209s-4.501 4.505-6.254 6.259c-.147.146-.22.338-.22.53s.073.384.22.53c1.752 1.754 6.252 6.257 6.252 6.257.145.145.336.217.527.217.191-.001.383-.074.53-.221.293-.293.294-.766.004-1.057l-4.976-4.976h14.692c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-14.692l4.978-4.979c.289-.289.287-.761-.006-1.054-.147-.147-.339-.221-.53-.221-.191-.001-.38.071-.525.215z"
                fillRule="nonzero"
              />
            </svg>
          </div>
        </div>
      </div>
    );
}