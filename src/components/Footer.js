import Image from "next/image";
import Link from "next/link";
import React from "react";
import Container from "./Container";

const Footer = () => {
  return (
    <footer className="text-gray-600">
      <Container className="flex flex-col items-center px-5 py-8 sm:flex-row">
        <Link
          href="/"
          className="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start"
        >
          <Image
            src="/logos/brand.png"
            alt="brand logo"
            width={50}
            height={50}
          />
        </Link>
        <p className="mt-4 text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0">
          © 2023 Femlove by Franzi
        </p>
        <span className="inline-flex justify-center mt-4 sm:ml-auto sm:mt-0 sm:justify-start">
          <a
            aria-label="Link to instagram account of femlove"
            href={"https://www.instagram.com/femlovebyfranzi/"}
            target="_blank"
            rel="noreferrer"
            className="ml-3 text-gray-700"
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
          <a
            aria-label="Link to pinterest account of femlove"
            href={"https://www.pinterest.de/femlovebyfranzi/"}
            target="_blank"
            rel="noreferrer"
            className="ml-3 text-gray-700"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 176 208"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.9"
                d="M176 87.9996C176 110.6 168.1 131.2 153.8 146.1C139.5 161 122.2 168 104 168C85.8 168 74.2 162.1 66.6 156L55.8 201.8C55.3767 203.554 54.3792 205.118 52.9661 206.241C51.553 207.364 49.8051 207.983 48 208L46.2 207.8C45.1754 207.564 44.2073 207.128 43.351 206.518C42.4948 205.908 41.7673 205.135 41.21 204.243C40.6528 203.352 40.2768 202.359 40.1034 201.322C39.9301 200.285 39.963 199.224 40.2 198.2L72.2 62.1996C72.6774 60.1309 73.957 58.3366 75.7574 57.2114C77.5577 56.0862 79.7313 55.7222 81.8 56.1996C83.8687 56.677 85.663 57.9567 86.7882 59.757C87.9135 61.5574 88.2774 63.731 87.8 65.7996L70.9 137.6C74 142 83.3 152 104 152C131.5 152 160 128.1 160 87.9996C160 76.7518 157.365 65.6604 152.305 55.6146C147.246 45.5688 139.903 36.848 130.866 30.1514C121.829 23.4548 111.349 18.9687 100.265 17.0526C89.1817 15.1366 77.8035 15.8439 67.0426 19.1178C56.2818 22.3918 46.4376 28.1414 38.2994 35.9057C30.1612 43.6699 23.9552 53.2329 20.1789 63.8279C16.4027 74.423 15.1613 85.7554 16.5542 96.9166C17.9472 108.078 21.9357 118.758 28.2 128.1C28.7846 128.973 29.1914 129.953 29.3972 130.983C29.6031 132.014 29.6038 133.075 29.3995 134.105C29.1952 135.136 28.7899 136.117 28.2066 136.991C27.6233 137.865 26.8735 138.615 26 139.2C25.1312 139.797 24.1514 140.215 23.1185 140.428C22.0857 140.642 21.0205 140.646 19.986 140.441C18.9515 140.236 17.9685 139.826 17.095 139.235C16.2215 138.644 15.4752 137.884 14.9 137C7.24678 125.581 2.37506 112.528 0.67533 98.887C-1.0244 85.2462 0.495148 71.3968 5.11217 58.4491C9.72918 45.5013 17.3153 33.8152 27.2624 24.3275C37.2095 14.8398 49.2409 7.81427 62.3923 3.81414C75.5438 -0.185994 89.4495 -1.04951 102.995 1.29279C116.54 3.6351 129.348 9.11808 140.393 17.3023C151.437 25.4864 160.411 36.1442 166.594 48.4213C172.778 60.6984 175.999 74.2533 176 87.9996Z"
                fill="currentColor"
              />
            </svg>
          </a>
        </span>
      </Container>
    </footer>
  );
};

export default Footer;
