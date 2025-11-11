import { Outfit } from "next/font/google";  
import "./globals.css";
import LayoutWrapper from "@/components/LayoutWrapper";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], 
});

export const metadata = {
  title: "Titanium Dioxide Manufacturers in Germany | Salford",
  description: "Salford is one of the leading Titanium Dioxide manufacturers in Germany, offering premium-grade TiO₂ for paints, plastics, coatings, and industrial applications.",
  icons: {
    icon: "/logo.webp",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} antialiased`}>
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}
