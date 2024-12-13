import Image from "next/image";
import Link from "next/link";

export function CardHoverEffect({ url, image }: { url: string, image: string }) {
  return (
    <div className="w-full group/card">
      <Link
        target="_blank"
        rel="noopener noreferrer"
        href={url}
        className="cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl flex flex-col justify-between p-4"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src={image}
            alt="Card background"
            fill
            className="object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black/20 opacity-60"></div>
      </Link>
    </div>
  );
}
