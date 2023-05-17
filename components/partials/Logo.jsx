import Link from 'next/link';

const Logo = () => {
  return (
    <Link href='/'>
      <a
        href='/'
        className='bg-gray-900 text-white px-3 py-2 font-medium border-b-2 border-white text-xl hover:border-dashed ease-out duration-200'
      >
        sURL
      </a>
    </Link>
  );
};

export default Logo;
