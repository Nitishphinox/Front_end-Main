/* Install axios by writing command npm i axios in terminal, so that we can send different API request*/
/* Now import use state, useEffect and Axios */
import { useState,useEffect } from "react";
import axios from 'axios';
function AllItems(){
    const [allitems , setAllItems]=useState([]);
    useEffect(()=>{
        axios.get('http://localhost:5001/pizzas')
            .then(response => {
                setAllItems(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the pizza data')
            })
    }, [])


    return(   
        <div className="conatiner mt-4">
            <h2>Pizzas List</h2>
<div className="row">{allitems.map(allitems=>(
    <div className="col-md-4" key={allitems.id}>
    <div className="card mb-4">   
     
    <img src={allitems.image} height={300} className="card-img-top" />
    <div className="card-body"><h5 className="card-title">{allitems.name}</h5>
                             <p className="card-text">Price: ${allitems.price}</p>
                            <p className="card-text">Size: {allitems.size}</p>
                            <p className="card-text">Category: {allitems.category}</p>
                            <p className="card-text">Topings: {allitems.topings}</p>
                            </div>
    </div>

     </div>
    ))}

</div>

        </div>
            )
}

export default AllItems;