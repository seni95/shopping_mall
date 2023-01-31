import React, { useState } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import Button from '../components/UI/Button';
import { useAuthContext } from './context/AuthContext'

export default function ProductDetail() {
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

    }
    return (<section className='pt-[250px]'>
        <p>{category}</p>
        <img src={image} alt={title} />
        <div>
            <h2>{title}</h2>
            <p>￦{price}</p>
            <p>{description}</p>
            <p>Option:</p>
            <select
            value={selected}
            name="" id="" onChange={handleSelect}>
                {option && option.map((option,index)=><option key={index}>{option}</option>)}
            </select>
        <Button text="장바구니에 추가" onClick={handleClick}></Button>
        </div>
    </section>);
}
