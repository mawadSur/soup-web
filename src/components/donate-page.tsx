'use client';
import { Banknote, Copy, CreditCard, Heart, Share2, Shield } from 'lucide-react';
import { useState } from 'react';

const DonatePage = () => {
  const [copiedField, setCopiedField] = useState(null);

  const handleCopy = (value: string, field: any) => {
    navigator.clipboard.writeText(value);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000); // Reset after 2 seconds
  };

  const donationMethods = [
    {
      title: 'Stock Donation',
      description:
        'Make a bigger impact by donating appreciated stocks tax-efficiently. Maximize your contribution while minimizing tax implications.',
      icon: <Share2 className="w-12 h-12 text-gray-500" />,
      link: 'https://donatestock.com/gaza-soup-kitchen',
      buttonText: 'Donate Stocks',
      bgColor: 'bg-gradient-to-br from-gray-100 to-gray-200',
    },
    {
      title: 'Bank Transfer',
      description: 'Support our mission through a secure direct bank transfer via ACH. Ideal for recurring donations.',
      icon: <Banknote className="w-12 h-12 text-gray-500" />,
      details: {
        bank: 'PNC BANK N.A.',
        address: '1913 Massachusetts Avenue NW, Washington DC 20036',
        phone: '202-835-5531',
        routing: '021052053',
        account: '39983526',
      },
      buttonText: 'View Bank Details',
      bgColor: 'bg-gradient-to-br from-gray-100 to-gray-200',
    },
    {
      title: 'GoFundMe',
      description:
        'Join our campaign to provide daily hot meals. Every contribution helps us reach more people in need.',
      icon: <Heart className="w-12 h-12 text-gray-500" />,
      link: 'https://www.gofundme.com/f/Hot-meals-in-Gaza-daily',
      buttonText: 'Donate via GoFundMe',
      bgColor: 'bg-gradient-to-br from-gray-100 to-gray-200',
    },
    {
      title: 'Quick Payment',
      description: 'Make an immediate impact through PayPal or Venmo. Fast, secure, and convenient payment options.',
      icon: <CreditCard className="w-12 h-12 text-gray-500" />,
      link: 'https://givebutter.com/AReeXq',
      buttonText: 'Pay with PayPal/Venmo',
      bgColor: 'bg-gradient-to-br from-gray-100 to-gray-200',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="relative h-[60vh] overflow-hidden flex items-center justify-center bg-gradient-to-b from-white to-gray-50">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-100/20 to-gray-200/20" />
        <div className="relative text-center px-4 max-w-4xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-8 tracking-tight text-gray-900">
            Make a{' '}
            <span className="relative mx-4">
              <span className="text-gray-800">Difference</span>
              <span className="absolute -bottom-2 left-0 w-full h-1.5 bg-gray-800 transform -skew-x-12 rounded-full"></span>
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto text-gray-700 leading-relaxed">
            Your generosity powers our mission to provide warmth and sustenance to those in need. Choose your preferred
            method to contribute and make an immediate impact.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="mb-16 mx-auto max-w-3xl bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100">
          <div className="p-8 space-y-4 text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full bg-gray-50">
                <Shield className="w-12 h-12 text-gray-500" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Your Contribution is Protected</h2>
            <div className="space-y-3">
              <p className="text-lg text-gray-600">
                Every donation is secure and tax-deductible. We maintain full transparency and ensure your contribution
                creates maximum impact in our community.
              </p>
              <p className="text-xl font-bold text-gray-800">EIN: 99-4047997</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {donationMethods.map((method, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
            >
              <div className={`${method.bgColor} p-6 sm:p-8 h-full backdrop-blur-sm`}>
                <div className="absolute inset-0 bg-white/5 backdrop-blur-sm" />
                <div className="relative flex flex-col h-full">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="p-3 rounded-full bg-white/10 shadow-lg backdrop-blur-sm">{method.icon}</div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">{method.title}</h2>
                  </div>

                  <p className="text-base sm:text-lg font-medium text-gray-600 mb-8 leading-relaxed">
                    {method.description}
                  </p>

                  {method.details ? (
                    <div className="mt-auto space-y-4 bg-white p-4 sm:p-6 rounded-2xl shadow-md font-medium">
                      {Object.entries(method.details).map(([key, value]) => (
                        <div key={key} className="flex flex-col space-y-1">
                          <span className="font-bold text-gray-600 capitalize text-sm">{key}:</span>
                          <div className="flex items-center justify-between">
                            <span className="text-black text-base">{value}</span>
                            <div className="flex items-center">
                              {copiedField === key && <span className="text-sm text-gray-500 mr-2">Copied!</span>}
                              <button
                                onClick={() => handleCopy(value, key)}
                                className="p-1 rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500"
                                title={`Copy ${key}`}
                              >
                                <Copy className="w-4 h-4 text-gray-600" />
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <button
                      onClick={() => window.open(method.link, '_blank')}
                      className="mt-auto w-full bg-gray-800 text-white font-bold py-3 sm:py-4 px-6 rounded-xl transition-all duration-300 hover:bg-gray-900 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                    >
                      {method.buttonText}
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DonatePage;
