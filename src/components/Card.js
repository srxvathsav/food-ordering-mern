import React, { useEffect, useRef, useState } from 'react'
import { useDispatchCart, useCart } from './ContextReducer'

export default function Card(props) {
    let options = props.options
    let price = Object.keys(options)
    let data = useCart()
    const priceRef = useRef()
    let dispatch = useDispatchCart()
    const [qty, setQty] = useState(1)
    const [size, setSize] = useState("")
    let finalPrice = qty * parseInt(options[size]);
    useEffect(() => {
        setSize(priceRef.current.value)
    }, [])
    const handleAddToCart = async () => {
        let food = []
        for (const item of data) {
            if (item.id === props.foodItems._id) {
                food = item;
                break;
            }
        }
        console.log(food)
        if (food !== []) {
            if (food.size === size) {
                await dispatch({ type: "UPDATE", id: props.foodItems._id, price: finalPrice, qty: qty })
                return
            }
            else if (food.size !== size) {
                await dispatch({ type: "ADD", id: props.foodItems._id, name: props.foodItems.name, price: finalPrice, qty: qty, size: size, img: props.ImgSrc })
                console.log("Size different so simply ADD one more to the list")
                return
            }
            return
        }

        await dispatch({
            type: "ADD",
            id: props.foodItems._id,
            name: props.foodItems.name,
            price: finalPrice,
            qty: qty,
            size: size,
            img: props.foodItems.img
        });
        console.log(data);
    }
    return (
        <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }} >
            <div className="card-temp ">
                <img src={props.foodItems.img} className="card-img-top" style={{ "height": "150px", "objectFit": "fill" }} />
                <div className="card-body">
                    <h5 className='card-title'>{props.foodItems.name}</h5>
                    <div className='container w-100'>
                        <select className='m-2 h-100 bg-white text-black rounded' onChange={(e) => setQty(e.target.value)}>
                            {
                                Array.from(Array(6), (e, i) => {
                                    return (<option key={i + 1} value={i + 1}>
                                        {i + 1}
                                    </option>)
                                })
                            }
                        </select>

                        <select className='m-2 h-100 bg-white text-black rounded' ref={priceRef} onChange={(e) => setSize(e.target.value)}>
                            {
                                price.map((data) => {
                                    return <option key={data} value={data}>{data}</option>
                                })
                            }
                        </select>
                        <div className="d-inline h-100 fs-5">₹{finalPrice}</div>
                        <hr></hr>
                        <button type='button' className='btn btn-primary btn-sm justify-center ms-2' onClick={handleAddToCart}>
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
