import React from 'react'
import Image from 'next/image'


const Main = () => {
  return (
    <section>
        <div className="px-12 py-32 text-center md:px-12 lg:text-left">
          <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="mt-12 lg:mt-0">
                <p className="text-[28px] font-medium font-['Poppins']">Hello, this is </p>
                <p className="w-[616px] text-[85px] font-extrabold font-['Poppins'] leading-tight tracking-normal">Handmade 
                <br /><span className="text-primary text-[90px]">Jewelry</span>
                </p>
                <p className="text-[28px] font-medium font-['Poppins'] mb-12">based in Arkansas</p>
                <a className="mb-2 inline-block rounded bg-primary px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] md:mr-2 md:mb-0"
                  data-te-ripple-init data-te-ripple-color="light" href="#!" role="button">Get started</a>
                <a className="inline-block rounded px-12 pt-4 pb-3.5 text-sm font-medium uppercase 
                leading-normal text-primary transition duration-150 ease-in-out hover:bg-primary-500 
                hover:bg-opacity-10 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 
                active:text-primary-700 dark:hover:bg-primary-800 dark:hover:bg-opacity-60"
                  data-te-ripple-init data-te-ripple-color="light" href="#!" role="button">Learn more</a>
              </div>
              <div className=" mt-0 lg:mb-0">
              <svg className="absolute stroke-[1.3px] mt-[21px]" xmlns="http://www.w3.org/2000/svg" width="500" height="500" viewBox="0 0 500 500" fill="none">
                  <path d="M143.385 479.93L143.385 479.929C86.1603 457.468 37.9742 403.063 14.9662 333.777C-7.95257 264.576 -5.57458 180.566 36.1367 115.425C77.9457 50.1815 159.226 3.66055 244.33 0.656615C329.356 -2.3478 418.26 38.0833 460.778 103.39C503.292 168.78 499.498 259.152 470.485 326.715C441.489 394.148 387.218 438.755 326.908 465.895C266.679 492.947 200.512 502.389 143.385 479.93Z" stroke="#673f78"/>
              </svg>
              <svg className="absolute mt-[360px] right-[680px]" width="104" height="30" viewBox="0 0 104 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="12.2021" width="5" height="30" transform="rotate(24 12.2021 0)" fill="#673f78"/>
                <rect x="33.9719" width="5" height="30" transform="rotate(24 33.9719 0)" fill="#673f78"/>
                <rect x="55.7418" width="5" height="30" transform="rotate(24 55.7418 0)" fill="#673f78"/>
                <rect x="77.5116" width="5" height="30" transform="rotate(24 77.5116 0)" fill="#673f78"/>
                <rect x="99.2813" width="5" height="30" transform="rotate(24 99.2813 0)" fill="#673f78"/>
              </svg>
              <svg className="absolute ml-[450px]" width="50" height="56" viewBox="0 0 50 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="9" y="16" width="6" height="24" rx="3" fill="#673f78"/>
                  <rect y="31" width="6" height="24" rx="3" transform="rotate(-90 0 31)" fill="#673f78"/>
                  <rect x="35" y="32" width="6" height="24" rx="3" fill="#673f78"/>
                  <rect x="26" y="47" width="6" height="24" rx="3" transform="rotate(-90 26 47)" fill="#673f78"/>
                  <rect x="35" width="6" height="24" rx="3" fill="#673f78"/>
                  <rect x="26" y="15" width="6" height="24" rx="3" transform="rotate(-90 26 15)" fill="#673f78"/>
              </svg>

                {/* <img src="https://jewelrydesigns.com/wp-content/uploads/CJLP-3-Explore-Jewelry-Designs.jpg"
                  className="w-full rounded-lg shadow-lg dark:shadow-black/20" alt="" /> */}
                  
                  <Image
                  src="/image.png"
                  width={500}
                  height={500}
                  alt="Picture of jewels"
                  className="ml-[13px]"
                  />

              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Main