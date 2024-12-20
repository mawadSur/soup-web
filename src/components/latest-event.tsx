import { getDate, getTime } from '@/lib/utils';
import { EventSection } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { BsClock, BsMap } from 'react-icons/bs';

export default function LatestEvent({ data }: { data: EventSection }) {
  const { heading, events } = data;
  return (
    <section className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 pb-10 sm:pb-10 lg:pb-24">
      <h2 className="font-bold text-black pb-10 text-xl sm:text-2xl md:text-4xl text-center">{heading}</h2>
      <div className="flex flex-wrap -mx-4">
        {events.map((event) => (
          <div key={event.id} className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <div className="relative pt-60">
                <Image
                  src={'/' + event.image.name}
                  alt={event.image.alternativeText}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading="lazy"
                  className="absolute inset-0 object-cover rounded-t-lg"
                />
              </div>
              <div className="relative bg-white p-4 -mt-16">
                <div className="bg-white p-6 -mt-10">
                  <div className="mb-3 text-sm font-light">
                    <p>{getDate(event.time)}</p>
                  </div>
                  <h3 className="text-black text-xl font-normal mb-4">
                    <Link target="_blank" href={event.href}>
                      {event.heading}
                    </Link>
                  </h3>
                  <div className="flex items-center gap-2 text-black/50 text-xs font-light mb-2">
                    <p className="flex items-center gap-1">
                      <BsMap className="text-color1" aria-label="Location:" role="icon" /> {getTime(event.time)}
                    </p>
                    <p className="flex items-center gap-1">
                      <BsClock className="text-color1" aria-label="Time:" role="icon" /> {event.location}
                    </p>
                  </div>
                  <p className="text-black/70 text-sm mb-4 line-clamp-2">{event.paragraph}</p>
                  <Link
                    target="_blank"
                    href={event.href}
                    rel="noopener noreferrer"
                    aria-label={`Join event: ${event.heading}`}
                    className="text-sm text-color1 hover:text-color2"
                  >
                    Join Event <i className="ion-ios-arrow-forward"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
