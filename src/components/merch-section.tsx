import Image from 'next/image';

export default function MerchSection() {
  // { data }: { data: BackgroundImage }
  return (
    <section className="px-4 mx-auto max-w-7xl">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://donatestock.com/gaza-soup-kitchen"
        className="block w-full"
      >
        <Image src="/merch.webp" alt="Merch" width={1500} height={1500} loading="lazy" />
      </a>
    </section>
  );
}
