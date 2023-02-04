import React from 'react'
import useScrollFadeIn from './hooks/useScrollFadeIn'

export default function Introduction() {
 const picAni = useScrollFadeIn('down',1,0);
 const useText = useScrollFadeIn('up',1,0);
    return (
    <div className='flex my-20 max-sm:hidden'>
        <img
        className='ml-20 w-1/2 rounded-full'
        {...picAni}
        src="https://images.unsplash.com/photo-1577909687863-91bb3ec12db5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80" alt="" />        
        <div className='flex flex-col justify-center mx-20'
        {...useText}
        >
        <h2 className='text-2xl'>For Grace Woman</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ratione doloremque eius officiis, sequi laboriosam repudiandae corrupti officia repellendus quibusdam qui placeat impedit, aut exercitationem similique? Sequi perspiciatis hic blanditiis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis sit officiis natus est labore, earum ipsum, accusantium enim assumenda reiciendis maiores, beatae aliquid fugiat temporibus quidem odio quia asperiores repellat.</p>
        </div>
    </div>
  )
}
