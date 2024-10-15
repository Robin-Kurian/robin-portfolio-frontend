const Highlight = ({ children }) => {
  return (
    <span className='px-2 py-1 mr-2 bg-black/20 text-black/50 dark:bg-white/20 dark:text-white/50 rounded-lg'>
      {children}
    </span>
  );
};

export default Highlight;
