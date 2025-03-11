'use client';

export default function WaveText({ text }: { text: string }) {
  const createWaveText = (input: string) =>
    input.split('').map((char, index) => (
      <span
        key={index}
        className="inline-block animate-wave text-inherit"
        style={{ animationDelay: `${index * 0.2}s` }}
      >
        {char}
      </span>
    ));

  return <>{createWaveText(text)}</>;
}
