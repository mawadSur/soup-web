"use client"
import { INVOLVED_ITEMS } from '@/constant'
import CardShadowHoverEffect from './card-shadow-hover-effect'

export default function GetInvolved() {
  return (
    <section className="pt-20 md:pt-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap -mx-4">
          <CardShadowHoverEffect items={INVOLVED_ITEMS} />
        </div>
      </div>
    </section>
  )
}
