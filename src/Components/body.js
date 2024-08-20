function Body(){
    return(
        <>
  <div className="container col-xxl-8 px-4 py-5">
    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div className="col-10 col-sm-8 col-lg-6">
        <img src="https://images.pexels.com/photos/10779640/pexels-photo-10779640.jpeg?auto=compress&cs=tinysrgb&w=600" class="d-block mx-lg-auto img-fluid" alt="Pizza " width="700" height="500" loading="lazy"/>
      </div>
      <div className="col-lg-6">
        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Welcome to our Pizza Store</h1>
        <p className="lead">Here we have many different kinds of Pizzas. You can order different pizzas based on your taste and toppings.You can order Veg as well as Non-Veg Pizza.</p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Our Services</button>
          <button type="button" className="btn btn-outline-secondary btn-lg px-4">Contact-Us</button>
        </div>
      </div>
    </div>
  </div>



 

        </>
    )
}


export default Body;