import { ThemeProvider } from "@/components/Theme-provider";
import "./globals.css";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <head />
      <body className="selection:bg-primary/25">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
