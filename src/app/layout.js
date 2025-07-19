import "./globals.css";
const metadata = {
  title: "Fiscal App",
  description: "A simple fiscal application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
