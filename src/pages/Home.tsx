import { Card } from '../components/Card'
import { SectionTitle } from '../components/SectionTitle'
import { siteData } from '../data/siteData'

export function Home() {
  const { hero, about, business, platforms, advantages, earbudsEntry } = siteData.home

  return (
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <section id="home" className="py-12">
        <SectionTitle
          eyebrow="Haocheng Intelligent Equipment"
          title={hero.title}
          description={hero.description}
        />
        <p className="mt-4 text-lg font-medium text-orange-400">{hero.subtitle}</p>
      </section>

      <section id="about" className="py-12">
        <SectionTitle title={about.title} description={about.paragraphs[0]} />
      </section>

      <section id="business" className="grid gap-6 py-12 md:grid-cols-4">
        {business.map((item) => (
          <Card key={item.title}>{item.title}</Card>
        ))}
      </section>

      <section id="platform" className="py-12">
        <Card>{platforms.map((item) => item.name).join(' / ')}</Card>
      </section>

      <section id="advantages" className="grid gap-6 py-12 md:grid-cols-4">
        {advantages.map((item) => (
          <Card key={item.title}>{item.title}</Card>
        ))}
      </section>

      <section id="products" className="py-12">
        <Card>{earbudsEntry.name}</Card>
      </section>

      <section id="contact" className="py-12">
        <Card>
          {siteData.company.phone} / {siteData.company.email}
        </Card>
      </section>
    </div>
  )
}
