import { MEDIAS_PAGE } from '@/constant';
import Image from 'next/image';
import { Button } from './button';

export default function MediaPage() {
  // { data }: { data: GalleryMasonrySection }
  // const { gallery } = data;

  return (
    <section className="py-16 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="columns-1 md:columns-3 lg:columns-4 gap-4 space-y-4 p-4">
          {MEDIAS_PAGE.map((item, index) => {
            let animationClass = '';
            if (index % 3 === 0) {
              animationClass = 'animate-in-from-left';
            } else if (index % 3 === 1) {
              animationClass = 'animate-in-from-middle';
            } else {
              animationClass = 'animate-in-from-right';
            }
            return (
              <div key={item.name} className={`break-inside-avoid mb-4 relative group ${animationClass}`}>
                <Button href={item.href} as="a" target="_blank">
                  <Image
                    src={'/media/' + item.name}
                    alt={item.alternativeText}
                    width={item.width}
                    height={item.height}
                    className="w-full h-auto object-cover rounded-lg transition-transform duration-500 group-hover:-translate-y-2"
                    loading="lazy"
                  />
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
