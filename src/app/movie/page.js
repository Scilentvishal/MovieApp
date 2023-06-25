import Hero from '@/components/Hero'
import MovieCard from '@/components/MovieCard';
async function movieList() {
    const url = process.env.RAPID_KEY;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '832ca9f869mshc60b0c3098da3c3p117d93jsne1ed1763d6c9',
            'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
        }
    };

    const res = await fetch(url, options);
    const data = await res.json();
    return data.titles
    // const main_data = data.titles;

}
export default async function Page() {
    let movies = await movieList();

    const ele = movies.map((element, index) => (
        <>
            <MovieCard key={index} title={element.jawSummary.title} bg={element.jawSummary.backgroundImage.url} synopsis={element.jawSummary.synopsis} id={element.jawSummary.id} />
        </>
    ));
    return (
        <>
            <Hero title="Let's Explore Movies" image_url="/staticweb.png" />
            <div className='container max-w-7xl mx-auto py-11 box-border'>
                <div class="flex flex-wrap box-border ">
                    {ele}
                </div>
            </div>
        </>
    )
}