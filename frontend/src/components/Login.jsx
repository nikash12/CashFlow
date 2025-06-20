import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"


export default function Login(){
    const navigate = useNavigate()
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const handleSubmit = async(e)=>{
        e.preventDefault()
        try{
            const res = await axios.post("http://localhost:2001/api/Login",{username,password})
            const token = res.data.token
            localStorage.setItem("token",token)
            localStorage.setItem("username",res.data.username)
            console.log("DONE");
            navigate("/")
        }catch(err){
            console.log("login failed");
        }
    }
    return(
        <form className="flex justify-center items-center min-h-screen" onSubmit={(el)=>handleSubmit(el)}>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
            <legend className="fieldset-legend">Login</legend>

            <label className="label">Username</label>
            <input type="text" className="input" placeholder="Username" onChange={(e)=>setUsername(e.target.value)} value={username}/>

            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} value={password}/>

            <button className="btn btn-neutral mt-4" type="submit">Login</button>
            <p className="link text-blue-500 m-auto" onClick={()=>navigate("/Register")}> SignUp</p>
            </fieldset>
        </form>
    )
}