import { DONATION_URL, LATEST_DONATIONS } from '@/constant'
import { formatNumber, formatRelativeTime } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

export default function LatestDonations() {
  return (
    <section className="py-10 sm:py-10 lg:pb-24 lg:pt-0">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex justify-center mb-12 pb-6">
          <div className="text-center md:w-7/12">
            <h2 className="mb-4 font-bold text-black text-xl sm:text-2xl md:text-3xl">Latest Donations</h2>
            <p className="text-black text-lg font-normal">See the impact of our generous donors supporting various causes.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {LATEST_DONATIONS.map((donation) => (
            <div key={donation.id} className="mb-6 md:mb-0">
              <div className="bg-white rounded-lg shadow-lg p-4">
                <div className="flex mb-4">
                  <div className="w-20 h-20 rounded-full overflow-hidden">
                    <Image
                      src={donation.img}
                      alt="Donation image"
                      width={80}
                      height={80}
                      className="object-cover"
                    />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg text-black font-normal"><Link target='_blank' href={DONATION_URL}>{donation.name}</Link></h3>
                    <time
                      dateTime={donation.timestamp}
                      className="block text-xs text-black/30 mb-2 mt-0.5"
                    >
                      {formatRelativeTime(donation.timestamp)}
                    </time>
                    <div className="text">
                      <p>Donated <span className="font-bold text-green-500">{formatNumber(donation.amount)}</span> for</p>
                      <p><Link target='_blank' href={DONATION_URL} className="inline-block text-color1 text-xs mt-1 underline">{donation.cause}</Link></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
