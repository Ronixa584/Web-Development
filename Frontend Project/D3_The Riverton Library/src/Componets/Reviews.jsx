import React from 'react'

export const Reviews = () => {
  return (
    <section class="bg-white bg-gradient-to-br from-amber-100 via-amber-200 to-yellow-100">
  <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div class="mx-auto max-w-lg text-center">
      <h2 class="text-3xl font-bold sm:text-4xl">About the Libraries</h2>
    </div>

    <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 lg:gap-24">
<ReviewTemplate ImgSrc='bg4.png' text='Digital campaigns'  />
<ReviewTemplate ImgSrc='bg1.jpg' text='Mission and Strategy'  />
<ReviewTemplate ImgSrc='bg2.jpg' text='iSkills workshop'  />
<ReviewTemplate ImgSrc='bg3.jpg' text='Work with us'  />
{/* <ReviewTemplate ImgSrc='bg0.jpg' text='Past exam papers'  />
<ReviewTemplate ImgSrc='bg0.jpg' text='Work with us'  />
<ReviewTemplate ImgSrc='bg0.jpg' text='Help'  /> */}
    </div>

  </div>
</section>
  )
}


const ReviewTemplate = ({ImgSrc,text}) => {
    return(
      <div class="block rounded-xl hover:shadow-[0px_10px_24px_10px_#ed8936]">
  <h2 class="top-4 left-4 text-3xl text-amber-black font-extrabold">{text}</h2>
  <img src={ImgSrc} alt='Card Image' className='object-cover w-full h-[300px] rounded-md' />
</div>
    );
};


