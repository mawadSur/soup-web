'use client';
import { useImageModal } from '@/hooks/use-image-modal';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { IoMdClose } from 'react-icons/io';

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
    name: 'cause-4.webp',
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
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const { selectedImage, openModal, closeModal } = useImageModal();

  return (
    <section className="py-16 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center relative mb-14">
          <div className="relative inline-block">
            <div className="absolute left-0 bottom-0 bg-[#3CC78F] h-3 w-full opacity-50 z-[-1]"></div>
            <h2 className="text-[#191d34] text-3xl sm:text-4xl md:text-5xl leading-[1.2] text-center z-10">
              Our Gallery
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {GALLERY.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.2 }}
              whileHover={{
                y: -8,
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
              }}
              className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => openModal(item.name)}
            >
              <Image
                src={'/' + item.name}
                alt={item.alternativeText}
                width={item.width}
                height={item.height}
                className="w-full h-64 object-cover"
                loading="lazy"
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredId === item.id ? 1 : 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4"
              />
            </motion.div>
          ))}
        </div>
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
            <div className="relative max-w-full max-h-[80vh] p-4">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className="max-w-full max-h-[80vh]"
              >
                <Image
                  src={'/' + selectedImage}
                  alt="Enlarged view"
                  width={1200}
                  height={800}
                  className="max-w-full max-h-[80vh] object-contain"
                />
              </motion.div>
            </div>

            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 p-2 rounded-full"
              onClick={closeModal}
              aria-label="Close lightbox"
            >
              <IoMdClose size={24} />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
