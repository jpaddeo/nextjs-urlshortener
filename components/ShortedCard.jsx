import { CopyIcon, LinkIcon } from '@/components/icons';

export default function ShortedCard({ origin, shorted, clicks }) {
  const handleCopyLink = (event, shorted) => {
    event.preventDefault();
    navigator.clipboard.writeText(shorted);
  };

  return (
    <div className='flex items-center justify-center mx-auto mt-4 animate-shake animate-twice'>
      <div className='flex flex-col lg:flex-row items-center justify-between gap-2 w-3/4 p-4 rounded-lg bg-gray-200 shadow-lg'>
        <span className='text-gray-500 font-semibold flex-shrink'>
          {origin}
        </span>
        <div className='flex flex-col md:flex-row gap-2 items-center justify-center'>
          <span className='font-bold text-blue-500'>{shorted}</span>
          <div className='flex items-center justify-center gap-2'>
            <button
              onClick={(event) => handleCopyLink(event, shorted)}
              className='border-2 border-blue-500 hover:border-dashed rounded-xl p-1 text-blue-500 font-medium'
            >
              <span className='flex items-center justify-center gap-1'>
                <CopyIcon />
              </span>
            </button>
            <a
              href={shorted}
              target='_blank'
              rel='noopener noreferrer'
              className='border-2 border-blue-500 hover:border-dashed rounded-xl p-1 text-blue-500 font-medium'
            >
              <LinkIcon />
            </a>
          </div>
          <span
            className={`text-sm font-bold text-gray-800 ${clicks >= 5 ? 'bg-green-500' : clicks >= 3 ? 'bg-green-300' : 'bg-green-100'} inline-flex items-center p-1.5 rounded`}
          >
            {clicks}
          </span>
        </div>
      </div>
    </div>
  );
}
