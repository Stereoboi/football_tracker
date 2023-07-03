import "./globals.css";
import { Rubik, Bangers } from "next/font/google";
import ComplexNavbar from "./components/ComplexNavbar/Navbar";
import { ThemeProvider } from "./components/MaterialTailwindReecsport";
import Provider from "./components/Provider";
import { getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]/route";
import DarkThemeProvider from "../conntext/ThemeContext";

// import { ThemeProvider } from "next-themes";

const rubick = Rubik({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-rubick",
});

const bangers = Bangers({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-bangers",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout(props: {
  children: React.ReactNode;
  // modal: React.ReactNode;
  // edit: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html className={`${(rubick.variable, bangers.variable)}`} lang="en">
      {/* <body className="text-xs  sm:text-sm lg:text-base font-rubick relative "> */}
      <DarkThemeProvider>
        <Provider>
          <ThemeProvider>
            <ComplexNavbar
              user={session?.user}
              expires={session?.expires as string}
            />
            {props.children}
            {/* {props.modal} */}
            {/* {props.edit} */}
          </ThemeProvider>
        </Provider>
      </DarkThemeProvider>
      {/* </body> */}
    </html>
  );
}
