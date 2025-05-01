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
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button";
import SectionWood from "@/components/sections/SectionWood";
import SectionPorcelain from "@/components/sections/SectionPorcelain";
import SectionWayang from "@/components/sections/SectionWayang";
import SectionAntique from "@/components/sections/SectionAntique";
import SectionPainting from "@/components/sections/SectionPainting";
import SectionSouvenir from "@/components/sections/SectionSouvenir";

export default function LandingPage() {
    const images = [
        "/img/produk/1.png",
        "/img/produk/2.png",
        "/img/produk/3.png",
        "/img/produk/1.png",
        "/img/produk/2.png",
        "/img/produk/3.png",
    ];

    const [currentIndex, setCurrentIndex] = React.useState(0);

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
                <SectionWood />
                <SectionPorcelain />
                <SectionWayang />
                <SectionAntique />
                <SectionPainting />
                <SectionSouvenir />

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
                                                    <p className="text-black text-xl">Lorem, ipsum dolor.</p>
                                                    <p className="text-neutral-500 text-base">
                                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia, unde?
                                                    </p>
                                                </div>
                                                <Dialog>
                                                    <DialogTrigger asChild>
                                                        <Button className="py-2 text-medium text-lg font-normal text-white bg-[#493323] hover:bg-[#3B291D]">
                                                            See More
                                                        </Button>
                                                    </DialogTrigger>
                                                    <DialogContent className="!max-w-4xl">
                                                        <div className="flex gap-4">
                                                            <div className="flex flex-col gap-1 w-1/2">
                                                                {/* Gambar Utama */}
                                                                <div className="flex w-full h-3/4">
                                                                    <img
                                                                        src={images[currentIndex]}
                                                                        className="h-full w-full object-cover rounded-md"
                                                                        alt={`Product ${currentIndex}`}
                                                                    />
                                                                </div>

                                                                {/* Thumbnail */}
                                                                <div className="flex gap-2 w-full h-1/4 overflow-x-auto">
                                                                    {images.map((src, i) => (
                                                                        <div
                                                                            key={i}
                                                                            onClick={() => setCurrentIndex(i)}
                                                                            className={`w-24 h-24 flex-shrink-0 cursor-pointer border-2 rounded-md ${i === currentIndex ? "border-[#493323]" : "border-transparent opacity-50"
                                                                                }`}
                                                                        >
                                                                            <img
                                                                                src={src}
                                                                                className="h-full w-full object-cover rounded-md"
                                                                                alt={`Thumbnail ${i}`}
                                                                            />
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                            <div className="flex flex-col w-1/2 gap-3">
                                                                <div className="flex flex-col w-full gap-1">
                                                                    <h1 className="text-4xl font-medium text-black font-bebasneue">Wayang</h1>
                                                                    <p className="text-neutral-500 text-base font-medium">
                                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veritatis maiores, illum vel, obcaecati consectetur quia aliquam doloribus quisquam dolor ullam natus aliquid neque aperiam exercitationem debitis, perferendis voluptatem? Omnis, repudiandae blanditiis nihil iusto dolorem possimus.
                                                                    </p>
                                                                </div>
                                                                <div className="flex flex-col w-full gap-1">
                                                                    <h1 className="text-3xl font-medium text-neutral-500 font-bebasneue border-b border-neutral-300">Detail</h1>
                                                                    <p className="text-neutral-500 text-base font-medium">
                                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veritatis maiores, illum vel, obcaecati consectetur quia aliquam doloribus quisquam dolor ullam natus aliquid neque aperiam exercitationem debitis, perferendis voluptatem? Omnis, repudiandae blanditiis nihil iusto dolorem possimus.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </DialogContent>
                                                </Dialog>
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