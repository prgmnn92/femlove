import { Montserrat, Josefin_Sans, Source_Serif_Pro } from "next/font/google";

export const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

export const josefineSans = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const sourceSerif = Source_Serif_Pro({
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "300", "400", "600", "700", "900"],
});
