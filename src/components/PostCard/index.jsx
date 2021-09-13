import { Heading } from '@styled-icons/boxicons-regular'
import Image from 'next/image'
import mock from './mock'

export function PostCard({slug, cover, excerpt, title}){
    return(
        <>
            <a href={`/post/${slug}`}>
                <div className="relative w-full h-60">
                    <Image layout="fill" src={cover.url} alt="teste" />
                </div>
            </a>
            <a href={`/post/${slug}`}>
                <h1 className="py-3 text-3xl font-bold hover:text-red-600">{title}</h1>
            </a>
            <p>{excerpt}</p>
        </>
    )
}