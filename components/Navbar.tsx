import { useState } from "react"
import { Transition } from "@headlessui/react"
import Link from "next/link"
export default function Navbar() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <div>
                <nav className="fixed z-20 w-full bg-white shadow-sm">
                    <div className="w-full">
                        <div className="container flex items-center w-full h-20 mx-auto">
                            <div className="flex items-center justify-between w-full px-4 lg:px-0">
                                <div className="flex items-center justify-center flex-shrink-0">
                                    <h1 className="text-lg font-semibold tracking-normal cursor-pointer lg:text-2xl text-primary">
                                        Naladhipa Courses
                                    </h1>
                                </div>
                                <div className="hidden md:block">
                                    <div className="flex items-baseline ml-10 space-x-4">
                                        <Link href="#home"><a className="px-3 py-2 text-base font-medium cursor-pointer text-primary ">Home</a></Link>
                                        <Link href="#about"><a className="px-3 py-2 text-base cursor-pointer hover:text-purple-600">About</a></Link>
                                        <Link href="#testimonials"><a className="px-3 py-2 text-base cursor-pointer hover:text-purple-600">Testimonials</a></Link>
                                        <Link href="#price"><a className="px-3 py-2 text-base cursor-pointer hover:text-purple-600">Harga</a></Link>
                                        <Link href="#contact"><a className="px-3 py-2 text-base cursor-pointer hover:text-purple-600">Contact</a></Link>
                                    </div>
                                </div>
                                <div className="items-center justify-center flex-shrink-0 hidden lg:block">
                                    <Link href=""><a className="px-6 py-2 font-semibold text-white rounded-md shadow-md bg-primary hover:bg-purple-600 ">Yuk Gabung</a></Link>
                                </div>
                            </div>
                            <div className="flex px-4 md:hidden">
                                <button onClick={() => setOpen(!isOpen)} type="button" className="inline-flex items-center justify-center p-2 text-white rounded-md bg-primary focus:outline focus:ring-secondary "
                                    aria-controls="mobile-menu"
                                    aria-expanded="false">
                                    <span className="sr-only">Open Main Menu</span>
                                    {!isOpen ? (<svg
                                        className="w-6 h-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"></path>
                                    </svg>
                                    ) : (<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>)}
                                </button>
                            </div>
                        </div>
                    </div>
                    <Transition
                        show={isOpen}
                        enter="transition ease-out duration-100 transform"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="transition ease in duration-74 transform"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"


                    >
                        {(ref) => (
                            <div className="rounded-md shadow-sm md:hidden" id="mobile-menu">
                                <div ref={ref} className="flex flex-col flex-wrap px-4 pt-4 pb-4 space-y-1 bg-white border-gray-400 ">
                                    <Link href="#home"><a className="px-3 py-2 text-base font-medium rounded-md cursor-pointer text-dark hover:bg-primary hover:text-white">Home</a></Link>
                                    <Link href="#about"><a className="px-3 py-2 text-base font-medium rounded-md cursor-pointer text-dark hover:bg-primary hover:text-white">About</a></Link>
                                    <Link href="#testimonials"><a className="px-3 py-2 text-base font-medium rounded-md cursor-pointer text-dark hover:bg-primary hover:text-white">Testimonials</a></Link>
                                    <Link href="#price"><a className="px-3 py-2 text-base font-medium rounded-md cursor-pointer text-dark hover:bg-primary hover:text-white">Harga</a></Link>
                                    <Link href="#contact"><a className="px-3 py-2 text-base font-medium rounded-md cursor-pointer text-dark hover:bg-primary hover:text-white">Contact</a></Link>
                                </div>
                            </div>
                        )}
                    </Transition>
                </nav >
            </div >
        </>
    )
}
