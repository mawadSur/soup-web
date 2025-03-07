import Image from 'next/image';

const GALLERY = [
  {
    id: 1,
    name: 'image-1.jpg',
    alternativeText: 'Image description 1',
    width: 400,
    height: 300,
  },
  {
    id: 2,
    name: 'image-2.jpg',
    alternativeText: 'Image description 2',
    width: 400,
    height: 300,
  },
  {
    id: 3,
    name: 'image-3.jpg',
    alternativeText: 'Image description 3',
    width: 400,
    height: 300,
  },
  {
    id: 4,
    name: 'cause-4.jpg',
    alternativeText: 'Image description 4',
    width: 400,
    height: 300,
  },
  {
    id: 5,
    name: 'cause-5.jpg',
    alternativeText: 'Image description 5',
    width: 400,
    height: 300,
  },
  {
    id: 6,
    name: 'cause-6.jpg',
    alternativeText: 'Image description 6',
    width: 400,
    height: 300,
  },
  {
    id: 7,
    name: 'cause-2.jpg',
    alternativeText: 'Image description 7',
    width: 400,
    height: 300,
  },
  {
    id: 8,
    name: 'cause-3.jpg',
    alternativeText: 'Image description 8',
    width: 400,
    height: 300,
  },
];

export default function Gallery() {
  // { data }: { data: GallerySection }
  return (
    <section className="py-10 lg:py-24">
      <div className="flex items-center justify-center relative mb-14">
        <div className="relative inline-block">
          <div className="absolute left-0 bottom-0 bg-[#3CC78F] h-3 w-full opacity-50 z-[-1]"></div>
          <h2 className="text-[#191d34] text-3xl sm:text-4xl md:text-5xl leading-[1.2] text-center z-10">
            Our Gallery
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {GALLERY.map((item) => (
          <Image
            key={item.id}
            src={'/' + item.name}
            alt={item.alternativeText}
            width={item.width}
            height={item.height}
            className="w-full h-60 object-cover"
            loading="lazy"
          />
        ))}
      </div>
    </section>
  );
}
