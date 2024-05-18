import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

export const EmblaCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel()

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className="embla w-full h-full">
      <div className="embla__viewport h-full" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide flex flex-row h-4/5 justify-center  items-center">
            <div className=' w-1/2 h-full rounded-lg'>
              <img 
              src="https://raw.githubusercontent.com/tdha/project-three/main/Readme_imgs/Results.png" 
              className='object-center rounded-lg' 
              />
            </div>
            <div className='w-1/2 h-4/5 px-10 py-15 text-center flex flex-col justify-center rounded-lg object-contain'>
              <h1 className='text-2xl pb-5 border-b-4  border-b-secondary'>AFFORDABLE COMMUTE FINDER</h1>
              <p className='pt-5'>
                React App calculates travel time (by car and public transport) between the user's place 
                of work and various recently sold properties. The results are grouped according to 15 minute 
                time bands and sorted by affordability.
              </p>
              <p className='pt-10'>
                This app uses the travel time and openstreet APIs to calculate co-ordinates and travel time 
                for 1000s of properties
              </p>
            </div>
          </div>
          <div className="embla__slide flex flex-row ">
            <img 
            src="https://raw.githubusercontent.com/rrit5727/project4/main/Readme_imgs/Home_page.png" 
            className='w-1/2 h-2/3 rounded-lg' />
            <div className='w-1/2 h-2/3 px-10  text-center flex flex-col justify-center rounded-lg'>
              <h1 className='text-2xl pb-1 border-b-4  border-b-secondary'></h1>
              <p></p>
            </div>
          </div>
          <div className="embla__slide flex flex-row ">
            <img 
            src="https://raw.githubusercontent.com/rrit5727/Project2/main/Readme_images/Item-list.png" 
            className='w-1/2 h-2/3 rounded-lg' />
            <div className='w-1/2 h-2/3 px-10  text-center flex flex-col justify-center rounded-lg'>
              <h1 className='text-2xl pb-1 border-b-4  border-b-secondary'></h1>
              <p></p>
            </div>
          </div>          
                    
        </div>
      </div>
      <button className="embla__prev" onClick={scrollPrev}>
        Prev
      </button>
      <button className="embla__next" onClick={scrollNext}>
        Next
      </button>
    </div>
  )
}