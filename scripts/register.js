const regdInputs=document.querySelectorAll('.regdInputs');
const submitbtn2=document.querySelector("#submitbtn2");

let regddetails={
    username:"",
    email:"",
    password:"",
    c_password:""
}

const handleRegister=async(e)=>
{
    e.preventDefault();
    regddetails.name=regdInputs[0].value;
    regddetails.email=regdInputs[1].value;
    regddetails.password=regdInputs[2].value;
    regddetails.c_password=regdInputs[3].value;

    const res=await fetch('https://restaurant-backend-mn4x.onrender.com/signup',{
        method:'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body:JSON.stringify(regddetails)
    })
    const resp=await res.json();
    if(res.status===200)
    {
       
        console.log(resp);
        alert("Successfully Registered");
    }
    else
    {
        alert(resp.error)
    }
   
}

submitbtn2.addEventListener('click', handleRegister);