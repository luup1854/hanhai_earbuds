import { siteData } from '../data/siteData'

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8 text-sm text-neutral-400 sm:px-6 lg:px-8">
        <div className="space-y-2">
          <p className="font-medium text-white">{siteData.company.nameCn}</p>
          <p>{siteData.company.nameEn}</p>
          <p>税号：{siteData.company.taxId}</p>
          <p>{siteData.company.icp}</p>
        </div>

        <div className="flex flex-wrap gap-x-5 gap-y-2">
          {siteData.footer.links.map((link) => (
            <a key={link.label} href={link.href} className="transition hover:text-orange-400">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
