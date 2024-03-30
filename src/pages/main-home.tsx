import { useRef, useState } from "react";

import { ThemeToggle } from "@/components/theme-toggle";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import Steps from "@/components/steps";
import DeutschHelferHome from "./deutsch-helfer-home";

import germanCat from "../assets/German_guru_cat.jpg"
// import romanianCat from "../assets/Romanian_guru_cat.jpg"

export default function Home() {
    const [germanClicked, setGermanClicked] = useState(false)
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
            <div className="fixed top-0 right-0 left-0 bg-main h-20 z-[99]"></div>
            <div className="max-w-[1200px] mx-auto min-h-screen mb-[200px]">
                <div className="fixed top-0 right-0 left-0 z-[99]">
                    <div className="flex items-center justify-between min-h-20 max-w-[1200px] mx-auto">
                        <span className="text-2xl font-semibold text-white hover:cursor-pointer" onClick={() => setGermanClicked(false)}>My Bots</span>
                        <ThemeToggle />
                    </div>
                </div>
                {germanClicked ? (
                    <DeutschHelferHome />
                ) : (
                    <>
                        <div className="flex gap-10 items-center justify-center mt-40 mb-20">
                            <div className="flex flex-col gap-5 items-center">
                                <h1 className="text-4xl font-semibold">Explore My Bot Collection</h1>
                                <p className="text-2xl text-center w-[75%]">Welcome to my collection of Discord bots, each created with a different purpose. Not all of them may be available at the moment.</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center w-[80%] mx-auto">
                            <h2 className="text-3xl font-semibold">Language Bot available:</h2>
                            <div className="w-[300px]">
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
                                                onClick={() => {
                                                    setGermanClicked(true)
                                                    }}
                                            >
                                                <div className="min-h-[400px] min-w-[300px] w-[50%] h-full flex items-center justify-center">
                                                    <div className="flex items-center justify-center p-6">
                                                        <img src={bot.img} alt={`bot ${index}`} className="w-[300px] rounded-lg" />
                                                    </div>
                                                </div>
                                            </CarouselItem>
                                        ))}
                                    </CarouselContent>
                                </Carousel>
                            </div>
                        </div>
                        <Steps />
                    </>
                )}
            </div>
        </>
    )
}