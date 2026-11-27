import type { ReactNode } from 'react';
import './globals.css';
export const metadata = {
  title: 'FILO',
  description: 'Feedback for Intentional Learning and Ownership',
};
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}
