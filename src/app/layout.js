import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header";
import Provider from "./Provider";
import Navbar from "./components/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IMdb Clone",
  description: "This is a movie db clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Header />
          <Navbar />
          {children}
        </Provider>
      </body>
    </html>
  );
}
