export default function Box({username,firstname,lastname}){
    return(
        
            <ul className="list bg-base-100 rounded-box shadow-md">            
                <li className="list-row">
                    <div>
                    <div>{username}</div>
                    <div className="text-xs uppercase font-semibold opacity-60">{firstname+" "+lastname}</div>
                    </div>
                    <button className="btn btn-square btn-ghost">
                    <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
                    </button>
                    <button className="btn btn-square btn-ghost">
                        send Money
                    </button>
                </li>
           
            </ul>
        
    )
}