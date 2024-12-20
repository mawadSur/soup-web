import { getDate, getTime } from '@/lib/utils';
import { EventSection } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { BsClock, BsMap } from 'react-icons/bs';

export default function LatestEvent({ data }: { data: EventSection }) {
  const { heading, events } = data;
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="flex justify-center pb-8">
        <div className="w-full md:w-7/12 text-center">
          <h2 className="text-black text-3xl font-bold mb-4">{heading}</h2>
        </div>
      </div>
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
