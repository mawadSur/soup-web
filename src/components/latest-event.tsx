import { EVENTS } from '@/constant';
import Image from 'next/image';
import Link from 'next/link';
import { BsClock, BsMap } from 'react-icons/bs';

export default function LatestEvent() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center pb-8">
          <div className="w-full md:w-7/12 text-center">
            <h2 className="text-black text-3xl font-bold mb-4">Our Latest Events</h2>
          </div>
        </div>
        <div className="flex flex-wrap -mx-4">
          {EVENTS.map((event: any) => (
            <div key={event.title} className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="relative group overflow-hidden rounded-lg shadow-lg">
                <div className="relative pt-60">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="absolute inset-0 object-cover rounded-t-lg"
                  />
                </div>
                <div className="relative bg-white p-4 -mt-16">
                  <div className="bg-white p-6 -mt-10">
                    <div className="mb-3 text-sm font-light">
                      <p>{event.date}</p>
                    </div>
                    <h3 className="text-black text-xl font-normal mb-4">
                      <Link target="_blank" href={event.link}>
                        {event.title}
                      </Link>
                    </h3>
                    <div className="flex items-center gap-2 text-black/50 text-xs font-light mb-2">
                      <p className="flex items-center gap-1">
                        <BsMap className="text-color1" /> {event.time}
                      </p>
                      <p className="flex items-center gap-1">
                        <BsClock className="text-color1" /> {event.venue}
                      </p>
                    </div>
                    <p className="text-black/70 text-sm mb-4 line-clamp-2">{event.description}</p>
                    <Link target="_blank" href={event.link} className="text-sm text-color1 hover:text-color2">
                      Join Event <i className="ion-ios-arrow-forward"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
