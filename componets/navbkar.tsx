// "use client";
// import React, { useEffect, useState } from "react";
// import {
//   Navbar as MTNavbar,
//   Collapse,
//   Button,
//   IconButton,
//   Typography,
// } from "@material-tailwind/react";
// import Link from "next/link";
// import Image from "next/image";
// import logo from '../app/images/icon.png'
// import NextLink from "next/link";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
// const NAV_MENU = [
//   { name: "Home", href: "/" },
//   {
//     name: "Services",
//     subLinks: [
//       { name: "Pharmacy", href: "/pharmacy" },
//       { name: "Theatre", href: "/theatre" },
//       { name: "Finance", href: "/finance" },
//       { name: "Dental", href: "/dental" },
//       { name: "Reception", href: "/reception" },
//       { name: "OPD", href: "/opd" },
//     ],
//   },
//   { name: "Departments", href: "/Login" },
//   { name: "Staff", href: "/Login" },
//   { name: "FAQ", href: "/faq" },
//   { name: "Contact Us", href: "/contact-us" },
//   { name: "About Us", href: "/pages/about-us" },
// ];
// function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [isScrolling, setIsScrolling] = useState(false);

//   const handleOpen = () => setOpen((cur) => !cur);

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 960) {
//         setOpen(false);
//       }
//     };
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolling(window.scrollY > 0);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);
//   return (
//     <>
//       <MTNavbar
//         fullWidth
//         shadow={false}
//         blurred={false}
//         color={isScrolling ? "white" : "transparent"}
//         className="fixed top-0 z-50 border-0"
//       >
//         <div className="container mx-auto flex items-center justify-between">
//           <Link href="/">
//             <div className="cursor-pointer duration-200">
//               <Image
//                 src={logo}
//                 alt="Logo"
//                 width={74}
//                 height={100}
//                 className="h-120 w-120"
//               />
//             </div>
//           </Link>
//           <ul
//             className={`ml-10 hidden items-center gap-8 lg:flex ${
//               isScrolling ? "text-gray-900" : "text-white"
//             }`}
//           >
//             {NAV_MENU.map((link,name) => (
//               // <li><NavItem key={name}></NavItem></li>
//               // <NavItem key={link.href} {...link} />
//             ))}
//           </ul>
//           <div className="hidden items-center gap-2 lg:flex">
//             <a href="/Appointment" target="_blank">
//               <Button color={isScrolling ? "gray" : "white"}>
//                 {" "}
//                 Book Appointment
//               </Button>
//             </a>
//           </div>

//           <IconButton
//             variant="text"
//             onClick={handleOpen}
//             color={isScrolling ? "gray" : "white"}
//             className="ml-auto inline-block lg:hidden"
//           >
//             {open ? (
//               <XMarkIcon strokeWidth={2} className="h-6 w-6" />
//             ) : (
//               <Bars3Icon strokeWidth={2} className="h-6 w-6" />
//             )}
//           </IconButton>
//         </div>
//         <Collapse open={open}>
//           <div
//             className={`container mx-auto bg-white rounded-lg py-4 px-6 mt-3 border-t border-gray-200"${isScrolling ? " " : " "}`}
//           >
//             <ul
//               className={`flex flex-col  text-gray-900 gap-4"${
//                 isScrolling ? "text-gray-900" : "text-white"
//               }`}
//             >
//               {NAV_MENU.map((link) => (
//                 <NavItem key={link.href} {...link} />
//               ))}
//             </ul>
//             <div className="mt-6 flex mb-4 items-center gap-2">
//               <a href="/Appointment" target="_blank">
//                 <Button color="gray"> Book Appointment </Button>
//               </a>
//             </div>
//           </div>
//         </Collapse>
//       </MTNavbar>
//     </>
//   );
// }

// export default Navbar;
// type NavItemProps = {
//   name: string;
//   href?: string;
//   subLinks?: { name?: string; href?: string }[];
// };
// const NavItem = ({ name, href, subLinks }: NavItemProps) => {
//   const [hovered, setHovered] = useState(false);
//   return (
//     <li>
//       {subLinks ? (
//         <div
//           className="relative"
//           onMouseEnter={() => setHovered(true)}
//           onMouseLeave={() => setHovered(false)}
//         >
//           <Typography
//             as="a"
//             href={href || "#"}
//             target={href ? "_blank" : "_self"}
//             variant="paragraph"
//             className={`flex items-center gap-2 text-dark hover:text-green-600 font-medium transition duration-300 cursor-pointer ${hovered && "text-green-600"}`}
//           >
//             {" "}
//             {name}
//           </Typography>
//           {hovered && (
//             <ul className="absolute z-10 mt-2 w-50 y-2 space-y-2 bg-white rounded-lg p-2">
//               {" "}
//               {subLinks.map((subLink) => (
//                 <li key={subLink.href}>
//                   <Link href={subLink.href}>
//                     <div className="text-dark hover:text-green-600">
//                       {subLink.name}
//                     </div>
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>
//       ) : (
//         <div
//           className={`text-dark font-bold hover:text-green-600 transition duration-300 `}
//         >
//           {href && <NextLink href={href}> {name} </NextLink>}
//         </div>
//       )}
//     </li>
//   );
// };
