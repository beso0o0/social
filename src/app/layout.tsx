"use client";

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ReactNode } from "react";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from "@emotion/react";
import theme from "./Theme";
import Navbar from "./_Components/Navbar/page";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { Box } from "@mui/material";
import { Toaster } from "react-hot-toast";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});



export default function RootLayout({children}:{children: ReactNode} ){
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
       
     <Provider store={store}>
     <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <Box>
            <Navbar/>
          {children}


            </Box>
            <Toaster/>
          </ThemeProvider>

        </AppRouterCacheProvider>
       
       


     </Provider>
     
     
      </body>
    </html>
  );
}
