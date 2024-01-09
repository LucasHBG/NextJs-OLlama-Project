"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

function IconLogo({ className, ...props }: React.ComponentProps<"svg">) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="1080"
            zoomAndPan="magnify"
            viewBox="0 0 810 809.999993"
            height="1080"
            preserveAspectRatio="xMidYMid meet"
            version="1.0"
            className={cn("h-6 w-6", className)}
            {...props}
        >
            <defs>
                <clipPath id="182f3cfc8e">
                    <path
                        d="M 0 173.136719 L 810 173.136719 L 810 636.636719 L 0 636.636719 Z M 0 173.136719 "
                        clipRule="nonzero"
                    />
                </clipPath>
            </defs>
            <g clipPath="url(#182f3cfc8e)">
                <path
                    fill="#d63cfd"
                    d="M 2.71875 194.910156 L 262.710938 629.789062 C 265.296875 634.117188 269.964844 636.765625 275.003906 636.765625 C 280.042969 636.765625 284.710938 634.117188 287.296875 629.789062 L 405 432.910156 L 522.703125 629.789062 C 525.289062 634.117188 529.957031 636.765625 535 636.765625 C 540.035156 636.765625 544.699219 634.117188 547.289062 629.789062 L 807.28125 194.910156 C 809.933594 190.480469 809.988281 184.976562 807.445312 180.488281 C 804.90625 176.007812 800.144531 173.234375 794.992188 173.234375 L 663.511719 173.234375 C 658.425781 173.234375 653.722656 175.933594 651.152344 180.308594 L 548.074219 356.039062 C 544.074219 362.863281 546.363281 371.632812 553.183594 375.640625 C 560.003906 379.644531 568.777344 377.359375 572.78125 370.535156 L 671.710938 201.886719 L 769.738281 201.886719 L 535 594.527344 L 421.683594 405 L 547.289062 194.910156 C 549.941406 190.480469 549.996094 184.976562 547.453125 180.488281 C 544.914062 176.007812 540.152344 173.234375 535 173.234375 L 403.515625 173.234375 C 398.433594 173.234375 393.730469 175.933594 391.164062 180.308594 L 288.082031 356.039062 C 284.082031 362.863281 286.371094 371.632812 293.191406 375.640625 C 300.011719 379.644531 308.789062 377.359375 312.792969 370.535156 L 411.71875 201.886719 L 509.746094 201.886719 L 392.746094 397.578125 C 392.710938 397.640625 392.667969 397.710938 392.632812 397.769531 L 275.003906 594.527344 L 40.265625 201.886719 L 250.90625 201.886719 L 222.101562 254.847656 C 218.324219 261.789062 220.890625 270.492188 227.84375 274.265625 C 234.789062 278.046875 243.488281 275.476562 247.269531 268.535156 L 287.585938 194.40625 C 290 189.96875 289.898438 184.585938 287.316406 180.242188 C 284.734375 175.898438 280.058594 173.234375 275.003906 173.234375 L 15.011719 173.234375 C 9.855469 173.234375 5.097656 176.007812 2.550781 180.488281 C 0.0078125 184.976562 0.0703125 190.480469 2.71875 194.910156 "
                    fillOpacity="1"
                    fillRule="nonzero"
                />
            </g>
        </svg>
    )
}

function IconUser({ className, ...props }: React.ComponentProps<'svg'>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor" className={cn('h-4 w-4', className)} {...props}>
            <path d="M230.92 212c-15.23-26.33-38.7-45.21-66.09-54.16a72 72 0 1 0-73.66 0c-27.39 8.94-50.86 27.82-66.09 54.16a8 8 0 1 0 13.85 8c18.84-32.56 52.14-52 89.07-52s70.23 19.44 89.07 52a8 8 0 1 0 13.85-8ZM72 96a56 56 0 1 1 56 56 56.06 56.06 0 0 1-56-56Z" />
        </svg>
    )
}

function IconCheckmark({ className, ...props }: React.ComponentProps<"svg">) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={cn("h-6 w-6", className)}
            {...props}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
            />
        </svg>
    )
}

function IconEmail({ className, ...props }: React.ComponentProps<"svg">) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={cn("h-8 w-8", className)}
            {...props}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
        </svg>
    )
}

function IconFacebook({ className, ...props }: React.ComponentProps<"svg">) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
            width="90"
            height="166"
            viewBox="0 0 90 166"
            xmlSpace="preserve"
            className={cn("h-8 w-8 ", className)}
            {...props}
        >
            <title>Facebook</title>
            <desc>Created with Fabric.js 3.6.3</desc>
            <defs></defs>
            <g transform="matrix(0.21 0 0 0.21 45.2 83.26)">
                <path
                    transform=" translate(-396, -396)"
                    strokeWidth={1}
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    strokeMiterlimit={4}
                    fill="currentColor"
                    fillRule="nonzero"
                    opacity={1}
                    strokeDashoffset={0}
                    d="M 454.406 792 H 316.005 c -10.454 0 -18.938 -8.484 -18.938 -18.938 V 448.005 h -96.851 c -10.454 0 -18.938 -8.484 -18.938 -18.938 V 295.021 c 0 -10.454 8.484 -18.938 18.938 -18.938 h 96.851 v -79.882 C 297.066 75.147 370.358 0 488.381 0 c 52.724 0 95.184 4.053 105.902 5.492 c 9.432 1.25 16.438 9.28 16.438 18.787 v 119.842 c 0 10.454 -8.484 18.938 -18.938 18.938 l -70.905 0.076 c -40.944 0 -47.535 13.635 -47.535 46.323 v 66.663 h 113.819 c 5.454 0 10.644 2.348 14.203 6.439 c 3.599 4.053 5.266 9.507 4.584 14.923 l -17.272 134.045 c -1.212 9.469 -9.279 16.552 -18.786 16.552 h -96.548 v 325.058 C 473.344 783.554 464.86 792 454.406 792 z M 334.943 754.123 h 100.524 V 429.066 c 0 -10.454 8.484 -18.938 18.938 -18.938 h 98.82 l 12.424 -96.169 H 454.406 c -10.454 0 -18.938 -8.484 -18.938 -18.938 V 209.42 c 0 -36.134 8.863 -84.2 85.412 -84.2 l 52.005 -0.038 V 41.361 c -19.355 -1.667 -50.452 -3.485 -84.503 -3.485 c -96.093 0 -153.438 59.164 -153.438 158.324 v 98.82 c 0 10.454 -8.484 18.938 -18.938 18.938 h -96.851 v 96.169 h 96.851 c 10.454 0 18.938 8.484 18.938 18.938 V 754.123 z"
                />
            </g>
        </svg>
    )
}

function IconInstagram({ className, ...props }: React.ComponentProps<"svg">) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
            width="196"
            height="196"
            viewBox="0 0 196 196"
            xmlSpace="preserve"
            className={cn("h-8 w-8 ", className)}
            {...props}
        >
            <title>Instagram</title>
            <desc>Created with Fabric.js 3.6.3</desc>
            <defs></defs>
            <g transform="matrix(1 0 0 1 98.5 98.5)" id="Flat">
                <path
                    transform=" translate(-128, -128)"
                    strokeWidth={1}
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    strokeMiterlimit={4}
                    fill="currentColor"
                    fillRule="nonzero"
                    opacity={1}
                    strokeDashoffset={0}
                    d="M 128 82 a 46 46 0 1 0 46 46 A 46.05239 46.05239 0 0 0 128 82 Z m 0 80 a 34 34 0 1 1 34 -34 A 34.03864 34.03864 0 0 1 128 162 Z M 172 30 H 84 A 54.06156 54.06156 0 0 0 30 84 v 88 a 54.06156 54.06156 0 0 0 54 54 h 88 a 54.06156 54.06156 0 0 0 54 -54 V 84 A 54.06156 54.06156 0 0 0 172 30 Z m 42 142 a 42.04718 42.04718 0 0 1 -42 42 H 84 a 42.04718 42.04718 0 0 1 -42 -42 V 84 A 42.04718 42.04718 0 0 1 84 42 h 88 a 42.04718 42.04718 0 0 1 42 42 Z M 190 76 a 10 10 0 1 1 -10 -10 A 10.01177 10.01177 0 0 1 190 76 Z"
                />
            </g>
        </svg>
    )
}

function IconWhatsApp({ className, ...props }: React.ComponentProps<"svg">) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
            fill="none"
            width="90"
            height="90"
            viewBox="0 0 90 90"
            xmlSpace="preserve"
            className={cn("h-8 w-8 ", className)}
            {...props}
        >
            <title>WhatsApp</title>
            <desc>Created with Fabric.js 3.6.3</desc>
            <defs></defs>
            <g transform="matrix(1 0 0 1 45.5 45.5)" id="WhatsApp">
                <path
                    transform=" translate(-45, -45)"
                    strokeWidth={1}
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    strokeMiterlimit={4}
                    fill="currentColor"
                    fillRule="nonzero"
                    opacity={1}
                    strokeDashoffset={0}
                    d="M 90 43.841 c 0 24.213 -19.779 43.841 -44.182 43.841 c -7.747 0 -15.025 -1.98 -21.357 -5.455 L 0 90 l 7.975 -23.522 c -4.023 -6.606 -6.34 -14.354 -6.34 -22.637 C 1.635 19.628 21.416 0 45.818 0 C 70.223 0 90 19.628 90 43.841 z M 45.818 6.982 c -20.484 0 -37.146 16.535 -37.146 36.859 c 0 8.065 2.629 15.534 7.076 21.61 L 11.107 79.14 l 14.275 -4.537 c 5.865 3.851 12.891 6.097 20.437 6.097 c 20.481 0 37.146 -16.533 37.146 -36.857 S 66.301 6.982 45.818 6.982 z M 68.129 53.938 c -0.273 -0.447 -0.994 -0.717 -2.076 -1.254 c -1.084 -0.537 -6.41 -3.138 -7.4 -3.495 c -0.993 -0.358 -1.717 -0.538 -2.438 0.537 c -0.721 1.076 -2.797 3.495 -3.43 4.212 c -0.632 0.719 -1.263 0.809 -2.347 0.271 c -1.082 -0.537 -4.571 -1.673 -8.708 -5.333 c -3.219 -2.848 -5.393 -6.364 -6.025 -7.441 c -0.631 -1.075 -0.066 -1.656 0.475 -2.191 c 0.488 -0.482 1.084 -1.255 1.625 -1.882 c 0.543 -0.628 0.723 -1.075 1.082 -1.793 c 0.363 -0.717 0.182 -1.344 -0.09 -1.883 c -0.27 -0.537 -2.438 -5.825 -3.34 -7.977 c -0.902 -2.15 -1.803 -1.792 -2.436 -1.792 c -0.631 0 -1.354 -0.09 -2.076 -0.09 c -0.722 0 -1.896 0.269 -2.889 1.344 c -0.992 1.076 -3.789 3.676 -3.789 8.963 c 0 5.288 3.879 10.397 4.422 11.113 c 0.541 0.716 7.49 11.92 18.5 16.223 C 58.2 65.771 58.2 64.336 60.186 64.156 c 1.984 -0.179 6.406 -2.599 7.312 -5.107 C 68.398 56.537 68.398 54.386 68.129 53.938 z"
                />
            </g>
        </svg>
    )
}

function IconThumbUp({ className, ...props }: React.ComponentProps<"svg">) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.8}
            stroke="currentColor"
            className={cn("h-8 w-8 ", className)}
            {...props}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
            />
        </svg>
    )
}

function IconHome({ className, ...props }: React.ComponentProps<"svg">) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.8}
            stroke="currentColor"
            className={cn("h-8 w-8 ", className)}
            {...props}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
        </svg>
    )
}

function IconShieldCheck({ className, ...props }: React.ComponentProps<"svg">) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={cn("h-8 w-8 ", className)}
            {...props}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
            />
        </svg>
    )
}

function IconTruckVehicle({
    className,
    ...props
}: React.ComponentProps<"svg">) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={cn("h-8 w-8 ", className)}
            {...props}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
            />
        </svg>
    )
}

function IconBeakerChemestry({
    className,
    ...props
}: React.ComponentProps<"svg">) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={cn("h-8 w-8 ", className)}
            {...props}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
            />
        </svg>
    )
}

function IconCurrencyDollar({
    className,
    ...props
}: React.ComponentProps<"svg">) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.8}
            stroke="currentColor"
            className={cn("h-8 w-8 ", className)}
            {...props}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
        </svg>
    )
}

function IconMoon({ className, ...props }: React.ComponentProps<"svg">) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            fill="currentColor"
            className={cn("h-4 w-4", className)}
            {...props}
        >
            <path d="M233.54 142.23a8 8 0 0 0-8-2 88.08 88.08 0 0 1-109.8-109.8 8 8 0 0 0-10-10 104.84 104.84 0 0 0-52.91 37A104 104 0 0 0 136 224a103.09 103.09 0 0 0 62.52-20.88 104.84 104.84 0 0 0 37-52.91 8 8 0 0 0-1.98-7.98Zm-44.64 48.11A88 88 0 0 1 65.66 67.11a89 89 0 0 1 31.4-26A106 106 0 0 0 96 56a104.11 104.11 0 0 0 104 104 106 106 0 0 0 14.92-1.06 89 89 0 0 1-26.02 31.4Z" />
        </svg>
    )
}

function IconSun({ className, ...props }: React.ComponentProps<"svg">) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            fill="currentColor"
            className={cn("h-4 w-4", className)}
            {...props}
        >
            <path d="M120 40V16a8 8 0 0 1 16 0v24a8 8 0 0 1-16 0Zm72 88a64 64 0 1 1-64-64 64.07 64.07 0 0 1 64 64Zm-16 0a48 48 0 1 0-48 48 48.05 48.05 0 0 0 48-48ZM58.34 69.66a8 8 0 0 0 11.32-11.32l-16-16a8 8 0 0 0-11.32 11.32Zm0 116.68-16 16a8 8 0 0 0 11.32 11.32l16-16a8 8 0 0 0-11.32-11.32ZM192 72a8 8 0 0 0 5.66-2.34l16-16a8 8 0 0 0-11.32-11.32l-16 16A8 8 0 0 0 192 72Zm5.66 114.34a8 8 0 0 0-11.32 11.32l16 16a8 8 0 0 0 11.32-11.32ZM48 128a8 8 0 0 0-8-8H16a8 8 0 0 0 0 16h24a8 8 0 0 0 8-8Zm80 80a8 8 0 0 0-8 8v24a8 8 0 0 0 16 0v-24a8 8 0 0 0-8-8Zm112-88h-24a8 8 0 0 0 0 16h24a8 8 0 0 0 0-16Z" />
        </svg>
    )
}

export {
    IconLogo,
    IconUser,
    IconCheckmark,
    IconEmail,
    IconFacebook,
    IconInstagram,
    IconWhatsApp,
    IconThumbUp,
    IconHome,
    IconShieldCheck,
    IconTruckVehicle,
    IconBeakerChemestry,
    IconCurrencyDollar,
    IconMoon,
    IconSun,
}
