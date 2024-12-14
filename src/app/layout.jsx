import localFont from 'next/font/local';
import './globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata = {
  title: 'Grds fori sketch..',
  description: 'Grds fori sketch...',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
