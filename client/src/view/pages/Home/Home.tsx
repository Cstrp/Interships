export const Home = (): JSX.Element => {
  return (
    <div className='w-[1920px] relative overflow-hidden p-0 h-screen'>
      <img
        src='https://external-preview.redd.it/4MddL-315mp40uH18BgGL2-5b6NIPHcDMBSWuN11ynM.jpg?width=960&crop=smart&auto=webp&s=b98d54a43b3dac555df398588a2c791e0f3076d9'
        className='absolute h-full w-full object-cover'
        alt={'bg'}
      />
      <div className='inset-0 bg-black opacity-25 absolute'></div>
      <div className='container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40'>
        <div className='w-full font-mono flex flex-col items-center relative z-10'>
          <h1 className='font-extrabold text-5xl text-center text-white leading-tight mt-4 animate-bounce'>
            You are all alone here
          </h1>
        </div>
      </div>
    </div>
  );
};