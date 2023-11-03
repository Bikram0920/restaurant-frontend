// console.log('Running');
const inputs=document.querySelectorAll(".inputs");
const submit_btn=document.querySelector(".submitbtn");

let logindetails={
    email:"",
    password:""
}

const handleLogin=async (e)=>
{
    try{
        e.preventDefault();
        logindetails.email=inputs[0].value;
        logindetails.password=inputs[1].value;
    
        const res=await fetch('https://restaurant-backend-mn4x.onrender.com/signin',{
            method:'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body:JSON.stringify(logindetails)
        })
        const resp=await res.json();
        if(res.status===400)
        {
            alert("Invalid credentials")
            
        }
        else if(res.status===200 || res.status===201)
        {
            localStorage.setItem('email',resp.email);
            localStorage.setItem('token',resp.token);
            alert("Signed in successfully");
            console.log(resp);
            window.location.href="https://bikram-foodempire.netlify.app/";
        }
        
    }
    catch(e){
        console.log(e);
    }
    

}

submit_btn.addEventListener('click',handleLogin)