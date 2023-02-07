import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import React from 'react'
import { addOrUpdateToCart, getCart, removeFromCart } from '../../api/firebase';
import { useAuthContext } from '../../pages/context/AuthContext'

export default function useCarts() {
 
const {uid} = useAuthContext();
const queryClient = useQueryClient();
const cartQuery = useQuery(['carts',uid||''],()=>getCart(uid),{
    enabled:!!uid,
})

const addOrUpdateItem = useMutation((product)=>addOrUpdateToCart(uid,product),{
    onSuccess:()=>{
        queryClient.invalidateQueries(['carts',uid]);
    }
})

const removeItem = useMutation((id)=>removeFromCart(uid,id),{
    onSuccess:()=>{
        queryClient.invalidateQueries(['carts',uid]);
    }
});

return {cartQuery,addOrUpdateItem,removeItem};

}
