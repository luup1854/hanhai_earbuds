import { SectionTitle } from '../components/SectionTitle'
import { siteData } from '../data/siteData'

export function Earbuds() {
  const { earbudsEntry } = siteData.home

  return (
    <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <SectionTitle
        eyebrow="Bluetooth Earbuds"
        title={earbudsEntry.name}
        description={earbudsEntry.description}
      />
    </div>
  )
}
