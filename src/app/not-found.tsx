import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
// internal
import Wrapper from "@/layout/wrapper";
import HeaderOne from "@/layout/header/header-one";
import ils_1 from "@/assets/images/assets/ils_05.svg";
import ils_2 from "@/assets/images/assets/ils_06.svg";

export const metadata: Metadata = {
  title: "Not Found Page",
};

const NotFound = () => {
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        {/* header start */}
        <HeaderOne />
        {/* header end */}
        <main>
          <div className="error-page text-center d-flex align-items-center justify-content-center flex-column light-bg position-relative">
            <h1 className="font-magnita">404</h1>
            <h2 className="fw-bold">Page Not Found</h2>
            <p className="text-lg mb-45">
              Publishing industries for previewing layouts & visual mockups
              used.
            </p>
            <div>
              <Link href="/" className="btn-four">
                Go Back
              </Link>
            </div>
            <Image src={ils_1} alt="shape" className="lazy-img shapes shape_01"/>
            <Image src={ils_2} alt="shape" className="lazy-img shapes shape_02"/>
          </div>
        </main>
      </div>
    </Wrapper>
  );
};

export default NotFound;
