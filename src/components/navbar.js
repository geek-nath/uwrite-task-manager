import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Logo from '../assets/images/Logo.png'
import * as BsIcons from 'react-icons/bs'
import * as AiIcons from 'react-icons/ai'
import { Link } from 'react-router-dom'
import UserAvatarUI from './userAvatar'
import { account } from '../appwriteConfig'
const navigation = [
  { name: 'Home', path: '/', current: true, icon: <BsIcons.BsHouse /> },
  { name: 'About Us', path: '/about_us', current: false, icon: <BsIcons.BsPeople />},
  { name: 'Services', path: '/services', current: false, icon: <BsIcons.BsTools /> },
  { name: 'Articles', path: '/articles', current: false, icon: <BsIcons.BsNewspaper /> },
  { name: 'Faqs', path: '/faq', current: false, icon: <BsIcons.BsHash className='text-base' /> }
]
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const NavbarUI = () => {
  const userIsLoggedIn = localStorage.getItem('isAuth');
  const logUserOut = async () => {
    try {
      await account.deleteSession('current');
      localStorage.removeItem('isAuth');
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Disclosure as="nav" className="bg-white p-1">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img className="block h-8 w-auto lg:hidden" src={Logo} alt="Uwrite Company Logo" />
                  <img className="hidden h-8 w-auto lg:block" src={ Logo } alt="Uwrite Company Logo" />
                </div>
                <div className="hidden sm:mx-auto sm:block">
                  <div className="flex space-x-0 xl:space-x-4 lg:space-x-4">
                    {navigation.map((item) => (
                      <Link key={item.name} to={item.path} className={classNames(item.current ? 'text-gray-900 font-bold underline' : 'text-gray-500 hover:text-gray-900','rounded-md font-semibold flex items-center gap-2 px-3 py-2 text-sm duration-500')} aria-current={item.current ? 'page' :  undefined} >
                        {item.icon} {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              { userIsLoggedIn ? <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button type="button" className="rounded-full text-gray-900 focus:outline-none" >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>
                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-5">
                  <div>
                    <Menu.Button className="flex gap-2 items-center rounded-full outline-none">
                      <UserAvatarUI showNameAndEmail={true} />
                    </Menu.Button>
                  </div>
                  <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95" >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a href="/" className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')} >
                            Dashboard
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a href="/" className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')} >
                            User Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a href="/" className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')} >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button onClick={logUserOut} className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 w-full text-left')}>
                            Sign out
                          </button>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div> : <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <Link to={'/signup'} className='no-underline'>
                  <button className='text-sm font-semibold flex items-center gap-2 leading-6 text-gray-900'>Sign Up <AiIcons.AiOutlineArrowRight /></button>
                </Link>
              </div> }
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Link key={item.name} to={item.path} className={classNames(item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white','block rounded-md px-3 py-2 text-base font-medium flex gap-2 items-center')} aria-current={item.current ? 'page' : undefined}>
                  {item.icon} {item.name}
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
export default NavbarUI;