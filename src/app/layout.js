import './globals.css';

export const metadata = {
  title: 'Lazilearning',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
