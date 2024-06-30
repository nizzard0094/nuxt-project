<template>
    <div id="top">
        <nav class="bg-[#09026e]">
            <div class="w-full px-3 mx-auto sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl xxl:max-w-xxl">
                <div class="flex flex-wrap items-center justify-between  p-4">
                    <div></div>
                    <div>
                        <ul
                            class="font-medium text-xl uppercase text-white flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                            <li>
                                <a href="#aboutus">about</a>
                            </li>
                            <li>
                                <a href="#services">services</a>
                            </li>
                            <li>
                                <a href="#work">works</a>
                            </li>
                            <li>
                                <a href="#">contant</a>
                            </li>
                        </ul>
                    </div>

                </div>
                <div class="font-medium text-xl p-4 text-[#4D50D1] uppercase">empowering your online universe</div>
            </div>
        </nav>
        <div class=" relative z-0 items-center w-full">
            <NuxtImg src="/a.jpg" class=" w-full" />
            <div
                class="absolute inset-0 flex justify-center items-center z-10 w-full mx-auto sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl xxl:max-w-xxl">
                <div class=" uppercase text-white lg:text-5xl mx-36 text-center">
                    <p>your gateway to reach for the edge and beyond in web sotutions universe</p>
                </div>
            </div>
        </div>
        <div id="aboutus"
            class="bg-[#20002F] text-[#957BA2] flex flex-col justify-center items-center text-xl text-center">
            <div class=" h-14"></div>
            <div class="w-full px-3 mx-auto sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl xxl:max-w-xxl">
                <h1>about us</h1>
                <div class=" h-11"></div>
                <p>lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem
                    Ipsum</p>
            </div>
            <div class=" h-14"></div>
        </div>
        <div class="bg-[#F2F2F2] flex flex-col justify-center items-center text-xl text-center" id="services">
            <div
                class="w-full px-3 mx-auto sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl xxl:max-w-xxl py-14 space-y-14">
                <p>Discover the Universe of our services</p>
                <div
                    class="grid lg:grid-cols-3 xl:grid-cols-3 xxl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-28 gap-y-14 text-center">
                    <apcard imgUrl="/1.png" text="branding" />
                    <apcard imgUrl="/a.jpg" text="branding" />
                    <apcard imgUrl="/a.jpg" text="branding" />
                    <apcard imgUrl="/a.jpg" text="branding" />
                    <apcard imgUrl="/1.png" text="Mobile app development" />
                    <apcard imgUrl="/a.jpg" text="wad;oaw walkdnwa; wandipowa woa pianhwdpi apwidnpaiwh paipihdw" />
                </div>
            </div>
        </div>
        <div class="bg-[#000177] flex flex-col justify-center items-center text-xl text-center text-white" id="work">
            <div
                class="w-full px-10 mx-auto sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl xxl:max-w-xxl py-14 space-y-14">
                <p>Ours Works</p>
                <div
                    class="grid lg:grid-cols-3 xl:grid-cols-3 xxl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-14 gap-y-14 text-center">
                    <div class="bg-[#FEFEFE]  p-4 aspect-square rounded-lg"></div>
                    <div class="bg-[#FEFEFE]  p-4 aspect-square rounded-lg"></div>
                    <div class="bg-[#FEFEFE]  p-4 aspect-square rounded-lg"></div>
                    <div class="bg-[#FEFEFE]  p-4 aspect-square rounded-lg"></div>
                    <div class="bg-[#FEFEFE]  p-4 aspect-square rounded-lg"></div>
                    <div class="bg-[#FEFEFE]  p-4 aspect-square rounded-lg"></div>
                </div>
                <div>View All Works</div>
            </div>
        </div>
        <div class="bg-[#20002F] flex flex-col justify-center items-center text-center text-white">
            <div
                class="w-full px-10 mx-auto sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl xxl:max-w-xxl py-14 space-y-14">
                <p class=" text-xl font-light">Ours customers's <span class="font-semibold">opinion.</span></p>
                <slider />
            </div>
        </div>
        <div class="bg-[#2F2F2F] flex flex-col justify-center items-center text-center text-white">
            <div
                class="w-full px-10 mx-auto sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl xxl:max-w-xxl py-14 space-y-14">
                <div class=" text-xl font-light">Ours Global Clients</div>
                <div class="flex">
                    <svg class="h-10 w-10 mx-auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M21 15.5018C18.651 14.5223 17 12.2039 17 9.5C17 6.79774 18.6534 4.48062 21 3.5C20.2304 3.17906 19.3859 3 18.5 3C15.7977 3 13.4806 4.64899 12.5 6.9956M6.9 21C4.74609 21 3 19.2889 3 17.1781C3 15.4286 4.3 13.8125 6.25 13.5C6.86168 12.0617 8.30934 11 9.9978 11C12.1607 11 13.9285 12.6589 14.05 14.75C15.1978 15.2463 16 16.4645 16 17.7835C16 19.5599 14.5449 21 12.75 21L6.9 21Z"
                            stroke="#A5A5A5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <svg class="h-10 w-10 mx-auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M21 9C19.3529 9 17.8917 9.79647 16.9808 11.0253M21 6C18.5797 6 16.4104 7.07479 14.9434 8.77313M21 3C17.1326 3 13.7313 4.99586 11.77 8.01376M11.77 8.01376C9.72698 8.16181 8.00348 9.48869 7.25 11.25C4.7 11.6562 3 13.7572 3 16.0315C3 18.7755 5.28335 21 8.1 21L15.75 21C18.0972 21 20 19.1279 20 16.8185C20 15.1039 18.951 13.5202 17.45 12.875C17.4116 12.2181 17.2475 11.5941 16.9808 11.0253M11.77 8.01376C11.8958 8.00465 12.0229 8 12.151 8C13.1755 8 14.1323 8.28298 14.9434 8.77313M14.9434 8.77313C15.8305 9.30914 16.5435 10.0929 16.9808 11.0253"
                            stroke="#A5A5A5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <svg class="h-10 w-10 mx-auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M9 18H9.01M15 18H15.01M9 20.5H9.01M12 18H12.01M12 21H12.01M15 20.5H15.01M8.8 15C6.14903 15 4 12.9466 4 10.4137C4 8.31435 5.6 6.375 8 6C8.75283 4.27403 10.5346 3 12.6127 3C15.2747 3 17.4504 4.99072 17.6 7.5C19.0127 8.09561 20 9.55741 20 11.1402C20 13.2719 18.2091 15 16 15L8.8 15Z"
                            stroke="#A5A5A5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <svg class="h-10 w-10 mx-auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M7.45508 2V3M11.3438 3.61084L10.6366 4.31795M4.27344 10.6821L3.56633 11.3892M1.95508 7.5H2.95508M3.56641 3.61084L4.27351 4.31795M6.50049 9.21251C6.38862 9.15163 6.2832 9.08038 6.18553 9.00006C5.73952 8.63325 5.45508 8.07714 5.45508 7.45459C5.45508 6.35002 6.35051 5.45459 7.45508 5.45459C8.21398 5.45459 8.87416 5.87727 9.21303 6.50006C9.29756 6.65541 9.3621 6.82321 9.40319 7M9.8 21C7.14903 21 5 18.9466 5 16.4137C5 14.3144 6.6 12.375 9 12C9.75283 10.274 11.5346 9 13.6127 9C16.2747 9 18.4504 10.9907 18.6 13.5C20.0127 14.0956 21 15.5574 21 17.1402C21 19.2719 19.2091 21 17 21L9.8 21Z"
                            stroke="#A5A5A5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
            </div>
        </div>
        <div class="bg-black flex flex-col justify-center items-center text-center text-white">
            <div
                class="w-full px-10 mx-auto sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl xxl:max-w-xxl py-14 space-y-14">
                <div class="divide-y">
                    <div>
                        <div class="flex justify-between my-5">
                            <p class="text-white lg:text-5xl text-3xl">Get in touch</p>
                            <a href="#top">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                    class="bi bi-arrow-up-circle" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd"
                                        d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div>
                        <div class="flex my-5">
                            <p class=" w-4/6 text-start">Work with Us</p>
                            <p class=" me-auto">text of location</p>
                        </div>
                    </div>
                    <div>
                        <div class="flex my-5">
                            <p class="w-4/6 text-start">Follow Us</p>
                            <div class="flex me-auto">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="fill:#FFFFFF;"
                                    class="h-full w-fit overflow-visible">
                                    <path
                                        d="M17.525,9H14V7c0-1.032,0.084-1.682,1.563-1.682h1.868v-3.18C16.522,2.044,15.608,1.998,14.693,2 C11.98,2,10,3.657,10,6.699V9H7v4l3-0.001V22h4v-9.003l3.066-0.001L17.525,9z">
                                    </path>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" class=" h-3/5 w-fit overflow-visible"
                                    viewBox="0,0,300,150" style="fill:#FFFFFF;">
                                    <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1"
                                        stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10"
                                        stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none"
                                        font-size="none" text-anchor="none" style="mix-blend-mode: normal">
                                        <g transform="scale(5.12,5.12)">
                                            <path
                                                d="M41,4h-32c-2.76,0 -5,2.24 -5,5v32c0,2.76 2.24,5 5,5h32c2.76,0 5,-2.24 5,-5v-32c0,-2.76 -2.24,-5 -5,-5zM17,20v19h-6v-19zM11,14.47c0,-1.4 1.2,-2.47 3,-2.47c1.8,0 2.93,1.07 3,2.47c0,1.4 -1.12,2.53 -3,2.53c-1.8,0 -3,-1.13 -3,-2.53zM39,39h-6c0,0 0,-9.26 0,-10c0,-2 -1,-4 -3.5,-4.04h-0.08c-2.42,0 -3.42,2.06 -3.42,4.04c0,0.91 0,10 0,10h-6v-19h6v2.56c0,0 1.93,-2.56 5.81,-2.56c3.97,0 7.19,2.73 7.19,8.26z">
                                            </path>
                                        </g>
                                    </g>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" class=" h-full w-fit overflow-visible"
                                    viewBox="0 0 64 64" style="fill:#FFFFFF;">
                                    <path
                                        d="M 21.580078 7 C 13.541078 7 7 13.544938 7 21.585938 L 7 42.417969 C 7 50.457969 13.544938 57 21.585938 57 L 42.417969 57 C 50.457969 57 57 50.455062 57 42.414062 L 57 21.580078 C 57 13.541078 50.455062 7 42.414062 7 L 21.580078 7 z M 47 15 C 48.104 15 49 15.896 49 17 C 49 18.104 48.104 19 47 19 C 45.896 19 45 18.104 45 17 C 45 15.896 45.896 15 47 15 z M 32 19 C 39.17 19 45 24.83 45 32 C 45 39.17 39.169 45 32 45 C 24.83 45 19 39.169 19 32 C 19 24.831 24.83 19 32 19 z M 32 23 C 27.029 23 23 27.029 23 32 C 23 36.971 27.029 41 32 41 C 36.971 41 41 36.971 41 32 C 41 27.029 36.971 23 32 23 z">
                                    </path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>