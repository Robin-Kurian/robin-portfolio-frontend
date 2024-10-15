import { Inter } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Mobiux Starter Project",
  description: "Starter project for Mobiux",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return <html lang='en'>{children}</html>;
}
