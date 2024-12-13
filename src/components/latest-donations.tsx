import { LATEST_DONATIONS } from '@/constant'
import { formatNumber } from '@/lib/utils'

export default function LatestDonations() {
  return (
    <section className="py-10 sm:py-10 lg:pb-24 lg:pt-0">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex justify-center mb-12 pb-6">
          <div className="text-center md:w-7/12">
            <h2 className="mb-4 font-bold text-black text-xl sm:text-2xl md:text-3xl">Latest Donations</h2>
            <p className="text-black text-lg font-normal">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {LATEST_DONATIONS.map((donation) => (
            <div key={donation.id} className="mb-6 md:mb-0">
              <div className="bg-white rounded-lg shadow-lg p-4">
                <div className="flex mb-4">
                  <div className="w-20 h-20 rounded-full bg-cover bg-center" style={{ backgroundImage: `url(${donation.img})` }}></div>
                  <div className="ml-4">
                    <h3 className="text-lg text-black font-normal"><a href="teacher-single.html">{donation.name}</a></h3>
                    <span className="block text-xs text-black/30 mb-2 mt-0.5">Donated Just now</span>
                    <div className="text">
                      <p>Donated <span className="font-bold text-green-500">{formatNumber(donation.amount)}</span> for</p>
                      <p><a href="#" className="inline-block text-color1 text-xs mt-1 underline">{donation.cause}</a></p>
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
