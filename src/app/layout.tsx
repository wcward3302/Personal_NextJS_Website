import "./globals.css";

import Navbar from './nav'; // adjust the path based on the file structure


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>

        <header style = {{ backgroundColor: 'blue', padding: '10px' }}>
          <Navbar />
        </header>
        
        {children}

        <header style = {{ backgroundColor: 'lightblue', padding: '10px' }}>
          <h1>Footer</h1>
        </header>
        
        </body>
    </html>
  );
}
