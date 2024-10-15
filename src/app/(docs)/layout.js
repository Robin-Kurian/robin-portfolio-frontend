import { Inter } from "next/font/google";
import Header from "@/components/common/layout/Header";
import Footer from "@/components/common/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mobiux Starter Project",
  description: "Starter project for Mobiux",
};

export default function DefaultLayout({ children }) {
  return (
    <body className={inter.className}>
      <Header />

      <div className='min-h-[calc(100vh-150px)] pt-36 lg:p-10 pb-20 bg-black text-white'>
        {children}
      </div>

      <Footer />
    </body>
  );
}
