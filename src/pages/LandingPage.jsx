import * as React from "react"
import Navbar from "../components/navbar";
import { FaFacebook, FaFacebookMessenger, FaInstagram } from "react-icons/fa";
import { MdDiscount } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselNextPoster,
    CarouselPrevious,
    CarouselPreviousPoster,
} from "@/components/ui/carousel";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button";

export default function LandingPage() {
    const [api, setApi] = React.useState(null);
    const [current, setCurrent] = React.useState(0);
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        if (!api) return;

        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap() + 1);

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1);
        });
    }, [api]);

    return (
        <div>
            <Navbar />
            <div className="flex flex-col h-screen">
                <div className="flex w-full items-center justify-center h-[10vh] gap-4 p-4 bg-neutral-300/50">
                    <MdDiscount className="text-yellow-500" size={32} />
                    <p className="text-lg font-medium">Starting 5 January 2024 Facebook login has been terminated.</p>
                </div>
                <div className="w-full h-[90vh] text-white">
                    <Carousel className="relative w-full h-full" setApi={setApi}>
                        <CarouselContent className="w-full h-[90vh]">
                            {Array.from({ length: 5 }).map((_, index) => (
                                <CarouselItem key={index}>
                                    <img src="/img/statue1.jpg" className="w-full h-full object-cover" />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <div className="absolute items-center z-10 bottom-6 left-6 flex bg-black/40 font-medium text-lg">
                            <div className="p-3 border border-white text-3xl">{current} / {count}</div>
                            <div className="px-3 py-3 border border-white"><CarouselPreviousPoster className="w-8 h-8" /></div>
                            <div className="px-3 py-3 border border-white"><CarouselNextPoster className="w-8 h-8" /></div>
                        </div>
                    </Carousel>
                </div>
            </div>

            <div className="flex flex-col w-full h-screen px-18 py-8 bg-neutral-200/50">
                <div className="w-full">
                    <h1 className="text-9xl font-medium text-black font-bebasneue">About</h1>
                </div>
                <div className="flex gap-6 w-full h-full">
                    <div className="flex flex-col gap-8 font-bebasneue max-w-sm">
                        <h1 className="text-9xl text-black font-thin font-bebasneue">Us</h1>
                        <p className="text-neutral-500 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit deleniti, culpa perferendis labore, in hic quasi libero explicabo accusantium quas possimus ab error. Consequatur in esse sapiente culpa, explicabo id molestiae nemo.</p>
                    </div>
                    <div className="flex w-lg">
                        <img src="/img/section-7.png" className="rounded-2xl h-full w-full object-cover" alt="" />
                    </div>
                    <div className="flex flex-col gap-8 font-medium font-bebasneue">
                        <div className="flex w-xs">
                            <img src="/img/section-7.png" className="rounded-2xl h-full w-full object-cover" alt="" />
                        </div>
                        <p className="text-neutral-500 text-lg max-w-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur provident, id accusantium, hic, quasi ea odio a deleniti dicta sint numquam repellat ipsam excepturi.</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col mt-8">
                <h1 className="text-6xl font-medium text-[#493323] text-center font-bebasneue">Our Product / Categories</h1>
                <div className="flex items-center justify-center gap-16 px-32 h-[20vh]">
                    <div className="flex items-center gap-2">
                        <img src="/img/icon/wood.png" className="h-14 w-14" alt="" />
                        <p className="font-medium font-bebasneue text-neutral-500 text-3xl">Wood</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <img src="/img/icon/porcelain.png" className="h-14 w-14" alt="" />
                        <p className="font-medium font-bebasneue text-neutral-500 text-3xl">Porcelain</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <img src="/img/icon/wayang2.png" className="h-14 w-14" alt="" />
                        <p className="font-medium font-bebasneue text-neutral-500 text-3xl">Wayang</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <img src="/img/icon/wood.png" className="h-14 w-14" alt="" />
                        <p className="font-medium font-bebasneue text-neutral-500 text-3xl">Antique</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <img src="/img/icon/wayang2.png" className="h-14 w-14" alt="" />
                        <p className="font-medium font-bebasneue text-neutral-500 text-3xl">Painting</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <img src="/img/icon/porcelain.png" className="h-14 w-14" alt="" />
                        <p className="font-medium font-bebasneue text-neutral-500 text-3xl">Souvenir</p>
                    </div>
                </div>
            </div>

            {/* <div className="w-full py-4 text-white">
                <div className="flex flex-col gap-2 w-full h-full">
                    <h1 className="text-6xl font-medium text-black text-center font-bebasneue">Our Product</h1>
                    <div className="flex flex-col gap-10 w-full h-full">
                        <div className="flex items-center w-full gap-4">
                            <div className="pl-12 pr-2 bg-amber-200">
                                <h1 className="text-4xl font-medium text-black font-bebasneue">Categories</h1>
                            </div>
                            <div className="flex items-center gap-6 w-full">
                                <h1 className="text-2xl font-medium text-black font-bebasneue">All</h1>
                                <h1 className="text-2xl font-medium text-black font-bebasneue">Wood</h1>
                                <h1 className="text-2xl font-medium text-black font-bebasneue">Porcelain</h1>
                                <h1 className="text-2xl font-medium text-black font-bebasneue">Wayang</h1>
                                <h1 className="text-2xl font-medium text-black font-bebasneue">Antique</h1>
                                <h1 className="text-2xl font-medium text-black font-bebasneue">Painting</h1>
                                <h1 className="text-2xl font-medium text-black font-bebasneue">Souvenir</h1>
                            </div>
                        </div>
                        <div className="grid grid-cols-5 gap-4 h-full mx-12">
                            <div className="flex flex-col w-58 gap-2">
                                <div className="flex w-58">
                                    <img src="/img/section-1.png" className="w-full h-full" alt="" />
                                </div>
                                <div className="flex flex-col font-bebasneue font-medium">
                                    <p className="text-black text-xl">Lorem, ipsum dolor.</p>
                                    <p className="text-neutral-500 text-base">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia, unde?</p>
                                </div>
                            </div>
                            <div className="flex flex-col w-58 gap-2">
                                <div className="flex w-58">
                                    <img src="/img/section-1.png" className="w-full h-full" alt="" />
                                </div>
                                <div className="flex flex-col font-bebasneue font-medium">
                                    <p className="text-black text-xl">Lorem, ipsum dolor.</p>
                                    <p className="text-neutral-500 text-base">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia, unde?</p>
                                </div>
                            </div>
                            <div className="flex flex-col w-58 gap-2">
                                <div className="flex w-58">
                                    <img src="/img/section-1.png" className="w-full h-full" alt="" />
                                </div>
                                <div className="flex flex-col font-bebasneue font-medium">
                                    <p className="text-black text-xl">Lorem, ipsum dolor.</p>
                                    <p className="text-neutral-500 text-base">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia, unde?</p>
                                </div>
                            </div>
                            <div className="flex flex-col w-58 gap-2">
                                <div className="flex w-58">
                                    <img src="/img/section-1.png" className="w-full h-full" alt="" />
                                </div>
                                <div className="flex flex-col font-bebasneue font-medium">
                                    <p className="text-black text-xl">Lorem, ipsum dolor.</p>
                                    <p className="text-neutral-500 text-base">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia, unde?</p>
                                </div>
                            </div>
                            <div className="flex flex-col w-58 gap-2">
                                <div className="flex w-58">
                                    <img src="/img/section-1.png" className="w-full h-full" alt="" />
                                </div>
                                <div className="flex flex-col font-bebasneue font-medium">
                                    <p className="text-black text-xl">Lorem, ipsum dolor.</p>
                                    <p className="text-neutral-500 text-base">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia, unde?</p>
                                </div>
                            </div>
                            <div className="flex flex-col w-58 gap-2">
                                <div className="flex w-58">
                                    <img src="/img/section-1.png" className="w-full h-full" alt="" />
                                </div>
                                <div className="flex flex-col font-bebasneue font-medium">
                                    <p className="text-black text-xl">Lorem, ipsum dolor.</p>
                                    <p className="text-neutral-500 text-base">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia, unde?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            <div className="relative flex flex-col w-full h-[930vh] bg-[url(/img/section-6.jpg)] bg-center bg-cover">
                {/* Overlay transparan */}
                <div className="absolute inset-0 bg-white/10"></div>
                <div className="flex w-full h-screen z-10">
                    <div className="relative flex flex-col w-6/12 h-full bg-amber-200 bg-[url(/img/section-10.png)] object-cover bg-center">
                        <div className="absolute inset-0 bg-white/30"></div>
                        <div className="h-full justify-center flex flex-col gap-2 z-10">
                            <div className="bg-[#493323] pl-32 pr-4 py-1 max-w-max">
                                <h1 className="text-6xl font-medium text-white font-bebasneue">Wood</h1>
                            </div>
                            <h1 className="pl-32 text-6xl font-medium text-white font-bebasneue">Product</h1>
                        </div>
                    </div>
                    <div className="flex w-8/12 h-full bg-black/10 z-10">
                        <div className="relative flex w-full items-center px-8 group">
                            <Carousel className="w-2xl">
                                <CarouselContent className="flex gap-2">
                                    {[...Array(5)].map((_, i) => (
                                        <CarouselItem key={i} className="basis-auto shrink-0">
                                            <div className="flex flex-col w-80 gap-2 bg-white">
                                                <div className="flex w-80">
                                                    <img
                                                        src="/img/produk/1.png"
                                                        className="w-full h-full"
                                                        alt={`Product ${i}`}
                                                    />
                                                </div>
                                                <div className="flex flex-col font-bebasneue font-medium px-3 py-2 gap-1">
                                                    <div className="flex flex-col">
                                                        <p className="text-black text-xl">Lorem, ipsum dolor.</p>
                                                        <p className="text-neutral-500 text-base">
                                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia, unde?
                                                        </p>
                                                    </div>
                                                    <Button className="py-2 text-medium text-lg font-normal text-white bg-[#493323] hover:bg-[#3B291D] ">See More</Button>
                                                </div>
                                            </div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>

                                {/* Tombol Previous & Next di atas gambar, muncul saat hover */}
                                <CarouselPrevious className="absolute left-4 top-1/2 opacity-0 group-hover:opacity-100 transition w-8 h-8" />
                                <CarouselNext className="absolute right-4 top-1/2 opacity-0 group-hover:opacity-100 transition w-8 h-8" />
                            </Carousel>
                        </div>
                    </div>
                </div>
                <div className="flex w-full h-screen bg-white z-10">
                    <div className="flex w-8/12 h-full bg-black/10 z-10">
                        <div className="relative flex w-full items-center px-8 group">
                            <Carousel className="w-2xl">
                                <CarouselContent className="flex gap-2">
                                    {[...Array(5)].map((_, i) => (
                                        <CarouselItem key={i} className="basis-auto shrink-0">
                                            <div className="flex flex-col w-80 gap-2 bg-white">
                                                <div className="flex w-80">
                                                    <img
                                                        src="/img/produk/2.png"
                                                        className="w-full h-full"
                                                        alt={`Product ${i}`}
                                                    />
                                                </div>
                                                <div className="flex flex-col font-bebasneue font-medium px-3 py-2 gap-1">
                                                    <div className="flex flex-col">
                                                        <p className="text-black text-xl">Lorem, ipsum dolor.</p>
                                                        <p className="text-neutral-500 text-base">
                                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia, unde?
                                                        </p>
                                                    </div>
                                                    <Button className="py-2 text-medium text-lg font-normal text-white bg-[#493323] hover:bg-[#3B291D] ">See More</Button>
                                                </div>
                                            </div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>

                                {/* Tombol Previous & Next di atas gambar, muncul saat hover */}
                                <CarouselPrevious className="absolute left-4 top-1/2 opacity-0 group-hover:opacity-100 transition w-8 h-8" />
                                <CarouselNext className="absolute right-4 top-1/2 opacity-0 group-hover:opacity-100 transition w-8 h-8" />
                            </Carousel>
                        </div>
                    </div>
                    <div className="relative flex flex-col w-6/12 h-full bg-amber-200 bg-[url(/img/section-9.png)] object-cover bg-center">
                        <div className="absolute inset-0 bg-white/30"></div>
                        <div className="h-full justify-center flex flex-col gap-2 z-10 items-end">
                            <div className="bg-[#493323] pr-32 pl-4 py-1">
                                <h1 className="text-6xl font-medium text-white font-bebasneue">Porcelain</h1>
                            </div>
                            <h1 className="pr-32 text-6xl font-medium text-white font-bebasneue">Product</h1>
                        </div>
                    </div>
                </div>
                <div className="flex w-full h-screen z-10">
                    <div className="relative flex flex-col w-6/12 h-full bg-amber-200 bg-[url(/img/section-8.png)] object-cover bg-center">
                        <div className="absolute inset-0 bg-white/30"></div>
                        <div className="h-full justify-center flex flex-col gap-2 z-10">
                            <div className="bg-[#493323] pl-32 pr-4 py-1 max-w-max">
                                <h1 className="text-6xl font-medium text-white font-bebasneue">Wayang</h1>
                            </div>
                            <h1 className="pl-32 text-6xl font-medium text-white font-bebasneue">Product</h1>
                        </div>
                    </div>
                    <div className="flex w-8/12 h-full bg-black/10 z-10">
                        <div className="relative flex w-full items-center px-8 group">
                            <Carousel className="w-2xl">
                                <CarouselContent className="flex gap-2">
                                    {[...Array(5)].map((_, i) => (
                                        <CarouselItem key={i} className="basis-auto shrink-0">
                                            <div className="flex flex-col w-80 gap-2 bg-white">
                                                <div className="flex w-80">
                                                    <img
                                                        src="/img/produk/3.png"
                                                        className="w-full h-full"
                                                        alt={`Product ${i}`}
                                                    />
                                                </div>
                                                <div className="flex flex-col font-bebasneue font-medium px-3 py-2 gap-1">
                                                    <div className="flex flex-col">
                                                        <p className="text-black text-xl">Lorem, ipsum dolor.</p>
                                                        <p className="text-neutral-500 text-base">
                                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia, unde?
                                                        </p>
                                                    </div>
                                                    <Button className="py-2 text-medium text-lg font-normal text-white bg-[#493323] hover:bg-[#3B291D] ">See More</Button>
                                                </div>
                                            </div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>

                                {/* Tombol Previous & Next di atas gambar, muncul saat hover */}
                                <CarouselPrevious className="absolute left-4 top-1/2 opacity-0 group-hover:opacity-100 transition w-8 h-8" />
                                <CarouselNext className="absolute right-4 top-1/2 opacity-0 group-hover:opacity-100 transition w-8 h-8" />
                            </Carousel>
                        </div>
                    </div>
                </div>
                <div className="flex w-full h-screen bg-white z-10">
                    <div className="flex w-8/12 h-full bg-black/10 z-10">
                        <div className="relative flex w-full items-center px-8 group">
                            <Carousel className="w-2xl">
                                <CarouselContent className="flex gap-2">
                                    {[...Array(5)].map((_, i) => (
                                        <CarouselItem key={i} className="basis-auto shrink-0">
                                            <div className="flex flex-col w-80 gap-2 bg-white">
                                                <div className="flex w-80">
                                                    <img
                                                        src="/img/produk/2.png"
                                                        className="w-full h-full"
                                                        alt={`Product ${i}`}
                                                    />
                                                </div>
                                                <div className="flex flex-col font-bebasneue font-medium px-3 py-2 gap-1">
                                                    <div className="flex flex-col">
                                                        <p className="text-black text-xl">Lorem, ipsum dolor.</p>
                                                        <p className="text-neutral-500 text-base">
                                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia, unde?
                                                        </p>
                                                    </div>
                                                    <Button className="py-2 text-medium text-lg font-normal text-white bg-[#493323] hover:bg-[#3B291D] ">See More</Button>
                                                </div>
                                            </div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>

                                {/* Tombol Previous & Next di atas gambar, muncul saat hover */}
                                <CarouselPrevious className="absolute left-4 top-1/2 opacity-0 group-hover:opacity-100 transition w-8 h-8" />
                                <CarouselNext className="absolute right-4 top-1/2 opacity-0 group-hover:opacity-100 transition w-8 h-8" />
                            </Carousel>
                        </div>
                    </div>
                    <div className="relative flex flex-col w-6/12 h-full bg-amber-200 bg-[url(/img/section-3.png)] object-cover bg-center">
                        <div className="absolute inset-0 bg-white/30"></div>
                        <div className="h-full justify-center flex flex-col gap-2 z-10 items-end">
                            <div className="bg-[#493323] pr-32 pl-4 py-1">
                                <h1 className="text-6xl font-medium text-white font-bebasneue">Antique</h1>
                            </div>
                            <h1 className="pr-32 text-6xl font-medium text-white font-bebasneue">Product</h1>
                        </div>
                    </div>
                </div>
                <div className="flex w-full h-screen z-10">
                    <div className="relative flex flex-col w-6/12 h-full bg-amber-200 bg-[url(/img/section-2.png)] object-cover bg-right">
                        <div className="absolute inset-0 bg-white/30"></div>
                        <div className="h-full justify-center flex flex-col gap-2 z-10">
                            <div className="bg-[#493323] pl-32 pr-4 py-1 max-w-max">
                                <h1 className="text-6xl font-medium text-white font-bebasneue">Painting</h1>
                            </div>
                            <h1 className="pl-32 text-6xl font-medium text-white font-bebasneue">Product</h1>
                        </div>
                    </div>
                    <div className="flex w-8/12 h-full bg-black/10 z-10">
                        <div className="relative flex w-full items-center px-8 group">
                            <Carousel className="w-2xl">
                                <CarouselContent className="flex gap-2">
                                    {[...Array(5)].map((_, i) => (
                                        <CarouselItem key={i} className="basis-auto shrink-0">
                                            <div className="flex flex-col w-80 gap-2 bg-white">
                                                <div className="flex w-80">
                                                    <img
                                                        src="/img/produk/1.png"
                                                        className="w-full h-full"
                                                        alt={`Product ${i}`}
                                                    />
                                                </div>
                                                <div className="flex flex-col font-bebasneue font-medium px-3 py-2 gap-1">
                                                    <div className="flex flex-col">
                                                        <p className="text-black text-xl">Lorem, ipsum dolor.</p>
                                                        <p className="text-neutral-500 text-base">
                                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia, unde?
                                                        </p>
                                                    </div>
                                                    <Button className="py-2 text-medium text-lg font-normal text-white bg-[#493323] hover:bg-[#3B291D] ">See More</Button>
                                                </div>
                                            </div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>

                                {/* Tombol Previous & Next di atas gambar, muncul saat hover */}
                                <CarouselPrevious className="absolute left-4 top-1/2 opacity-0 group-hover:opacity-100 transition w-8 h-8" />
                                <CarouselNext className="absolute right-4 top-1/2 opacity-0 group-hover:opacity-100 transition w-8 h-8" />
                            </Carousel>
                        </div>
                    </div>
                </div>
                <div className="flex w-full h-screen bg-white z-10">
                    <div className="flex w-8/12 h-full bg-black/10 z-10">
                        <div className="relative flex w-full items-center px-8 group">
                            <Carousel className="w-2xl">
                                <CarouselContent className="flex gap-2">
                                    {[...Array(5)].map((_, i) => (
                                        <CarouselItem key={i} className="basis-auto shrink-0">
                                            <div className="flex flex-col w-80 gap-1 bg-white">
                                                <div className="flex w-80">
                                                    <img
                                                        src="/img/produk/3.png"
                                                        className="w-full h-full"
                                                        alt={`Product ${i}`}
                                                    />
                                                </div>
                                                <div className="flex flex-col font-bebasneue font-medium px-3 py-2 gap-1">
                                                    <div className="flex flex-col">
                                                        <p className="text-black text-xl">Lorem, ipsum dolor.</p>
                                                        <p className="text-neutral-500 text-base">
                                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia, unde?
                                                        </p>
                                                    </div>
                                                    <Button className="py-2 text-medium text-lg font-normal text-white bg-[#493323] hover:bg-[#3B291D] ">See More</Button>
                                                </div>
                                            </div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>

                                {/* Tombol Previous & Next di atas gambar, muncul saat hover */}
                                <CarouselPrevious className="absolute left-4 top-1/2 opacity-0 group-hover:opacity-100 transition w-8 h-8" />
                                <CarouselNext className="absolute right-4 top-1/2 opacity-0 group-hover:opacity-100 transition w-8 h-8" />
                            </Carousel>
                        </div>
                    </div>

                    <div className="relative flex flex-col w-6/12 h-full bg-amber-200 bg-[url(/img/section-7.png)] object-cover bg-center">
                        <div className="absolute inset-0 bg-white/30" />
                        <div className="h-full justify-center flex flex-col gap-2 z-10 items-end">
                            <div className="bg-[#493323] pr-32 pl-4 py-1">
                                <h1 className="text-6xl font-medium text-white font-bebasneue">Souvenir</h1>
                            </div>
                            <h1 className="pr-32 text-6xl font-medium text-white font-bebasneue">Product</h1>
                        </div>
                    </div>
                </div>

                <div className="relative flex justify-between items-center gap-24 w-full h-[70vh] z-10">
                    <div className="absolute inset-0 bg-black/10" />
                    <div className="flex flex-col gap-4 z-10">
                        <div className="bg-white pl-32 pr-4 py-1 max-w-max">
                            <h1 className="text-6xl font-medium text-[#493323] font-bebasneue">Feautured</h1>
                        </div>
                        <h1 className="pl-32 text-6xl font-medium text-white font-bebasneue">Products</h1>
                    </div>

                    <div className="relative pr-32 w-3xl z-10">
                        <Carousel opts={{ align: "start" }}>
                            <CarouselContent className="flex gap-4">
                                {[...Array(5)].map((_, i) => (
                                    <CarouselItem key={i} className="basis-auto shrink-0">
                                        <div className="flex flex-col w-48 gap-2 bg-white">
                                            <div className="flex w-48">
                                                <img src="/img/produk/1.png" className="w-full h-full" alt={`Product ${i}`} />
                                            </div>
                                            <div className="flex flex-col font-bebasneue font-medium px-3 py-2 gap-1">
                                                <div className="flex flex-col">
                                                    <p className="text-black text-lg">Lorem, ipsum dolor.</p>
                                                    <p className="text-neutral-500 text-sm">
                                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia, unde?
                                                    </p>
                                                </div>
                                                <Button className="py-2 text-medium text-lg font-normal text-white bg-[#493323] hover:bg-[#3B291D] ">See More</Button>
                                            </div>
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                    </div>
                </div>

                <div className="relative flex w-full h-screen z-10 px-52 py-12">
                    <div className="absolute inset-0 bg-black/80"></div>
                    <div className="flex flex-col w-full gap-4 bg-white p-6 rounded-md z-10 shadow">
                        <h1 className="text-5xl font-medium text-black font-bebasneue text-center">Frequently Asked Questions</h1>
                        <Accordion type="single" collapsible className="w-full z-10">
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="font-medium text-3xl font-bebasneue text-black">Is it accessible?</AccordionTrigger>
                                <AccordionContent className="text-neutral-400 text-lg font-medium">
                                    Yes. It adheres to the WAI-ARIA design pattern.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger className="font-medium text-3xl font-bebasneue text-black">Is it accessible?</AccordionTrigger>
                                <AccordionContent className="text-neutral-400 text-lg font-medium">
                                    Yes. It adheres to the WAI-ARIA design pattern.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger className="font-medium text-3xl font-bebasneue text-black">Is it accessible?</AccordionTrigger>
                                <AccordionContent className="text-neutral-400 text-lg font-medium">
                                    Yes. It adheres to the WAI-ARIA design pattern.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>

                <div className="relative flex flex-col justify-center gap-6 w-full h-[60vh] z-10">
                    <div className="absolute inset-0 bg-black/10" />
                    <div className="flex flex-col gap-2 z-10">
                        <div className="bg-[#493323] pl-32 pr-4 py-1 max-w-max">
                            <h1 className="text-6xl font-medium text-white font-bebasneue">Connect</h1>
                        </div>
                        <h1 className="pl-32 text-6xl font-medium text-white font-bebasneue">With Us</h1>
                    </div>
                    <div className="flex pl-32 z-10">
                        <button className="flex gap-2 bg-[#91684A] px-10 py-4 rounded-sm font-medium text-lg text-white items-center">
                            <FaWhatsapp />
                            <p>Contact On Whatsapp</p>
                        </button>
                    </div>
                </div>
                <div className="flex flex-col w-full h-screen bg-neutral-800 z-10">
                    <div className="flex gap-16 h-[10vh] py-8 bg-black/60 justify-center items-center">
                        <img src="/img/logo/bca.png" className="w-14 h-14" alt="" />
                        <img src="/img/logo/permata.png" className="w-14 h-14" alt="" />
                        <img src="/img/logo/bni.png" className="w-14 h-14" alt="" />
                        <img src="/img/logo/bri.png" className="w-14 h-14" alt="" />
                        <img src="/img/logo/mandiri.png" className="w-14 h-14" alt="" />
                    </div>
                    <div className="flex h-[2vh] bg-[#493323]"></div>
                    <div className="flex flex-col h-[88vh] px-20 py-14 justify-between bg-black">
                        <div className="flex justify-between">
                            <div className="flex flex-col gap-4">
                                <h1 className="text-4xl font-medium text-white font-bebasneue">About Ck</h1>
                                <p className="text-white text-md max-w-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia, unde?</p>
                            </div>
                            <div className="flex flex-col gap-4">
                                <h1 className="text-4xl font-medium text-white font-bebasneue">Info</h1>
                                <div className="flex flex-col gap-2 max-w-md">
                                    <p className="text-white text-md">Home</p>
                                    <p className="text-white text-md">Abot Us</p>
                                    <p className="text-white text-md">Service</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4">
                                <h1 className="text-4xl font-medium text-white font-bebasneue">Contact</h1>
                                <div className="flex flex-col gap-2 max-w-md">
                                    <div className="flex gap-2 items-center text-white text-md">
                                        <FaWhatsapp />
                                        <p>+6289697392258</p>
                                    </div>
                                    <div className="flex gap-2 items-center text-white text-md">
                                        <FaInstagram />
                                        <p>Instagram</p>
                                    </div>
                                    <div className="flex gap-2 items-center text-white text-md">
                                        <FaFacebookMessenger />
                                        <p>Messenger</p>
                                    </div>
                                    <div className="flex gap-2 items-center text-white text-md">
                                        <FaFacebook />
                                        <p>Facebook</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4">
                                <h1 className="text-4xl font-medium text-white font-bebasneue">Location</h1>
                                <div className="h-52 w-52 bg-amber-50">

                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <p className="text-sm font-medium text-white">© 2025 Make Over. All rights reserved.</p>
                            <p className="text-sm font-medium text-white">Privacy Policy | Terms & Conditions</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}