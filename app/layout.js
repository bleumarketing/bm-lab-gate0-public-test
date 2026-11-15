export const metadata = {
  title: 'Gate 0 toolchain test',
  description: 'Throwaway test page. No BLEU or client content.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'system-ui, sans-serif', background: '#0A0C10', color: '#F3F0EA' }}>
        {children}
      </body>
    </html>
  );
}
