export default function NewsDetails({params}) {
    const newsId = params.newsId;
    return (
        <>
            <h1>The details of the news "{newsId}" are as follows </h1>
            <p>newsID : {newsId}</p>
        </>
        
    )
}