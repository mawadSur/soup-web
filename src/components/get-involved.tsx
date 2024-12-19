'use client';
import { GetInvolvedSection } from '@/types';
import CardShadowHoverEffect from './cards/card-shadow-hover-effect';

export default function GetInvolved({ data }: { data: GetInvolvedSection }) {
  return (
    <section className="pt-20 md:pt-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap -mx-4">
          <CardShadowHoverEffect items={data.cards} />
        </div>
      </div>
    </section>
  );
}
