"use client"
import { INVOLVED_ITEMS } from '@/constant'
<<<<<<< Updated upstream
import CardHoverEffect from './card-hover-effect'
=======
import CardShadowHoverEffect from './cards/card-shadow-hover-effect'
>>>>>>> Stashed changes

export default function GetInvolved() {
  return (
    <section className="pt-20 md:pt-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap -mx-4">
          <CardHoverEffect items={INVOLVED_ITEMS} />
        </div>
      </div>
    </section>
  )
}
