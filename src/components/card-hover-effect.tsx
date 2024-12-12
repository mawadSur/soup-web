import { cn } from "@/lib/utils";
import Link from "next/link";

export function CardHoverEffect({ url, image }: { url: string, image: string }) {
  return (
    <div className="w-full group/card">
      <Link
        target="_blank"
        rel="noopener noreferrer"
        href={url}
        className={cn(
          "cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl flex flex-col justify-between p-4",
          "bg-cover"
        )}
        style={{
          backgroundImage: `url('${image}')`,
          backgroundPosition: 'center center',
        }}
      >
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black/20 opacity-60"></div>
      </Link>
    </div>
  );
}
