import Image from 'next/image';
import Link from 'next/link';

const Hero = ({ title, image_url }) => {
  return (
    <main className="w-full pt-16 bg-gradient-to-r from-amber-500 to-pink-500">
      <div className="flex md:flex-row flex-col-reverse container max-w-7xl mx-auto md:py-20 py-10">
        <div className="md:w-1/2 flex justify-center flex-col align-middle md:px-3 px-1">
          <h1 className="md:text-5xl md:text-start text-center text-3xl my-5 uppercase text-black">
            {title}
          </h1>
          <p className="mb-5 md:text-start text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, fuga
            in vel natus odio quaerat cum molestias dolores nam voluptatum?
          </p>
          <Link href="/movie" className="">
            <button className="bg-white mx-auto hover:bg-black transition-all  text-black hover:text-white py-2 px-4 rounded-full">
              Explore Movies
            </button>
          </Link>
        </div>
        <div className="md:w-1/2 py-10 flex justify-center align-middle">
          <Image src={image_url} alt="" width={300} height={300} />
        </div>
      </div>
    </main>
  );
};

export default Hero;
