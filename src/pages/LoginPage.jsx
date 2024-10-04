import { useState, useEffect } from "react";
import s from '../style/LoginPage.module.scss'

function LoginPage (){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
   
    
   
 // Handle input changes
    const handleUser = (e) => {
    setUsername(e.target.value);
    console.log(username)
  };

    const handlePassword = (e) => {
    setPassword(e.target.value);
  };

   // Handle form submission
   const handleSubmit = (e) => {
    e.preventDefault();

    //Simple validation
    if(username==="" || password===""){
        setError("Udfyld alle felterne!")}
        else{
            setError("");
            setSuccess("Success!")
        }
    
 console.log(username)
 console.log(password)

 setUsername("")
 setPassword("")
}


    return(
        
        <section className={s.loginStyle}>
              {error && <p className={s.errorMessage}>{error}</p>}
              {success && <p className={s.succesMessage}>{success}</p>}
            <h2>Log ind</h2>
            <form onSubmit={handleSubmit}>
           
                <label htmlFor="name">Brugernavn:</label>
                <input type="text" 
                       id="name" 
                       value={username} 
                       onChange={handleUser}/>
                <label htmlFor="password">Password:</label>
                <input type="password" 
                       id="password" 
                       value={password} 
                       onChange={handlePassword}/>
                <button type="submit" >Log ind</button>
               
            </form>
        </section>
        
    )
}

export default LoginPage