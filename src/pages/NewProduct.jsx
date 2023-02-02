import { QueryClient, useMutation, useQueryClient } from '@tanstack/react-query';
import React, { useState } from 'react'
import { addNewProduct } from '../api/firebase';
import { uploadImage } from '../api/uploader';
import Button from '../components/UI/Button';

export default function NewProduct() {
  const [product, setProduct] = useState({});
  const [file,setFile]=useState();
  const [isUploading,setIsUploading] = useState(false);
  const [success,setSuccess] = useState();
  const queryClient = useQueryClient();
  const addProduct = useMutation((product,url)=>{addNewProduct(product,url)},
  {onSuccess:()=> queryClient.invalidateQueries(['products'])}
  );


  const handleChange=(e)=>{
    const {name,value,files} =  e.target;
    if(name==='file'){
      setFile(files && files[0]);
      return;
    }
    setProduct((product)=>({...product,[name]:value}));

  };
  const handleSubmit=(e)=>{
    e.preventDefault();
    setIsUploading(true);
    uploadImage(file).then(url=>{

      addProduct.mutate({product,url},{onSuccess:()=>{
        setSuccess('성공적으로 제품이 추가되었습니다.');
          setTimeout(()=>
          setSuccess(null),4000)
      }})
      // addNewProduct(product,url)//
      // .then(()=>{
      // 
      // })
    })
    .finally(()=>setIsUploading(false));
  };
  return (
    <section className='w-full text-center pt-[250px]'>
      <h2 className='text-2xl font-bold my-4 font-mono'>새로운 제품 등록</h2>
      {success && <p className='my-2'>{success}</p>}
      <form className='flex flex-col px-12'>
        {file && 
        <img className='w-96 mx-auto mb-2' src={URL.createObjectURL(file)} alt='local file'></img>
        }
      <input type="file" accept='image/*' name="file" required onChange={handleChange}></input>
      <input type="text" name="title" value={product.title ?? ''} placeholder="제품명" required onChange={handleChange}></input>
      <input type="number" name="price" value={product.price?? ''} placeholder="가격" required onChange={handleChange}></input>
      <input type="text" name="category" value={product.category?? ''} placeholder="카테고리" required onChange={handleChange}></input>
      <input type="text" name="description" value={product.description?? ''} placeholder="상품 설명" required onChange={handleChange}></input>
      <input type="text" name="option" value={product.option?? ''} placeholder="옵션들 (콤마(,)로 구분)" required onChange={handleChange}></input>
      <Button onClick={handleSubmit} text={isUploading?'업로드중...':"제품 등록하기"}
      disabled = {isUploading}
      ></Button>
      </form>
    </section>
  )
}
