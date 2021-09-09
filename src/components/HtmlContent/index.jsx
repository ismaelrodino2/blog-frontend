import './styles.module.css'

export const HtmlContent = (props) =>{
    return(
        <div className="flex justify-center">
            <div className="main-container">
                <div dangerouslySetInnerHTML={{__html: props.html}} />
            </div>
        </div>
    )
}