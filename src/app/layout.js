import { Work_Sans } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
});

export const metadata = {
  title: "Church Game App",
  description: "Created by Robin",
};

export default function RootLayout({ children }) {
  return (
    <html className="h-full" lang="en">
      <body className={`h-full ${workSans.variable} antialiased`}>
        {children}
        <ToastContainer position="top-right" />
      </body>
    </html>
  );
}
