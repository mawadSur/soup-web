'use client';

import { useImageModal } from '@/hooks/use-image-modal';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { IoMdClose } from 'react-icons/io';

const CARDS = [
  {
    id: 1,
    title: 'A RECIPE FOR RESILIENCE',
    image: '/help-1.webp',
    alt: 'Served meals',
    description:
      "This isn't just a soup — it's a recipe for resilience, simmering on the stoves of Gaza, feeding bodies and souls alike. Each bowl serves not just sustenance but a steadfast vow: to fortify, to nourish, to endure.",
  },
  {
    id: 2,
    title: 'HANDS UNITED IN SERVICE',
    image: '/help-2.webp',
    alt: 'Donation',
    description:
      'Amidst the steam of hearty soups, we find the warmth of shared hope. Every ladleful carries the spirit of community and the promise of sustenance for the children of Gaza.',
  },
  {
    id: 3,
    title: 'THE WARMTH OF SHARED HOPE',
    image: '/help-3.webp',
    alt: 'Be a volunteer',
    description:
      'In the quiet corners of resilience, even the smallest hands come together to lift more than just a meal — they raise the foundation of tomorrow on the strength of solidarity.',
  },
  {
    id: 4,
    title: 'Nurturing Community',
    image: '/help-4.webp',
    alt: 'Nurturing Community',
    description:
      'This is where hope simmers, where every serving is a pledge of solidarity. Here, we do not just feed the hungry, we nurture the soul of Gaza, one pot, one person, one community at a time.',
  },
];

export default function HelpSection() {
  const { selectedImage, openModal, closeModal } = useImageModal();

  return (
    <section className="px-4 mx-auto max-w-7xl py-10 lg:py-24">
      <div className="flex items-center justify-center relative mb-14">
        <div className="relative inline-block">
          <div className="absolute left-0 bottom-0 bg-[#3CC78F] h-3 w-full opacity-50 z-[-1]"></div>
          <h2 className="text-[#191d34] text-3xl sm:text-4xl md:text-5xl leading-[1.2] text-center z-10">
            How We Can Help
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {CARDS.map((card) => (
          <div key={card.id} className="relative mb-20">
            <div className="mr-20 pb-20">
              <div className="overflow-hidden rounded-lg">
                <motion.div whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }}>
                  <Image
                    src={card.image}
                    alt={card.alt}
                    width={400}
                    height={400}
                    className="w-full h-64 sm:h-72 md:h-80 rounded-[9px] object-cover cursor-pointer"
                    onClick={() => openModal(card.image)}
                  />
                </motion.div>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="absolute bottom-0 right-0 bg-white rounded-[7px] shadow-md p-6 w-4/5 min-h-48 flex flex-col"
            >
              <h3 className="text-base sm:text-lg text-[#191d34] font-bold font-sans">{card.title}</h3>
              <p className="text-[#191d34] mt-2 text-sm sm:text-base flex-1 font-sans">{card.description}</p>
            </motion.div>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="relative max-w-full max-h-[80vh] p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage!}
                alt="Enlarged view"
                width={800}
                height={600}
                className="max-w-full max-h-[80vh] object-contain"
              />
            </motion.div>

            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 p-2 rounded-full"
              onClick={(e) => {
                e.stopPropagation();
                closeModal();
              }}
            >
              <IoMdClose size={24} />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
