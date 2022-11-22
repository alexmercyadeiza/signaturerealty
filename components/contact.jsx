export default function FooterContact() {
    return (
      <div className="border-t">
        <div className="justify-between bg-cover text-black bg-blend-luminosity md:flex">
          <div className="flex cursor-pointer items-center space-x-5 p-12 hover:text-s-orange">
            <div className="font-display text-2xl">
              Let&rsquo;s talk; arrange a visit to find out more.
            </div>
          </div>
          <div className="px-12 pb-12 pr-12 md:p-12">
            <div className="flex cursor-pointer items-center space-x-5 hover:text-s-orange">
              <div className="font-tall-2">
                <span className="font-bold">Call:</span>
                <a href="tel:+2348097650000">+234 809 765 0000</a>
              </div>
            </div>
            <div className="flex cursor-pointer items-center space-x-5 hover:text-s-orange">
              <div className="font-tall-2">
                <span className="font-bold">Email:</span>
                <a href="mailto:info@signaturerealtyng.com">
                  info@signaturerealtyng.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}