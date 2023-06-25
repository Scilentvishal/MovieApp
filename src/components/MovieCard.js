import Image from 'next/image';
import Link from 'next/link';
export default function MovieCard({ id, title, synopsis, bg }) {
    return (
        <>
            <div className="p-4 md:w-1/3 sm:w-1/2">
                <div className="h-full shadow-[0px_0px_8px_0px_#718096] rounded-lg overflow-hidden">
                    <Image src={bg} alt={title} className="lg:h-48 md:h-36 w-full object-cover object-center" width={400} height={300} />
                    <div className="p-6">
                        {/* <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2> */}
                        <h2 className="title-font text-lg font-medium text-gray-600 mb-3">{title}</h2>
                        <p className="leading-relaxed mb-3">{synopsis}</p>
                        <div className="flex items-center flex-wrap ">
                            <Link href={`/movie/${id}`} className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                                Read More
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

