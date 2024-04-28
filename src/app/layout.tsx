import {
  ClerkProvider,
  SignInButton,
  SignOutButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import "./globals.css";
import { Inter as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";
import Link from "next/link";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenu,
} from "../components/ui/navigation-menu";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased flex items-center justify-center",
          fontSans.variable
        )}
      >
        <ClerkProvider>
          <header>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </header>

          <main>{children}</main>
        </ClerkProvider>
      </body>
    </html>
  );
}
