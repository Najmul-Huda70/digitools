import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-[#101727]">
        <div className="container  mx-auto pt-25 pb-10 text-white">
          <div className="flex flex-col text-center md:text-start md:grid grid-cols-8 pb-8 gap-5">
            <div className="col-span-3 space-y-3">
              <h3 className="text-3xl font-semibold">DigiTools</h3>
              <p className="mx-auto w-[80%]">
                Premium digital tools for creators, professionals, and
                businesses. Work smarter with our suite of powerful tools.
              </p>
            </div>
            <div>
              <h4 className="text-xl">Product</h4>
              <ul>
                <li>Features</li>
                <li>Pricing</li>
                <li>Templates</li>
                <li>Integrations</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl">Company</h4>
              <ul>
                <li>About</li>
                <li>Blog</li>
                <li>Careers</li>
                <li>Press</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl">Resources</h4>
              <ul>
                <li>Documentation</li>
                <li>Help Center</li>
                <li>Community</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="col-span-2">
              <h4 className="text-xl">Social Links</h4>
              <ul>
                <li>
                  <a href=""></a>
                  <a href=""></a>
                  <a href=""></a>
                  <a href=""></a>
                </li>
              </ul>
            </div>
          </div>
          <hr className="h-0.5 text-gray-700  w-full" />
          <div className="flex text-center md:text-start gap-4 flex-col md:flex-row justify-between text-lg pt-5 text-gray-400">
            <span>© 2026 Digitools. All rights reserved.</span>
            <div className="flex flex-col text-center md:text-start md:flex-row gap-5 justify-between">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
              <span>Cookies</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
