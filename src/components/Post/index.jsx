import { ArticleHeader } from "../ArticleHeader"
import { HtmlContent } from "../HtmlContent"
import mock from "./mock"

export function Post(){
    return(
        <div>
            <ArticleHeader 
                author={mock.author}
                categories={mock.categories}
                title={mock.title}
                excerpt={mock.excerpt}
                id={mock.id}
                cover={mock.cover}
                createdAt={mock.createdAt}
            />
            <HtmlContent html={mock.content}/>
        </div>
    )
}