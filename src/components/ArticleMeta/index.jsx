// const formatDate = () => {
//     const date = new Date();
//     return date.toLocaleString('pt-BR', {
//     });
//   };

export function ArticleMeta({author, categories}){
    return(
        <div className="divide-y divide-gray-400 main-container">
            <p className="text-gray-500">
                <span>Por </span>
                <a className="font-bold text-gray-600" href={`/author/${author.slug}`}>{author.displayName}</a>
                <span> | </span>
                {/* <time dateTime={createdAt}>{formatDate(createdAt)}</time> */}
                {/* <span> | </span> */}
                    {categories.map(category => {
                        return(
                            <span key={`article-meta-cat${category.id}`}>
                                <a className="text-purple-900" href={`/category/${category.slug}`}>{`${category.displayName} | `}</a>
                            </span>
                        )
                    })}
            </p>
            <div className="my-8"></div>
        </div>
    )
}