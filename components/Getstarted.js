import Link from 'next/link'
import React from 'react'

function Getstarted() {
  return (
    <div className=" min-h-screen grid bg-white  lg:grid-cols-2 lg:col-rows-1">
            <div className="relative hidden   lg:block after:top-0 after:bottom-0 after:opacity-60 after:left-0 after:right-0  after:absolute after:content-[' ']  after:bg-violet600">
                <img
                    className="absolute inset-0 h-full w-full object-cover"
                    src="./assets/images/Branding&Lifestyle.png"
                    alt="Branding&Lifestyle"
                />
                <img src="./assets/images/Logo.svg" alt="logo" className='absolute z-[1] top-[55px] left-[60px]' />
            </div>
            <div className="flex  flex-col justify-center py-[106px] px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
                <div className="mx-auto w-full ">
                    <div className='max-[991px]:mx-auto max-[991px]:text-center max-[991px]:max-w-auto px-8 max-[991px]:px-0'>
                        <img src="/assets/icons/LogoBlue.svg" className='mx-auto block lg:hidden' />

                        <h2 className="mt-6 text-xl font-semibold tracking-tight text-dark900">Get Started</h2>
                        <p className="mt-2 text-[15px] text-gray800">
                            Let’s get started with any of your preferred account
                        </p>
                    </div>
                    <div className="mt-14">
                        <div className="mt-6">
                            <Link href='/brand/signup'>
                            <div className='rounded-lg cursor-pointer hover:bg-[#FBFAFF] border-[1.5px] hover:border-[1.5px] hover:border-violet600  bg-white py-4 px-[23px] shadow-dark200 flex mb-8 '>
                                <div className='bg-[#F8F4FF] rounded  flex justify-center items-center min-w-[114px] min-h-[109px] w-[114px]'>
                                    <img src='./assets/images/Aboutuspage-amico1.svg'
                                        alt="vactor"
                                    />
                                </div>
                                <div className='ml-5 flex-auto'>
                                    <div className='flex justify-between mb-5'>

                                        <h3 className='text-violet600 text-xl leading-[30px] font-semibold '>Brand/Agency</h3>
                                        <button>
                                            <img src='./assets/icons/right.svg' />
                                        </button>
                                    </div>

                                    <span className='text-gray800 font-medium text-[15px] leading-5.5'>I’m looking to hire influencers for campaigns.</span>
                                </div>
                            </div>
                            </Link>
                            <Link href='/influencer/signup'>
                            
                            <div className='rounded-lg  cursor-pointer hover:bg-[#FBFAFF] border-[1.5px] hover:border-[1.5px] hover:border-violet600  bg-white py-4 px-[23px] shadow-dark200 flex '>
                                <div className='bg-[#F8F4FF] rounded  flex justify-center items-center min-w-[114px] min-h-[109px] w-[114px]'>
                                    <img src='./assets/images/Influencer-amico 2.svg'
                                        alt="vactor"
                                    />
                                </div>
                                <div className='ml-5 flex-auto'>
                                    <div className='flex justify-between mb-5'>

                                        <h3 className='text-violet600 text-xl leading-[30px] font-semibold '>Influencer</h3>
                                        <button>
                                            <img src='./assets/icons/right.svg' />
                                        </button>
                                    </div>

                                    <span className='text-gray800 font-medium text-15 leading-5.5'>I’m looking to hire influencers for campaigns.</span>
                                </div>
                            </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Getstarted