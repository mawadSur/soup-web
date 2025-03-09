'use client';
import { useState } from 'react';
import { AiOutlineCopy, AiOutlineHeart, AiOutlineShareAlt } from 'react-icons/ai';
import { LuBanknote, LuCreditCard, LuShield } from 'react-icons/lu';

const donationMethods = [
  {
    title: 'Stock Donation',
    description:
      'Make a bigger impact by donating appreciated stocks tax-efficiently. Maximize your contribution while minimizing tax implications.',
    icon: <AiOutlineShareAlt className="w-12 h-12 text-gray-500" />,
    link: 'https://donatestock.com/gaza-soup-kitchen',
    buttonText: 'Donate Stocks',
  },
  {
    title: 'Bank Transfer',
    description: 'Support our mission through a secure direct bank transfer via ACH. Ideal for recurring donations.',
    icon: <LuBanknote className="w-12 h-12 text-gray-500" />,
    details: {
      bank: 'PNC BANK N.A.',
      address: '1913 Massachusetts Avenue NW, Washington DC 20036',
      phone: '202-835-5531',
      routing: '#021052053',
      account: '#39983526',
    },
    buttonText: 'View Bank Details',
  },
  {
    title: 'GoFundMe',
    description: 'Join our campaign to provide daily hot meals. Every contribution helps us reach more people in need.',
    icon: <AiOutlineHeart className="w-12 h-12 text-gray-500" />,
    link: 'https://www.gofundme.com/f/Hot-meals-in-Gaza-daily',
    buttonText: 'Donate via GoFundMe',
  },
  {
    title: 'Quick Payment',
    description: 'Make an immediate impact through PayPal or Venmo. Fast, secure, and convenient payment options.',
    icon: <LuCreditCard className="w-12 h-12 text-gray-500" />,
    link: 'https://givebutter.com/AReeXq',
    buttonText: 'Pay with PayPal/Venmo',
  },
];

const DonatePage = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (value: string, field: string) => {
    navigator.clipboard.writeText(value);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section className="py-16 lg:py-24 font-sans">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-6 auto-rows-min">
          <div className="col-span-1 xl:col-span-2 group relative overflow-hidden rounded-3xl transition-all duration-500 shadow-lg hover:shadow-2xl transform hover:-translate-y-1">
            <div className="p-8 space-y-4 text-center">
              <div className="flex justify-center mb-6">
                <div className="p-3 rounded-full bg-white/10 shadow-lg transition-all duration-300 transform group-hover:scale-110 group-hover:bg-white/20">
                  <LuShield className="w-12 h-12 text-gray-500 transition-colors duration-300 hover:text-gray-700" />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 transition-all duration-300 hover:text-gray-900">
                Your Contribution is Protected
              </h2>
              <div className="space-y-3">
                <p className="text-lg text-gray-600 transition-all duration-300 hover:text-gray-800">
                  Every donation is secure and tax-deductible. We maintain full transparency and ensure your
                  contribution creates maximum impact in our community.
                </p>
                <p className="text-xl font-bold text-gray-800 transition-all duration-300 hover:text-gray-900">
                  EIN: 99-4047997
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-1 xl:col-span-2 group relative overflow-hidden rounded-3xl transition-all duration-500 shadow-lg hover:shadow-2xl transform hover:-translate-y-1">
            <div className="p-6 sm:p-8 h-full transition-all duration-300 group-hover:bg-opacity-90">
              <div className="relative flex flex-col h-full">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 rounded-full bg-white/10 shadow-lg transition-all duration-300 transform group-hover:scale-110 group-hover:bg-white/20">
                    {donationMethods[0].icon}
                  </div>
                  <h2 className="text-2xl sm:text-2xl font-bold text-gray-800 transition-all duration-300 group-hover:text-gray-900">
                    {donationMethods[0].title}
                  </h2>
                </div>
                <p className="text-base sm:text-lg font-medium text-gray-600 mb-8 leading-relaxed transition-all duration-300 group-hover:text-gray-800">
                  {donationMethods[0].description}
                </p>
                <button
                  onClick={() => window.open(donationMethods[0].link, '_blank')}
                  className="mt-auto w-full bg-gray-800 text-white font-bold py-3 sm:py-4 px-6 rounded-xl transition-all duration-300 transform hover:bg-gray-900 hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                >
                  {donationMethods[0].buttonText}
                </button>
              </div>
            </div>
          </div>

          <div className="col-span-1 md:col-span-2 xl:col-span-2 xl:row-span-2 group relative overflow-hidden rounded-3xl transition-all duration-500 shadow-lg hover:shadow-2xl transform hover:-translate-y-1">
            <div className="p-6 sm:p-8 h-full transition-all duration-300 group-hover:bg-opacity-90">
              <div className="relative flex flex-col h-full">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 rounded-full bg-white/10 shadow-lg transition-all duration-300 transform group-hover:scale-110 group-hover:bg-white/20">
                    {donationMethods[1].icon}
                  </div>
                  <h2 className="text-2xl sm:text-2xl font-bold text-gray-800 transition-all duration-300 group-hover:text-gray-900">
                    {donationMethods[1].title}
                  </h2>
                </div>
                <p className="text-base sm:text-lg font-medium text-gray-600 mb-8 leading-relaxed transition-all duration-300 group-hover:text-gray-800">
                  {donationMethods[1].description}
                </p>
                {donationMethods[1].details && (
                  <div className="mt-auto space-y-4 bg-white p-4 sm:p-6 rounded-2xl shadow-md font-medium transition-all duration-300 group-hover:shadow-lg">
                    {Object.entries(donationMethods[1].details).map(([key, value]) => (
                      <div key={key} className="flex flex-col space-y-1">
                        <span className="font-bold text-gray-600 capitalize text-sm transition-colors duration-300 group-hover:text-gray-800">
                          {key}:
                        </span>
                        <div className="flex items-center justify-between">
                          <span className="text-black text-base">{value}</span>
                          <div className="flex items-center">
                            {copiedField === key && (
                              <span className="text-sm text-gray-500 mr-2 animate-fadeIn">Copied!</span>
                            )}
                            <button
                              onClick={() => handleCopy(value, key)}
                              className="p-1 rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all duration-200 transform hover:scale-110"
                              title={`Copy ${key}`}
                            >
                              <AiOutlineCopy className="w-4 h-4 text-gray-600 transition-colors duration-300 hover:text-gray-900" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="col-span-1 xl:col-span-2 group relative overflow-hidden rounded-3xl transition-all duration-500 shadow-lg hover:shadow-2xl transform hover:-translate-y-1">
            <div className="p-6 sm:p-8 h-full transition-all duration-300 group-hover:bg-opacity-90">
              <div className="relative flex flex-col h-full">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 rounded-full bg-white/10 shadow-lg transition-all duration-300 transform group-hover:scale-110 group-hover:bg-white/20">
                    {donationMethods[2].icon}
                  </div>
                  <h2 className="text-2xl sm:text-2xl font-bold text-gray-800 transition-all duration-300 group-hover:text-gray-900">
                    {donationMethods[2].title}
                  </h2>
                </div>
                <p className="text-base sm:text-lg font-medium text-gray-600 mb-8 leading-relaxed transition-all duration-300 group-hover:text-gray-800">
                  {donationMethods[2].description}
                </p>
                <button
                  onClick={() => window.open(donationMethods[2].link, '_blank')}
                  className="mt-auto w-full bg-gray-800 text-white font-bold py-3 sm:py-4 px-6 rounded-xl transition-all duration-300 transform hover:bg-gray-900 hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                >
                  {donationMethods[2].buttonText}
                </button>
              </div>
            </div>
          </div>

          <div className="col-span-1 xl:col-span-2 group relative overflow-hidden rounded-3xl transition-all duration-500 shadow-lg hover:shadow-2xl transform hover:-translate-y-1">
            <div className="p-6 sm:p-8 h-full transition-all duration-300 group-hover:bg-opacity-90">
              <div className="relative flex flex-col h-full">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 rounded-full bg-white/10 shadow-lg transition-all duration-300 transform group-hover:scale-110 group-hover:bg-white/20">
                    {donationMethods[3].icon}
                  </div>
                  <h2 className="text-2xl sm:text-2xl font-bold text-gray-800 transition-all duration-300 group-hover:text-gray-900">
                    {donationMethods[3].title}
                  </h2>
                </div>
                <p className="text-base sm:text-lg font-medium text-gray-600 mb-8 leading-relaxed transition-all duration-300 group-hover:text-gray-800">
                  {donationMethods[3].description}
                </p>
                <button
                  onClick={() => window.open(donationMethods[3].link, '_blank')}
                  className="mt-auto w-full bg-gray-800 text-white font-bold py-3 sm:py-4 px-6 rounded-xl transition-all duration-300 transform hover:bg-gray-900 hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                >
                  {donationMethods[3].buttonText}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonatePage;
