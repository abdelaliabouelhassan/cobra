<template>
    <div class=" w-full flex flex-col items-center space-y-14 px-4 overflow-hidden bg-background  py-24">
        <div class=" flex flex-col items-center space-y-2">
            <h1 class=" text-black text-center text-2xl md:text-5xl font-semibold font-epilogue">Functions Overview</h1>
            <span class=" text-black text-center font-epilogue font-semibold text-lg md:text-3xl">Event management features with real-life utility</span>
        </div>

        <div class=" w-full grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-[1208px] mx-auto">
            <div class=" w-full px-10 py-8 border border-dashed border-bgray rounded-[2rem] space-y-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" fill="none">
                    <g filter="url(#filter0_bi_1_1006)">
                        <rect x="4" y="12" width="64" height="51" rx="8" fill="#00D5C4" fill-opacity="0.4"/>
                    </g>
                    <rect x="48.6" y="31.6" width="13.8" height="12.8" rx="3.4" stroke="black" stroke-width="1.2" stroke-linecap="round"/>
                    <g filter="url(#filter1_bi_1_1006)">
                        <rect x="9" y="31" width="36" height="27" rx="4" fill="#4000F8" fill-opacity="0.5"/>
                    </g>
                    <path d="M10 27L62 27" stroke="black" stroke-width="1.2" stroke-linecap="round"/>
                    <path d="M14 37L40 37" stroke="#EFF8F8" stroke-width="1.2" stroke-linecap="round"/>
                    <path d="M14 41L31 41" stroke="#EFF8F8" stroke-width="1.2" stroke-linecap="round"/>
                    <path d="M14 45L34 45" stroke="#EFF8F8" stroke-width="1.2" stroke-linecap="round"/>
                    <path d="M49 49L61 49" stroke="black" stroke-width="1.2" stroke-linecap="round"/>
                    <path d="M49 53L56 53" stroke="black" stroke-width="1.2" stroke-linecap="round"/>
                    <path d="M49 57L58 57" stroke="black" stroke-width="1.2" stroke-linecap="round"/>
                    <circle cx="12" cy="20" r="2" fill="black"/>
                    <circle cx="18" cy="20" r="2" fill="black"/>
                    <circle cx="24" cy="20" r="2" fill="black"/>
                    <defs>
                        <filter id="filter0_bi_1_1006" x="-32" y="-24" width="136" height="123" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="18"/>
                        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1_1006"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1_1006" result="shape"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="-12"/>
                        <feGaussianBlur stdDeviation="10"/>
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.65 0"/>
                        <feBlend mode="normal" in2="shape" result="effect2_innerShadow_1_1006"/>
                        </filter>
                        <filter id="filter1_bi_1_1006" x="-27" y="-5" width="108" height="99" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="18"/>
                        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1_1006"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1_1006" result="shape"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="-12"/>
                        <feGaussianBlur stdDeviation="6"/>
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.862 0 0 0 0 0.85 0 0 0 0 1 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="shape" result="effect2_innerShadow_1_1006"/>
                        </filter>
                    </defs>
                </svg>

                <p class=" text-black font-semibold font-epilogue text-[1.375rem]">
                    Website configurator <br> for multiple event <br> websites
                </p>
            </div>
             <div class=" w-full px-10 py-8 border border-dashed border-bgray rounded-[2rem] space-y-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" fill="none">
                <g filter="url(#filter0_bi_1_850)">
                    <rect x="4" y="12" width="64" height="51" rx="8" fill="#00D5C4" fill-opacity="0.4"/>
                </g>
                <rect x="41.6" y="47.6" width="20.8" height="8.8" rx="3.4" stroke="black" stroke-width="1.2"/>
                <path d="M10 48L37 48" stroke="black" stroke-width="1.2" stroke-linecap="round"/>
                <path d="M10 52L27 52" stroke="black" stroke-width="1.2" stroke-linecap="round"/>
                <path d="M10 56L31 56" stroke="black" stroke-width="1.2" stroke-linecap="round"/>
                <g filter="url(#filter1_bi_1_850)">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.00493 22.051C9.02197 20.6702 9.09787 19.8476 9.43597 19.184C9.81947 18.4314 10.4314 17.8195 11.184 17.436C12.0397 17 13.1598 17 15.4 17H18.6C20.8402 17 21.9603 17 22.816 17.436C23.5686 17.8195 24.1805 18.4314 24.564 19.184C24.9021 19.8476 24.978 20.6702 24.9951 22.051C23.8564 22.2846 23 23.2923 23 24.5C23 25.7095 23.8589 26.7184 25 26.95V36.4H23.4643V37.6H25C25 39.8402 25 40.9603 24.564 41.816C24.1805 42.5686 23.5686 43.1805 22.816 43.564C21.9603 44 20.8402 44 18.6 44H15.4C13.1598 44 12.0397 44 11.184 43.564C10.4314 43.1805 9.81947 42.5686 9.43597 41.816C9 40.9603 9 39.8402 9 37.6H9.96429L9.96429 36.4H9V26.95C10.1411 26.7184 11 25.7095 11 24.5C11 23.2923 10.1436 22.2846 9.00493 22.051ZM28 36.4H29.25V37.6L28 37.6C28 39.8402 28 40.9603 28.436 41.816C28.8195 42.5686 29.4314 43.1805 30.184 43.564C31.0397 44 32.1598 44 34.4 44H37.6C39.8402 44 40.9603 44 41.816 43.564C42.5686 43.1805 43.1805 42.5686 43.564 41.816C44 40.9603 44 39.8402 44 37.6L42.75 37.6V36.4H44V26.95C42.8589 26.7184 42 25.7095 42 24.5C42 23.2923 42.8564 22.2846 43.9951 22.051C43.978 20.6702 43.9021 19.8476 43.564 19.184C43.1805 18.4314 42.5686 17.8195 41.816 17.436C40.9603 17 39.8402 17 37.6 17H34.4C32.1598 17 31.0397 17 30.184 17.436C29.4314 17.8195 28.8195 18.4314 28.436 19.184C28.0979 19.8476 28.022 20.6702 28.0049 22.051C29.1436 22.2846 30 23.2923 30 24.5C30 25.7095 29.1411 26.7184 28 26.95V36.4ZM47 36.4V26.95C48.1411 26.7184 49 25.7095 49 24.5C49 23.2923 48.1436 22.2846 47.0049 22.051C47.022 20.6702 47.0979 19.8476 47.436 19.184C47.8195 18.4314 48.4314 17.8195 49.184 17.436C50.0397 17 51.1598 17 53.4 17H56.6C58.8402 17 59.9603 17 60.816 17.436C61.5686 17.8195 62.1805 18.4314 62.564 19.184C62.9021 19.8476 62.978 20.6702 62.9951 22.051C61.8564 22.2846 61 23.2923 61 24.5C61 25.7095 61.8589 26.7184 63 26.95V36.4H62.0357V37.6L63 37.6C63 39.8402 63 40.9603 62.564 41.816C62.1805 42.5686 61.5686 43.1805 60.816 43.564C59.9603 44 58.8402 44 56.6 44H53.4C51.1598 44 50.0397 44 49.184 43.564C48.4314 43.1805 47.8195 42.5686 47.436 41.816C47 40.9603 47 39.8402 47 37.6L48.5357 37.6V36.4H47ZM11.8929 37.6H13.8214V36.4H11.8929V37.6ZM15.75 37.6H17.6786V36.4L15.75 36.4V37.6ZM19.6071 37.6H21.5357V36.4H19.6071V37.6ZM31.1786 37.6H33.1071V36.4H31.1786V37.6ZM35.0357 37.6H36.9643V36.4H35.0357V37.6ZM38.8929 37.6H40.8214V36.4H38.8929V37.6ZM50.4643 37.6H52.3929V36.4H50.4643V37.6ZM54.3214 37.6H56.25V36.4H54.3214V37.6ZM58.1786 37.6H60.1071V36.4L58.1786 36.4V37.6Z" fill="#4000F8" fill-opacity="0.5"/>
                </g>
                <defs>
                    <filter id="filter0_bi_1_850" x="-32" y="-24" width="136" height="123" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="18"/>
                    <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1_850"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1_850" result="shape"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="-12"/>
                    <feGaussianBlur stdDeviation="10"/>
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.65 0"/>
                    <feBlend mode="normal" in2="shape" result="effect2_innerShadow_1_850"/>
                    </filter>
                    <filter id="filter1_bi_1_850" x="-27" y="-19" width="126" height="99" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="18"/>
                    <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1_850"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1_850" result="shape"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="-12"/>
                    <feGaussianBlur stdDeviation="6"/>
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.862 0 0 0 0 0.85 0 0 0 0 1 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="shape" result="effect2_innerShadow_1_850"/>
                    </filter>
                </defs>
                </svg>

                <p class=" text-black font-semibold font-epilogue text-[1.375rem]">
                    Multiple ticket <br> categories per event
                </p>
            </div>
             <div class=" w-full px-10 py-8 border border-dashed border-bgray rounded-[2rem] space-y-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" fill="none">
                    <g filter="url(#filter0_bi_1_935)">
                        <rect x="18" y="12" width="50" height="51" rx="8" fill="#00D5C4" fill-opacity="0.4"/>
                    </g>
                    <path d="M46.5857 43.0209C46.7806 43.174 46.8421 43.4461 46.6997 43.649C46.603 43.7867 46.4909 43.9258 46.3635 44.0665C46.1225 44.3324 45.8081 44.5559 45.4204 44.7367C45.038 44.9122 44.5612 45 43.9902 45C42.6752 45 41.6824 44.516 41.0118 43.5479C40.3464 42.5798 40.0138 41.0798 40.0138 39.0479C40.0138 37.016 40.3464 35.5 41.0118 34.5C41.6824 33.5 42.6752 33 43.9902 33C44.5874 33 45.0825 33.0984 45.4754 33.2952C45.8736 33.492 46.1932 33.7314 46.4342 34.0133C46.5676 34.166 46.684 34.3156 46.7836 34.462C46.9225 34.6664 46.8603 34.9368 46.666 35.0895C46.4079 35.2921 46.0272 35.2073 45.8346 34.9418C45.805 34.901 45.7743 34.8601 45.7426 34.8191C45.5697 34.5904 45.3445 34.3989 45.0668 34.2447C44.7891 34.0904 44.4329 34.0133 43.998 34.0133C43.3746 34.0133 42.8533 34.1888 42.4342 34.5399C42.0151 34.8856 41.7007 35.4309 41.4912 36.1755C41.2868 36.9149 41.1847 37.8723 41.1847 39.0479C41.1847 40.2234 41.2868 41.1755 41.4912 41.9043C41.7007 42.633 42.0151 43.1649 42.4342 43.5C42.8533 43.8298 43.3746 43.9947 43.998 43.9947C44.3962 43.9947 44.7289 43.9282 44.9961 43.7952C45.2633 43.6569 45.4833 43.484 45.6562 43.2766C45.688 43.2386 45.7188 43.2005 45.7484 43.1623C45.949 42.904 46.3285 42.8189 46.5857 43.0209ZM39.4309 38.1862C39.1929 38.1862 39 37.9933 39 37.7553C39 37.5174 39.1929 37.3245 39.4309 37.3245H44.0387C44.2766 37.3245 44.4695 37.5174 44.4695 37.7553C44.4695 37.9933 44.2766 38.1862 44.0387 38.1862H39.4309ZM39.4309 40.7473C39.1929 40.7473 39 40.5544 39 40.3165C39 40.0785 39.1929 39.8856 39.4309 39.8856H44.0387C44.2766 39.8856 44.4695 40.0785 44.4695 40.3165C44.4695 40.5544 44.2766 40.7473 44.0387 40.7473H39.4309Z" fill="black"/>
                    <rect x="39.6" y="50.6" width="22.8" height="6.8" rx="3.4" stroke="black" stroke-width="1.2" stroke-linecap="round"/>
                    <g filter="url(#filter1_bi_1_935)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.87195 16.3681C4.19358 17.6995 4.04297 19.351 4.00954 22.1285C5.72992 22.5758 7 24.1396 7 26C7 27.8638 5.72523 29.4299 4 29.874V46.4H4.9375L4.9375 47.6H4V50.2C4 54.6804 4 56.9206 4.87195 58.6319C5.63893 60.1372 6.86278 61.3611 8.36808 62.1281C10.0794 63 12.3196 63 16.8 63H21.2C25.6804 63 27.9206 63 29.6319 62.1281C31.1372 61.3611 32.3611 60.1372 33.1281 58.6319C34 56.9206 34 54.6804 34 50.2V47.6H33.0625V46.4H34V29.874C32.2748 29.4299 31 27.8638 31 26C31 24.1396 32.2701 22.5758 33.9905 22.1285C33.957 19.351 33.8064 17.6995 33.1281 16.3681C32.3611 14.8628 31.1372 13.6389 29.6319 12.8719C27.9206 12 25.6804 12 21.2 12H16.8C12.3196 12 10.0794 12 8.36808 12.8719C6.86278 13.6389 5.63893 14.8628 4.87195 16.3681ZM6.8125 47.6H8.6875V46.4L6.8125 46.4V47.6ZM10.5625 47.6H12.4375V46.4H10.5625V47.6ZM14.3125 47.6H16.1875V46.4H14.3125V47.6ZM18.0625 47.6H19.9375V46.4H18.0625V47.6ZM21.8125 47.6H23.6875V46.4H21.8125V47.6ZM25.5625 47.6H27.4375V46.4H25.5625V47.6ZM29.3125 47.6H31.1875V46.4H29.3125V47.6Z" fill="#4000F8" fill-opacity="0.5"/>
                    </g>
                    <path d="M10 32L28 32" stroke="#EFF8F8" stroke-width="1.2" stroke-linecap="round"/>
                    <path d="M10 36L28 36" stroke="#EFF8F8" stroke-width="1.2" stroke-linecap="round"/>
                    <path d="M10 53L24 53" stroke="#EFF8F8" stroke-width="1.2" stroke-linecap="round"/>
                    <path d="M10 40L21 40" stroke="#EFF8F8" stroke-width="1.2" stroke-linecap="round"/>
                    <path d="M10 57L26 57" stroke="#EFF8F8" stroke-width="1.2" stroke-linecap="round"/>
                    <path d="M40 19L52 19" stroke="black" stroke-width="1.2" stroke-linecap="round"/>
                    <path d="M40 23L47 23" stroke="black" stroke-width="1.2" stroke-linecap="round"/>
                    <path d="M40 27L49 27" stroke="black" stroke-width="1.2" stroke-linecap="round"/>
                    <defs>
                        <filter id="filter0_bi_1_935" x="-18" y="-24" width="122" height="123" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="18"/>
                        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1_935"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1_935" result="shape"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="-12"/>
                        <feGaussianBlur stdDeviation="10"/>
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.65 0"/>
                        <feBlend mode="normal" in2="shape" result="effect2_innerShadow_1_935"/>
                        </filter>
                        <filter id="filter1_bi_1_935" x="-32" y="-24" width="102" height="123" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="18"/>
                        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1_935"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1_935" result="shape"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="-12"/>
                        <feGaussianBlur stdDeviation="10"/>
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.65 0"/>
                        <feBlend mode="normal" in2="shape" result="effect2_innerShadow_1_935"/>
                        </filter>
                    </defs>
                </svg>

                <p class=" text-black font-semibold font-epilogue text-[1.375rem]">
                    Ticket payments <br> and invoicing
                </p>
            </div>
            <div class=" w-full px-10 py-8 border border-dashed border-bgray rounded-[2rem] space-y-4">
                <img src="/images/home/fourthsection/qr.png" alt="qr">

                <p class=" text-black font-semibold font-epilogue text-[1.375rem]">
                    Receipt control <br> via QR code
                </p>
            </div>
             <div class=" w-full px-10 py-8 border border-dashed border-bgray rounded-[2rem] space-y-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" fill="none">
                    <g filter="url(#filter0_bi_1_870)">
                        <rect x="8" y="8" width="56" height="56" rx="8" fill="#00D5C4" fill-opacity="0.4"/>
                    </g>
                    <path d="M25 31.5V48.5M25 48.5L22 45.5M25 48.5L28 45.5M47 31V48.5M47 48.5L44 45.5M47 48.5L50 45.5" stroke="black" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <g filter="url(#filter1_bi_1_870)">
                        <rect x="16" y="16" width="18" height="18" rx="4" fill="#4000F8" fill-opacity="0.5"/>
                    </g>
                    <rect x="16.6" y="38.6" width="16.8" height="16.8" rx="3.4" stroke="black" stroke-width="1.2"/>
                    <g filter="url(#filter2_bi_1_870)">
                        <rect x="38" y="16" width="18" height="18" rx="9" fill="#4000F8" fill-opacity="0.5"/>
                    </g>
                    <rect x="38.6" y="38.6" width="16.8" height="16.8" rx="8.4" stroke="black" stroke-width="1.2"/>
                    <defs>
                        <filter id="filter0_bi_1_870" x="-28" y="-28" width="128" height="128" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="18"/>
                        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1_870"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1_870" result="shape"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="-12"/>
                        <feGaussianBlur stdDeviation="10"/>
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.65 0"/>
                        <feBlend mode="normal" in2="shape" result="effect2_innerShadow_1_870"/>
                        </filter>
                        <filter id="filter1_bi_1_870" x="-20" y="-20" width="90" height="90" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="18"/>
                        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1_870"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1_870" result="shape"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="-12"/>
                        <feGaussianBlur stdDeviation="6"/>
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.862 0 0 0 0 0.85 0 0 0 0 1 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="shape" result="effect2_innerShadow_1_870"/>
                        </filter>
                        <filter id="filter2_bi_1_870" x="2" y="-20" width="90" height="90" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="18"/>
                        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1_870"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1_870" result="shape"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="-12"/>
                        <feGaussianBlur stdDeviation="6"/>
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.862 0 0 0 0 0.85 0 0 0 0 1 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="shape" result="effect2_innerShadow_1_870"/>
                        </filter>
                    </defs>
                </svg>

                <p class=" text-black font-semibold font-epilogue text-[1.375rem]">
                   Minimal training  <br> required due to intuitive <br> operation
                </p>
            </div>
            <div class=" w-full px-10 py-8 border border-dashed border-bgray rounded-[2rem] space-y-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" fill="none">
                    <g filter="url(#filter0_bi_1_956)">
                        <rect x="4" y="12" width="64" height="51" rx="8" fill="#00D5C4" fill-opacity="0.4"/>
                    </g>
                    <g filter="url(#filter1_bi_1_956)">
                        <rect x="10" y="18" width="24" height="39" rx="4" fill="#4000F8" fill-opacity="0.5"/>
                    </g>
                    <rect x="38.6" y="18.6" width="22.8" height="37.8" rx="3.4" stroke="black" stroke-width="1.2" stroke-linecap="round"/>
                    <path d="M16 45L28 45" stroke="#EFF8F8" stroke-width="1.2" stroke-linecap="round"/>
                    <path d="M19 28L25 28" stroke="#EFF8F8" stroke-width="1.2" stroke-linecap="round"/>
                    <path d="M16 49L22 49" stroke="#EFF8F8" stroke-width="1.2" stroke-linecap="round"/>
                    <path d="M19 32L22 32" stroke="#EFF8F8" stroke-width="1.2" stroke-linecap="round"/>
                    <path d="M19 36L24 36" stroke="#EFF8F8" stroke-width="1.2" stroke-linecap="round"/>
                    <rect x="43.6" y="23.6" width="12.8" height="11.8" rx="1.4" stroke="black" stroke-width="1.2" stroke-linecap="round"/>
                    <rect x="15.6" y="23.6" width="12.8" height="16.8" rx="1.4" stroke="#EFF8F8" stroke-width="1.2" stroke-linecap="round"/>
                    <path d="M44 35L53.2727 31L56 35" stroke="black" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M44 40L56 40" stroke="black" stroke-width="1.2" stroke-linecap="round"/>
                    <path d="M44 44L51 44" stroke="black" stroke-width="1.2" stroke-linecap="round"/>
                    <path d="M44 48L53 48" stroke="black" stroke-width="1.2" stroke-linecap="round"/>
                    <circle cx="48" cy="28" r="1.4" stroke="black" stroke-width="1.2" stroke-linecap="round"/>
                    <defs>
                        <filter id="filter0_bi_1_956" x="-32" y="-24" width="136" height="123" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="18"/>
                        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1_956"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1_956" result="shape"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="-12"/>
                        <feGaussianBlur stdDeviation="10"/>
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.65 0"/>
                        <feBlend mode="normal" in2="shape" result="effect2_innerShadow_1_956"/>
                        </filter>
                        <filter id="filter1_bi_1_956" x="-26" y="-18" width="96" height="111" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="18"/>
                        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1_956"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1_956" result="shape"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="-12"/>
                        <feGaussianBlur stdDeviation="6"/>
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.862 0 0 0 0 0.85 0 0 0 0 1 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="shape" result="effect2_innerShadow_1_956"/>
                        </filter>
                    </defs>
                </svg>

                <p class=" text-black font-semibold font-epilogue text-[1.375rem]">
                   Integrated images <br> and documents <br> for each event
                </p>
            </div>
            <div class=" w-full px-10 py-8 border border-dashed border-bgray rounded-[2rem] space-y-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" fill="none">
                    <g filter="url(#filter0_bi_1_794)">
                        <rect x="4" y="12" width="64" height="51" rx="8" fill="#00D5C4" fill-opacity="0.4"/>
                    </g>
                    <g filter="url(#filter1_bi_1_794)">
                        <rect x="27" y="31" width="36" height="27" rx="4" fill="#4000F8" fill-opacity="0.5"/>
                    </g>
                    <g filter="url(#filter2_bi_1_794)">
                        <path d="M4 31H15.6C17.8402 31 18.9603 31 19.816 31.436C20.5686 31.8195 21.1805 32.4314 21.564 33.184C22 34.0397 22 35.1598 22 37.4V51.6C22 53.8402 22 54.9603 21.564 55.816C21.1805 56.5686 20.5686 57.1805 19.816 57.564C18.9603 58 17.8402 58 15.6 58H4V31Z" fill="#4000F8" fill-opacity="0.5"/>
                    </g>
                    <path d="M28 33L45 46L62 33" stroke="#EFF8F8" stroke-width="1.2"/>
                    <path d="M4 46L21 33" stroke="#EFF8F8" stroke-width="1.2"/>
                    <path d="M22 20L63 20" stroke="black" stroke-width="1.2"/>
                    <path d="M9 20L18 20" stroke="black" stroke-width="1.2"/>
                    <circle cx="20" cy="20" r="2.4" stroke="black" stroke-width="1.2" stroke-linecap="round"/>
                    <path d="M31 26L63 26" stroke="black" stroke-width="1.2"/>
                    <path d="M9 26L27 26" stroke="black" stroke-width="1.2"/>
                    <circle cx="29" cy="26" r="2.4" stroke="black" stroke-width="1.2" stroke-linecap="round"/>
                    <defs>
                        <filter id="filter0_bi_1_794" x="-32" y="-24" width="136" height="123" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="18"/>
                        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1_794"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1_794" result="shape"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="-12"/>
                        <feGaussianBlur stdDeviation="10"/>
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.65 0"/>
                        <feBlend mode="normal" in2="shape" result="effect2_innerShadow_1_794"/>
                        </filter>
                        <filter id="filter1_bi_1_794" x="-9" y="-5" width="108" height="99" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="18"/>
                        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1_794"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1_794" result="shape"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="-12"/>
                        <feGaussianBlur stdDeviation="6"/>
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.862 0 0 0 0 0.85 0 0 0 0 1 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="shape" result="effect2_innerShadow_1_794"/>
                        </filter>
                        <filter id="filter2_bi_1_794" x="-32" y="-5" width="90" height="99" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="18"/>
                        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1_794"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1_794" result="shape"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="-12"/>
                        <feGaussianBlur stdDeviation="6"/>
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.862 0 0 0 0 0.85 0 0 0 0 1 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="shape" result="effect2_innerShadow_1_794"/>
                        </filter>
                    </defs>
                </svg>

                <p class=" text-black font-semibold font-epilogue text-[1.375rem]">
                    Customizable, <br> automated emails <br> around your event
                </p>
            </div>
             <div class=" w-full px-10 py-8 border border-dashed border-bgray rounded-[2rem] space-y-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" fill="none">
                    <g filter="url(#filter0_bi_1_880)">
                        <rect x="4" y="12" width="64" height="51" rx="8" fill="#00D5C4" fill-opacity="0.4"/>
                    </g>
                    <path d="M29 27C40.1429 27 32.7143 38 42 38" stroke="black" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M30 51C40.2857 51 33.4286 38 42 38" stroke="black" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <g filter="url(#filter1_bi_1_880)">
                        <rect x="10" y="18" width="20" height="20" rx="4" fill="#4000F8" fill-opacity="0.5"/>
                    </g>
                    <path d="M15 24L24 24" stroke="#EFF8F8" stroke-width="1.2" stroke-linecap="round"/>
                    <path d="M15 28L23 28" stroke="#EFF8F8" stroke-width="1.2" stroke-linecap="round"/>
                    <path d="M15 32L20 32" stroke="#EFF8F8" stroke-width="1.2" stroke-linecap="round"/>
                    <rect x="42.6" y="28.6" width="18.8" height="18.8" rx="3.4" stroke="black" stroke-width="1.2"/>
                    <path d="M48 34L56 34" stroke="black" stroke-width="1.2" stroke-linecap="round"/>
                    <path d="M48 38L51 38" stroke="black" stroke-width="1.2" stroke-linecap="round"/>
                    <path d="M48 42L53 42" stroke="black" stroke-width="1.2" stroke-linecap="round"/>
                    <rect x="10.6" y="45.6" width="18.8" height="10.8" rx="3.4" stroke="black" stroke-width="1.2"/>
                    <circle cx="17" cy="51" r="2.4" stroke="black" stroke-width="1.2" stroke-linecap="round"/>
                    <path d="M22 51L25 51" stroke="black" stroke-width="1.2" stroke-linecap="round"/>
                    <defs>
                        <filter id="filter0_bi_1_880" x="-32" y="-24" width="136" height="123" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="18"/>
                        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1_880"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1_880" result="shape"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="-12"/>
                        <feGaussianBlur stdDeviation="10"/>
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.65 0"/>
                        <feBlend mode="normal" in2="shape" result="effect2_innerShadow_1_880"/>
                        </filter>
                        <filter id="filter1_bi_1_880" x="-26" y="-18" width="92" height="92" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="18"/>
                        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1_880"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1_880" result="shape"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="-12"/>
                        <feGaussianBlur stdDeviation="6"/>
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.862 0 0 0 0 0.85 0 0 0 0 1 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="shape" result="effect2_innerShadow_1_880"/>
                        </filter>
                    </defs>
                 </svg>

                <p class=" text-black font-semibold font-epilogue text-[1.375rem]">
                    Complete automation <br> from publishing <br> to booking
                </p>
            </div>
             <div class=" w-full px-10 py-8 border border-dashed border-bgray rounded-[2rem] space-y-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" fill="none">
                    <g filter="url(#filter0_bi_1_975)">
                        <rect x="4" y="12" width="64" height="51" rx="8" fill="#00D5C4" fill-opacity="0.4"/>
                    </g>
                    <rect x="37.6" y="26.6" width="24.8" height="15.8" rx="3.4" stroke="black" stroke-width="1.2" stroke-linecap="round"/>
                    <mask id="path-3-inside-1_1_975" fill="white">
                        <path d="M47.9958 33.0588C48.2913 32.8882 48.6751 32.9885 48.7912 33.3095C48.9842 33.8432 49.0456 34.4189 48.9658 34.987C48.8571 35.7603 48.4929 36.4751 47.9311 37.0176C47.3693 37.5601 46.6422 37.8991 45.8655 37.9807C45.0889 38.0623 44.3072 37.8818 43.6449 37.4679C42.9827 37.054 42.4779 36.4305 42.2108 35.6967C41.9438 34.9628 41.9298 34.1607 42.1712 33.418C42.4126 32.6753 42.8955 32.0346 43.543 31.598C44.0186 31.2772 44.563 31.0801 45.1273 31.0197C45.4667 30.9834 45.7251 31.2844 45.7012 31.6249C45.6774 31.9653 45.3776 32.2135 45.0433 32.2823C44.7558 32.3415 44.4806 32.4564 44.234 32.6227C43.8151 32.9052 43.5028 33.3196 43.3466 33.8C43.1905 34.2804 43.1995 34.7993 43.3723 35.274C43.545 35.7488 43.8716 36.1521 44.3 36.4198C44.7284 36.6875 45.234 36.8043 45.7364 36.7515C46.2388 36.6987 46.7091 36.4794 47.0725 36.1285C47.4359 35.7776 47.6716 35.3152 47.7419 34.815C47.7833 34.5204 47.766 34.2226 47.6932 33.9383C47.6085 33.6076 47.7002 33.2295 47.9958 33.0588Z"/>
                    </mask>
                    <path d="M47.9958 33.0588C48.2913 32.8882 48.6751 32.9885 48.7912 33.3095C48.9842 33.8432 49.0456 34.4189 48.9658 34.987C48.8571 35.7603 48.4929 36.4751 47.9311 37.0176C47.3693 37.5601 46.6422 37.8991 45.8655 37.9807C45.0889 38.0623 44.3072 37.8818 43.6449 37.4679C42.9827 37.054 42.4779 36.4305 42.2108 35.6967C41.9438 34.9628 41.9298 34.1607 42.1712 33.418C42.4126 32.6753 42.8955 32.0346 43.543 31.598C44.0186 31.2772 44.563 31.0801 45.1273 31.0197C45.4667 30.9834 45.7251 31.2844 45.7012 31.6249C45.6774 31.9653 45.3776 32.2135 45.0433 32.2823C44.7558 32.3415 44.4806 32.4564 44.234 32.6227C43.8151 32.9052 43.5028 33.3196 43.3466 33.8C43.1905 34.2804 43.1995 34.7993 43.3723 35.274C43.545 35.7488 43.8716 36.1521 44.3 36.4198C44.7284 36.6875 45.234 36.8043 45.7364 36.7515C46.2388 36.6987 46.7091 36.4794 47.0725 36.1285C47.4359 35.7776 47.6716 35.3152 47.7419 34.815C47.7833 34.5204 47.766 34.2226 47.6932 33.9383C47.6085 33.6076 47.7002 33.2295 47.9958 33.0588Z" stroke="black" stroke-width="2.4" stroke-linecap="round" mask="url(#path-3-inside-1_1_975)"/>
                    <mask id="path-4-inside-2_1_975" fill="white">
                        <path d="M58.0633 35.7791C58.3773 35.9357 58.509 36.3219 58.2982 36.6024C58.0422 36.9432 57.7249 37.2358 57.3608 37.4643C56.8165 37.806 56.1887 37.9912 55.5461 37.9997C54.9035 38.0082 54.271 37.8395 53.7179 37.5123C53.1648 37.1851 52.7125 36.7119 52.4105 36.1447C52.1085 35.5774 51.9685 34.9379 52.0059 34.2964C52.0433 33.6548 52.2566 33.0359 52.6225 32.5076C52.9883 31.9792 53.4925 31.5618 54.0799 31.301C54.4728 31.1266 54.8927 31.0268 55.3184 31.0047C55.6688 30.9865 55.9156 31.3114 55.8702 31.6593C55.8249 32.0072 55.5017 32.2431 55.1551 32.2974C54.963 32.3275 54.7748 32.3827 54.5954 32.4623C54.2213 32.6284 53.9001 32.8943 53.667 33.2308C53.434 33.5674 53.2981 33.9616 53.2743 34.3703C53.2505 34.7789 53.3397 35.1863 53.532 35.5476C53.7244 35.909 54.0125 36.2104 54.3648 36.4188C54.7171 36.6273 55.12 36.7347 55.5294 36.7293C55.9387 36.7239 56.3386 36.6059 56.6853 36.3883C56.8515 36.2839 57.0024 36.1586 57.1346 36.0161C57.3732 35.7588 57.7494 35.6224 58.0633 35.7791Z"/>
                    </mask>
                    <path d="M58.0633 35.7791C58.3773 35.9357 58.509 36.3219 58.2982 36.6024C58.0422 36.9432 57.7249 37.2358 57.3608 37.4643C56.8165 37.806 56.1887 37.9912 55.5461 37.9997C54.9035 38.0082 54.271 37.8395 53.7179 37.5123C53.1648 37.1851 52.7125 36.7119 52.4105 36.1447C52.1085 35.5774 51.9685 34.9379 52.0059 34.2964C52.0433 33.6548 52.2566 33.0359 52.6225 32.5076C52.9883 31.9792 53.4925 31.5618 54.0799 31.301C54.4728 31.1266 54.8927 31.0268 55.3184 31.0047C55.6688 30.9865 55.9156 31.3114 55.8702 31.6593C55.8249 32.0072 55.5017 32.2431 55.1551 32.2974C54.963 32.3275 54.7748 32.3827 54.5954 32.4623C54.2213 32.6284 53.9001 32.8943 53.667 33.2308C53.434 33.5674 53.2981 33.9616 53.2743 34.3703C53.2505 34.7789 53.3397 35.1863 53.532 35.5476C53.7244 35.909 54.0125 36.2104 54.3648 36.4188C54.7171 36.6273 55.12 36.7347 55.5294 36.7293C55.9387 36.7239 56.3386 36.6059 56.6853 36.3883C56.8515 36.2839 57.0024 36.1586 57.1346 36.0161C57.3732 35.7588 57.7494 35.6224 58.0633 35.7791Z" stroke="black" stroke-width="2.4" stroke-linecap="round" mask="url(#path-4-inside-2_1_975)"/>
                    <g filter="url(#filter1_bi_1_975)">
                        <rect x="9" y="26" width="24" height="21" rx="4" fill="#4000F8" fill-opacity="0.5"/>
                    </g>
                    <path d="M11.5 42.5L20 34L23.5 37.5L30 31" stroke="#EFF8F8" stroke-width="1.2" stroke-linecap="round"/>
                    <path d="M9 20L63 20" stroke="black" stroke-width="1.2" stroke-linecap="round"/>
                    <path d="M10 51L32 51" stroke="black" stroke-width="1.2" stroke-linecap="round"/>
                    <path d="M10 55L24 55" stroke="black" stroke-width="1.2" stroke-linecap="round"/>
                    <path d="M38 47L54 47" stroke="black" stroke-width="1.2" stroke-linecap="round"/>
                    <path d="M38 51L48 51" stroke="black" stroke-width="1.2" stroke-linecap="round"/>
                    <path d="M38 55L50 55" stroke="black" stroke-width="1.2" stroke-linecap="round"/>
                    <defs>
                        <filter id="filter0_bi_1_975" x="-32" y="-24" width="136" height="123" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="18"/>
                        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1_975"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1_975" result="shape"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="-12"/>
                        <feGaussianBlur stdDeviation="10"/>
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.65 0"/>
                        <feBlend mode="normal" in2="shape" result="effect2_innerShadow_1_975"/>
                        </filter>
                        <filter id="filter1_bi_1_975" x="-27" y="-10" width="96" height="93" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="18"/>
                        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1_975"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1_975" result="shape"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="-12"/>
                        <feGaussianBlur stdDeviation="6"/>
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.862 0 0 0 0 0.85 0 0 0 0 1 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="shape" result="effect2_innerShadow_1_975"/>
                        </filter>
                    </defs>
                </svg>

                <p class=" text-black font-semibold font-epilogue text-[1.375rem]">
                    Live overview <br> of your booking <br> situation
                </p>
            </div>
        </div>


        <div class=" w-full flex pt-5">
            <div class=" m-auto relative">
                <button   class="text-white relative z-10 font-semibold text-[0.8rem] lg:text-[1rem] lg:tracking-[0.02rem] px-4 lg:px-8 rounded-lg py-2.5 lg:py-3 bg-primary font-epilogue hover:bg-blue-400 hover:text-white duration-200">
                                    Discover it yourself!
                 </button>
                 <div class=" absolute -top-9 -left-48">
                    <svg xmlns="http://www.w3.org/2000/svg" width="440" height="116" viewBox="0 0 440 116" fill="none">
                     <path d="M321.676 94.9498C321.942 95.0263 322.095 95.3034 322.018 95.5688L320.771 99.8926C320.695 100.158 320.418 100.311 320.152 100.234C319.887 100.158 319.734 99.8808 319.81 99.6155L320.919 95.7721L317.075 94.6637C316.81 94.5872 316.657 94.3101 316.734 94.0448C316.81 93.7794 317.087 93.6264 317.353 93.7029L321.676 94.9498ZM254.151 101.81L254.058 102.301L254.151 101.81ZM199.339 84.5526L199.135 85.0088L199.339 84.5526ZM172.633 60.0486L172.188 60.2779L172.633 60.0486ZM179.289 26.0732L178.982 25.678L179.289 26.0732ZM297.549 2.95426L297.499 3.4517L297.549 2.95426ZM381.545 19.5494L381.395 20.0265L381.545 19.5494ZM432.062 47.7231L432.452 47.41L432.062 47.7231ZM391.778 101.961L391.925 102.439L391.778 101.961ZM298.539 115.383L298.548 115.883L298.539 115.383ZM128.608 100.277L128.517 100.769L128.608 100.277ZM23.0251 65.5275L22.8006 65.9743L23.0251 65.5275ZM0.760459 49.0013C0.774637 48.7255 1.00969 48.5134 1.28547 48.5276L5.77954 48.7586C6.05531 48.7728 6.26738 49.0079 6.25321 49.2836C6.23903 49.5594 6.00397 49.7715 5.72819 49.7573L1.73347 49.5519L1.5281 53.5467C1.51392 53.8224 1.27887 54.0345 1.00309 54.0203C0.727312 54.0062 0.515242 53.7711 0.52942 53.4953L0.760459 49.0013ZM1.63104 48.692C2.15111 49.2684 2.66614 49.8269 3.17816 50.3688L2.45126 51.0556C1.93363 50.5077 1.41341 49.9436 0.888561 49.3619L1.63104 48.692ZM6.39461 53.5902C7.51902 54.6502 8.64982 55.6453 9.80884 56.5916L9.17636 57.3662C7.998 56.404 6.84941 55.3932 5.70867 54.3179L6.39461 53.5902ZM13.4346 59.3304C14.6506 60.1792 15.9161 60.9974 17.2519 61.8002L16.7368 62.6573C15.3827 61.8436 14.0981 61.013 12.8623 60.1504L13.4346 59.3304ZM21.2207 64.0348C21.8787 64.3832 22.5544 64.7315 23.2496 65.0808L22.8006 65.9743C22.0995 65.622 21.4174 65.2705 20.7527 64.9185L21.2207 64.0348ZM23.2496 65.0808C23.8422 65.3785 24.4355 65.6746 25.0294 65.9688L24.5855 66.8649C23.9899 66.5698 23.3949 66.2729 22.8006 65.9743L23.2496 65.0808ZM28.6033 67.7142C29.7984 68.2896 30.9962 68.8579 32.1966 69.4193L31.773 70.3251C30.5692 69.7621 29.368 69.1922 28.1695 68.6152L28.6033 67.7142ZM35.8087 71.084C37.0164 71.6325 38.2267 72.174 39.4394 72.7087L39.036 73.6237C37.8199 73.0876 36.6063 72.5445 35.3952 71.9945L35.8087 71.084ZM43.0878 74.2932C44.3072 74.8149 45.529 75.3297 46.7533 75.8377L46.37 76.7614C45.1424 76.2519 43.9172 75.7357 42.6945 75.2126L43.0878 74.2932ZM50.4354 77.3423C51.6657 77.8374 52.8984 78.3256 54.1335 78.8072L53.7702 79.7389C52.5318 79.256 51.2957 78.7664 50.0621 78.2701L50.4354 77.3423ZM57.847 80.2326C59.0875 80.7012 60.3303 81.1632 61.5754 81.6186L61.2319 82.5578C59.9835 82.1011 58.7374 81.6379 57.4936 81.1681L57.847 80.2326ZM65.3183 82.9655C66.5683 83.408 67.8206 83.8439 69.075 84.2734L68.7511 85.2195C67.4934 84.7889 66.2379 84.3518 64.9846 83.9082L65.3183 82.9655ZM72.845 85.5427C74.1038 85.9594 75.3647 86.3697 76.6278 86.7736L76.3232 87.7261C75.0569 87.3211 73.7928 86.9098 72.5308 86.4921L72.845 85.5427ZM80.4228 87.9663C81.6897 88.3575 82.9586 88.7425 84.2296 89.1212L83.944 90.0795C82.6699 89.6999 81.3978 89.314 80.1277 88.9218L80.4228 87.9663ZM88.0476 90.2385C89.3219 90.6046 90.5982 90.9646 91.8763 91.3185L91.6095 92.2823C90.3282 91.9275 89.0489 91.5666 87.7715 91.1996L88.0476 90.2385ZM95.7154 92.3616C96.9965 92.7031 98.2794 93.0386 99.5642 93.3681L99.3158 94.3368C98.028 94.0065 96.7419 93.6702 95.4578 93.3279L95.7154 92.3616ZM103.422 94.3383C104.71 94.6557 105.999 94.9671 107.29 95.2727L107.059 96.2458C105.765 95.9395 104.473 95.6273 103.183 95.3093L103.422 94.3383ZM111.165 96.1714C112.458 96.4651 113.753 96.7529 115.049 97.035L114.836 98.0122C113.537 97.7294 112.24 97.4409 110.944 97.1466L111.165 96.1714ZM118.94 97.8638C120.238 98.1342 121.538 98.3989 122.839 98.658L122.643 99.6388C121.34 99.3791 120.037 99.1137 118.736 98.8427L118.94 97.8638ZM126.744 99.4183C127.396 99.5422 128.047 99.6647 128.7 99.7858L128.517 100.769C127.863 100.648 127.21 100.525 126.557 100.401L126.744 99.4183ZM128.7 99.7858C129.365 99.9095 130.032 100.032 130.698 100.155L130.518 101.138C129.85 101.016 129.184 100.893 128.517 100.769L128.7 99.7858ZM134.7 100.881C136.034 101.12 137.368 101.357 138.704 101.591L138.532 102.576C137.195 102.341 135.858 102.105 134.523 101.865L134.7 100.881ZM142.711 102.283C144.047 102.511 145.383 102.737 146.721 102.959L146.557 103.946C145.218 103.723 143.88 103.497 142.543 103.269L142.711 102.283ZM150.734 103.619C152.072 103.835 153.411 104.049 154.75 104.261L154.595 105.249C153.254 105.037 151.913 104.823 150.574 104.606L150.734 103.619ZM158.768 104.886C160.108 105.091 161.448 105.294 162.789 105.494L162.642 106.483C161.299 106.283 159.957 106.08 158.617 105.874L158.768 104.886ZM166.813 106.084C168.154 106.278 169.496 106.469 170.839 106.657L170.7 107.648C169.356 107.459 168.012 107.268 166.67 107.074L166.813 106.084ZM174.867 107.213C176.21 107.395 177.554 107.574 178.898 107.751L178.768 108.742C177.422 108.566 176.077 108.386 174.733 108.204L174.867 107.213ZM182.931 108.271C184.276 108.441 185.621 108.609 186.967 108.773L186.846 109.766C185.498 109.601 184.152 109.433 182.806 109.263L182.931 108.271ZM191.004 109.257C192.35 109.415 193.697 109.57 195.044 109.723L194.932 110.716C193.583 110.564 192.235 110.408 190.888 110.25L191.004 109.257ZM199.086 110.17C200.434 110.316 201.782 110.459 203.13 110.599L203.027 111.593C201.677 111.453 200.327 111.31 198.978 111.164L199.086 110.17ZM207.176 111.009C208.524 111.142 209.874 111.273 211.223 111.4L211.129 112.395C209.778 112.268 208.427 112.137 207.077 112.004L207.176 111.009ZM215.273 111.772C216.623 111.893 217.973 112.01 219.324 112.125L219.239 113.121C217.887 113.007 216.535 112.889 215.183 112.768L215.273 111.772ZM223.376 112.458C224.728 112.566 226.079 112.671 227.431 112.772L227.356 113.77C226.003 113.668 224.65 113.563 223.297 113.455L223.376 112.458ZM231.486 113.067C232.839 113.161 234.191 113.253 235.543 113.341L235.478 114.339C234.124 114.251 232.77 114.159 231.416 114.064L231.486 113.067ZM239.601 113.595C240.955 113.676 242.308 113.754 243.661 113.829L243.606 114.827C242.251 114.753 240.896 114.675 239.541 114.593L239.601 113.595ZM247.722 114.042C249.076 114.11 250.43 114.174 251.783 114.234L251.739 115.233C250.383 115.173 249.028 115.108 247.672 115.041L247.722 114.042ZM255.846 114.406C257.201 114.46 258.555 114.51 259.909 114.556L259.875 115.556C258.519 115.509 257.163 115.459 255.806 115.405L255.846 114.406ZM263.974 114.685C265.329 114.725 266.684 114.76 268.038 114.793L268.014 115.792C266.658 115.76 265.302 115.724 263.945 115.685L263.974 114.685ZM272.103 114.878C273.459 114.903 274.814 114.924 276.169 114.941L276.156 115.941C274.799 115.924 273.442 115.903 272.085 115.878L272.103 114.878ZM280.235 114.982C281.591 114.992 282.946 114.998 284.301 115.001L284.299 116.001C282.942 115.998 281.585 115.992 280.228 115.982L280.235 114.982ZM288.366 114.996C289.722 114.991 291.078 114.982 292.432 114.968L292.442 115.968C291.085 115.982 289.728 115.991 288.37 115.996L288.366 114.996ZM296.498 114.917C297.176 114.907 297.853 114.896 298.53 114.883L298.548 115.883C297.87 115.895 297.192 115.907 296.514 115.917L296.498 114.917ZM298.53 114.883C299.185 114.871 299.841 114.858 300.496 114.843L300.519 115.843C299.862 115.858 299.205 115.871 298.548 115.883L298.53 114.883ZM304.429 114.739C305.74 114.7 307.05 114.654 308.36 114.603L308.399 115.602C307.086 115.654 305.773 115.699 304.46 115.739L304.429 114.739ZM312.29 114.433C313.6 114.371 314.909 114.303 316.219 114.228L316.275 115.227C314.963 115.301 313.651 115.37 312.338 115.432L312.29 114.433ZM320.145 113.987C321.453 113.901 322.761 113.808 324.068 113.709L324.144 114.706C322.833 114.805 321.522 114.898 320.211 114.985L320.145 113.987ZM327.988 113.392C329.294 113.279 330.6 113.16 331.905 113.035L332.001 114.03C330.692 114.156 329.383 114.275 328.074 114.388L327.988 113.392ZM335.817 112.637C337.121 112.497 338.423 112.35 339.725 112.196L339.842 113.189C338.537 113.344 337.231 113.491 335.924 113.631L335.817 112.637ZM343.627 111.712C344.927 111.543 346.226 111.367 347.524 111.183L347.664 112.173C346.363 112.358 345.06 112.534 343.756 112.704L343.627 111.712ZM351.413 110.608C352.709 110.408 354.003 110.201 355.296 109.985L355.46 110.972C354.163 111.188 352.865 111.396 351.566 111.596L351.413 110.608ZM359.17 109.314C360.46 109.082 361.748 108.842 363.034 108.594L363.224 109.575C361.933 109.825 360.641 110.066 359.347 110.299L359.17 109.314ZM366.889 107.822C368.172 107.556 369.454 107.281 370.733 106.998L370.949 107.974C369.666 108.259 368.38 108.534 367.092 108.801L366.889 107.822ZM374.565 106.12C375.84 105.819 377.113 105.509 378.384 105.189L378.628 106.158C377.352 106.479 376.075 106.791 374.795 107.094L374.565 106.12ZM382.188 104.201C383.454 103.863 384.717 103.515 385.978 103.158L386.25 104.12C384.985 104.479 383.717 104.828 382.447 105.167L382.188 104.201ZM389.75 102.056C390.378 101.868 391.004 101.677 391.63 101.483L391.925 102.439C391.297 102.633 390.668 102.825 390.038 103.014L389.75 102.056ZM391.63 101.483C392.259 101.289 392.905 101.084 393.567 100.868L393.877 101.819C393.211 102.036 392.559 102.243 391.925 102.439L391.63 101.483ZM397.412 99.5486C398.653 99.1021 399.928 98.6233 401.225 98.1127L401.591 99.0433C400.284 99.5575 399 100.04 397.75 100.489L397.412 99.5486ZM404.996 96.5626C406.227 96.0344 407.468 95.4795 408.71 94.8982L409.134 95.8039C407.882 96.39 406.631 96.9494 405.391 97.4816L404.996 96.5626ZM412.367 93.1071C413.572 92.4896 414.769 91.8475 415.95 91.1811L416.442 92.052C415.248 92.7254 414.039 93.3739 412.823 93.9971L412.367 93.1071ZM419.444 89.1048C420.601 88.38 421.732 87.6307 422.829 86.8575L423.405 87.6749C422.292 88.4593 421.146 89.2185 419.975 89.9522L419.444 89.1048ZM426.066 84.4207C427.135 83.5585 428.156 82.6707 429.12 81.7579L429.808 82.4839C428.823 83.4166 427.781 84.3218 426.694 85.1991L426.066 84.4207ZM431.913 78.8486C432.811 77.8112 433.63 76.7462 434.359 75.6541L435.191 76.209C434.437 77.3391 433.592 78.4373 432.669 79.5031L431.913 78.8486ZM436.323 72.1626C436.885 70.9395 437.329 69.6868 437.643 68.4047L438.615 68.6425C438.285 69.9906 437.818 71.3034 437.231 72.58L436.323 72.1626ZM438.178 64.4696C438.215 63.1763 438.117 61.8532 437.87 60.5003L438.854 60.3209C439.113 61.7416 439.217 63.1343 439.178 64.498L438.178 64.4696ZM436.795 56.6744C436.343 55.4827 435.776 54.2686 435.082 53.0323L435.955 52.5433C436.671 53.82 437.26 55.079 437.73 56.3201L436.795 56.6744ZM432.917 49.6651C432.526 49.1259 432.112 48.583 431.672 48.0362L432.452 47.41C432.901 47.9692 433.326 48.5253 433.727 49.0782L432.917 49.6651ZM431.672 48.0362C431.239 47.4967 430.795 46.9668 430.339 46.4463L431.092 45.7879C431.556 46.3188 432.01 46.8594 432.452 47.41L431.672 48.0362ZM427.483 43.4343C426.494 42.4697 425.466 41.5401 424.404 40.6436L425.049 39.8795C426.129 40.7906 427.174 41.7363 428.181 42.7184L427.483 43.4343ZM421.14 38.0662C420.028 37.2443 418.888 36.4528 417.722 35.6898L418.27 34.8531C419.45 35.626 420.607 36.4284 421.734 37.2622L421.14 38.0662ZM414.179 33.4982C412.982 32.7984 411.765 32.1245 410.533 31.4748L410.999 30.5901C412.244 31.2463 413.474 31.9273 414.684 32.635L414.179 33.4982ZM406.803 29.6031C405.548 29.0026 404.282 28.4242 403.007 27.8661L403.408 26.9501C404.692 27.5123 405.969 28.0954 407.235 28.701L406.803 29.6031ZM399.155 26.2479C397.859 25.725 396.56 25.2207 395.26 24.7332L395.611 23.7969C396.918 24.287 398.225 24.7943 399.529 25.3206L399.155 26.2479ZM391.329 23.3066C390.003 22.8404 388.682 22.3898 387.369 21.9528L387.685 21.004C389.002 21.4425 390.329 21.8949 391.661 22.3632L391.329 23.3066ZM383.39 20.6573C382.721 20.444 382.056 20.2339 381.395 20.0265L381.694 19.0724C382.356 19.2801 383.023 19.4908 383.694 19.7046L383.39 20.6573ZM381.395 20.0265C380.776 19.8323 380.156 19.6398 379.536 19.4491L379.83 18.4933C380.452 18.6846 381.073 18.8776 381.694 19.0724L381.395 20.0265ZM375.809 18.3256C374.564 17.958 373.318 17.5973 372.069 17.2433L372.342 16.2812C373.594 16.6362 374.844 16.9979 376.092 17.3666L375.809 18.3256ZM368.318 16.2015C367.066 15.861 365.812 15.5271 364.556 15.1998L364.808 14.2321C366.068 14.5603 367.325 14.8951 368.581 15.2366L368.318 16.2015ZM360.784 14.2373C359.525 13.923 358.264 13.6152 357.002 13.3136L357.234 12.341C358.5 12.6433 359.764 12.952 361.026 13.2671L360.784 14.2373ZM353.21 12.4279C351.945 12.1389 350.678 11.8562 349.41 11.5795L349.623 10.6025C350.895 10.8798 352.165 11.1633 353.433 11.453L353.21 12.4279ZM345.602 10.7679C344.332 10.5034 343.06 10.2449 341.786 9.99236L341.981 9.01147C343.257 9.26467 344.532 9.52377 345.806 9.7889L345.602 10.7679ZM337.964 9.25219C336.688 9.01131 335.412 8.7762 334.134 8.54677L334.311 7.56252C335.591 7.79247 336.871 8.02811 338.149 8.26957L337.964 9.25219ZM330.298 7.87541C329.019 7.65723 327.738 7.44462 326.457 7.23747L326.616 6.25028C327.901 6.45788 329.184 6.67097 330.466 6.88964L330.298 7.87541ZM322.61 6.63227C321.327 6.43591 320.043 6.24491 318.758 6.05917L318.901 5.06947C320.188 5.2556 321.475 5.447 322.761 5.64377L322.61 6.63227ZM314.901 5.5175C313.615 5.34209 312.328 5.17184 311.041 5.00663L311.168 4.01476C312.458 4.1803 313.747 4.3509 315.037 4.52667L314.901 5.5175ZM307.176 4.52588C305.887 4.37057 304.597 4.22018 303.307 4.07464L303.419 3.08095C304.712 3.22677 306.004 3.37744 307.295 3.53307L307.176 4.52588ZM299.435 3.65226C298.79 3.58422 298.144 3.51738 297.499 3.4517L297.6 2.45683C298.247 2.52263 298.893 2.5896 299.54 2.65776L299.435 3.65226ZM297.499 3.4517C296.816 3.38224 296.133 3.3141 295.45 3.24739L295.547 2.25212C296.231 2.31898 296.916 2.38724 297.6 2.45683L297.499 3.4517ZM291.349 2.8648C289.981 2.74341 288.613 2.62843 287.246 2.52062L287.324 1.52371C288.696 1.6318 290.067 1.74705 291.437 1.86872L291.349 2.8648ZM283.14 2.21926C281.769 2.12638 280.4 2.04146 279.031 1.96525L279.086 0.9668C280.46 1.04325 281.833 1.12841 283.207 1.22155L283.14 2.21926ZM274.92 1.76323C273.548 1.70504 272.177 1.65636 270.807 1.61798L270.835 0.618371C272.21 0.656895 273.586 0.705742 274.962 0.764138L274.92 1.76323ZM266.693 1.53437C265.32 1.51731 263.949 1.5114 262.58 1.51742L262.575 0.517436C263.95 0.511385 265.327 0.517318 266.706 0.534447L266.693 1.53437ZM258.466 1.5723C257.094 1.60319 255.723 1.64692 254.355 1.70428L254.313 0.705163C255.688 0.64752 257.065 0.603588 258.444 0.572552L258.466 1.5723ZM250.248 1.91875C248.879 2.0047 247.512 2.10523 246.148 2.22113L246.063 1.22472C247.434 1.10818 248.809 1.00711 250.186 0.920709L250.248 1.91875ZM242.056 2.61693C240.692 2.76522 239.332 2.92986 237.976 3.11163L237.843 2.1205C239.208 1.93759 240.576 1.77196 241.948 1.62279L242.056 2.61693ZM233.911 3.71067C232.557 3.92852 231.208 4.16448 229.864 4.41935L229.678 3.43686C231.031 3.18022 232.39 2.94267 233.752 2.72338L233.911 3.71067ZM225.84 5.24279C224.502 5.53702 223.17 5.85108 221.842 6.18579L221.598 5.21615C222.935 4.8789 224.278 4.56251 225.625 4.26614L225.84 5.24279ZM217.877 7.25278C216.562 7.62936 215.252 8.02739 213.949 8.44768L213.642 7.49593C214.956 7.07219 216.276 6.67097 217.602 6.2914L217.877 7.25278ZM210.064 9.77374C208.778 10.2371 207.5 10.7234 206.228 11.2333L205.855 10.3051C207.139 9.79074 208.428 9.30032 209.724 8.83304L210.064 9.77374ZM202.446 12.8282C201.199 13.381 199.959 13.9577 198.726 14.5594L198.288 13.6606C199.532 13.0536 200.783 12.4716 202.041 11.914L202.446 12.8282ZM195.073 16.4266C193.872 17.0689 192.678 17.7361 191.492 18.429L190.987 17.5654C192.184 16.8662 193.389 16.193 194.601 15.5448L195.073 16.4266ZM187.988 20.5644C186.84 21.294 185.7 22.0489 184.568 22.83L184 22.0067C185.143 21.2186 186.294 20.4567 187.452 19.7204L187.988 20.5644ZM181.234 25.222C180.686 25.6309 180.139 26.0463 179.595 26.4683L178.982 25.678C179.532 25.2523 180.083 24.8331 180.636 24.4204L181.234 25.222ZM179.595 26.4683C179.095 26.8562 178.614 27.2524 178.152 27.6565L177.494 26.9039C177.971 26.4865 178.467 26.0778 178.982 25.678L179.595 26.4683ZM175.512 30.2822C174.673 31.2362 173.924 32.2236 173.264 33.2398L172.425 32.6949C173.112 31.6371 173.891 30.6111 174.761 29.6217L175.512 30.2822ZM171.49 36.4968C170.982 37.6362 170.572 38.8034 170.258 39.993L169.291 39.738C169.618 38.4964 170.047 37.2782 170.577 36.0894L171.49 36.4968ZM169.602 43.6425C169.481 44.8644 169.454 46.1037 169.519 47.355L168.521 47.407C168.453 46.1069 168.481 44.8174 168.607 43.5441L169.602 43.6425ZM169.973 51.0461C170.203 52.2441 170.515 53.4483 170.907 54.6539L169.956 54.9631C169.552 53.7196 169.23 52.4752 168.991 51.235L169.973 51.0461ZM172.261 58.1342C172.515 58.6968 172.788 59.2587 173.077 59.8194L172.188 60.2779C171.891 59.7023 171.612 59.1252 171.35 58.5469L172.261 58.1342ZM173.077 59.8194C173.36 60.3685 173.649 60.908 173.944 61.438L173.07 61.9241C172.77 61.3848 172.476 60.8362 172.188 60.2779L173.077 59.8194ZM175.831 64.5809C176.504 65.6204 177.204 66.6201 177.931 67.5824L177.133 68.1851C176.391 67.2032 175.678 66.1838 174.992 65.1245L175.831 64.5809ZM180.246 70.419C181.057 71.3393 181.898 72.2223 182.77 73.0706L182.073 73.7874C181.183 72.9214 180.324 72.0199 179.495 71.0803L180.246 70.419ZM185.49 75.5219C186.423 76.3014 187.388 77.049 188.385 77.7674L187.801 78.5789C186.785 77.8469 185.801 77.0846 184.849 76.2894L185.49 75.5219ZM191.431 79.8085C192.456 80.4484 193.513 81.0633 194.602 81.6555L194.124 82.534C193.018 81.9327 191.944 81.3078 190.901 80.6569L191.431 79.8085ZM197.875 83.3234C198.424 83.5857 198.98 83.8433 199.544 84.0965L199.135 85.0088C198.564 84.7525 198 84.4915 197.444 84.2258L197.875 83.3234ZM199.544 84.0965C200.168 84.3765 200.793 84.654 201.42 84.929L201.019 85.8447C200.389 85.5686 199.761 85.29 199.135 85.0088L199.544 84.0965ZM205.194 86.5459C206.455 87.0738 207.722 87.5914 208.994 88.0988L208.624 89.0276C207.346 88.5182 206.074 87.9984 204.808 87.4684L205.194 86.5459ZM212.82 89.5878C214.099 90.0732 215.382 90.5482 216.67 91.0127L216.331 91.9534C215.038 91.487 213.749 91.0101 212.465 90.5227L212.82 89.5878ZM220.544 92.3738C221.838 92.8167 223.137 93.249 224.439 93.6707L224.131 94.622C222.824 94.1987 221.52 93.7646 220.22 93.3199L220.544 92.3738ZM228.355 94.9032C229.664 95.3034 230.976 95.6927 232.291 96.0712L232.015 97.0322C230.695 96.6522 229.377 96.2613 228.063 95.8595L228.355 94.9032ZM236.246 97.1741C237.568 97.531 238.892 97.8769 240.218 98.2116L239.973 99.1812C238.642 98.8451 237.312 98.4979 235.985 98.1395L236.246 97.1741ZM244.207 99.1831C245.54 99.4961 246.875 99.7977 248.212 100.088L247.999 101.065C246.658 100.774 245.317 100.471 243.979 100.157L244.207 99.1831ZM252.231 100.925C252.902 101.059 253.573 101.19 254.245 101.319L254.058 102.301C253.383 102.172 252.709 102.041 252.035 101.906L252.231 100.925ZM254.245 101.319C254.872 101.438 255.5 101.555 256.128 101.669L255.95 102.653C255.318 102.538 254.688 102.421 254.058 102.301L254.245 101.319ZM259.903 102.316C261.164 102.52 262.426 102.71 263.69 102.886L263.552 103.876C262.281 103.7 261.012 103.508 259.744 103.304L259.903 102.316ZM267.487 103.369C268.756 103.515 270.025 103.644 271.293 103.757L271.205 104.753C269.928 104.64 268.65 104.509 267.372 104.362L267.487 103.369ZM275.109 104.04C276.383 104.116 277.657 104.173 278.929 104.21L278.9 105.209C277.618 105.173 276.334 105.115 275.049 105.038L275.109 104.04ZM282.751 104.256C284.027 104.249 285.301 104.221 286.571 104.168L286.613 105.167C285.33 105.22 284.044 105.249 282.756 105.256L282.751 104.256ZM290.385 103.936C291.655 103.834 292.922 103.705 294.184 103.55L294.306 104.543C293.029 104.7 291.749 104.829 290.465 104.933L290.385 103.936ZM297.961 103.001C299.215 102.79 300.464 102.55 301.708 102.279L301.92 103.257C300.661 103.53 299.396 103.773 298.127 103.987L297.961 103.001ZM305.415 101.378C306.64 101.048 307.858 100.686 309.07 100.291L309.38 101.242C308.151 101.642 306.916 102.009 305.675 102.344L305.415 101.378ZM312.662 99.0155C313.843 98.5605 315.016 98.072 316.18 97.5486L316.59 98.4608C315.409 98.9917 314.219 99.4871 313.022 99.9486L312.662 99.0155ZM319.614 95.8916C320.177 95.6007 320.737 95.301 321.296 94.9925L321.78 95.8679C321.213 96.1808 320.644 96.4848 320.073 96.7799L319.614 95.8916Z" fill="#CECECE"/>
                    </svg>
                 </div>
            </div>
        </div>
    </div>
</template>