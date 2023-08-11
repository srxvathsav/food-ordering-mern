import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Badge from 'react-bootstrap/Badge';
import Modal from "../modal";
import Cart from "./Cart";
import { useCart } from "./ContextReducer";

export default function Navbar() {
    let data = useCart();
    const [cartView, setCartView] = useState(false)
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("authToken");
        navigate("/login");
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand fs-5" aria-current="page" to="#">Foodify</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                        </ul>

                        {
                            (localStorage.getItem('authToken')) ?
                                <Link className="nav-link active fs-5 text-light" aria-current="page" to="/displayOrder">
                                    My Orders
                                </Link> : ""
                        }

                        {
                            (!localStorage.getItem('authToken')) ?

                                <div className=" d-flex ">
                                    <Link className="btn btn-dark mx-1" aria-current="page" to="/Login">Login</Link>
                                    <Link className="btn btn-dark mx-1" aria-current="page" to="/Signup">Signup</Link>
                                </div> :
                                <div>
                                    <div className="btn btn-dark mx-1" onClick={() => { setCartView(true) }}>
                                        My cart {" "}
                                        <Badge pill bg="danger">{data.length}</Badge>
                                    </div>
                                    {cartView ? <Modal onClose={() => setCartView(false)}><Cart /></Modal> : null}
                                    <div className="btn btn-dark mx-1 text-danger" onClick={handleLogout}>
                                        Logout
                                    </div>
                                </div>
                        }
                    </div>
                </div>
            </nav>
        </>
    );
}
