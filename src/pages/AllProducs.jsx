import React from "react";
import Products from "../components/Products";

export default function AllProducts(){
    return (
        <div className="pt-[250px]">
        <Products count={"full"} title={"Top"} kind={"top"}></Products>    
        </div>
    );
}