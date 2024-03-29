import {React,useState,useEffect} from 'react'
import {Button} from 'react-bootstrap'
import NavBar from './NavBar.js'
import { PayPalButton } from "react-paypal-button-v2";
export default function ShoppingCart() {
    let total=0
    const UNKNOWN_IMAGE="data:image/png;base64,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"

    const [cart,setCart]=useState([])
    const [username,setUsername]=useState()
    const [loaded,setLoaded]=useState(false)
    const [errorMessage,setErrorMessage]=useState("")
    const [successMessage,setSuccessMessage]=useState("")
    useEffect(async ()=>{
        let data={SID:sessionStorage.getItem("SID")}
        let response= await fetch('http://localhost:3001/shoppingCart', {
            method: 'POST', 
            headers: {
                              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          }).catch()
          let json=await response.json()
        
    setUsername(json.username)
    setCart(json.shoppingCart)
    setLoaded(true)
        
    },[])

    async function onDelete(e,item){
        e.preventDefault()
        let data={item:item,SID:sessionStorage.getItem("SID")}
        let response= await fetch('http://localhost:3001/deleteFromCart', {
            method: 'POST', 
            headers: {
                              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          }).catch()

          if (response.status==200){
            console.log("successfully deleted")
            console.log(cart)
            setCart(cart.filter(cartItem=>{return cartItem!==item}))
        }
        else {
            console.log("not deleted")
        }
    }
    
    

  
    return (
        <body style={{height:"100vh",backgroundColor:"lightgray",backgroundRepeat:'repeat'}}>
            <NavBar/>
            
            <div style={{color:"red"}}>{errorMessage}</div>
            <div>{successMessage}</div>
            {!loaded ? <div>Loading</div> :
            <div>
                {cart.length==0 ?  
                <>
                <div>Cart is Empty</div> 
                </>:
                <>
                <br>
                </br>
                <br></br>
            
              <div style={{float:"left"}}>
                {cart.map(item=>{
                     total+=item.cost
                   return <div style={{backgroundColor:"lightgray",width:"100vw"}}>
                   <div style={{marginLeft:"5vw", width:"70vw",
            border:"solid gray 1px",paddingTop:"3vh",
            paddingBottom:"6vh"}}>
                
                <img width="150" height="100"
                style={{float:"left",paddingLeft:"2vw"}} src={item.photoURL} 
                onError={(e)=>{ e.target.src=UNKNOWN_IMAGE}}>
                </img>
            <div style={{position:"relative",left:"2vw"}}>
                <div id="name">{item.name}</div>
                <div>$ {item.cost}</div>
                <div className="btn btn-danger" onClick={onDelete}>Remove</div>
            
            </div>
            </div>
            
             <br></br>
                    </div>
                })}
                <br/>
          </div>
          <div style={{position:"absolute",left:"80vw"}}>
                <div>Total: {total}</div>
                <PayPalButton
        amount={total}
        // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
       
        onSuccess={(details, data) => {
          alert("Transaction completed by " + details.payer.name.given_name);

        }}
        options={{
          clientId:"AUWkQ3gF_r-URa5uAG0N-rMPyQuwvjXGP0X-F4V4k-C8IVy9BekhVs8gYRsKkpkJ3GRfNyfakA9KnSTs"
        }}
      />
                </div>
                </>
            }
            
            </div>
}
        </body>
    )
}
