'use client'

import PageWrapper from './../pagewrapper';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';

const images = [
    "1.png",
    "2.png",
    "4.png",
    "5.png",
    "6.png",
    "7.png"
]

export default function Profile() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
    const [selectedIndex, setSelectedIndex] = useState(0);

    const scrollTo = useCallback((index: number) => {
        if (emblaApi) emblaApi.scrollTo(index);
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        emblaApi.on('select', () => setSelectedIndex(emblaApi.selectedScrollSnap()));
    }, [emblaApi]);

    return (
        <PageWrapper>
            <div className="max-w-2xl mx-auto text-center p-6 bg-white bg-opacity-10 rounded-2xl shadow-lg text-white">
                <h1 className="text-4xl font-bold mb-4">About</h1>
                <p className="text-lg leading-relaxed mb-6">
                    As the name of the site implies, I'm <span className="font-semibold">Will</span>! So far, I've been a bit of a nomad, traveling across our great nation and living in 
                    <span className="font-semibold"> Colorado, Kansas, Missouri, Louisiana</span>, and now <span className="font-semibold">Florida</span>.
                    <br /><br />
                    I recently graduated from <span className="font-semibold">Florida Gulf Coast University</span> as 
                    <span className="italic font-semibold"> Summa Cum Laude</span> with a <span className="font-semibold">3.9 GPA</span> and a degree in 
                    <span className="font-semibold"> Software Engineering</span>.
                    <br /><br />
                    My journey doesn't end with a diploma—I'm passionately moving into professional development. I'm a dedicated team player, 
                    always ready to wear any hat necessary and learn on the fly to help my team succeed.
                </p>

                <div className="overflow-hidden rounded-lg mb-4" ref={emblaRef}>
                    <div className="flex">
                        {images.map((src, index) => (
                            <div className="flex-none w-full" key={index}>
                                <img src={`/${src}`} alt={`Slide ${index + 1}`} className="w-full h-auto rounded-xl" />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex justify-center space-x-2">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            className={`w-3 h-3 rounded-full ${selectedIndex === index ? 'bg-white' : 'bg-gray-400'}`}
                            onClick={() => scrollTo(index)}
                        />
                    ))}
                </div>

            </div>
        </PageWrapper>
    )
}
