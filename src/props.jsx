function Card({  title, description, price }) {
    return (
      <div className="card">
        <h2>{title}</h2>
        <p>{description}</p>
        <p>Price: ${price}</p>
      </div>
    );
  }
function Navbar({ siteName }) {  
    return (
      <div className="navbar">
        <h1>{siteName}</h1>
      </div>
    );
  } 
  export {Navbar,Card}


