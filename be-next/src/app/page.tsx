import axios from "axios"

async function getUserDetails(){
    const resposne=await axios.get("http://localhost:3000/api/user/")
    return resposne.data;
}

// an async component!!
export default async function Home(){
    const userData=await getUserDetails();
    return (
        <div>
            <h1>Hi {userData.name}</h1>
            <p>Your email is {userData.email}</p>
        </div>
    )
}