import {useQuery,useMutation,useQueryClient} from '@tanstack/react-query'
import { addNewProduct, getProducts as fetchProducts } from '../../api/firebase';

export default function useProducts(kind){
    const queryClient = useQueryClient();
    const getProducts = useQuery(['products'],()=>fetchProducts(kind),{keepPreviousData:false});

    const addProduct = useMutation(({product,url})=>addNewProduct(product,url),
    {
        onSuccess:()=>queryClient.invalidateQueries(['products'])
    });


    return {getProducts,addProduct};

}