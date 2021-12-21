import logo from './logo.svg';
import './App.css';
// import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getItem } from './Actions/action';
// import { selectProduct } from './selector';
import { useSelector } from 'react-redux';
function App(props) {


  // props.productAction(props.products);
  const handleSubmit = () => {
    props.productAction(props.products) 
      // console.log("props",props.products) 
  }

  // console.log(props.products)
  const product = useSelector(state => state.ProductsList.products);
  console.log(product[0]);
  return (
    <div >
      <button onClick={handleSubmit}>View Products</button>
        {product[0]?.map((p) => (
          <div style={{display:"flex"}} key={p.id}>
            <div style={{border:"1px solid black", width:"20rem", marginTop:"2rem" }}>
              <div>
                <img style={{width:"16rem",height:"20%"}} src={p.image} alt="image" />
                <div style={{display:"flex", justifyContent:"space-between"}}>
                  <p>{p.title}</p>
                </div>
                <div style={{marginTop:"2rem"}}>
                  <p>{p.description}</p>
                  <p style={{border:"1px solid grey", width:"fit-content", padding:"1rem"}}>Price: ${p.price}</p>

                </div>
              </div>
            </div>
          </div>
            
        ))}     


    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.ProductsList.products
  }
}

const mapDispatchToProps = dispatch => ({
  productAction: (payload) => dispatch(getItem(payload)),
});


export default connect(mapStateToProps, mapDispatchToProps)(App);

