import type { Metadata } from "next";
import { Lato, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./theme-provider";
import { ThemeSwitcher } from "@/components/shared/ThemeSwitcher";
import { Spotlight } from "@/components/aceternity/Spotlight";
import { FloatingNav } from "@/components/aceternity/FloatingNavbar";
import { navItems } from "@/data";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Ishak's Portfolio",
  description: "Welcome To Ishak's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        <body className={lato.className}>
          <div className="dark:bg-black dark:text-white-100 bg-white-100 text-black h-full w-full">
            <>
              <Spotlight
                fill="purple"
                className="-top-32 -left-20 fixed z-[1]"
              />
            </>

            <span className="h-screen w-full dark:bg-black bg-white-100  dark:bg-grid-white/[0.02] bg-grid-black/[0.1]  flex items-center justify-center fixed top-0 left-0 z-0">
              <span className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
            </span>

            <div className=" relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 pb-20 pt-36 z-50">
              <FloatingNav navItems={navItems} />

              {children}
            </div>
          </div>

          <div className="fixed bottom-10 right-10 z-[99]">
            <ThemeSwitcher />
          </div>
        </body>
      </ThemeProvider>
    </html>
  );
}
