import React, {useState} from 'react'

export default function Test2() {
    const [products, setProducts] = useState([
        {id: 1,title:'black sneakers', quantity:1},
        {id: 2,title:'red t-shirt', quantity:1},
        {id: 3,title:'blue jeans', quantity:1},
    ])


    const increment = (id)=>{
        setProducts((prev)=>{
            return prev.map((product)=>{
                if(product.id === id){
                    return{...product, quantity: product.quantity +1}
                }else return product;
            })
        })
    }
    const decrement = (id)=>{
        setProducts((prev)=>{
            return prev.map((product)=>{
                if(product.id === id && product.quantity >= 1){
                    return{...product, quantity: product.quantity -1}
                }else return product;
            })
        })
    }
    const [selectedId, setSelectedId] = useState(null);
    const selectedProduct= products.find((p)=>p.id === selectedId)
    const handleChoose = (id)=> {
        setSelectedId(id)
    }



  return (
    <div style={{marginTop: '100px'}}>
       <h4>All Products</h4>
       {products.map((product)=>(
        <div key={product.id}>
            <span>
                {product.title}
                <button onClick={()=> handleChoose(product.id)} >Choose</button>
            </span>
            <div className='quantity'>
                <button onClick={()=> decrement(product.id)}>-</button>
                <span>{product.quantity}</span>
                <button onClick={()=> increment(product.id)}>+</button>
            </div>
        </div>
       ))}
       <h4>Selected Product</h4>
       <span> {selectedProduct?.title} </span>
       <span> {selectedProduct?.quantity} </span>
    </div>
  )
}
