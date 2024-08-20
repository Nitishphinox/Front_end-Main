/* To update Items follow these steps 
Step-1 In terminal write npm i formik
npm i yup
Step-2 import formik and yup so that we can create a form to get the data of items
Step-3: By using the id of pizza items we can reterive the data and update the data of any item.
*/



import { useFormik } from "formik";
import axios from "axios"

import { useNavigate, useParams } from "react-router-dom"
import * as Yup from "yup"
import { useEffect, useState } from "react";




function Update(){

const { id }= useParams();
const [allitems , setAllItem] = useState(null);


    const navigate = useNavigate();
    useEffect(()=>{
        axios.get(`http://localhost:5001/pizzas/${id}`)
        .then(response => {
            setAllItem(response.data);
        })
        .catch(error => {
            console.error('There was an error fetching the pizza data')
        })
    },[id])

  const formik= useFormik({
    initialValues:{
        image: allitems?.image || '',
        name:allitems?.name || '',
        price:allitems?.price || '',
        size:allitems?.size || '',
        category:allitems?.category || '',
        topings:allitems?.topings || ''
    },
enableReinitialize:true,
    validationSchema:Yup.object({
        image: Yup.string().required('Image URL is required'),
        name: Yup.string() .min(5,'Name must be at least 5 characters') .required('Name is required'),
        price: Yup.number() .min(1,'Price must be greater than 0') .required('Price is required'),
        size: Yup.string().required('Size is required'),
        category: Yup.string().required('Category is required'),
        topings: Yup.string().required('Topings is required'),



    }),
    onSubmit: (values,{setSubmitting, resetForm, setStatus})=>{
        axios.put(`http://localhost:5001/pizzas/${id}`,values)
                .then(response=>{
            setStatus('success');
            resetForm();
            navigate('/all_item');
 })
 .catch(error=>{
    setStatus('error');
})
.finally(()=>{
    setSubmitting(false);
});

    },
  });
  return(
    <div className="container mt-4">
    <h2>Update New Pizza</h2>
<form onSubmit={formik.handleSubmit}>
    <div className="mb-3">
    <label htmlFor="image" className="form-label">Image URL</label>

        <input  id="image"
                        name="image"
                        type="text"
                        className="form-control"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.image}/>
                        

                        {
                            formik.touched.image &&  formik.errors.image ? (
                                <div className="text-danger">{formik.errors.image}</div>
                            ): null
                        }

    </div>


    <div className="mb-3">
    <label htmlFor="name" className="form-label">Enter Name</label>

        <input  id="name"
                        name="name"
                        type="text"
                        className="form-control"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}/>
                        

                        {
                            formik.touched.name &&  formik.errors.name ? (
                                <div className="text-danger">{formik.errors.name}</div>
                            ): null
                        }

    </div>



    <div className="mb-3">
    <label htmlFor="price" className="form-label">Enter Price</label>

        <input  id="price"
                        name="price"
                        type="number"
                        className="form-control"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.price}/>
                        

                        {
                            formik.touched.price &&  formik.errors.price ? (
                                <div className="text-danger">{formik.errors.price}</div>
                            ): null
                        }

    </div>




    <div className="mb-3">
    <label htmlFor="size" className="form-label">Enter Size</label>

        <input  id="size"
                        name="size"
                        type="text"
                        className="form-control"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.size}/>
                        

                        {
                            formik.touched.size &&  formik.errors.size ? (
                                <div className="text-danger">{formik.errors.size}</div>
                            ): null
                        }

    </div>





    
    <div className="mb-3">
    <label htmlFor="category" className="form-label">Enter category</label>

        <input  id="category"
                        name="category"
                        type="text"
                        className="form-control"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.category}/>
                        

                        {
                            formik.touched.category &&  formik.errors.category ? (
                                <div className="text-danger">{formik.errors.category}</div>
                            ): null
                        }

    </div>








    <div className="mb-3">
    <label htmlFor="topings" className="form-label">Enter Desired Topings</label>

        <input  id="topings"
                        name="topings"
                        type="text"
                        className="form-control"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.topings}/>
                        

                        {
                            formik.touched.topings &&  formik.errors.topings ? (
                                <div className="text-danger">{formik.errors.topings}</div>
                            ): null
                        }

    </div>








    

    <button type="submit" className="btn btn-primary">
                    submit
                </button>

</form>

    </div>
  )
}


export default Update;