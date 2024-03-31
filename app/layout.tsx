import React from "react";
import { Roboto } from "next/font/google";
import { Metadata } from "next";
import "./globals.css";
import "slick-carousel/slick/slick.css";
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

const metadata: Metadata = {
  title: "Liwonde Private Medical Hospital",
  description: "Providing comprehensive medical services in Malawi.",
  keywords: "Liwonde, Medical, Hospital, Pharmacy, Dental, X-ray",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Hospital",
  name: "Liwonde Medical Clinic",
  description:
    "A leading private clinic in Malawi providing high-quality medical services.",
  url: "https://liwondemedicalclinic.com",
  logo: "https://liwondemedicalclinic.com/logo.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Main Street",
    addressLocality: "Liwonde",
    addressRegion: "Southern Region",
    postalCode: "12345",
    addressCountry: "Malawi",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+265 1 234 5678",
    contactType: "Customer support",
  },
};

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description?.toString()} />
        <meta name="keywords" content={metadata.keywords?.toString()} />
        <title>{metadata.title?.toString()}</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
          integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </head>
      <body className={roboto.className}>{children}
      </body>
    </html>
  );
};

export default React.memo(RootLayout);
