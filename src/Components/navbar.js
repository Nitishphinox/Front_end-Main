import { Link } from "react-router-dom";

function Nav(){
    return(
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Pizza Hub</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        <Link className="nav-link" to="/display">Display</Link>
        <Link className="nav-link" to="/all_item">All Items</Link>
        <Link className="nav-link" to="/add_item">Add New Items</Link>
        <Link className="nav-link" to="/update_item/:id">Update Items</Link>
        <Link className="nav-link" to="/delete_item">Delete Items</Link>
        <Link className="nav-link" to="/about">About Us</Link>
        <Link className="nav-link" to="/contact">Contact</Link>


      </div>
    </div>
  </div>
</nav>
        </>
    )
}


export default Nav;