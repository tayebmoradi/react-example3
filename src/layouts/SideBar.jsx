import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {
  FolderIcon,
  ServerIcon,
  XMarkIcon,
  RocketLaunchIcon,
} from '@heroicons/react/24/outline'
import { useDispatch, useSelector } from 'react-redux'
import { toggleSideBarMenu } from "../store/slices/sidebarMenuSlice"
import { NavLink } from 'react-router-dom'

const navigation = [
  { name: 'Dashboard', href: '/', icon: FolderIcon, current: true },
  { name: 'Manage Articles', href: '/articles', icon: ServerIcon, current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const classLink = ({ isActive, isPending }) =>
    isActive
    ? 'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold w-full block bg-gray-800 text-white'
    : isPending
    ? "pending"
    : 'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold w-full block text-gray-600 hover:text-white hover:bg-gray-800'

 
                                            

export default function SideBar() {
    
    const sideBarMenu = useSelector((state) => state.sideBarMenu.value)
    const dispatch = useDispatch()

    return (
        <>
            {/* Static sidebar for Mobile */}
            <div className={`inset-0 bg-gray-900/80 xl:hidden ${!sideBarMenu ? 'fixed' : 'hidden'}`}/>
            <div className={`inset-0 flex xl:hidden ${!sideBarMenu ? 'fixed' : 'hidden'}`}>
                <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                    <button type="button" className="-m-2.5 p-2.5" onClick={() => dispatch(toggleSideBarMenu())}>
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                    </button>
                </div>    
                <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 ring-1 ring-white/10">
                    <div className="flex h-16 shrink-0 items-center mt-12">
                    <h1 className='text-white'>Admin Panel</h1>
                    </div>
                    <nav className="flex flex-1 flex-col">
                        <ul role="list" className="flex flex-1 flex-col gap-y-7">
                            <li>
                                <ul role="list" className="-mx-2 space-y-1">
                                    {navigation.map((item) => (
                                    <li key={item.name}>
                                        <a
                                        href={item.href}
                                        className={classNames(
                                            item.current
                                            ? 'bg-gray-800 text-white'
                                            : 'text-gray-400 hover:text-white hover:bg-gray-800',
                                            'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                        )}
                                        >
                                        <item.icon className="h-6 w-6 shrink-0" aria-hidden="true" />
                                        {item.name}
                                        </a>
                                    </li>
                                    ))}
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        
            {/* Static sidebar for desktop */}
            <div className={`hidden xl:fixed xl:inset-y-0 xl:z-50 xl:flex xl:flex-col ${sideBarMenu ? 'xl:w-72' : 'xl:w-18'}`}>
                <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-black/10 px-6 ring-1 ring-white/5">
                    <div className="flex h-16 shrink-0 items-center">
                    {
                        sideBarMenu 
                        ?
                        <div className='flex w-full'>
                            <RocketLaunchIcon width={"30px"} />
                            <h1 className='font-bold w-full'>Admin Panel</h1>
                        </div>
                        :
                        <RocketLaunchIcon />
                    }
                    
                    </div>
                    <nav className="flex flex-1 flex-col">
                    <ul role="list" className="flex flex-1 flex-col gap-y-7">
                        <li>
                        <ul role="list" className="-mx-2 space-y-1 ">
                            {navigation.map((item) => (
                                <li key={item.name} >
                                    <NavLink 
                                        to={item.href} 
                                        className={classLink}  
                                    >
                                        <item.icon className="h-6 w-6 shrink-0" aria-hidden="true" />
                                        {sideBarMenu ? item.name : ''}
                                    </NavLink>
                                    
                                </li>
                            ))}
                        </ul>
                        </li>
                    </ul>
                    </nav>
                </div>
            </div>
        </>
    )
}