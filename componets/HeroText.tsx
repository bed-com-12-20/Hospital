import Link from "next/link";
import { motion } from "framer-motion";
import {
  Navbar as MTNavbar,
  Button,
  Typography,
} from "@material-tailwind/react";
import Container from "./Container";
interface Props {
  title: string;
}

const HeroText = ({ title }: Props) => {
  return (
    <div className="hidden lg:inline-block absolute top-10 left-0 w-full h-full">
      <Container className="flex h-full flex-col gap-y-4 justify-center relative z-10 my-auto mx-auto place-items-center text-center">
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl lg:text-2xl font-bold text-white"
        >
          <Typography variant="h1" color="white">
            {" "}
            {title}
          </Typography>
        </motion.h2>
        <motion.p
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-sm lg:text-base text-slate-100"
        >
          {" "}
          <Typography
            variant="paragraph"
            color="white"
            className="mt-1 mb-7 font-medium uppercase"
          >
            {" "}
            We Treat and God Heals ✨
          </Typography>
          <br />
        </motion.p>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="flex gap-x-2 mt-2"
        >
          {" "}
          <Link href="/services">
            <Button
              color="gray"
              className="py-2 px-4 lg:py-3 lg:px-6  hover:text-green-600 hover:bg-white duration-200 text-xs lg:text-sm uppercase font-semibold"
            >
              {" "}
              Discover Services
            </Button>
          </Link>{" "}
          <Link href="/appointments">
            <Button className="py-2 px-4 lg:py-3 lg:px-6  hover:text-green-600 hover:bg-white duration-200 text-xs lg:text-sm uppercase font-semibold">
              Buy Drugs
            </Button>
          </Link>
        </motion.div>
      </Container>
    </div>
  );
};

export default HeroText;
