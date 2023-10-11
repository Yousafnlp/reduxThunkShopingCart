import axios from "axios";
import { useState, useEffect } from "react"
import "./User.css"
import { Link } from "react-router-dom";
import Loader from './Loader';
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../redux/Action";

function User() {
    // const [data, setData]=useState([])
  // const [loader,setLoaader]=useState(true);

  let data = useSelector(state => state.cartReducer.products)
  let loading = useSelector(state => state.cartReducer.loading)
  let error = useSelector(state => state.cartReducer.error)

  let dispatch = useDispatch();

  
    // const fetchData= async()=>{
    //   let data = await axios.get(`http://localhost:6001/get_Products`);
    //   setData(data.data);
    //  setLoaader(false);
  // } 
  
  if(data){
    toast.success("Products fetched Successfuly")
  }
  

    useEffect(()=>{
       dispatch(getData(dispatch));
    },[])

    console.log(data, loading, error);
    return(<>

  {loading ? (<Loader/>) : error ?  (<h1>error in fetching products</h1>)  :
  
  (
    <div className="d-flex backg flex-wrap justify-content-center gap-3 pt-5">
  
    {data.map((item)=>{
    return(
      <div class="card" style={{width: "18rem"}}>
     <div className="text-center">
    <div className="d-flex align-items-center justify-content-center " style={{height: "18rem"}}>
    <img src={item?.image} class="card-img-top w-50" alt="..."/>
    </div>
      <div class="card-body pt-0">
        <h4 class="card-title">{item?.title.slice(0,20)}</h4>
        <h5 class="card-title-sub">{item?.category}</h5>
        <p class="card-text">{item?.description.slice(0,90)}</p>
        <h5  class="card-title-sub">{item?.price} $</h5>
          <Link to={`/products/${item.id}`} class="btn btn-primary w-100 mt-2">Product Details</Link>
      </div>
     </div>
    </div>
    )
    })}
    </div>
    )
    }

</>
)
}

export default User
