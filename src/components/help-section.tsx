import { DONATION_URL, DONATION_URL2, HELPS } from '@/constant';
import Image from 'next/image';
import Link from 'next/link';
import BlurredBgComponent from './blurred-bg';
import { Button } from './button';
import { MinimalCard } from './cards/minimal-card';
import { MinimalCardDescription } from './cards/minimal-card-description';
import { MinimalCardImage } from './cards/minimal-card-image';
import { MinimalCardTitle } from './cards/minimal-card-title';

export default function HelpSection() {
  return (
    <section>
      <BlurredBgComponent heroText="IGNITE HOPE AND NOURISH THE FUTURE" />
      <h2 className="py-8 md:py-12 lg:pt-28 lg:pb-10 font-bold text-black text-xl sm:text-2xl md:text-4xl text-center">
        How We Can Help
      </h2>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {HELPS.map((card) => (
            <MinimalCard key={card.title}>
              <MinimalCardImage src={card.image} alt={card.title} />
              <MinimalCardTitle>{card.title}</MinimalCardTitle>
              <MinimalCardDescription>{card.description}</MinimalCardDescription>
            </MinimalCard>
          ))}
        </div>
        <Link target="_blank" href={DONATION_URL2} className="block w-full py-8 md:py-12 lg:pt-28 lg:pb-0">
          <Image src="/merch.webp" alt="Gaza Soup Kitchen Merchandise" width={1200} height={800} loading="lazy" />
        </Link>
        <div className="py-8 md:py-12 lg:pt-28">
          <div className="grid items-start grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-bold text-black text-xl sm:text-2xl md:text-3xl">
                PALESTINIANS IN GAZA NEED YOUR HELP NOW
              </h2>
              <p className="mt-8 tracking-wide text-base text-black sm:text-xl font-normal">
                Your support fuels our mission. Every donation brings us closer to a hunger-free Gaza
              </p>
              <div className="mt-10 sm:flex sm:items-center sm:space-x-8">
                <Button
                  as="a"
                  target="_blank"
                  href={DONATION_URL}
                  rel="noopener noreferrer"
                  aria-label="Donate to Gaza Soup Kitchen (opens in new tab)"
                  className="animate-buttonheartbeat rounded-md flex items-baseline justify-center gap-2 px-10 py-4 text-base font-semibold bg-[#B71C1C] text-white"
                >
                  DONATE NOW
                </Button>
              </div>
            </div>
            <Image
              src="/kid2.webp"
              alt="kid in gaza"
              width={800}
              height={800}
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="rounded-xl object-cover"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
