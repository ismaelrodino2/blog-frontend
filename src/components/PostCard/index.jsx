import Image from 'next/image'
import mock from './mock'

export function PostCard({
}){
    return(
        <>
            <div className="relative w-44 h-44">
                <Image layout="fill" src={mock.cover.url} alt="teste" />
            </div>
        </>
    )
}