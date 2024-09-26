import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

function Hero() {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
            <Image
              alt=""
              src="/doctors.jpg"
              width={800}
              height={800}
              className="absolute inset-0 h-full
          rounded-3xl 
          w-full object-cover"
            />
          </div>

          <div className="lg:py-24">
            <h2 className="text-4xl font-bold sm:text-4xl">
              Find & Book
              <span className='text-primary'> Appointment </span>
              with your Fav
              <span className='text-primary '> Doctors</span></h2>

            <p className="mt-4 text-gray-500">
              Find the right doctor for your needs-search by specialty, symptoms, or language preferences. Book appointments with top-rated doctors in just a few taps, anytime, anywhere. Instant access to healthcare experts for remote consultations and personalized care. Your health, your way-secure, convenient, and tailored to your unique needs.
            </p>

            <Button className="mt-10">Explore Now</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero