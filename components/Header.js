import { useState } from "react";
import { MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Logo from "../assets/images/logo.png";
import Square3x3 from "../assets/images/square3x3.svg";
import Learning from "../assets/images/LearningIcon.svg";

import Home from "../assets/images/Home.svg";
import HomeActive from "../assets/images/HomeActive.svg";

import Profile from "../assets/images/Profile.svg";
import ProfileActive from "../assets/images/ProfileActive.svg";

import OffersActive from "../assets/images/Offers.svg";
import Offers from "../assets/images/OffersActive.svg";

import Message from "../assets/images/Message.svg";
import MessageActive from "../assets/images/MessageActive.svg";

import Notifications from "../assets/images/Notifications.svg";
import NotificationsActive from "../assets/images/NotificationsActive.svg";

const Header = () => {
  const [isActive, setIsActive] = useState({
    isHomeActive: true,
    isProfileActive: false,
    isOffersActive: false,
    isOffersActive: false,
    isMessageActive: false,
    isNotificationActive: false,
  });

  return (
    <header className=' py-1 px-4  fixed top-0 w-full bg-white z-50'>
      <div className='flex items-center justify-between max-w-6xl mx-auto'>
        <div className='md:w-[40%] flex items-center space-x-2 '>
          <div className='relative h-[34px] w-[34px] cursor-default'>
            <Image src={Logo} layout='fill' objectFit='contain' alt='' />
          </div>

          <div className='flex items-center  md:bg-[#EEF3F8] h-[34px] rounded lg:w-[60%] focus-within:border-[2px] focus-within:border-blue-700 focus-within:w-[80%] transition-all duration-200 ease-out'>
            <MagnifyingGlassIcon className='h-5 pl-4 pr-6 md:pr-2' />
            <input
              type='text'
              placeholder='Recherche'
              className='hidden bg-transparent md:inline-flex placeholder:font-light h-full w-full border-none outline-none'
            />
          </div>
        </div>
        <div className='flex-1 flex justify-around text-xs'>
          <div className='group flex flex-col justify-center items-center cursor-pointer'>
            <Home
              className={
                !isActive.isHomeActive
                  ? "h-6 text-gray-600 group-hover:text-[#1A1A1A] transition-colors duration-200 ease-out"
                  : "hidden"
              }
              onClick={() => {
                setIsActive({
                  isHomeActive: true,
                  isProfileActive: false,
                  isOffersActive: false,
                  isMessageActive: false,
                  isNotificationActive: false,
                });
              }}
            />

            <HomeActive
              className={
                isActive.isHomeActive
                  ? " h-6 text-[#1A1A1A] transition-colors duration-200 ease-out "
                  : "hidden"
              }
            />

            <span className='hidden lg:inline-flex group-hover:text-[#1A1A1A] transition-colors duration-200 ease-out'>
              Accueil
            </span>
          </div>
          <div className='group flex flex-col justify-center items-center cursor-pointer'>
            <Profile
              className={
                !isActive.isProfileActive
                  ? "h-6 text-gray-600 group-hover:text-[#1A1A1A] transition-colors duration-200 ease-out "
                  : "hidden"
              }
              onClick={() => {
                setIsActive({
                  isHomeActive: false,
                  isProfileActive: true,
                  isOffersActive: false,
                  isMessageActive: false,
                  isNotificationActive: false,
                });
              }}
            />
            <ProfileActive
              className={isActive.isProfileActive ? "text-[#1A1A1A]" : "hidden"}
            />
            <span className='hidden lg:inline-flex group-hover:text-[#1A1A1A] transition-colors duration-200 ease-out'>
              Réseau
            </span>
          </div>
          <div className='group flex flex-col justify-center items-center cursor-pointer'>
            <Offers
              className={
                !isActive.isOffersActive
                  ? "h-6 text-gray-600 group-hover:text-[#1A1A1A] transition-colors duration-200 ease-out "
                  : "hidden"
              }
              onClick={() => {
                setIsActive({
                  isHomeActive: false,
                  isProfileActive: false,
                  isOffersActive: true,
                  isMessageActive: false,
                  isNotificationActive: false,
                });
              }}
            />
            <OffersActive
              className={
                isActive.isOffersActive ? "h-6 text-[#1A1A1A]" : "hidden"
              }
            />
            <span className='hidden lg:inline-flex group-hover:text-[#1A1A1A] transition-colors duration-200 ease-out'>
              Offres d'emploi
            </span>
          </div>
          <div className='group flex flex-col justify-center items-center cursor-pointer'>
            <Message
              className={
                !isActive.isMessageActive
                  ? "h-6 text-gray-600 group-hover:text-[#1A1A1A] transition-colors duration-200 ease-out "
                  : "hidden"
              }
              onClick={() => {
                setIsActive({
                  isHomeActive: false,
                  isProfileActive: false,
                  isOffersActive: false,
                  isMessageActive: true,
                  isNotificationActive: false,
                });
              }}
            />
            <MessageActive
              className={
                isActive.isMessageActive ? "h-6text-[#1A1A1A]" : "hidden"
              }
            />
            <span className='hidden lg:inline-flex group-hover:text-[#1A1A1A] transition-colors duration-200 ease-out'>
              Messagerie
            </span>
          </div>
          <div className='group flex flex-col justify-center items-center cursor-pointer'>
            <Notifications
              className={
                !isActive.isNotificationActive
                  ? "h-6 text-gray-600 group-hover:text-[#1A1A1A] transition-colors duration-200 ease-out "
                  : "hidden"
              }
              onClick={() => {
                setIsActive({
                  isHomeActive: false,
                  isProfileActive: false,
                  isOffersActive: false,
                  isMessageActive: false,
                  isNotificationActive: true,
                });
              }}
            />
            <NotificationsActive
              className={
                isActive.isNotificationActive ? "h-6 text-[#1A1A1A]" : "hidden"
              }
            />
            <span className='hidden lg:inline-flex group-hover:text-[#1A1A1A] transition-colors duration-200 ease-out'>
              Notifications
            </span>
          </div>
          <div className='group flex flex-col justify-center items-center cursor-pointer'>
            <UserCircleIcon className='h-6 text-gray-600 group-hover:text-[#1A1A1A] transition-colors duration-200 ease-out ' />
            <span className='hidden lg:inline-flex group-hover:text-[#1A1A1A] transition-colors duration-200 ease-out'>
              Vous
            </span>
          </div>
          <div className='group flex flex-col justify-center items-center cursor-pointer'>
            <Square3x3 className='h-6 text-gray-600 group-hover:text-[#1A1A1A] transition-colors duration-200 ease-out ' />
            <span className='hidden lg:inline-flex group-hover:text-[#1A1A1A] transition-colors duration-200 ease-out'>
              Produits
            </span>
          </div>
          <div className='group flex flex-col justify-center items-center cursor-pointer'>
            <Learning className='h-6 text-gray-600 group-hover:text-[#1A1A1A] transition-colors duration-200 ease-out ' />
            <span className='hidden lg:inline-flex group-hover:text-[#1A1A1A] transition-colors duration-200 ease-out'>
              LinkedIn Learning
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
