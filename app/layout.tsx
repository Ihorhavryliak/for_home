import { Metadata } from "next";
import StoreProvider from "./StoreProvider";
import { Container } from "react-bootstrap";
import { Ubuntu } from "next/font/google";
import "../styles/main.scss";
const ubuntu = Ubuntu({
  weight: ["400", "500"],
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "App Home",
  description: "Generated by create next app"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={`${ubuntu.className}`}>
          <Container className="mx-auto container-max px-0 bg-blue-100">{children}</Container>
        </body>
      </html>
    </StoreProvider>
  );
}
