import { useState,useEffect } from "react";
import axios from 'axios';



function Delete(){

    const [allitems , setAllItems]=useState([]);
    useEffect(()=>{
        fetchPizzas();
    }, [])



    const fetchPizzas = () => {
        axios.get('http://localhost:5001/pizzas')
            .then(response => {
                setAllItems(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the pizza data')
            })
    }
    const handleDelete=(id)=>{ 
         axios.delete(`http://localhost:5001/pizzas/${id}`)
        .then(response => {
fetchPizzas();


})
        .catch(error => {
            console.error('There was an error while deleting the pizza data')
        })}


    return(<div className="conatiner mt-4">
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
                        <button className="btn btn-danger me-2" onClick={()=> handleDelete(allitems.id)}>Delete</button>
                        </div>
</div>

 </div>
))}

</div>

    </div>
    )
}
export default Delete;