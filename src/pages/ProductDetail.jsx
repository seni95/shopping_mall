import React, { useState } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { addOrUpdateToCart } from '../api/firebase';
import Button from '../components/UI/Button';
import { useAuthContext } from './context/AuthContext'

export default function ProductDetail() {
    const {user :{uid}} = useAuthContext();
    const {
        state:{
            product:{id,image,title,description,category,price,option}
        }
    }= useLocation();
    const [selected, setSelected] = useState(option && option[0]);

    const handleSelect = e=>{
        setSelected(e.target.value);
    }
    const handleClick = e=>{
        const product = {id,image,title,price,option:selected,quantity:1};
        addOrUpdateToCart(uid,product);
    }
    return (<section className='pt-[250px]'>
        <p className='mx-12 mt-4 text-gray-700'>{category}</p>
        <section
        className='flex flex-col justify-center md:flex-row p-4'
        >
        <img 
        className='px-4 basis-5/12'
        src={image} alt={title} />
        <div className='w-full basis-5/12 flex flex-col p-4'>
            <h2
            className='text-3xl font-bold py-2 border-b border-gray-400'
            >{title}</h2>
            <p className='text-2xl font-bold py-2'>￦{price}</p>
            <p className='py-4 text-lg '>{description}</p>
            <div className='flex items-center'>
            <label htmlFor='select'
            className='text-brand font-bold'
            >Option:</label>
            <select id="select"
            className='p-2 m-4 border-2 border-dashed border-brand outline-none bg-black text-white'
            value={selected}
            name="" id="" onChange={handleSelect}>
                {option && option.map((option,index)=><option key={index}>{option}</option>)}
            </select>
            </div>
        <Button text="장바구니에 추가" onClick={handleClick}></Button>
        </div>
        </section>
    </section>);
}
