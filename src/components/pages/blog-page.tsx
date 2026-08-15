import { getTranslations } from "next-intl/server";
import type { Locale } from "@/constants/site";
import { MotionWrapper } from "@/components/animations/motion-wrapper";
import { PageHeader } from "@/components/layout/page-header";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { LinkButton } from "@/components/ui/link-button";
import { ROUTES } from "@/constants/routes";

export async function BlogPageContent({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: "pages.blog" });

  return (
    <>
      <PageHeader
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("description")}
      />
      <SectionWrapper>
        <MotionWrapper className="mx-auto max-w-xl text-center">
          <p className="text-lg text-muted">{t("comingSoon")}</p>
          <div className="mt-8">
            <LinkButton href={ROUTES.contact} variant="outline">
              {t("cta")}
            </LinkButton>
          </div>
        </MotionWrapper>
      </SectionWrapper>
    </>
  );
}
