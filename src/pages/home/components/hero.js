import React from 'react'
import ButtonComponentUI from '../../../components/button'
import ManImg from '../../../assets/images/user_img.png'
import * as BsIcons from 'react-icons/bs'

const HeroComponentUI = () => {
  return (
    <>
      <section className='sm:h-screen w-full flex items-center overflow-hidden'>
        <div className='mx-auto w-full max-w-7xl px-2 sm:px-6 lg:px-8'>
          <div className='flex flex-row gap-3 w-full'>
            <div className='basis-1/2 h-full mt-24'>
              <h3 className='text-indigo-500 font-semibold text-2xl'>Welcome to Uwrite</h3>
              <h1 className='text-gray-700 xl:text-6xl lg:text-6xl md:text-4xl mt-5 font-bold'>
                Giving the social experience.
              </h1>
              <p className='mt-5 text-gray-400 text-lg'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
              <div className='mt-5'>
                <ButtonComponentUI text={'Discover More'} />
              </div>
            </div>
            <div className='basis-1/2 h-full w-full relative text-center'>
              <div className='bg-white p-1.5 ring-1 ring-gray-300 rounded-full shadow flex absolute right-0 gap-2'>
                <div className='h-10 w-10 bg-indigo-500 text-xl text-white rounded-full flex justify-center items-center'>
                  <BsIcons.BsPeopleFill />
                </div>
                <div className='flex items-center'>
                  <div className='text-left'>
                    <h1 className='text-indigo-500 leading-3 text-lg font-semibold'>5000+</h1>
                    <h5 className='text-gray-700 text-sm'>Worldwide Users</h5>
                  </div>
                </div>
              </div>
              <div className='absolute bottom-0 h-full'>
                <img src={ManImg} width={'100%'} alt='Man pic' />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HeroComponentUI