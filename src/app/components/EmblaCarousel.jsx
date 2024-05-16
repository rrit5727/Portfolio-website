import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';


export function EmblaCarousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel()

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

  
    return (
      <div className="embla">
        <div className='embla_viewport' ref={emblaRef}>
            <div className="embla__container">
                <div className="embla__slide">
                    <img src="https://raw.githubusercontent.com/tdha/project-three/main/Readme_imgs/Results.png" alt="" />
                </div>                    
                <div className="embla__slide">
                    <img src="https://raw.githubusercontent.com/rrit5727/project4/main/Readme_imgs/Home_page.png" alt="" />
                </div>                    
                <div className="embla__slide">
                    <img src="https://raw.githubusercontent.com/rrit5727/project4/main/Readme_imgs/Results.png" alt="" />
                </div>                    
                <div className="embla__slide">
                    <img src="https://raw.githubusercontent.com/rrit5727/Project2/main/Readme_images/Item-list.png" alt="" />
                </div>                    
            </div>
        </div>
        <button className="embla_prev" onClick={ scrollPrev }>
            Prev    
        </button>
        <button className="embla_next" onClick={ scrollNext }>
            Next    
        </button>        
    </div>
    )
  }