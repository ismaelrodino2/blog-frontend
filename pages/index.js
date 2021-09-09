import Head from 'next/head'
import Image from 'next/image'
import { Footer } from '../src/components/Footer'
import { HtmlContent } from '../src/components/HtmlContent'
import { LogoLink } from '../src/components/LogoLink'
import { MenuLink } from '../src/components/MenuLink'
import { Post } from '../src/components/Post'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <MenuLink />
      <LogoLink />
      <Post />
      <Footer />
    </div>
  )
}
