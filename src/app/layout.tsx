import type { Metadata } from "next";
import { AuthProvider, QueryProvider } from "@/libs";
import { Inter } from "next/font/google";
import { FC, PropsWithChildren, ReactElement } from "react";
import { Maintenance } from "@/modules";
import "@/styles/global.css";

const inter = Inter({ subsets: ["latin"] });

const description =
  "Elevate your booking process with our NextJS Reservation System Management. Fast, user-friendly, and efficient - perfect for hotels, restaurants, and event planners.";

export const metadata: Metadata = {
  title: "Reservation Management System | Seamless Booking Experience",
  description,
  icons: {
    icon: "/icon.png",
  },
  keywords: ["hotel", "restaurant", "event", "booking", "reservation", "booking management"],
  openGraph: {
    title: "Reservation Management System | Seamless Booking Experience",
    description,
    url: "https://reservation-management.vercel.app/",
    images: [
      {
        url: "https://reservation-management.vercel.app/api/og",
        width: 1200,
        height: 630,
      },
    ],
    siteName: "Reservation Management System",
    locale: "en-US",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

const isMaintenance = process.env.NEXT_PUBLIC_MAINTENANCE_MODE === "1";

const RootLayout: FC<PropsWithChildren> = ({ children }): ReactElement => {
  return (
    <html lang="en">
      <body className={inter.className}>
        {isMaintenance ? (
          <Maintenance />
        ) : (
          <AuthProvider>
            <QueryProvider>{children}</QueryProvider>
          </AuthProvider>
        )}
      </body>
    </html>
  );
};

export default RootLayout;
