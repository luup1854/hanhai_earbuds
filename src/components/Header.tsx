import { ArrowRight, Menu, X } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import type { MouseEvent } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { siteData } from '../data/siteData'

function getAnchorPath(href: string) {
  return href.startsWith('#') ? `/${href}` : href
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const productNav = useMemo(() => siteData.nav.find((item) => item.href === '/earbuds'), [])
  const centerNav = useMemo(() => siteData.nav.filter((item) => item.href !== '/earbuds'), [])

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16)

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)

    if (location.pathname === '/' && location.hash) {
      window.setTimeout(() => scrollToAnchor(location.hash), 80)
    }
  }, [location.pathname, location.hash])

  const scrollToAnchor = (href: string) => {
    const targetId = href.replace('#', '')
    const target = document.getElementById(targetId)

    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      window.history.replaceState(null, '', href)
    }
  }

  const handleAnchorClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault()

    if (location.pathname !== '/') {
      navigate(getAnchorPath(href))
      window.setTimeout(() => scrollToAnchor(href), 80)
      return
    }

    scrollToAnchor(href)
  }

  const renderNavItem = (item: (typeof siteData.nav)[number], mobile = false) => {
    const baseClass = mobile
      ? 'block rounded-md px-3 py-3 text-base font-medium text-neutral-100 transition hover:bg-white/5 hover:text-orange-400'
      : 'relative text-sm font-medium text-neutral-200 transition hover:text-orange-400'

    if (item.type === 'route') {
      return (
        <NavLink
          key={item.href}
          to={item.href}
          className={({ isActive }) =>
            `${baseClass} ${isActive ? 'text-orange-400' : ''}`
          }
        >
          {item.label}
        </NavLink>
      )
    }

    return (
      <a
        key={item.href}
        href={getAnchorPath(item.href)}
        onClick={(event) => handleAnchorClick(event, item.href)}
        className={baseClass}
      >
        {item.label}
      </a>
    )
  }

  return (
    <header
      className={`sticky top-0 z-50 transition duration-300 ${
        isScrolled
          ? 'border-b border-white/10 bg-black/75 shadow-2xl shadow-black/40 backdrop-blur-xl'
          : 'border-b border-white/5 bg-black/95'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex min-w-0 items-center gap-3">
          <img
            src={siteData.company.logo}
            alt={siteData.company.nameCn}
            className="h-11 w-11 shrink-0 rounded-md object-contain"
          />
          <span className="min-w-0 leading-tight">
            <span className="block truncate text-base font-semibold text-white sm:text-lg">
              {siteData.company.nameCn}
            </span>
            <span className="mt-1 block truncate text-[10px] font-medium text-neutral-400 sm:text-xs">
              {siteData.company.nameEn}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          {centerNav.map((item) => renderNavItem(item))}
        </nav>

        <div className="hidden items-center lg:flex">
          {productNav ? (
            <Link
              to={productNav.href}
              className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-5 py-2.5 text-sm font-semibold text-black shadow-lg shadow-orange-500/20 transition hover:-translate-y-0.5 hover:bg-orange-400"
            >
              {productNav.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
          ) : null}
        </div>

        <button
          type="button"
          aria-label={isMenuOpen ? '关闭菜单' : '打开菜单'}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((current) => !current)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/5 text-white transition hover:border-orange-400 hover:text-orange-400 lg:hidden"
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-white/10 bg-black/95 transition-[max-height,opacity] duration-300 lg:hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
          {siteData.nav.map((item) => renderNavItem(item, true))}
        </nav>
      </div>
    </header>
  )
}
