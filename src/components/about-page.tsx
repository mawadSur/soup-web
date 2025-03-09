'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { DONATION_URL } from '../constant';
import { ColumnLayout } from './column-layout';

export default function AboutPage() {
  return (
    <>
      <ColumnLayout
        imageSrc="/Hani-Almadhoun.webp"
        imageAlt="Gaza humanitarian activity"
        title="Our Goal"
        description="My name is Hani Almadhoun, and I've seen firsthand what it's like for family and friends in Gaza to suffer from hunger due to the blockade. This personal experience opened my eyes to the dire situation we face every day. It's why we couldn't stay idle. The pain of watching loved ones struggle to find their next meal became the driving force behind our mission.Ensure no one in our community goes to bed hungry. This is more than just an initiative, it's a personal vow."
        buttonText="Support Us"
        buttonLink={DONATION_URL}
        imagePosition="right"
      />
      <ColumnLayout
        imageSrc="/service-areas.png"
        imageAlt="Gaza service areas"
        title="Gaza Soup Service Areas"
        description="We are proud to serve the resilient communities of Gaza through our network of kitchens, providing daily hot meals and clean drinking water to those in need. Each kitchen is strategically located to reach as many families as possible, ensuring access to essential nourishment and support. Our work goes beyond food—we’re here to uplift, care, and stand in solidarity with every family we serve. Each meal represents our commitment to dignity, hope, and the enduring spirit of the Palestinian people."
        imagePosition="left"
      />

      <section className="py-16 lg:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            className="flex items-center justify-center relative mb-14"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative inline-block">
              <div className="absolute left-0 bottom-0 bg-[#3CC78F] h-3 w-full opacity-50 z-[-1]"></div>
              <h2 className="text-[#191d34] text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[1.2]">
                Our Expansion and Life-Saving Impact
              </h2>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start font-sans">
            <motion.div
              className="order-2 md:order-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="relative">
                <motion.div
                  className="absolute -left-3 top-0 w-1 h-full bg-[#3CC78F] rounded-full"
                  initial={{ height: 0 }}
                  whileInView={{ height: '100%' }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.8 }}
                ></motion.div>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed pl-4">
                  In response to the crisis, my brother Mahmoud and his friends took a bold step; they started a soup
                  kitchen in Bait Lahia. With just four large pots, some wood for fire, and essential ingredients, they
                  began preparing hot meals for our neighbors. That first day, we fed{' '}
                  <strong className="text-[#3CC78F] text-xl">120 families</strong>. It was a modest beginning, but it
                  marked the start of something incredible. Despite the challenges, including the risks of gathering
                  ingredients, our commitment didn’t waver. This kitchen became our community’s beacon of hope.
                </p>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed pl-4">
                  Word spread rapidly, and the next day, even more neighbors arrived. Mahmoud sprang into action,
                  venturing out to procure ingredients for a fresh meal.
                </p>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed pl-4">
                  He returned with leafy greens, onions, and mushrooms, crafting a new dish that was as delightful as it
                  was nourishing. The kitchen's capacity has now expanded to accommodate meals for up to{' '}
                  <strong className="text-[#3CC78F] text-xl">3000 people daily</strong>.
                </p>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed pl-4">
                  For many, this was their first substantial meal in days, and the departure from canned food was a
                  welcomed change that filled hearts with gratitude.
                </p>

                <div className="bg-gray-50 rounded-lg p-6 my-8 border-l-4 border-[#3CC78F]">
                  <p className="text-gray-700 font-medium mb-4">
                    You may wonder why these individuals can accomplish something that few have managed to do in the
                    heart of starvation in Gaza:
                  </p>
                  <ul className="space-y-3">
                    <motion.li
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.3 }}
                    >
                      <div className="text-[#3CC78F] mr-2 mt-1">•</div>
                      <p>Bait Lahia has some farms where veggies and wild greens are now in season.</p>
                    </motion.li>
                    <motion.li
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.4 }}
                    >
                      <div className="text-[#3CC78F] mr-2 mt-1">•</div>
                      <p>We made sure they had the money to purchase these hard-to-find items.</p>
                    </motion.li>
                    <motion.li
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.5 }}
                    >
                      <div className="text-[#3CC78F] mr-2 mt-1">•</div>
                      <p>
                        They are located in the heart of the market, so they can easily spot any of these veggies and
                        cooking essentials arriving.
                      </p>
                    </motion.li>
                    <motion.li
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.6 }}
                    >
                      <div className="text-[#3CC78F] mr-2 mt-1">•</div>
                      <p>
                        They have visited farms close to the Green Line to find veggies and have been lucky a few times.
                      </p>
                    </motion.li>
                    <motion.li
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.7 }}
                    >
                      <div className="text-[#3CC78F] mr-2 mt-1">•</div>
                      <p>Mom and my sisters lovingly wake up early to peel and prep the food for the day's meals.</p>
                    </motion.li>
                  </ul>
                </div>

                <motion.p
                  className="text-gray-800 font-semibold text-xl pl-4 mt-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <strong>
                    Your assistance can help us bring sustenance to an area with minimal aid, where children face the
                    harsh reality of starvation.
                  </strong>
                </motion.p>

                <p className="text-gray-600 mt-4 mb-4 text-lg leading-relaxed pl-4">
                  This personal initiative, coordinated with our family in North Gaza, ensures transparency. Your
                  contribution, starting at five dollars, can provide a hot meal to desperate families enduring
                  challenging conditions, intentionally isolated from the rest of the world.
                </p>

                <p className="text-gray-600 mb-6 text-lg leading-relaxed pl-4">
                  Your <strong className="text-[#3CC78F] text-xl">$5, $10, $50</strong> will go a long way with this
                  initiative. We also need you to pray for their safety as they do this heroic work.
                </p>

                <motion.div
                  className="mt-6 pl-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <motion.a
                    href={DONATION_URL}
                    className="inline-block bg-[#2A8C61] py-3 px-8 rounded-lg font-semibold relative overflow-hidden group shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative text-white font-bold text-lg tracking-wide drop-shadow-md">
                      Support Our Efforts
                    </span>
                    <motion.div
                      className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      initial={{ x: '-100%' }}
                      animate={{ x: '100%' }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatDelay: 2,
                      }}
                    />
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>

            <motion.div className="order-1 md:order-2 space-y-6">
              <motion.div
                className="relative group rounded-lg overflow-hidden shadow-xl"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.7 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="absolute inset-0 bg-[#3CC78F] mix-blend-multiply opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                <motion.div
                  initial={{ scale: 1.1 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2 }}
                  className="overflow-hidden"
                >
                  <Image
                    src="/expansion-and-live-saving-1.webp"
                    alt="Gaza humanitarian activity"
                    width={640}
                    height={360}
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                  />
                </motion.div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-sm">
                    Humanitarian efforts in Gaza, providing meals to displaced families
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="relative group rounded-lg overflow-hidden shadow-xl"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.7, delay: 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="absolute inset-0 bg-[#3CC78F] mix-blend-multiply opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                <motion.div
                  initial={{ scale: 1.1 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2 }}
                  className="overflow-hidden"
                >
                  <Image
                    src="/expansion-and-live-saving-2.webp"
                    alt="Community kitchen feeding families in Gaza"
                    width={640}
                    height={360}
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                  />
                </motion.div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-sm">
                    Our community kitchen now serves up to 3,000 meals daily to families in need
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
