import { useEffect, useState } from "react"
import Box from "./box"
import axios from 'axios'
import { useRef } from "react"
export default function Dashboard(){
    const [users,setUsers] = useState([])
    const [input,setInput] = useState("")
    useEffect(()=>{
        const timeout = setTimeout(()=>{
            axios.get(`http://localhost:2001/api/All?username=${input}`,{
                headers:{
                    Authorization:"Bearer "+localStorage.getItem("token").toString()
                }
            })
            .then((res)=>setUsers(res.data.users))
            .catch((err)=>console.log("fetch failed"))
        },500)
        return()=>clearTimeout(timeout)
    },[input])

    return(
        <div>
            <input type="text" onChange={(el)=>{setInput(el.target.value)}} value={input} placeholder="search users" className="w-2xl h-[50px] border-1"></input>
            {users.map((ele,i)=>{
                return(
                    <div key={i}>
                        <Box receiverId={ele.userId} username={ele.username} firstname={ele.firstname} lastname={ele.lastname}/>
                    </div>
                )
            })}
            
        </div>
    )
}