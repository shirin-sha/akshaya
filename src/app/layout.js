import { DM_Sans } from "next/font/google";
import "./globals.css";
import "../assets/vendors/bootstrap/css/bootstrap.min.css";
import "../assets/vendors/slick/slick.css";
import "../assets/vendors/animation/animate.min.css";
import "../assets/vendors/font-awesome/css/all.min.css";
import "../assets/vendors/icon/font/flaticon_loan.css";
import "../assets/vendors/nouislider/css/nouislider.min.css";
import "../assets/vendors/nouislider/css/nouislider.pips.css";
import "../assets/vendors/youtube-popup/youtube-popup.css";
import "../assets/css/style.css";
import "../assets/css/responsive.css";

const dm_Sans = DM_Sans({
  variable: "--font-DM_Sans",
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata = {
  title: {
    default: "Alshaya Enterprises",
    template: "%s | Alshaya Enterprises",
  },
  description:
    "Alshaya Enterprises delivers interior solutions, commercial equipment and project support across Kuwait and the GCC.",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" type="image/png" href="./favicon.ico" />
      <body className={`${dm_Sans.variable}`}>
        {children}
      </body>
    </html>
  );
}
