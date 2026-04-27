import { siteData } from '../data/siteData'

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black text-neutral-400">
      <div className="bg-[radial-gradient(circle_at_16%_0%,rgba(249,115,22,0.16),transparent_30%),linear-gradient(180deg,#111_0%,#050505_100%)]">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-3">
              <img
                src={siteData.company.logo}
                alt={siteData.company.nameCn}
                className="h-12 w-12 rounded-md object-contain"
              />
              <div className="min-w-0">
                <p className="truncate text-base font-semibold text-white">{siteData.company.nameCn}</p>
                <p className="mt-1 text-xs font-medium text-neutral-500">{siteData.company.nameEn}</p>
              </div>
            </div>

            <div className="flex flex-col gap-3 text-sm lg:items-end">
              <div className="flex flex-wrap gap-x-5 gap-y-2">
                <span>税号：{siteData.company.taxId}</span>
                <span>{siteData.company.icp}</span>
              </div>

              <div className="flex flex-wrap gap-x-5 gap-y-2">
                {siteData.footer.links.map((link) => (
                  <a key={link.label} href={link.href} className="transition hover:text-orange-400">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
