import * as React from "react"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function SectionFeaturedLarge() {
    const images = [
        "/img/produk/1.png",
        "/img/produk/2.png",
        "/img/produk/3.png",
        "/img/produk/1.png",
        "/img/produk/2.png",
        "/img/produk/3.png",
    ];

    const [currentIndex, setCurrentIndex] = React.useState(0);
    return (
        <div className="relative hidden justify-between items-center gap-24 w-full h-[70vh] z-10 lg:flex ">
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
    )
} 