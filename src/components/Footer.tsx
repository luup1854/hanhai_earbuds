import { Building2, FileText, Mail, MapPin, Phone } from 'lucide-react'
import { siteData } from '../data/siteData'

const contactItems = [
  {
    label: '电话',
    value: siteData.company.phone,
    icon: Phone,
  },
  {
    label: '邮箱',
    value: siteData.company.email,
    icon: Mail,
  },
  {
    label: '地址',
    value: siteData.company.addressCn,
    icon: MapPin,
  },
  {
    label: '税号',
    value: siteData.company.taxId,
    icon: FileText,
  },
]

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black text-neutral-400">
      <div className="bg-[radial-gradient(circle_at_20%_0%,rgba(249,115,22,0.16),transparent_32%),linear-gradient(180deg,#111_0%,#050505_100%)]">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_1.4fr] lg:items-start">
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <img
                  src={siteData.company.logo}
                  alt={siteData.company.nameCn}
                  className="h-12 w-12 rounded-md object-contain"
                />
                <div className="min-w-0">
                  <p className="truncate text-base font-semibold text-white">
                    {siteData.company.nameCn}
                  </p>
                  <p className="mt-1 text-xs font-medium text-neutral-500">
                    {siteData.company.nameEn}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 text-sm leading-6">
                <Building2 className="mt-1 h-5 w-5 shrink-0 text-orange-500" />
                <p>{siteData.company.addressEn}</p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {contactItems.map((item) => {
                const Icon = item.icon

                return (
                  <div
                    key={item.label}
                    className="rounded-lg border border-white/10 bg-white/[0.03] p-4"
                  >
                    <div className="mb-3 flex items-center gap-2 text-sm font-medium text-white">
                      <Icon className="h-4 w-4 text-orange-500" />
                      {item.label}
                    </div>
                    <p className="text-sm leading-6 text-neutral-400">{item.value}</p>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              <span>{siteData.company.icp}</span>
              <span className="hidden h-4 w-px bg-white/15 md:inline-block" />
              <span>{siteData.company.nameCn}</span>
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
    </footer>
  )
}
