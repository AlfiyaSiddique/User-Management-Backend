// Commaon REquest parameters for all
let requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
  }
}

// Login Controller
const login = (req,res)=>{
    requestOptions.body = JSON.stringify(req.body)
  fetch("https://qa2.sunbasedata.com/sunbase/portal/api/assignment_auth.jsp", requestOptions)
  .then((res)=>res.json())
  .then((data)=>{
    res.status(200).json(data)
  })
  .catch((e)=>{
    console.log(e)
    res.status(200).json({error: "Login Id or Password is invalid"})
  })
}


const controllers = {
    login
}

export default controllers;
