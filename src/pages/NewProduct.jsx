import React, { useState } from 'react'
import { uploadImage } from '../api/uploader';
import Button from '../components/UI/Button';

export default function NewProduct() {
  const [product, setProduct] = useState({});
  const [file,setFile]=useState();
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

    uploadImage(file).then(url=>{
      console.log(url);
    })
    console.log("???");
  };
  return (
    <section>
      <form>
        {file && 
        <img src={URL.createObjectURL(file)} alt='local file'></img>
        }
      <input type="file" accept='image/*' name="file" required onChange={handleChange}></input>
      <input type="text" name="title" value={product.title ?? ''} placeholder="제품명" required onChange={handleChange}></input>
      <input type="number" name="price" value={product.price?? ''} placeholder="가격" required onChange={handleChange}></input>
      <input type="text" name="category" value={product.category?? ''} placeholder="카테고리" required onChange={handleChange}></input>
      <input type="text" name="description" value={product.description?? ''} placeholder="상품 설명" required onChange={handleChange}></input>
      <input type="text" name="option" value={product.option?? ''} placeholder="옵션들 (콤마(,)로 구분)" required onChange={handleChange}></input>
      <Button onClick={handleSubmit} text="제품 등록하기"></Button>
      </form>
    </section>
  )
}
