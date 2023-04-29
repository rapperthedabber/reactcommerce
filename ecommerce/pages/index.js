import Image from 'next/image'
import Nav from '../components/nav'
import Jacket from '@/components/Jacket'
import Shoes from '../components/Shoes'
import { Inter } from 'next/font/google'
import Layout from '../components/Layout'


import { useSession, signIn, signOut } from "next-auth/react"

export default function Home() {
  return(
<Layout />
  )
}
