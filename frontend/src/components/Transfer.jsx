import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function Transfer(){
    const navigate = useNavigate()
    const [amount,setAmount] = useState("")
    const handleSubmit = async(e)=>{
        e.preventDefault()
        try{
            const res = await axios.post("http://localhost:2001/api/Login",{username,password})
            const token = res.data.token
            localStorage.setItem("token",token)
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

            <label className="label">Username</label>
            <input type="text" className="input" placeholder="enter amount" onChange={(e)=>setAmount(e.target.value)} value={amount}/>

            <button className="btn btn-neutral mt-4" type="submit">Login</button>
            </fieldset>
        </form>
    )
}