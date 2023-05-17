
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
   
      
       {Name.map((people)=>(
        <div>
       
  
        <div className="ProfileCard">
        <img  id ="profileImage" src = "https://mn2s-content.s3.eu-west-2.amazonaws.com/wp-content/uploads/2023/03/24104727/Joey-The-Anime-Man.png" alt= 'no photo'></img>
        <span id ="profileName"> Name: </span>
        <h2 id ='name'>{people.name}</h2>
        <span id ="profileName"> age: </span>
        <h2 id ='age'>{people.age}</h2>
        <span id ="profileBio"> bio: </span>
        <h2 id ='bio'>{people.bio}</h2>
        </div>
        </div>
       ))}
       
       

    </div>
    </>)
}