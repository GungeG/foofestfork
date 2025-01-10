import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });
// const germaniaOne = localFont({
//   src: "./fonts/GermaniaOne-Regular.ttf",
//   variable: "--font-germania-one",
//   weight: "400",
// });

export const metadata = {
  title: "Foo Fest",
  description: "Foo Fest is a festival of foo.",
};

export default function RootLayout({ children }) {
  return (
    <html className="bg-black text-white" lang="en">
      <body
        className={` antialiased`}
      >
        <Header></Header>
        {children}
        <Footer />
      </body>
    </html>
  );
}
