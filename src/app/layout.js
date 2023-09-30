import './globals.css';

import Footer from '@/components/footer/Footer';
import NavBar from '@/components/navbar/NavBar';

export const metadata = {
  title: 'Lazilearning',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          <div className="wrapper">
            <NavBar />
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
