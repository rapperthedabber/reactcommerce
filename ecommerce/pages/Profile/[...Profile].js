
import Nav from "@/components/nav"
export default function Profiler(){
    const Name = [{
        name: 'Jerry',
        age: 24,
        bio: 'Likes to run'

    }]
    return(
        <>
        <Nav />
    <div>
        <img  id ="profileImage" src = "" alt= 'no photo'></img>
    </div>
    <div>
   
      
       {Name.map((people)=>(
        <div className="ProfileCard">
        <span id ="profileName"> Name: </span>
        <h2 id ='name'>{people.name}</h2>
        <span id ="profileName"> age: </span>
        <h2 id ='age'>{people.age}</h2>
        <span id ="profileBio"> bio: </span>
        <h2 id ='bio'>{people.bio}</h2>
        </div>
       ))}
       
       

    </div>
    </>)
}