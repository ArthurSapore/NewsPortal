import React from 'react';
import facebook from '../assets/images/facebook.svg'
import twitter from '../assets/images/twitter.svg'
import tiktok from '../assets/images/tiktok.svg'
import linkedin from '../assets/images/linkedin.svg'
import github from '../assets/images/github.svg'
import '../styles/footer.scss'

 export default function Footer(){
    return(
        <footer className='bg-teal-300 mt-8 pb-4'>
            <div className='flex pt-8'>
                <div className=' ml-44 px-2 w-[400px]' id='footer-content'>
                    <h1>Bacon Ipsum Dolor Sit Amet</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate sapiente, impedit dolores odit illum dolore aperiam in nemo voluptatibus ducimus et hic officia? Quisquam, voluptatem eos quia voluptatum ipsa doloremque!</p>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate sapiente, impedit dolores odit illum dolore aperiam in nemo voluptatibus ducimus et hic officia? Quisquam, voluptatem eos quia voluptatum ipsa doloremque!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate sapiente, impedit dolores odit illum dolore aperiam in nemo voluptatibus ducimus et hic officia? Quisquam, voluptatem eos quia voluptatum ipsa doloremque!</p>
                </div>
                <div className='px-2' id='footer-links'>
                    <h1>Quick Links.</h1>
                    <div className='flex'>   
                        <ul className='px-4'>
                            <li>
                                <a href="/">- Home</a>
                            </li>
                            <li>
                                <a href="/">- Artist</a> 
                            </li>
                            <li>
                                <a href="/">- News</a>
                            </li>
                            <li>
                                <a href="/">- Labels</a> 
                            </li>
                            <li>
                                <a href="/">- Our Company</a>
                            </li>
                            <li>
                                <a href="/">- Shop0</a>
                            </li>
                        </ul>
                        <ul className='px-4'>
                            <li>
                                <a href="/">- Bacon</a>
                            </li>
                            <li>
                                <a href="/">- Bitlong</a>
                            </li>
                            <li>
                                <a href="/">- Venison Swine Meatload</a>
                            </li>
                        </ul>
                        <ul className='px-4'>
                            <li>
                                <a href="/">- Jobs</a>
                            </li>
                            <li>
                                <a href="/">- Newsletter</a>
                            </li>
                            <li>
                                <a href="/">- Terms of Use</a>
                            </li>
                            <li>
                                <a href="/">- Privacy Policy</a>
                            </li>
                            <li>
                                <a href="/">- MySpace</a>
                            </li>
                            <li>
                                <a href="/">- Twitter</a>
                            </li>
                            <li>
                                <a href="/">- Facebook</a>
                            </li>
                            <li>
                                <a href="/">- Digster.fm</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='mr-44 px-2' id='footer-social-media'>
                    <h1>@defaulterror on twitter</h1>
                    <div className=' h-56'>
                        <div className='' id='text-baloon'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit maiores enim sint qui. Eius harum eligendi, nemo labore, perferendis totam esse voluptatum sequi est officia consequuntur voluptas dolore, nesciunt eveniet!</p>
                        </div>
                        <div id="triangle"></div>
                        <div id='user-twitter-information'>
                            <h2>@Defaulerror Derek Clark</h2>
                            <p>14 mins</p>
                        </div>
                    </div>
                    <div className='h-44' id='follow-midia'>
                        <h1>Follow us on:</h1>
                        <ul>
                            <li>
                                <a href="/">
                                    <img src={facebook} alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <img src={twitter} alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <img src={tiktok} alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <img src={linkedin} alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <img src={github} alt="" />
                                </a>
                            </li>

                            
                        </ul>

                    </div>
                </div>
            </div>
            <div className='flex justify-center mt-16 font-semibold'>
                &copy;Copyrigth 2012. Derek Clark. All Rights Reserved. 
            </div>
        </footer>
    )
}
