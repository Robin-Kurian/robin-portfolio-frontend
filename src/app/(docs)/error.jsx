"use client";

const DocsErrorPage = ({ error, reset }) => {
  return (
    <div className='flex items-center justify-center text-white'>
      <div className='text-center'>
        <h2 className='text-2xl font-semibold'>An error occurred</h2>
        <button
          className='mt-3 bg-white/20 text-sm px-2 py-1 rounded-md'
          onClick={reset}
        >
          Retry
        </button>
      </div>
    </div>
  );
};

export default DocsErrorPage;
