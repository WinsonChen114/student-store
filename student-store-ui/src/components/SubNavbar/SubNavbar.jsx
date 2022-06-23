import * as React from "react"
import "./SubNavbar.css"
import axios from "axios"
import NotFound from "../NotFound/NotFound"


export default function SubNavbar({ products, setProducts }) {
    const [category, setCategory] = React.useState("All Categories")
    const [searchTerm, setSearchTerm] = React.useState("")

    React.useEffect(() => {
        axios.get("http://localhost:3001/store")
            .then((response) => {
                let newProducts = response.data.products
                if (category !== "All Categories") {
                    newProducts = newProducts.filter(item => item.category === category)
                }
                newProducts = newProducts.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
                setProducts(newProducts)
            })
            .catch((error) => {
                console.log(error)
                return <NotFound />
            })
    }, [category, searchTerm])

    return (
        <nav className="subnavbar">
            <div className="content">
                <div className="search">
                    <input type="text" name="search" placeholder="Search for a product!" onInput={(event) => setSearchTerm(event.target.value)}></input>
                </div>
                <div className="categories">
                    <ul className="category-menu">
                        <li> <button onClick={() => { setCategory("All Categories") }}>All Categories</button></li>
                        <li> <button onClick={() => { setCategory("clothing") }}>Clothing</button></li>
                        <li> <button onClick={() => { setCategory("food") }}>Food</button></li>
                        <li> <button onClick={() => { setCategory("accessories") }}>Accessories</button></li>
                        <li> <button onClick={() => { setCategory("tech") }}>Tech</button></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}