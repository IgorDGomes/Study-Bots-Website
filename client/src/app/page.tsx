"use client"

import { useRef } from "react";

import Image from "next/image";
import Link from "next/link";

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Steps from "@/components/steps";
import Autoplay from "embla-carousel-autoplay";

import germanCat from "../assets/German_guru_cat.jpg";

export default function Home() {
    const plugin = useRef(
      Autoplay({ delay: 4000, stopOnInteraction: true })
    )
  
    const bots = [
      {
          img: germanCat
      },
      // {
      //     img: romanianCat
      // },
      {
          img: germanCat
      },
      {
          img: germanCat
      },
  ]

  return (
    <>
      <div className="max-w-[1200px] mx-auto min-h-screen mb-[200px]">
        <div className="max-w-[90%] mx-auto sm:max-w-fit overflow-hidden">
          <div className="flex items-center justify-center mt-40 mb-32 md:mb-20">
            <div className="flex flex-col gap-10 md:gap-5 items-center w-[75%] text-center">
              <h1 className="text-4xl font-semibold">Explore My Bot Collection</h1>
              <p className="text-2xl text-center">Welcome to my collection of Discord bots, each created with a different purpose. Not all of them may be available at the moment.</p>
            </div>
          </div>
          <div className="flex flex-col items-center w-[80%] mx-auto">
            <h2 className="text-3xl font-semibold">Language Bot available:</h2>
            <Link href={'/deutsch-helfer'} className="w-[300px]">
              <Carousel
                plugins={[plugin.current]}
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.play}
              >
                <CarouselContent>
                  {bots.map((bot, index) => (
                    <CarouselItem 
                      key={index} 
                      className="flex justify-center hover:cursor-pointer" 
                    >
                      <div className="min-h-[400px] min-w-[300px] w-[50%] h-full flex items-center justify-center">
                        <div className="flex items-center justify-center p-6">
                          <Image src={bot.img} alt={`bot ${index}`} className="w-[300px] rounded-lg" />
                        </div>
                      </div>
                    </CarouselItem>))
                  }
                </CarouselContent>
              </Carousel>
            </Link>
          </div>
        </div>
        <Steps />
      </div>
    </>
  )
}