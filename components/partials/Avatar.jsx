import Image from 'next/image';

export default function Avatar({ user }) {
  return (
    <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:pr-0'>
      <div className='relative ml-3'>
        <button
          type='button'
          className='flex h-8 w-8 rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'
          aria-expanded='false'
          aria-haspopup='true'
        >
          <Image
            src={user?.picture}
            className='rounded-full'
            alt={user?.email}
            layout='fill'
            priority
          />
        </button>
      </div>
    </div>
  );
}
