import { BiEnvelope } from 'react-icons/bi';
import { Button } from './button';

export default function ContactPage() {
  return (
    <section className="py-16 lg:py-32 font-sans">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="w-full mb-6">
          <h2 className="text-5xl font-bold text-gray-800">Get in Touch</h2>
        </div>

        <div className="flex flex-wrap -mx-4">
          {/* Form Section */}
          <div className="w-full lg:w-8/12 px-4">
            <form action="mailto:joinus@gazasoupkitchen.org" method="POST" encType="text/plain" className="space-y-6">
              {/* Name and Email Fields Side by Side */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-400 hover:shadow-sm transition-shadow"
                  name="name"
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  required
                />
                <input
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-400 hover:shadow-sm transition-shadow"
                  name="email"
                  id="email"
                  type="email"
                  placeholder="Enter email address"
                  required
                />
              </div>

              {/* Message Textarea */}
              <div>
                <textarea
                  className="w-full h-48 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-400 hover:shadow-sm transition-shadow"
                  name="message"
                  id="message"
                  placeholder="Enter Message"
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="mt-3">
                <Button
                  type="submit"
                  className="bg-[#2A8C61] text-white font-bold h-12 rounded-3xl transition-all transform hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#3CC78F] focus:ring-offset-2 flex items-center justify-center gap-2 px-6"
                >
                  Send
                </Button>
              </div>
            </form>
          </div>

          {/* Contact Info Section */}
          <div className="w-full lg:w-4/12 px-4 mt-8 lg:mt-0">
            <div className="flex items-start">
              <span className="inline-flex items-center justify-center w-10 h-10 mr-4 text-green-600">
                <BiEnvelope className="w-6 h-6" />
              </span>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">joinus@gazasoupkitchen.org</h3>
                <p className="text-gray-600">Send us your message anytime!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
