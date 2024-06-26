import Image from "next/image"
import odwala from '../images/odwala.jpeg'
import adona from '../images/adona.webp'
import heal from '../images/dental.webp'
import girl from '../images/female2.webp'
import well from '../images/welcome4.jpeg'
export default function Example() {
  return (
    <div className="relative overflow-hidden ">
      <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="text-2xl font-bold tracking-tight text-green-900 sm:text-5xl">
              We Strive to ensure  well being of patients
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              we Believe in Hardwork, Dedication and commitment towards your heath care needs
            </p>
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                        <Image
                          src={odwala}
                          alt=""
                          className="h-full w-full object-cover object-center"
                          
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                      <Image
                          src={adona}
                          alt=""
                          className="h-full w-full object-cover object-center"
                          
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                      <Image
                          src={heal}
                          alt=""
                          className="h-full w-full object-cover object-center"
                          
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                      <Image
                          src={girl}
                          alt=""
                          className="h-full w-full object-cover object-center"
                          
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                      <Image
                          src={well}
                          alt=""
                          className="h-full w-full object-cover object-center"
                          
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="#"
                className="inline-block rounded-md border border-transparent bg-green-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
              >
                Book appointment
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
