import Link from 'next/link'
import { useRouter } from 'next/router';
import React from 'react'

const navigation = [
  { name: 'Dashboard', href: '/brand/dashboard', icon1: '/assets/icons/Home.svg', icon2: '/assets/icons/Dashboard.svg' },
  { name: 'Trend', href: '/brand/trend', icon1:"/assets/icons/trand-dark.svg" ,  icon2: '/assets/icons/grow.svg' },
  { name: 'Campaigns', href: '/brand/campaigns', icon2: '/assets/icons/speal-footer.svg', icon1: '/assets/icons/speak-blue.svg' },
  { name: 'Influencers', href: '/brand/influencersearch', icon1:"/assets/icons/people-blue.svg" , icon2: '/assets/icons/people-dark.svg' },
  { name: 'Wallet', href: '/brand/wallet', icon1:'/assets/icons/wallet-blue.svg' , icon2: '/assets/icons/walletside.svg' },
  { name: 'Message', href: '/brand/massage',icon1:"/assets/icons/ma-blue.svg" , icon2: '/assets/icons/massage-dark.svg' },
]

const  Footer= () => {
  const router = useRouter();

  return (
    <div className='bg-[#FAF9FD] flex h-[72px] w-full '>
        <div className='p-[22px] flex justify-between w-full'>
       {navigation.map((item ) => (
            <Link key={item.name} href={item.href}>
               <img src={
                      router.asPath === item.href ? item.icon1 : item.icon2
                    } className="w-[29px] h-[29px] "/>
            </Link>
            ))}
        </div>

    </div>
  )
}

export default Footer