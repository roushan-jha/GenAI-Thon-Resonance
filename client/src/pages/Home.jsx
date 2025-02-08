import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";

const images = [img5, img4, img1, img2, img3];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-screen flex flex-col bg-blue-200"
    >
      <div className="flex flex-1 flex-col items-center justify-center bg-cover bg-center p-4">
        <Carousel className="w-full h-[80%] mt-4 max-w-4xl">
          <CarouselContent>
            {images.map((img, index) => (
              <CarouselItem
                key={index}
                className={index === currentIndex ? "block" : "hidden"}
              >
                <img
                  src={img}
                  height={300}
                  alt={`Slide ${index + 1}`}
                  className="w-full rounded-lg shadow-lg"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </motion.div>
  );
};

export default Home;
