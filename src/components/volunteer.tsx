import Image from 'next/image';
import { Button } from './button';

export default function Volunteer() {
  return (
    <section className="relative bg-no-repeat bg-cover bg-center py-10 md:py-40">
      <Image src="/bg_3.jpg" alt="Background" fill className="absolute inset-0 z-0 object-cover" />
      <div className="absolute inset-0 bg-color1 opacity-80 z-10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
        <div className="flex flex-col md:flex-row md:gap-12">
          <div className="w-full md:w-1/2 flex justify-center items-stretch relative">
            <Image src="/bg_4.jpg" alt="Volunteer" fill className="absolute inset-0 object-cover" />
          </div>
          <div className="w-full md:w-1/2 relative z-30">
            <h3 className="mb-3 text-white text-2xl font-bold">Be a volunteer</h3>
            <form action="#" className="space-y-4">
              <div>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <textarea
                  cols={30}
                  rows={3}
                  className="w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Message"
                ></textarea>
              </div>
              <Button
                rel="noopener noreferrer"
                aria-label="Donate a hot meal"
                className="bg-white text-black border border-solid border-white px-10 py-4 shadow-lg rounded font-semibold text-xs lg:text-sm"
              >
                SEND MESSAGE
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
