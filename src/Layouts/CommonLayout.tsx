import type { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";



interface IProps {
  children: ReactNode;
}

const CommonLayout = ({ children }: IProps) => {
  return (
    <div className="min-h-screen flex flex-col container mx-auto px-6">
      <Navbar />
      <div className="grow-1"> {children}</div>
      <Footer />
    </div>
  );
};

export default CommonLayout;