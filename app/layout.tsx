import "./globals.css";
import { CartProvider } from "./context/cart-context";
import CartSidebar from "@/components/cart-sidebar";


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body>
        <CartProvider>
          <CartSidebar />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
