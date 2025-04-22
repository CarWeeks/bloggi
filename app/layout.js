import { Press_Start_2P } from 'next/font/google';
import './globals.css';
// import '../styles/globals.css';

const pressStart = Press_Start_2P({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-press-start',
});

export const metadata = {
  title: 'bloggi',
  description: 'Welcome to the year 1999',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={pressStart.variable}>
      <body className="bg-gray-900 text-green-400 font-retro">
        {children}
      </body>
    </html>
  );
}