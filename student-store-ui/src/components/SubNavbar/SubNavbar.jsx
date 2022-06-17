import * as React from "react"
import "./SubNavbar.css"
import axios from "axios"
import NotFound from "../NotFound/NotFound"


export default function Navbar({ products, setProducts }) {
    function changeCategory(category) {
        axios.get("https://codepath-store-api.herokuapp.com/store")
            .then((response) => {
                let newProducts = response.data.products
                if(category !== "All Categories")
                {
                    newProducts=newProducts.filter(item => item.category === category)
                }
                setProducts(newProducts)
            })
            .catch((error) => {
                console.log(error)
                return <NotFound />
            })
    }
    return (
        <nav className="subnavbar">
            <div className="content">
                <div className="search">
                    <input type="text" name="search" placeholder="Search for a product!"></input>
                </div>
                <div className="categories">
                    <ul class="category-menu">
                        <li> <button onClick={() => {changeCategory("All Categories")}}>All Categories</button></li>
                        <li> <button onClick={() => {changeCategory("clothing")}}>Clothing</button></li>
                        <li> <button onClick={() => {changeCategory("food")}}>Food</button></li>
                        <li> <button onClick={() => {changeCategory("accessories")}}>Accessories</button></li>
                        <li> <button onClick={() => {changeCategory("tech")}}>Tech</button></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}