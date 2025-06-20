import { useState } from "react"
import axios from "axios"
import { useNavigate, useSearchParams } from "react-router-dom"

export default function Transfer(){
    const [params] = useSearchParams()
    const username = params.get("username")
    const navigate = useNavigate()
    const [amount,setAmount] = useState("")
    const handleSubmit = async(e)=>{
        e.preventDefault()
        const numericAmount = Number(amount);
        if (isNaN(numericAmount) || numericAmount <= 0) {
            alert("Please enter a valid amount greater than 0.");
            setAmount("")
            return;
        }
        try{
            
            const res = await axios.post("http://localhost:2001/api/account/Transfer",
                {
                    to:username,
                    amount:numericAmount
                },
                {
                    headers:{
                        Authorization:"Bearer "+localStorage.getItem("token").toString()
                    }
                }
            );

            console.log("DONE");
            navigate("/")
        }catch(err){
            console.log("login failed");
        }
    }
    return(
        <form className="flex justify-center items-center min-h-screen" onSubmit={(el)=>handleSubmit(el)}>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
            <legend className="fieldset-legend">Send Cash</legend>

            <label className="label">to {username}</label>
            <input type="text" className="input" placeholder="enter amount" onChange={(e)=>setAmount(e.target.value)} value={amount}/>

            <button className="btn btn-neutral mt-4" type="submit">send</button>
            </fieldset>
        </form>
    )
}