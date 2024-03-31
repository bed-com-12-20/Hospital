// import React from "react";
// import './style.css'
// import Image from "next/image";

// import icon from '../images/icon.png'
// import phone from '../images/phone.png'
// import time from '../images/time.png'
// import location from '../images/location.png'
// import amb from '../images/amb.jpeg'
// import speed from '../images/speed.webp'
// import Navbar from "@/componets/navbar";


// export default function Ambulance(){
//     return(
//         <div>
              
//           <Navbar/>
//           {/* <section id="sector">
            
//             <h1 id="lance">Ambulance <br/> services</h1>
            
            
//            <p className="ambul">Request fast and reliable ambulance services from Liwonde private 
//                hospital. <br />The ambulance is available any time within reach</p>

//         <h1 id="lan">Ambulance Contact Details</h1>
//             <p className="ambula">follow simple instructions to call ambulance from liwonde
//                 private hospital
//             </p>
//             <p className="ambula">follow simple instructions to call ambulance from liwonde
//                 private hospital
//             </p>
//             <p className="ambula">follow simple instructions to call ambulance from liwonde
//                 private hospital
//             </p>
            
//           </section>
//           <h1 id="lane">Compassionate Care, Reliably & Efficiently Delivered</h1>
//           <p className="ambulan">Our goal at liwonde private clinic in terms of ambulance services
//              is to provide maximun, timely transport care to each and every 
//              patient. It managed by team with significant experience in the 
//              ambulance and heath care field. the aim is to provide first rate
//              services to all the patients under our care and uphold our values
//              by delivering expert medical assistance with Compassion in every case.
//              Driven by our highly trained and considarate staff, we strive to
//              exception services that lead to positive outcomes for our patients
//           </p>
//           <div className="categories">
           
         
//             <div className="category">
//                <Image
//                className="ambulance1"
//                src={amb}
//                alt="ambulance"
//                width={300}
//                height={150}
//                />
//                <div className="category1">
//                 <h1>Non-Emergency Medical Transport</h1>
//                </div>
//                <div className="category2">
//                 Liwonde ambulance services to health care or Treatment
//                 facilities, hospital transfers and patients discharge
//                </div>
//             </div>
//             <div className="category3">
//                <Image
//                className="ambulance1"
//                src={speed}
//                alt="ambulance"
//                width={300}
//                height={150}
//                />
//                <div className="category1">
//                 <h1>Emergency Medical Transport</h1>
//                </div>
//                <div className="category2">
//                 Liwonde ambulance services is always prepared with Emergency
//                 Ambulances for individuals who require very fast and emergency
//                 Treatment
//                </div>
//             </div>
            

//           </div>
         
           
//           <div className="circle">
//           <h1>Steps to follow</h1>
//           <div className="steps">
//           <div className="step"><span>1</span></div>
//                 <div className="line"></div>
//                 <div className="step1"><span>2</span></div>
//                 <div className="line1"></div>
//                 <div className="step2"><span>3</span></div>
//           </div>
//           <div className="container">
//           <div className="step-content">
//           <h1 className="content1">Contacts</h1>
//           <div  className="content">
//           Call the driver of the Ambulance using <br />
//           the following numbers <br/>
//           </div>
//           <div className="content">
//           <Image className="phone"
//                     src={phone}
//                     alt="phone"
//                     width={20}
//                     height={20}
//                     /> 0888597087 <br/>
//            <Image className="phone"
//                     src={phone}
//                     alt="phone"
//                     width={20}
//                     height={20}
//                     /> 09999408663
//           </div> 
//          </div>
//          <div className="step-content1">
//           <h1 className="content1">Location</h1>
//           <div  className="content">
//           Provide location details where 
//           the ambulance services is 
//           required. if possible estimate the distance
//           </div>
         
//          </div>
//          <div className="step-content2">
//           <h1 className="content1">Response</h1>
//           <div  className="content">
//           Exchange feedback with the driver, know his where abouts
//           estmated time travel towards your location
//            <br/>
//           </div> 
//          </div>
//           </div>
//           </div>
            
//             <h1 className="part1">We Treat, God Heals</h1>
//                  <div className="footer">
//                     <div className="container">
//                         <div className="row">
//                         <div className="footer-col">
//                         <Image className="icon1"
//                                 src={icon}
//                                 alt="icon"
//                                 width={150}
//                                 height={150}
//                                 style={{ marginRight:'10px'}}
//                                 />
//                             </div>
//                             <div className="footer-col">
//                                 <h4>Important Links</h4>
//                                 <ul>
//                                 <li>
//                                         <a href="#"  id="ttt">Book Appointment</a>
//                                     </li>
//                                     <li>
//                                         <a href="#"  id="ttt">Team of Developers</a>
//                                     </li>
//                                     <li>
//                                         <a href="#" id="ttt">Location</a>
//                                     </li>
//                                     <li>
//                                         <a href="#" id="ttt">About Us</a>
//                                     </li>
//                                 </ul>
//                             </div>
//                             <div className="footer-col">
//                                 <h4>Contact Us</h4>
//                                 <ul>
//                                     <li>
//                                         <p id="ttt1">Call: 0998052417</p>
//                                     </li>
//                                     <li>
//                                       <p id="ttt1">Email: LiwondePvthospital@gmail.com</p> 
//                                     </li>
//                                     <li>
//                                         <p id="ttt1">Physical Address</p>
//                                     </li>
                                  
//                                 </ul>
//                             </div>
//                             <div className="footer-col">
//                                 <h4>Map</h4>
//                                 <iframe
//                                     title="Google Map"
//                                     width="300"
//                                     height="200"
//                                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3852.6455704410355!2d35.2220114746039!3d-15.067707805480786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18d927b9f6d2f0dd%3A0x90ebf7bc5f36d7bb!2sLiwonde%20Private%20Hospital!5e0!3m2!1sen!2smw!4v1706522849156!5m2!1sen!2smw"
//                                     style={{ border: 0 }}
//                                     allowFullScreen
//                                     loading="lazy"
//                                     referrerPolicy="no-referrer-when-downgrade"
//                                 >

//                                 </iframe>
                                
//                             </div>
//                         </div>
//                     </div>
//                     <div >
//                         <p id="private">@Liwonde Private Hospital 2024</p>
//                     </div>
//                  </div> */}
//         </div>
//     )
// }
/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    theme: {
      extend: {
        gridTemplateRows: {
          '[auto,auto,1fr]': 'auto auto 1fr',
        },
      },
    },
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
'use client'
import { useState } from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import { RadioGroup } from '@headlessui/react'
 import Navbar from "@/componets/navbar";
import Footer from '@/componets/footer';
import location from '../images/location.png'
import amb from '../images/amb.jpeg'

const product = {
  name: 'Ambulance',
  price: 'Service Rating',

  breadcrumbs: [
    { id: 1, name: 'Fast'},
    { id: 2, name: 'Efficient'},
  ],
  
  colors: [
    { name: 'White', class: 'bg-red', selectedClass: 'ring-gray-400' },
    { name: 'Gray', class: 'bg-yellow-200', selectedClass: 'ring-gray-400' },
    { name: 'Black', class: 'bg-green-900', selectedClass: 'ring-gray-900' },
  ],
  sizes: [
    { name: 'Urban', inStock: true },
    { name: 'Rular', inStock: true },
    { name: 'Village', inStock: true },
    { name: 'We There', inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    'Hand cut and sewn locally',
    'Dyed with our proprietary colors',
    'Pre-washed & pre-shrunk',
    'Ultra-soft 100% cotton',
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
}
const reviews = {  average: 4, totalCount: 117 }

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [selectedSize, setSelectedSize] = useState(product.sizes[2])

  return (
 <div>
    <Navbar/>
    <div className="bg-white">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a  className="mr-2 text-sm font-medium text-gray-900">
                    {breadcrumb.name}
                  </a>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a  aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                {product.name}
              </a>
            </li>
          </ol>
        </nav>

        {/* Image gallery */}
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
            {/* <img
              src={product.images[0].src}
              alt={product.images[0].alt}
              className="h-full w-full object-cover object-center"
            /> */}
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              {/* <img
                src={product.images[1].src}
                alt={product.images[1].alt}
                className="h-full w-full object-cover object-center"
              /> */}
            </div>
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              {/* <img
                src={product.images[2].src}
                alt={product.images[2].alt}
                className="h-full w-full object-cover object-center"
              /> */}
            </div>
          </div>
          <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
            {/* <img
              src={product.images[3].src}
              alt={product.images[3].alt}
              className="h-full w-full object-cover object-center"
            /> */}
          </div>
        </div>

        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.name}</h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl tracking-tight text-gray-900">{product.price}</p>

            {/* Reviews */}
            <div className="mt-6">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        reviews.average > rating ? 'text-gray-900' : 'text-gray-200',
                        'h-5 w-5 flex-shrink-0'
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">{reviews.average} out of 5 stars</p>
                <a  className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                  {reviews.totalCount} reviews
                </a>
              </div>
            </div>

            <form className="mt-10">
              {/* Colors */}
              <div>
                <h3 className="text-sm font-medium text-gray-900">Stages Mark</h3>

                <RadioGroup value={selectedColor} onChange={setSelectedColor} className="mt-4">
                  <RadioGroup.Label className="sr-only">Choose a color</RadioGroup.Label>
                  <div className="flex items-center space-x-3">
                    {product.colors.map((color) => (
                      <RadioGroup.Option
                        key={color.name}
                        value={color}
                        className={({ active, checked }) =>
                          classNames(
                            color.selectedClass,
                            active && checked ? 'ring ring-offset-1' : '',
                            !active && checked ? 'ring-2' : '',
                            'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none'
                          )
                        }
                      >
                        <RadioGroup.Label as="span" className="sr-only">
                          {color.name}
                        </RadioGroup.Label>
                        <span
                          aria-hidden="true"
                          className={classNames(
                            color.class,
                            'h-8 w-8 rounded-full border border-black border-opacity-10'
                          )}
                        />
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </div>

              {/* Sizes */}
              <div className="mt-10">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-900">Locations</h3>
                 
                </div>

                <RadioGroup value={selectedSize} onChange={setSelectedSize} className="mt-4">
                  <RadioGroup.Label className="sr-only">Choose a size</RadioGroup.Label>
                  <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                    {product.sizes.map((size) => (
                      <RadioGroup.Option
                        key={size.name}
                        value={size}
                        disabled={!size.inStock}
                        className={({ active }) =>
                          classNames(
                            size.inStock
                              ? 'cursor-pointer bg-white text-gray-900 shadow-sm'
                              : 'cursor-not-allowed bg-gray-50 text-gray-200',
                            active ? 'ring-2 ring-indigo-500' : '',
                            'group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6'
                          )
                        }
                      >
                        {({ active, checked }) => (
                          <>
                            <RadioGroup.Label as="span">{size.name}</RadioGroup.Label>
                            {size.inStock ? (
                              <span
                                className={classNames(
                                  active ? 'border' : 'border-2',
                                  checked ? 'border-indigo-500' : 'border-transparent',
                                  'pointer-events-none absolute -inset-px rounded-md'
                                )}
                                aria-hidden="true"
                              />
                            ) : (
                              <span
                                aria-hidden="true"
                                className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                              >
                                <svg
                                  className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                  viewBox="0 0 100 100"
                                  preserveAspectRatio="none"
                                  stroke="currentColor"
                                >
                                  <line x1={0} y1={100} x2={100} y2={0} vectorEffect="non-scaling-stroke" />
                                </svg>
                              </span>
                            )}
                          </>
                        )}
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </div>

              <button
                type="submit"
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Call Now
              </button>
            </form>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">{product.description}</p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

              <div className="mt-4">
                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                  {product.highlights.map((highlight) => (
                    <li key={highlight} className="text-gray-400">
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Details</h2>

              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">{product.details}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
 </div>

    
  )
}
