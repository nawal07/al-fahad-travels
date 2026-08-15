import { getTranslations } from "next-intl/server";
import type { Locale } from "@/constants/site";
import { MotionWrapper } from "@/components/animations/motion-wrapper";
import { InquiryForm } from "@/components/forms/inquiry-form";
import { PageHeader } from "@/components/layout/page-header";
import { SectionWrapper } from "@/components/layout/section-wrapper";

export async function InquiryPageContent({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: "pages.inquiry" });

  return (
    <>
      <PageHeader
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("description")}
      />

      <SectionWrapper>
        <div className="mx-auto max-w-2xl">
          <MotionWrapper>
            <div className="rounded-xl border border-border bg-card border border-pearl/8 p-6 shadow-soft lg:p-10">
              <p className="text-sm text-muted">{t("formIntro")}</p>
              <div className="mt-6">
                <InquiryForm />
              </div>
            </div>
          </MotionWrapper>
        </div>
      </SectionWrapper>
    </>
  );
}
