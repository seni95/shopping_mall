import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import useCarts from '../components/hooks/useCarts';
import Button from '../components/UI/Button';

export default function ProductDetail() {
    const {addOrUpdateItem} = useCarts();
    const {
        state:{
            product:{id,image,title,description,category,price,option}
        }
    }= useLocation();
    const [selected, setSelected] = useState(option && option[0]);

    const [success , setSuccess] = useState();

    const handleSelect = e=>{
        setSelected(e.target.value);
    }
    const handleClick = e=>{
        const product = {id,image,title,price,option:selected,quantity:1};
        addOrUpdateItem.mutate(product,{
            onSuccess:()=>{
                setSuccess('장바구니에 추가되었습니다.');
                setTimeout(()=>setSuccess(null),3000);
            }
        });
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
            name="" onChange={handleSelect}>
                {option && option.map((option,index)=><option key={index}>{option}</option>)}
            </select>
            </div>
            {success && <p className='my-4 text-center'>{success}</p>}
        <Button text="장바구니에 추가" onClick={handleClick}></Button>
        </div>
        </section>
    </section>);
}
