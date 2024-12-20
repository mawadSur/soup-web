'use client';
import { GetInvolvedSection } from '@/types';
import CardShadowHoverEffect from './cards/card-shadow-hover-effect';

export default function GetInvolved({ data }: { data: GetInvolvedSection }) {
  return (
    <section className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 pb-10 sm:pb-10 lg:pb-24">
      <div className="flex flex-wrap -mx-4">
        <CardShadowHoverEffect items={data.cards} />
      </div>
    </section>
  );
}
