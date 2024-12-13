import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { IconType } from 'react-icons';

type Props = {
  items: { id: number; title: string; description: string; icon: IconType }[];
  wrapperClasses?: string;
  itemClasses?: string;
};

const AnimatedBackground = React.memo(
  ({ isVisible, wrapperClasses }: { isVisible: boolean; wrapperClasses?: string }) => (
    <AnimatePresence>
      {isVisible && (
        <motion.span
          className={cn('absolute inset-0 z-0 block h-full w-full rounded-xl bg-stone-200', wrapperClasses)}
          layoutId="cardHoverEffect"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.15 },
          }}
          exit={{
            opacity: 0,
            transition: { duration: 0.1, delay: 0.2 },
          }}
        />
      )}
    </AnimatePresence>
  ),
);

const CardShadowHoverEffect: React.FC<Props> = ({ items, itemClasses, wrapperClasses }) => {
  const [hoveredId, setHoveredId] = React.useState<number | null>(null);

  return (
    <div className={cn('grid md:grid-cols-3', itemClasses)}>
      {items.map((item) => (
        <div
          key={item.id}
          className={cn('relative flex flex-col gap-3 p-4', itemClasses)}
          role="button"
          tabIndex={0}
          onMouseEnter={() => setHoveredId(item.id)}
          onMouseLeave={() => setHoveredId(null)}
          onFocus={() => setHoveredId(item.id)}
          onBlur={() => setHoveredId(null)}
        >
          <AnimatedBackground isVisible={hoveredId === item.id} />
          <div className="z-[1] space-y-3">
            <div className="flex items-center mb-4">
              <item.icon size={50} className="text-color2" />
            </div>
            <h2 className="text-xl font-normal text-black mb-3">{item.title}</h2>
            <p className="text-gray-500">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default CardShadowHoverEffect;
