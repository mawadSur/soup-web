import { HELPS } from '@/constant'
import BlurredBgComponent from './blurred-bg'
import { MinimalCard } from './cards/minimal-card'
import { MinimalCardDescription } from './cards/minimal-card-description'
import { MinimalCardImage } from './cards/minimal-card-image'
import { MinimalCardTitle } from './cards/minimal-card-title'

export default function HelpSection() {
  return (
    <section>
      <BlurredBgComponent heroText='IGNITE HOPE AND NOURISH THE FUTURE' />
      <h2 className='py-8 md:py-12 lg:pt-28 lg:pb-10 font-bold text-black text-xl sm:text-2xl md:text-4xl text-center'>How We Can Help</h2>
      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {HELPS.map((card) => (
          <MinimalCard>
            <MinimalCardImage src={card.image} alt={card.title} />
            <MinimalCardTitle>{card.title}</MinimalCardTitle>
            <MinimalCardDescription>
              {card.description}
            </MinimalCardDescription>
          </MinimalCard>
        ))}
      </div>
    </section>
  )
}
