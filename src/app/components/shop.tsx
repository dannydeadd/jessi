"use client";
import React from 'react'
import Image from 'next/image'
import { useState } from 'react';
import styled from 'styled-components';
import "bootstrap-icons/font/bootstrap-icons.css";

const Shop = () => {
    const [isClicked, setIsClicked] = useState(false);

    const handleBuyClick = () => {
      setIsClicked(true);
    };
  
    const handleRemoveClick = () => {
      setIsClicked(false);
    };
  return (
    <section id="row" className="w-full h-screen bg-[#d4d2d5] flex-col">
    {/* <header>
        <ul>
            <i class="fa fa-shopping-cart">
            <span class="counter"></span>
            </i>
        </ul>
    </header> */}
        <div class="wrapper">
            <div class="container">
                <div class="top"></div>
                <div className={`bottom ${isClicked ? 'clicked' : ''}`}>
                <div class="left">
                    <div class="details">
                    <h1>Sinister</h1>
                    <p>$420</p>
                    </div>
                    <div class="buy" onClick={handleBuyClick}><i class="bi bi-cart"></i></div>
                </div>
                <div class="right">
                    <div class="done"><i class="bi bi-cart-plus-fill"></i></div>
                    <div class="details">
                    <h1>Sinister</h1>
                    <p>Added to your cart</p>
                    </div>
                    <div class="remove" onClick={handleRemoveClick}><i class="bi bi-cart-x-fill"></i></div>
                </div>
                </div>
            </div>
            <div class="inside">
                <div class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                        <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
                    </svg>
                </div>
                <div class="contents">
                    <p className="text-lg">This is a really cool necklase Lorem ipsum dolor sit amet consectetur adipisicing 
                        elit. Dolor, pariatur laborum! Ea sunt, aliquid beatae nesciunt ipsum cum debitis
                          quis labore quisquam mollitia quaerat obcaecati, temporibus dicta aspernatur. Earum, explicabo!</p>
                </div>
            </div>
            </div>
            <div class="wrapper">
            <div class="container">
                <div class="top"></div>
                <div className={`bottom ${isClicked ? 'clicked' : ''}`}>
                <div class="left">
                    <div class="details">
                    <h1>Sinister</h1>
                    <p>$420</p>
                    </div>
                    <div class="buy" onClick={handleBuyClick}><i class="bi bi-cart"></i></div>
                </div>
                <div class="right">
                    <div class="done"><i class="bi bi-cart-plus-fill"></i></div>
                    <div class="details">
                    <h1>Sinister</h1>
                    <p>Added to your cart</p>
                    </div>
                    <div class="remove" onClick={handleRemoveClick}><i class="bi bi-cart-x-fill"></i></div>
                </div>
                </div>
            </div>
            <div class="inside">
                <div class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                        <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
                    </svg>
                </div>
                <div class="contents">
                    <p className="text-lg">This is a really cool necklase Lorem ipsum dolor sit amet consectetur adipisicing 
                        elit. Dolor, pariatur laborum! Ea sunt, aliquid beatae nesciunt ipsum cum debitis
                          quis labore quisquam mollitia quaerat obcaecati, temporibus dicta aspernatur. Earum, explicabo!</p>
                </div>
            </div>
            </div>
            <div class="wrapper">
            <div class="container">
                <div class="top"></div>
                <div className={`bottom ${isClicked ? 'clicked' : ''}`}>
                <div class="left">
                    <div class="details">
                    <h1>Sinister</h1>
                    <p>$420</p>
                    </div>
                    <div class="buy" onClick={handleBuyClick}><i class="bi bi-cart"></i></div>
                </div>
                <div class="right">
                    <div class="done"><i class="bi bi-cart-plus-fill"></i></div>
                    <div class="details">
                    <h1>Sinister</h1>
                    <p>Added to your cart</p>
                    </div>
                    <div class="remove" onClick={handleRemoveClick}><i class="bi bi-cart-x-fill"></i></div>
                </div>
                </div>
            </div>
            <div class="inside">
                <div class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                        <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
                    </svg>
                </div>
                <div class="contents">
                    <p className="text-lg">This is a really cool necklase Lorem ipsum dolor sit amet consectetur adipisicing 
                        elit. Dolor, pariatur laborum! Ea sunt, aliquid beatae nesciunt ipsum cum debitis
                          quis labore quisquam mollitia quaerat obcaecati, temporibus dicta aspernatur. Earum, explicabo!</p>
                </div>
            </div>
            </div>
            <div class="wrapper">
            <div class="container">
                <div class="top"></div>
                <div className={`bottom ${isClicked ? 'clicked' : ''}`}>
                <div class="left">
                    <div class="details">
                    <h1>Sinister</h1>
                    <p>$420</p>
                    </div>
                    <div class="buy" onClick={handleBuyClick}><i class="bi bi-cart"></i></div>
                </div>
                <div class="right">
                    <div class="done"><i class="bi bi-cart-plus-fill"></i></div>
                    <div class="details">
                    <h1>Sinister</h1>
                    <p>Added to your cart</p>
                    </div>
                    <div class="remove" onClick={handleRemoveClick}><i class="bi bi-cart-x-fill"></i></div>
                </div>
                </div>
            </div>
            <div class="inside">
                <div class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                        <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
                    </svg>
                </div>
                <div class="contents">
                    <p className="text-lg">This is a really cool necklase Lorem ipsum dolor sit amet consectetur adipisicing 
                        elit. Dolor, pariatur laborum! Ea sunt, aliquid beatae nesciunt ipsum cum debitis
                          quis labore quisquam mollitia quaerat obcaecati, temporibus dicta aspernatur. Earum, explicabo!</p>
                </div>
            </div>
            </div>
    </section>
  )
}

export default Shop