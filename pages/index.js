import Head from 'next/head'
import Image from 'next/image'
import { Footer } from '../src/components/Footer'
import { HtmlContent } from '../src/components/HtmlContent'
import { LogoLink } from '../src/components/LogoLink'
import { Menu } from '../src/components/Menu'
import { MenuLink } from '../src/components/MenuLink'
import { Post } from '../src/components/Post'
import { PostCard } from '../src/components/PostCard'
import { PostGrid } from '../src/components/PostGrid'
import { PostTags } from '../src/components/PostTags'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <PostTags />
    </div>
  )
}
