import { useNavigate } from "react-router-dom"

export default function Box({username,firstname,lastname}){
    const navigate = useNavigate()
    function handleSend(){
        navigate(`/Transfer?username=${username}&`)        
    }
    return(
        
            <ul className="list bg-base-100 rounded-box shadow-md ">            
                <li className="list-row flex bg-amber-800 justify-between">
                    <div>
                    <div>{username}</div>
                    <div className="text-xs uppercase font-semibold opacity-60">{firstname+" "+lastname}</div>
                    </div>
                    <button className="btn btn-square btn-ghost w-[30%]" onClick={handleSend}>
                        send Money
                    </button>
                </li>
           
            </ul>
        
    )
}