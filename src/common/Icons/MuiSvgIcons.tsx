import { SvgIcon } from "@mui/material";

export const LocationIcon = ({ fill = 'white' }: any) => {
    return (
        <SvgIcon>
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.5 10.0714C5.5 6.2881 8.96304 4 12 4C15.037 4 18.5 6.2881 18.5 10.0714C18.5 12.4463 17.3299 14.5887 15.8656 16.3303C14.4439 18.0211 12.8224 19.2405 12 19.8053C11.1776 19.2405 9.55612 18.0211 8.13442 16.3303C6.67006 14.5887 5.5 12.4463 5.5 10.0714ZM4.5 10.0714C4.5 5.57143 8.59091 3 12 3C15.4091 3 19.5 5.57143 19.5 10.0714C19.5 15.4847 14.1819 19.5305 12.5021 20.6734C12.1968 20.8812 11.8032 20.8812 11.4979 20.6734C9.81808 19.5305 4.5 15.4847 4.5 10.0714ZM10 10.5C10 9.39543 10.8954 8.5 12 8.5C13.1046 8.5 14 9.39543 14 10.5C14 11.6046 13.1046 12.5 12 12.5C10.8954 12.5 10 11.6046 10 10.5ZM12 7.5C10.3431 7.5 9 8.84315 9 10.5C9 12.1569 10.3431 13.5 12 13.5C13.6569 13.5 15 12.1569 15 10.5C15 8.84315 13.6569 7.5 12 7.5Z"
                    fill={fill}>
                </path>
            </svg>
        </SvgIcon>
    );
};

export const ProfileIcon = () => {
    return (
        <SvgIcon sx={{ textAlign: 'center' }}>
            <svg
                width="24"
                height="24"
                viewBox="0 0 18 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.26464 4.801C6.26464 3.20871 7.55544 1.91791 9.14772 1.91791C10.74 1.91791 12.0308 3.20872 12.0308 4.801C12.0308 6.39329 10.74 7.68409 9.14772 7.68409C7.55544 7.68409 6.26464 6.39329 6.26464 4.801ZM9.14772 0.5C6.77234 0.5 4.84673 2.42563 4.84673 4.801C4.84673 7.17637 6.77234 9.102 9.14772 9.102C11.5231 9.102 13.4487 7.17638 13.4487 4.801C13.4487 2.42562 11.5231 0.5 9.14772 0.5ZM2.10541 16.3333C2.10541 13.7077 4.33249 11.4652 7.0681 11.4652H11.3218C14.0653 11.4652 16.2845 13.6209 16.2845 16.3333V17.1405C16.2089 17.6863 15.7974 18.0821 15.292 18.0821H3.00342C2.51666 18.0821 2.10541 17.7108 2.10541 17.1841V16.3333ZM7.0681 10.0473C3.5649 10.0473 0.6875 12.9092 0.6875 16.3333V17.1841C0.6875 18.5479 1.78868 19.5 3.00342 19.5H15.292C16.6665 19.5 17.5717 18.4003 17.6981 17.2624C17.701 17.2364 17.7024 17.2102 17.7024 17.1841V16.3333C17.7024 12.8069 14.8172 10.0473 11.3218 10.0473H7.0681Z"
                    fill="white">

                </path>
            </svg>
        </SvgIcon>
    );
};

export const SearchIcon = () => {
    return (
        <SvgIcon>
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.438 16.1451C14.1188 17.3001 12.3911 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5C18 12.3911 17.3001 14.1188 16.1451 15.438L20.8536 20.1464C21.0488 20.3417 21.0488 20.6583 20.8536 20.8536C20.6583 21.0488 20.3417 21.0488 20.1464 20.8536L15.438 16.1451ZM17 10.5C17 14.0899 14.0899 17 10.5 17C6.91015 17 4 14.0899 4 10.5C4 6.91015 6.91015 4 10.5 4C14.0899 4 17 6.91015 17 10.5Z"
                    fill="white">
                </path>
            </svg>
        </SvgIcon>
    );
};

export const CartIcon = () => {
    return (
        <SvgIcon>
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.48853 14.5H5.50011C5.22396 14.5 5.00011 14.7238 5.00011 15C5.00011 15.2761 5.22396 15.5 5.50011 15.5H17.0001C18.1047 15.5 19.0001 16.3954 19.0001 17.5C19.0001 18.6045 18.1047 19.5 17.0001 19.5C15.8955 19.5 15.0001 18.6045 15.0001 17.5C15.0001 17.1357 15.0975 16.7942 15.2677 16.5H8.73254C8.90271 16.7942 9.00011 17.1357 9.00011 17.5C9.00011 18.6045 8.10466 19.5 7.00011 19.5C5.89553 19.5 5.00011 18.6045 5.00011 17.5C5.00011 17.1289 5.10118 16.7814 5.27729 16.4835C4.55453 16.3759 4.00011 15.7527 4.00011 15C4.00011 14.1716 4.67168 13.5 5.50011 13.5H6.87669L5.09891 5.5H3.5C3.22386 5.5 3 5.27614 3 5C3 4.72386 3.22386 4.5 3.5 4.5H5.09891C5.56761 4.5 5.97343 4.82553 6.0751 5.28307L6.34553 6.49998H20.5001C20.657 6.49998 20.8048 6.57363 20.8993 6.69889C20.9938 6.82414 21.024 6.98649 20.9809 7.13735L18.9809 14.1373C18.9195 14.352 18.7233 14.5 18.5001 14.5H7.51054C7.50318 14.5001 7.49584 14.5001 7.48853 14.5ZM7.00011 16.5C6.44783 16.5 6.00011 16.9477 6.00011 17.5C6.00011 18.0523 6.44783 18.5 7.00011 18.5C7.55238 18.5 8.00011 18.0523 8.00011 17.5C8.00011 16.9477 7.55238 16.5 7.00011 16.5ZM17.0001 16.5C16.4478 16.5 16.0001 16.9477 16.0001 17.5C16.0001 18.0523 16.4478 18.5 17.0001 18.5C17.5524 18.5 18.0001 18.0523 18.0001 17.5C18.0001 16.9477 17.5524 16.5 17.0001 16.5ZM19.8372 7.49998H6.56775L7.90108 13.5H18.123L19.8372 7.49998Z"
                    fill="#f05b2b">

                </path>
            </svg>
        </SvgIcon>
    );
};

export const CalenderIcon = () => {
    return (
        <SvgIcon>
            <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.5 5.5L6.5 5.5V5C6.5 4.17157 7.17157 3.5 8 3.5C8.82843 3.5 9.5 4.17157 9.5 5V5.5L12.5 5.5V5C12.5 4.17157 13.1716 3.5 14 3.5C14.8284 3.5 15.5 4.17157 15.5 5V5.5H16.5C17.8807 5.5 19 6.61929 19 8V10.6429C19 10.919 18.7761 11.1429 18.5 11.1429C18.2239 11.1429 18 10.919 18 10.6429V10.5H4L4 17C4 17.8284 4.67157 18.5 5.5 18.5L9.5 18.5C9.77614 18.5 10 18.7239 10 19C10 19.2761 9.77614 19.5 9.5 19.5H5.5C4.11929 19.5 3 18.3807 3 17V8C3 6.61929 4.11929 5.5 5.5 5.5ZM7.5 5V7C7.5 7.27614 7.72386 7.5 8 7.5C8.27614 7.5 8.5 7.27614 8.5 7V5C8.5 4.72386 8.27614 4.5 8 4.5C7.72386 4.5 7.5 4.72386 7.5 5ZM14.5 5C14.5 4.72386 14.2761 4.5 14 4.5C13.7239 4.5 13.5 4.72386 13.5 5V7C13.5 7.27614 13.7239 7.5 14 7.5C14.2761 7.5 14.5 7.27614 14.5 7V5ZM12.5 6.5V7C12.5 7.82843 13.1716 8.5 14 8.5C14.8284 8.5 15.5 7.82843 15.5 7V6.5L16.5 6.5C17.3284 6.5 18 7.17157 18 8V9.5H4L4 8C4 7.17157 4.67157 6.5 5.5 6.5H6.5V7C6.5 7.82843 7.17157 8.5 8 8.5C8.82843 8.5 9.5 7.82843 9.5 7V6.5L12.5 6.5Z"
                    fill="#45474D">
                </path>
                <path
                    d="M16 17C15.7239 17 15.5 16.7761 15.5 16.5V14C15.5 13.7239 15.7239 13.5 16 13.5C16.2761 13.5 16.5 13.7239 16.5 14V16H17.5C17.7761 16 18 16.2239 18 16.5C18 16.7761 17.7761 17 17.5 17H16Z"
                    fill="#45474D">
                </path>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16 21.5C18.7614 21.5 21 19.2614 21 16.5C21 13.7386 18.7614 11.5 16 11.5C13.2386 11.5 11 13.7386 11 16.5C11 19.2614 13.2386 21.5 16 21.5ZM16 20.5C18.2091 20.5 20 18.7091 20 16.5C20 14.2909 18.2091 12.5 16 12.5C13.7909 12.5 12 14.2909 12 16.5C12 18.7091 13.7909 20.5 16 20.5Z"
                    fill="#45474D">
                </path>
            </svg>
        </SvgIcon>
    );
};

export const PlayIcon = () => {
    return (
        <SvgIcon>
            <svg
                width="24"
                height="24"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.2047 13.0311C16.6251 12.7846 16.6251 12.1739 16.2047 11.9274L10.4757 8.56725C10.052 8.31878 9.52002 8.62602 9.52002 9.11914V15.8394C9.52002 16.3325 10.052 16.6397 10.4757 16.3913L16.2047 13.0311ZM10.52 9.75255L15.1691 12.4792L10.52 15.2059V9.75255Z"
                    fill="#45474D">
                </path>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.52002 12.4792C3.52002 7.50869 7.54946 3.47925 12.52 3.47925C17.4906 3.47925 21.52 7.50868 21.52 12.4792C21.52 17.4498 17.4906 21.4792 12.52 21.4792C7.54946 21.4792 3.52002 17.4498 3.52002 12.4792ZM4.52002 12.4792C4.52002 8.06097 8.10174 4.47925 12.52 4.47925C16.9383 4.47925 20.52 8.06097 20.52 12.4792C20.52 16.8975 16.9383 20.4792 12.52 20.4792C8.10174 20.4792 4.52002 16.8975 4.52002 12.4792Z"
                    fill="#45474D">
                </path>
            </svg>
        </SvgIcon>
    );
};

export const CategoryIcon = () => {
    return (
        <SvgIcon>
            <svg
                width="24"
                height="24"
                viewBox="-3 -4 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.86772 1.09399H12.1773C13.1793 1.09399 14 1.8863 14 2.84628V14.7306C14 15.5316 13.4747 16.094 12.7593 16.094C12.4131 16.094 12.0908 15.9579 11.7975 15.7158L8.09161 12.6643C8.08867 12.6619 8.06217 12.6531 8.02796 12.6531C8.0165 12.6531 8.00588 12.6541 7.99667 12.6555L7.96295 12.6651L4.24659 15.7157C3.95542 15.9562 3.61666 16.094 3.27026 16.094C2.87019 16.094 2.49709 15.9072 2.26744 15.5886C2.09267 15.346 2 15.051 2 14.7305V2.84628C2 1.88762 2.86383 1.09399 3.86772 1.09399ZM12.1792 2.2478H3.86955C3.51157 2.2478 3.19531 2.53836 3.19531 2.84624V14.7305C3.19531 14.8188 3.21555 14.8832 3.2485 14.9289C3.25409 14.9367 3.26093 14.9401 3.27209 14.9401C3.31322 14.9401 3.38574 14.9106 3.47462 14.8372L7.19099 11.7866C7.41788 11.5993 7.7208 11.4992 8.0298 11.4992C8.33882 11.4992 8.64138 11.5993 8.86789 11.7864L12.5737 14.8378C12.6668 14.9146 12.7272 14.9401 12.7612 14.9401C12.7887 14.9401 12.8084 14.9191 12.8084 14.7305V2.84624C12.8084 2.5239 12.5224 2.2478 12.1792 2.2478Z"
                    fill="#0C172F">

                </path>
                <path
                    d="M3.64453 5.59389H13.3588"
                    stroke="#0C172F"
                    strokeLinecap="square">
                </path>
            </svg>
        </SvgIcon>
    );
};

export const WalletIcon = () => {
    return (
        <SvgIcon>
            <svg
                width="15"
                height="16"
                viewBox="0 0 15 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            ><path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.17223 4.97276L10.4291 0.945641C10.9254 0.703535 11.5241 0.909674 11.7662 1.40606L13.3414 4.63568C13.5835 5.13207 13.3774 5.73074 12.881 5.97285L4.62416 9.99997C4.12777 10.2421 3.5291 10.0359 3.287 9.53954L1.71181 6.30993C1.4697 5.81354 1.67584 5.21487 2.17223 4.97276Z"
                fill="white"
                stroke="#0C172F">
                </path>
                <path
                    d="M7.93203 7.34624C8.81569 7.34624 9.53203 6.6299 9.53203 5.74624C9.53203 4.86258 8.81569 4.14624 7.93203 4.14624C7.04838 4.14624 6.33203 4.86258 6.33203 5.74624C6.33203 6.6299 7.04838 7.34624 7.93203 7.34624Z"
                    fill="white"
                    stroke="#0C172F">
                </path>
                <path
                    d="M3 5.9729H12.051C12.8794 5.9729 13.551 6.64447 13.551 7.4729V12.795C13.551 13.6235 12.8794 14.295 12.051 14.295H3C2.17157 14.295 1.5 13.6235 1.5 12.795V7.4729C1.5 6.64447 2.17157 5.9729 3 5.9729Z"
                    fill="white"
                    stroke="#0C172F">
                </path>
                <path
                    d="M12.1137 5.23975H2.93725C1.86904 5.23975 1 6.12964 1 7.2235V13.6968C1 14.7906 1.86904 15.6805 2.93725 15.6805H12.1137C13.1819 15.6805 14.051 14.7906 14.051 13.6968V11.5042V9.41606V7.2235C14.051 6.12964 13.1819 5.23975 12.1137 5.23975ZM12.1449 14.7314H2.90604C2.28339 14.7314 1.77684 14.2203 1.77684 13.592V7.17009C1.77684 6.54183 2.28339 6.03071 2.90604 6.03071H12.1449C12.7676 6.03071 13.2741 6.54183 13.2741 7.17009V8.93093H11.0157C10.2233 8.93093 9.57858 9.58146 9.57858 10.381C9.57858 11.1806 10.2233 11.8312 11.0157 11.8312H13.2741V13.592C13.2741 14.2203 12.7676 14.7314 12.1449 14.7314ZM13.2741 11.0929H11.0768C10.7463 11.0929 10.4775 10.8091 10.4775 10.4601C10.4775 10.1112 10.7463 9.82736 11.0768 9.82736H13.2741V11.0929Z"
                    fill="#0C172F"
                    stroke="#0C172F"
                    strokeWidth="0.2">
                </path>
            </svg>
        </SvgIcon>
    );
};

export const RemoveIcon = () => {
    return (
        <SvgIcon sx={{ maskType: 'alpha' }}>
            <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="#FFFFFF"
                xmlns="http://www.w3.org/2000/svg">
                <mask
                    id="mask0_3557_2211"
                    maskUnits="userSpaceOnUse"
                    x="0" y="0"
                    width="24"
                    height="25"
                >
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M18.5 12.5C18.5 12.7761 18.2761 13 18 13L6.5 13C6.22386 13 6 12.7761 6 12.5C6 12.2239 6.22386 12 6.5 12L18 12C18.2761 12 18.5 12.2239 18.5 12.5Z"
                        fill="#FFFFFF">
                    </path>
                </mask>
                <g mask="url(#mask0_3557_2211)">
                    <rect y="0.5" width="24" height="24" fill="#FCFCFD"></rect>
                </g>
            </svg>
        </SvgIcon>
    );
};

export const AddIcon = () => {
    return (
        <SvgIcon sx={{ maskType: 'alpha' }}>
            <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="#FFFFFF"
                xmlns="http://www.w3.org/2000/svg">
                <mask
                    id="mask0_3557_2218"
                    maskUnits="userSpaceOnUse"
                    x="0" y="0"
                    width="24"
                    height="25"
                >
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.75 6.75C12.75 6.47386 12.5261 6.25 12.25 6.25C11.9739 6.25 11.75 6.47386 11.75 6.75V12H6.5C6.22386 12 6 12.2239 6 12.5C6 12.7761 6.22386 13 6.5 13H11.75V18.25C11.75 18.5261 11.9739 18.75 12.25 18.75C12.5261 18.75 12.75 18.5261 12.75 18.25V13H18C18.2761 13 18.5 12.7761 18.5 12.5C18.5 12.2239 18.2761 12 18 12H12.75V6.75Z"
                        fill="#FFFFFF">
                    </path>
                </mask>
                <g mask="url(#mask0_3557_2218)">
                    <rect y="0.5" width="24" height="24" fill="#FCFCFD"></rect>
                </g>
            </svg>
        </SvgIcon>
    );
};

