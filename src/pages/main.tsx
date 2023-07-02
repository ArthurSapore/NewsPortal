import logo from '../assets/images/svg.svg'
import grid from '../assets/images/grid.svg'
import list from '../assets/images/list.svg'
import Footer from '../components/Footer'
import '../styles/card.scss'



export default function Main(){

    return(
        <>
        <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
            <div className="flex items-center flex-no-shrink text-white mr-6">
                <img src={logo} alt="" />
                <span className="font-medium text-xl tracking-tight flex-grow">Tailwind CSS</span>
            </div>
            <div className="block lg:hidden">
                <button className="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
                <svg className="h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>
            <div className="w-full block lg:flex lg:items-center lg:w-auto ">
                <div className="ml-195">
                    <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4">
                        Docs
                    </a>
                    <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4">
                        Examples
                    </a>
                    <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white">
                        Blog
                    </a>    
                </div>
            </div>
        </nav>
        <div className=' grid grid-cols-6 mr-44 ml-44'>
            <div  className='col-span-4'>
                <div className="bg-white  shadow-md flex max-w-full m-8" id='card'>
                    <a href="/">
                        <img className="" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt=""/>
                    </a>
                    <div className="p-5 flex flex-col">
                        <p>thursday 18 October 2012</p>
                        <a href="/">
                            <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-black">Noteworthy technology acquisitions 2021</h5>
                        </a>
                        <p className="font-normal text-gray-700 mb-3 dark:text-black-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        <a href="/" className='h-8 flex self-end mr-[270px]'> 
                            <p>reading more</p>
                            <svg className="-mr-1 ml-2 h-4 w-4 self-center" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </a>
                    </div>
                </div>
                <div className='flex w-3xl h-12 justify-between items-center m-8 p-1 border border-black'>
                    <p>PROMOTED ARTISTS</p>
                    <div className='flex justify-end m-0'>
                        <button className='flex items-center mr-2'>
                            <img className='w-5 mr-2' src={grid} alt="" />
                            <p>GRID</p>
                        </button>
                        <button className='flex items-center mr-2'>
                            <img className='w-5  mr-2' src={list} alt="" />
                            LIST
                        </button>
                    </div>
                </div>
                <div className='flex' id='other-news'>
                    <div className="bg-white shadow-md  max-w-xs m-5" id='card'>
                        <p>thursday 18 October 2012</p>
                        <a href="/">
                            <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-black">Noteworthy technology acquisitions 2021</h5>
                        </a>
                        <a href="/">
                            <img className="" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt=""/>
                        </a>
                        <div className="p-5 flex">
                            <p className="font-normal text-gray-700 mb-3 dark:text-black-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                            <a href="/" className='h-8 self-end' >
                                <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </a>
                        </div>
                    </div>
                    <div className="bg-white shadow-md max-w-xs m-5" id='card'>
                        <p>thursday 18 October 2012</p>
                        <a href="/">
                            <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-black">Noteworthy technology acquisitions 2021</h5>
                        </a>
                        <a href="/">
                            <img className="" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt=""/>
                        </a>
                        <div className="p-5 flex">
                            <p className="font-normal text-gray-700 mb-3 dark:text-black-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                            <a href="/" className='h-8 self-end' >
                                <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </a>
                        </div>
                    </div>
                    <div className="bg-white shadow-md max-w-xs m-5" id='card'>
                        <p>thursday 18 October 2012</p>
                        <a href="/">
                            <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-black">Noteworthy technology acquisitions 2021</h5>
                        </a>
                        <a href="/">
                            <img className="" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt=""/>
                        </a>
                        <div className="p-5 flex">
                            <p className="font-normal text-gray-700 mb-3 dark:text-black-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                            <a href="/" className='h-8 self-end' >
                                <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </a>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className='col-span-2 mt-8 max-w-[450px]' id='sidebar'>
                <div className='flex items-center border border-black h-12 p-1  '>
                    <p>PROMOTED ARTISTS</p>
                </div>
                <div className="bg-white shadow-md flex  mt-4" id='card'>
                    <a href="/">
                        <img  src="https://flowbite.com/docs/images/blog/image-1.jpg" alt=""/>
                    </a>
                    <div className=" flex flex-col ml-2">
                        <a href="/">
                            <h5 className="text-gray-400 font-semibold text-lg tracking-tight dark:text-black">Noteworthy technology acquisitions 2021</h5>
                        </a>
                        <p className="font-normal text-sm text-gray-700 mb-3 dark:text-black-400">Here are the biggest enterprise technology acquisitions of 2021 so far</p>
                        <a href="/" className='h-8 flex self-end mr-[150px]'> 
                            <svg className="-mr-1 ml-2 h-4 w-4 self-center" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </a>
                    </div>
                </div>
                <div className="bg-white shadow-md flex  mt-4" id='card'>
                    <a href="/">
                        <img  src="https://flowbite.com/docs/images/blog/image-1.jpg" alt=""/>
                    </a>
                    <div className=" flex flex-col ml-2">
                        <a href="/">
                            <h5 className="text-gray-400 font-semibold text-lg tracking-tight dark:text-black">Noteworthy technology acquisitions 2021</h5>
                        </a>
                        <p className="font-normal text-sm text-gray-700 mb-3 dark:text-black-400">Here are the biggest enterprise technology acquisitions of 2021 so far</p>
                        <a href="/" className='h-8 flex self-end mr-[150px]'> 
                            <svg className="-mr-1 ml-2 h-4 w-4 self-center" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </a>
                    </div>
                </div>
                <div className="bg-white shadow-md flex  mt-4" id='card'>
                    <a href="/">
                        <img  src="https://flowbite.com/docs/images/blog/image-1.jpg" alt=""/>
                    </a>
                    <div className=" flex flex-col ml-2">
                        <a href="/">
                            <h5 className="text-gray-400 font-semibold text-lg tracking-tight dark:text-black">Noteworthy technology acquisitions 2021</h5>
                        </a>
                        <p className="font-normal text-sm text-gray-700 mb-3 dark:text-black-400">Here are the biggest enterprise technology acquisitions of 2021 so far</p>
                        <a href="/" className='h-8 flex self-end mr-[150px]'> 
                            <svg className="-mr-1 ml-2 h-4 w-4 self-center" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </a>
                    </div>
                </div>  
                <div className=' flex items-center border border-black mt-8 h-12 p-1  '>
                    <p>THE STORE</p>
                </div>
                <div className="grid grid-cols-3">
                    <div className="bg-white shadow-md mt-4 mr-2" id='card'>
                        <a href="/">
                            <img className='max-w-[100%]' src="https://flowbite.com/docs/images/blog/image-1.jpg" alt=""/>
                        </a>
                        <div className=" flex flex-col">
                            <a className ="m-0" href="/">
                                <h5 className="text-gray-400 font-semibold text-lg tracking-tight dark:text-black">Album Title</h5>
                            </a>
                            <p className="font-normal text-sm text-gray-700 mb-3 dark:text-black-400">Band Name</p>
                        </div>
                    </div>  
                    <div className="bg-white shadow-md mt-4 mr-2" id='card'>
                        <a href="/">
                            <img className='max-w-[100%]' src="https://flowbite.com/docs/images/blog/image-1.jpg" alt=""/>
                        </a>
                        <div className=" flex flex-col ">
                            <a className ="m-0" href="/">
                                <h5 className="text-gray-400 font-semibold text-lg tracking-tight dark:text-black">Album Title</h5>
                            </a>
                            <p className="font-normal text-sm text-gray-700 mb-3 dark:text-black-400">Band Name</p>

                        </div>
                    </div>  
                    <div className="bg-white shadow-md mt-4 mr-2" id='card'>
                        <a href="/">
                            <img className='max-w-[100%]' src="https://flowbite.com/docs/images/blog/image-1.jpg" alt=""/>
                        </a>
                        <div className=" flex flex-col ">
                            <a className ="m-0" href="/">
                                <h5 className="text-gray-400 font-semibold text-lg tracking-tight dark:text-black">Album Title</h5>
                            </a>
                            <p className="font-normal text-sm text-gray-700 mb-3 dark:text-black-400">Band Name</p>

                        </div>
                    </div>  
                    <div className="bg-white shadow-md mt-4 mr-2" id='card'>
                        <a href="/">
                            <img className='max-w-[100%]' src="https://flowbite.com/docs/images/blog/image-1.jpg" alt=""/>
                        </a>
                        <div className=" flex flex-col ">
                            <a className ="m-0" href="/">
                                <h5 className="text-gray-400 font-semibold text-lg tracking-tight dark:text-black">Album Title</h5>
                            </a>
                            <p className="font-normal text-sm text-gray-700 mb-3 dark:text-black-400">Band Name</p>

                        </div>
                    </div>  
                    <div className="bg-white shadow-md mt-4 mr-2" id='card'>
                        <a href="/">
                            <img className='max-w-[100%]' src="https://flowbite.com/docs/images/blog/image-1.jpg" alt=""/>
                        </a>
                        <div className=" flex flex-col ">
                            <a className ="m-0" href="/">
                                <h5 className="text-gray-400 font-semibold text-lg tracking-tight dark:text-black">Album Title</h5>
                            </a>
                            <p className="font-normal text-sm text-gray-700 mb-3 dark:text-black-400">Band Name</p>

                        </div>
                    </div>
                    <div className="bg-white shadow-md mt-4 mr-2" id='card'>
                        <a href="/">
                            <img className='max-w-[100%]' src="https://flowbite.com/docs/images/blog/image-1.jpg" alt=""/>
                        </a>
                        <div className=" flex flex-col ">
                            <a className ="m-0" href="/">
                                <h5 className="text-gray-400 font-semibold text-lg tracking-tight dark:text-black">Album Title</h5>
                            </a>
                            <p className="font-normal text-sm text-gray-700 mb-3 dark:text-black-400">Band Name</p>

                        </div>
                    </div>
                    <div className="bg-white shadow-md mt-4 mr-2" id='card'>
                        <a href="/">
                            <img className='max-w-[100%]' src="https://flowbite.com/docs/images/blog/image-1.jpg" alt=""/>
                        </a>
                        <div className=" flex flex-col ">
                            <a className ="m-0" href="/">
                                <h5 className="text-gray-400 font-semibold text-lg tracking-tight dark:text-black">Album Title</h5>
                            </a>
                            <p className="font-normal text-sm text-gray-700 mb-3 dark:text-black-400">Band Name</p>

                        </div>
                    </div>
                    <div className="bg-white shadow-md mt-4 mr-2" id='card'>
                        <a href="/">
                            <img className='max-w-[100%]' src="https://flowbite.com/docs/images/blog/image-1.jpg" alt=""/>
                        </a>
                        <div className=" flex flex-col ">
                            <a className ="m-0" href="/">
                                <h5 className="text-gray-400 font-semibold text-lg tracking-tight dark:text-black">Album Title</h5>
                            </a>
                            <p className="font-normal text-sm text-gray-700 mb-3 dark:text-black-400">Band Name</p>

                        </div>
                    </div>
                    <div className="bg-white shadow-md mt-4 mr-2" id='card'>
                        <a href="/">
                            <img className='max-w-[100%]' src="https://flowbite.com/docs/images/blog/image-1.jpg" alt=""/>
                        </a>
                        <div className=" flex flex-col ">
                            <a className ="m-0" href="/">
                                <h5 className="text-gray-400 font-semibold text-lg tracking-tight dark:text-black">Album Title</h5>
                            </a>
                            <p className="font-normal text-sm text-gray-700 mb-3 dark:text-black-400">Band Name</p>

                        </div>
                    </div>

                </div>
                <div className='flex items-center h-12 border border-black mt-8 p-1 '>
                    <p>VIDEO</p>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}