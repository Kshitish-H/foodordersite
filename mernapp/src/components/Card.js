// import React,{use, useEffect, useRef, useState} from 'react'
// import { useCart, useDispatchCart } from './ContextReducer'
// export default function Card(props) {
//     let dispatch = useDispatchCart();
//     let data = useCart();
//     const priceRef = useRef();
//     let options = props.options || {};
//     let priceOptions = Object.keys(options);
//     const [qty, setQty] = useState(1)
//     const [size, setSize] = useState('')
//     const handleAddToCart = async () => {
//         await dispatch({ type: "ADD", 
//             id: props.foodItem._id,
//             name: props.foodItem.name,
//             price: finalPrice,
//             qty: qty,
//             size: size,
//             img: props.foodItem.img});
//         console.log(data)
//     }
//     let finalPrice = qty * parseInt(options[size]);
//     useEffect(() => {
//         setSize(priceRef.current.value);
//     }, [])
//     return (
//         <div>
//             <div className="card mt-3" style={{ width: "18rem", maxHeight: "360px" }}>
//                 <img
//                     src={props.foodItem.img}
//                     className="card-img-top"
//                     alt="food"
//                     style={{ height: "180px", objectFit: "fill" }}
//                 />
//                 <div className="card-body">
//                     <h5 className="card-title">{props.foodItem.name}</h5>
//                     <div className="container w-100 d-flex flex-wrap align-items-center justify-content-between">
                        
//                         {/* Quantity Dropdown */}
//                         <select className='form-select m-1 w-auto bg-success text-white' onChange={(e) => setQty(e.target.value)}>
//                             {Array.from(Array(6), (e, i) => (
//                                 <option key={i + 1} value={i + 1}> {i + 1} </option>
//                             ))}
//                         </select>

//                         {/* Size Dropdown */}
//                         <select className='form-select m-2 w-auto bg-success text-white' ref={priceRef} onChange={(e) => setSize(e.target.value)}>
//                             {priceOptions.map((data) => (
//                                 <option key={data} value={data}>{data}</option>
//                             ))}
//                         </select>

//                         <div className='d-inline h-100 fs-5'>
//                             Rs.{finalPrice}/-
//                         </div>
//                     </div>
//                     <hr />
//                     <button className={'btn btn-success justify-center ms-2'} onClick={handleAddToCart}>Add to Cart</button>
//                 </div>
//             </div>
//         </div>
//     );
// }

import React, { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatchCart, useCart } from './ContextReducer'
// import { Dropdown, DropdownButton } from 'react-bootstrap';
export default function Card(props) {
  let data = useCart();

  let navigate = useNavigate()
  const [qty, setQty] = useState(1)
  const [size, setSize] = useState("")
  const priceRef = useRef();
  // const [btnEnable, setBtnEnable] = useState(false);
  // let totval = 0
  // let price = Object.values(options).map((value) => {
  //   return parseInt(value, 10);
  // });
  let options = props.options;
  let priceOptions = Object.keys(options);
  let foodItem = props.item;
  const dispatch = useDispatchCart();
  const handleClick = () => {
    if (!localStorage.getItem("token")) {
      navigate("/login")
    }
  }
  const handleQty = (e) => {
    setQty(e.target.value);
  }
  const handleOptions = (e) => {
    setSize(e.target.value);
  }
  const handleAddToCart = async () => {
    let food = []
    for (const item of data) {
      if (item.id === foodItem._id) {
        food = item;

        break;
      }
    }
    console.log(food)
    console.log(new Date())
    if (food && Object.keys(food).length !== 0) {
      if (food.size === size) {
        await dispatch({ type: "UPDATE", id: foodItem._id, price: finalPrice, qty: qty })
        return
      }
      else if (food.size !== size) {
        await dispatch({ type: "ADD", id: foodItem._id, name: foodItem.name, price: finalPrice, qty: qty, size: size,img: props.ImgSrc })
        console.log("Size different so simply ADD one more to the list")
        return
      }
      return
    }

    await dispatch({ type: "ADD", id: foodItem._id, name: foodItem.name, price: finalPrice, qty: qty, size: size })


    // setBtnEnable(true)

  }

  useEffect(() => {
    setSize(priceRef.current.value)
  }, [])

  // useEffect(()=>{
  // checkBtn();
  //   },[data])

  let finalPrice = qty * parseInt(options[size]);   //This is where Price is changing
  // totval += finalPrice;
  // console.log(totval)
  return (
    <div>

      <div className="card mt-3" style={{ width: "16rem", maxHeight: "360px" }}>
        <img src={props.ImgSrc} className="card-img-top" alt="..." style={{ height: "120px", objectFit: "fill" }} />
        <div className="card-body">
          <h5 className="card-title">{props.foodName}</h5>
          {/* <p className="card-text">This is some random text. This is description.</p> */}
          <div className='container w-100 p-0' style={{ height: "38px" }}>
            <select className="m-2 h-100 w-20 bg-success text-black rounded" style={{ select: "#FF0000" }} onClick={handleClick} onChange={handleQty}>
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>{i + 1}</option>)
              })}
            </select>
            <select className="m-2 h-100 w-20 bg-success text-black rounded" style={{ select: "#FF0000" }} ref={priceRef} onClick={handleClick} onChange={handleOptions}>
              {priceOptions.map((i) => {
                return <option key={i} value={i}>{i}</option>
              })}
            </select>
            <div className=' d-inline ms-2 h-100 w-20 fs-5' >
              ₹{finalPrice}/-
            </div>
          </div>
          <hr></hr>
          <button className={`btn btn-success justify-center ms-2 `} onClick={handleAddToCart}>Add to Cart</button>
          {/* <button className={`btn btn-danger justify-center ms-2 ${btnEnable ? "" : "disabled"}`} onClick={handleRemoveCart}>Remove</button> */}
        </div>
      </div>
    </div>
  )
}
//