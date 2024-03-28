"use client";
import { TypeAnimation } from "react-type-animation";
import "./Styles/section1.css";
import { motion, useInView, useAnimation } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";

export default function Section1(){
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
 
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
     
    }
  }, [isInView]);
    return(<>

    <div  ref={ref} style={{ position: "relative", overflow: "hidden" }}>
      <motion.div
         variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{
          duration: 1,
          delay: 0.5,
        }}
        

      >
      <div id="anime">
          <TypeAnimation
            sequence={[
              "A Great Place to Recieve Care",
              1000,
              "We Treat, God Heals",
              1000,
              "High quality Services offered",
            ]}
            speed={10}
            style={{ fontSize: "2em" }}
            repeat={Infinity}
          />
        </div>
        <section id="begin">
          <div id="working-hours">
            <h3 id="hours">Working Hours</h3>
            <p id="hours-message">
              Liwonde private hospital is open <br /> to its Services 24 hours
              Everyday,
              <br /> feel free to visit our hospital any time
            </p>
          </div>
          <div id="contact-us">
            <h3 id="hours">Contact Us</h3>
            <p id="hours-message">
              Contact staff and officials of <br />
              private hospital through the following numbers
              <ul>
                <li>0886262527</li>
                <li>0994566128</li>
              </ul>
            </p>
            <ul>
              <li></li>
            </ul>
          </div>
          <div id="locations">
            <h3 id="hours">Location</h3>
            <p id="hours-message">
              Liwonde private hospital is located along M3 Road near, puma filling
              station
            </p>
          </div>
        </section>
      </motion.div>
    
    </div>
       
    </>)}
// }const features = [
//   { name: 'Origin', description: 'Designed by Good Goods, Inc.' },
//   { name: 'Material', description: 'Solid walnut base with rare earth magnets and powder coated steel card cover' },
//   { name: 'Dimensions', description: '6.25" x 3.55" x 1.15"' },
//   { name: 'Finish', description: 'Hand sanded and finished with natural oil' },
//   { name: 'Includes', description: 'Wood card tray and 3 refill packs' },
//   { name: 'Considerations', description: 'Made from natural materials. Grain and color vary with each item.' },
// ]

// export default function Example() {
//   return (
//     <div className="bg-white">
//       <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
//         <div>
//           <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Technical Specifications</h2>
//           <p className="mt-4 text-gray-500">
//             The walnut wood card tray is precision milled to perfectly fit a stack of Focus cards. The powder coated
//             steel divider separates active cards from new ones, or can be used to archive important task lists.
//           </p>

//           <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
//             {features.map((feature) => (
//               <div key={feature.name} className="border-t border-gray-200 pt-4">
//                 <dt className="font-medium text-gray-900">{feature.name}</dt>
//                 <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
//               </div>
//             ))}
//           </dl>
//         </div>
//         <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
//           <img
//             src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg"
//             alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
//             className="rounded-lg bg-gray-100"
//           />
//           <img
//             src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg"
//             alt="Top down view of walnut card tray with embedded magnets and card groove."
//             className="rounded-lg bg-gray-100"
//           />
//           <img
//             src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg"
//             alt="Side of walnut card tray with card groove and recessed card area."
//             className="rounded-lg bg-gray-100"
//           />
//           <img
//             src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg"
//             alt="Walnut card tray filled with cards and card angled in dedicated groove."
//             className="rounded-lg bg-gray-100"
//           />
//         </div>
//       </div>
//     </div>
//   )
// }
