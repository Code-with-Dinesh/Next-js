"use client"
import { BackgroundGradient } from "./ui/background-gradient"
import courseData from "../../app/data/music_data.json"
import Link from "next/link"
interface course {
            id: number,
            title: string,
            slug: string,
            description: string,
            price: number,
            instructor: string,
            isFeatured: boolean,
            
}

const FeaturedCourses = () => {
   const data =  courseData.courses.filter((elem:course) =>elem.isFeatured === true)
  return (
    <div className="py-12 bg-gray-900">
        <div>
            <h2 className="text-center text-teal-600">FEATURE COURSES</h2>
            <p className="text-center mt-2 text-3xl leading-8 font-extrabold tracking-normal text-white sm:text-4xl">Learn From The Best</p>
        </div>
        <div className="mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                {
                    data.map((elem:course)=>(
                        <div key={elem.id} className="flex justify-center">
                            <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
                             <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                                <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{elem.title}</p>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{elem.description}</p>
                                <Link href={`/courses/${elem.slug}`} className="px-4 py-2 mt-4 rounded border border-neutral-600 text-neutral-700 hover:bg-gray-100 transition-all duration-200">
                                  Learn More
                                </Link>
                             </div>
                            </BackgroundGradient>
                        </div>
                    ))
                }
            </div>
        </div>
        <div className="mt-20 text-center">
           <Link href={"/courses"} className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition-all duration-200">
           View All courses
           </Link>
        </div>
    </div>
  )
}

export default FeaturedCourses