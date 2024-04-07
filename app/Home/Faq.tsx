'use client'
import './Styles/faq.css'
import money from '../images/money.jpeg'
import heath from '../images/heath2.png'
import place from '../images/place.png'
import { TypeAnimation } from 'react-type-animation'
import React, { useState, useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import Image from 'next/image';



export default function FAQ(){
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
    return (<>
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

<section id='asked-section'>
  <div>
  <h1 className='faq'>
    <TypeAnimation
      sequence={[
        "Freqeuntly Asked Questions",
        100,
        "This Section Answers all your Questions",
        100,
        "If You have Any More Question, Please Contact us",
      ]}
       speed={1}
       style={{ fontSize: "1em"}}
       repeat={Infinity}
    />
    </h1>
   <h3 className='questions'>Get all the satistifactory answers about all the Questions that 
    you have in mind
   </h3>
  </div>
  <div id='cards'>
      <div id='faq-cards'>
       <Image src={money} alt='' width={70} height={70} className='money'/>
          <p className='payment'>How do you pay at Liwonde Medical clinic?</p>
          <p className='answer'>liwonde medical clinic  offers wide range 
             of payment methods including cash, digital payments such as Mpamba,
             Airtel Money, Banks and organisation
          </p>
      </div>
      <div id='faq-cards'>
      <Image src={heath} alt='' width={90} height={90} className='money'/>
          <p className='payment'>Where to access services of liwonde medical clinic?</p>
          <p className='answer'> You can access services of the liwonde medical clinic
             by directly visiting us in liwonde township of by booking appointment
             via the links provided throughout the website
          </p>
      </div>
      <div id='faq-cards'>
      <Image src={place} alt='' width={70} height={70} className='money'/>
          <p className='payment'>Where is  Liwonde Medical clinic located?</p>
          <p className='answer'> follow the map in the quick service section
             to get the precise location of the liwonde medical clinic
          </p>
      </div>

  </div>
  
</section>
</motion.div>
            </div>
   </>)
}



// 'use client'

// import {
//   Accordion,
//   AccordionItem,
//   AccordionButton,
//   AccordionPanel,
//   Flex,
//   useColorModeValue,
//   Text,
//   Container,
// } from '@chakra-ui/react'

// import { ChevronDownIcon } from '@chakra-ui/icons'

// export default function SimpleAccordion() {
//   return (
//     <Flex
//       minH={'100vh'}
//       align={'center'}
//       justify={'center'}
//       bg={useColorModeValue('gray.50', 'gray.800')}>
//       <Container>
//         <Accordion allowMultiple width="100%" maxW="lg" rounded="lg">
//           <AccordionItem>
//             <AccordionButton
//               display="flex"
//               alignItems="center"
//               justifyContent="space-between"
//               p={4}>
//               <Text fontSize="md">What is Chakra UI?</Text>
//               <ChevronDownIcon fontSize="24px" />
//             </AccordionButton>
//             <AccordionPanel pb={4}>
//               <Text color="gray.600">
//                 Chakra UI is a simple and modular component library that gives developers
//                 the building blocks they need to create web applications.
//               </Text>
//             </AccordionPanel>
//           </AccordionItem>
//           <AccordionItem>
//             <AccordionButton
//               display="flex"
//               alignItems="center"
//               justifyContent="space-between"
//               p={4}>
//               <Text fontSize="md">What advantages to use?</Text>
//               <ChevronDownIcon fontSize="24px" />
//             </AccordionButton>
//             <AccordionPanel pb={4}>
//               <Text color="gray.600">
//                 Chakra UI offers a variety of advantages including ease of use,
//                 accessibility, and customization options. It also provides a comprehensive
//                 set of UI components and is fully compatible with React.
//               </Text>
//             </AccordionPanel>
//           </AccordionItem>
//           <AccordionItem>
//             <AccordionButton
//               display="flex"
//               alignItems="center"
//               justifyContent="space-between"
//               p={4}>
//               <Text fontSize="md">How to start using Chakra UI?</Text>
//               <ChevronDownIcon fontSize="24px" />
//             </AccordionButton>
//             <AccordionPanel pb={4}>
//               <Text color="gray.600">
//                 To get started with Chakra UI, you can install it via npm or yarn, and
//                 then import the components you need in your project. The Chakra UI
//                 documentation is also a great resource for getting started and learning
//                 more about the library.
//               </Text>
//             </AccordionPanel>
//           </AccordionItem>
//         </Accordion>
//       </Container>
//     </Flex>
//   )
// }