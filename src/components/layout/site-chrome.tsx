import type { ReactNode } from "react";
import { CustomCursor } from "@/components/layout/custom-cursor";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import type { Locale } from "@/constants/site";

type SiteChromeProps = {
  children: ReactNode;
  locale: Locale;
};

export function SiteChrome({ children, locale }: SiteChromeProps) {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main id="main-content" className="flex-1" tabIndex={-1}>
        {children}
      </main>
      <Footer locale={locale} />
      <WhatsAppButton />
    </>
  );
}
