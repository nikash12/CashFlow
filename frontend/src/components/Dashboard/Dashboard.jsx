import { useEffect, useState } from "react"
import Box from "./box"
import axios from 'axios'
export default function Dashboard(){
    const [users,setUsers] = useState([])
    const [input,setInput] = useState("")
    const [balance,setBalance] = useState("")
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
    useEffect(()=>{
        axios.get(`http://localhost:2001/api/account/Balance`,
            {
                headers:{
                    Authorization:"Bearer "+localStorage.getItem("token").toString()
                }
            }
        ).then((res)=>{setBalance(res.data.balance)})
        .catch((err)=>console.log("Failed",err))
    },[])
    return(
        <div>
            <h1>Balance:{balance}</h1>
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