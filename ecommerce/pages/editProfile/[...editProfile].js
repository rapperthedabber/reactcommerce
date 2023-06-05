import Nav from "@/components/nav"
import { useState } from "react";
import Link from "next/link"
export default function editMe(){
    const [formState, setFormState] = useState({
        Name: '',
        age: '',
        bio: '',
        url: ''
      });
      const handleChange = (event) => {
        const { name, value } = event.target;
    
        setFormState({
          ...formState,
          [name]: value,
        });
      };

    return(
        <>
        <Nav />
        <form action="/api/userProfile" method="POST">
            <div>
            
       
                <span id = 'editName'>Photo : </span>
                <input type="url"  name = 'url' placeholder="Image"  value={formState.url} onChange={handleChange}></input>
                {formState.url && <img src={formState.url} id = 'editImage'alt ='Where you should go'/>}
            </div>
            <div>
                <span id = 'editName'>Name : </span>
                <input  name = 'Name' type="text" placeholder="Name"  onChange={handleChange} ></input>
            </div>
            <div>
                <span id = 'editName'>age : </span>
                <input  name = 'age' type = 'text' placeholder="age" onChange={handleChange}></input>
            </div>
            <div>
                <span id = 'editName' >bio : </span>
                <input  name = 'bio'type="text" placeholder="bio" value={formState.bio} onChange={handleChange}></input>
            </div>
            <div className="UPDATE">
            <button type= 'submit' id = 'update' value= 'Register'>Update</button> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="thumbs"><path d="M7.5 23.501h-7a.5.5 0 0 1-.5-.5v-12a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5zm-6.5-1h6v-11H1v11z"></path><path d="M19.75 22.501H10.5c-.925 0-2.605-.398-3.354-1.146a.5.5 0 0 1 .707-.707c.473.473 1.834.854 2.646.854h9.25c.689 0 1.25-.561 1.25-1.25 0-.344-.14-.666-.395-.907a.499.499 0 0 1 .286-.859A1.249 1.249 0 0 0 22 17.251c0-.344-.14-.666-.395-.907a.499.499 0 0 1 .286-.859A1.247 1.247 0 0 0 23 14.251c0-.466-.262-.89-.684-1.106a.497.497 0 0 1-.034-.87c.449-.278.718-.754.718-1.274 0-.827-.673-1.5-1.5-1.5h-7a.502.502 0 0 1-.468-.677c.01-.027.968-2.564.968-4.323 0-1.637-1.452-3-2-3-.431 0-.792.157-1 .272v3.228a.501.501 0 0 1-.046.209l-3 6.5a.506.506 0 0 1-.23.238l-1 .5a.5.5 0 0 1-.447-.895l.843-.421L11 4.891v-3.39c0-.152.069-.295.188-.391A3.13 3.13 0 0 1 13 .501c1.157 0 3 1.831 3 4 0 1.368-.49 3.071-.795 4H21.5c1.378 0 2.5 1.122 2.5 2.5 0 .631-.235 1.223-.65 1.675.411.413.65.974.65 1.575a2.24 2.24 0 0 1-1.235 2 2.24 2.24 0 0 1-1 3 2.253 2.253 0 0 1-2.015 3.25z"></path></svg>
            </div>
        </form>
        </>
    )
}