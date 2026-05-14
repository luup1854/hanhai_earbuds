import type { LegalPageData } from "../data/legalData";

type LegalPageProps = {
  data: LegalPageData;
};

export function LegalPage({ data }: LegalPageProps) {
  return (
    <div className="bg-neutral-950">
      <section className="relative overflow-hidden border-b border-white/10 bg-black px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(249,115,22,0.22),transparent_32%),linear-gradient(180deg,#101010,#050505)]" />
        <div className="relative mx-auto max-w-[960px]">
          <p className="text-sm font-semibold uppercase tracking-[0.26em] text-orange-400">
            {data.eyebrow}
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">{data.title}</h1>
          <div className="mt-5 h-1 w-12 rounded-full bg-orange-500" />
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-neutral-300">
            <span>更新日期：{data.updateDate}</span>
            <span>生效日期：{data.effectiveDate}</span>
          </div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <article className="mx-auto max-w-[960px] rounded-2xl border border-neutral-200 bg-white p-6 text-neutral-900 shadow-[0_24px_80px_rgba(0,0,0,0.24)] sm:p-8 lg:p-10">
          <div className="space-y-4 text-base leading-8 text-neutral-700">
            {data.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-10 space-y-10">
            {data.sections.map((section) => (
              <section key={section.title} className="border-t border-neutral-100 pt-8">
                <h2 className="text-2xl font-semibold text-neutral-950">{section.title}</h2>
                {section.paragraphs ? (
                  <div className="mt-5 space-y-4 text-base leading-8 text-neutral-700">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                ) : null}
                {section.items ? (
                  <ol className="mt-5 list-decimal space-y-3 pl-6 text-base leading-8 text-neutral-700">
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ol>
                ) : null}
              </section>
            ))}
          </div>
        </article>
      </section>
    </div>
  );
}
