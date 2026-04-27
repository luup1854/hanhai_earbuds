import { Link, NavLink } from 'react-router-dom'
import { siteData } from '../data/siteData'

function getNavHref(href: string) {
  return href.startsWith('#') ? `/${href}` : href
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex flex-col leading-tight">
          <span className="text-sm font-semibold text-white">{siteData.company.nameCn}</span>
          <span className="text-xs text-neutral-400">{siteData.company.nameEn}</span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm text-neutral-300 md:flex">
          {siteData.nav.map((item) =>
            item.type === 'route' ? (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  `transition hover:text-orange-400 ${isActive ? 'text-orange-400' : ''}`
                }
              >
                {item.label}
              </NavLink>
            ) : (
              <a
                key={item.href}
                href={getNavHref(item.href)}
                className="transition hover:text-orange-400"
              >
                {item.label}
              </a>
            ),
          )}
        </nav>
      </div>
    </header>
  )
}
