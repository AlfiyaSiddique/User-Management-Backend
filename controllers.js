// Login Controller
const login = (req, res) => {
  fetch("https://qa2.sunbasedata.com/sunbase/portal/api/assignment_auth.jsp", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req.body),
  })
    .then((res) => res.json())
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((e) => {
      console.log(e);
      res.status(200).json({ error: "Login Id or Password is invalid" });
    });
};

// Create User
const createUser = (req, res) => {
  fetch("https://qa2.sunbasedata.com/sunbase/portal/api/assignment.jsp?cmd=create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization" :`Bearer ${req.body.token}`
    },
    body: JSON.stringify(req.body.form),
  })
    .then((res) => res.text())
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((e) => {
      console.log(e);
      res.status(200).json({ error: "Some Error Occured "+e });
    });
};

// Get Customer List
const getUsers = (req, res) => {
  fetch("https://qa2.sunbasedata.com/sunbase/portal/api/assignment.jsp?cmd=get_customer_list", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization" :`Bearer ${req.body.token}`
    }
  })
    .then((res) => res.json())
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((e) => {
      console.log(e);
      res.status(200).json({ error: "Invalid Token" });
    });
};

// Delete User
const deleteUser = (req, res) => {
  fetch(`https://qa2.sunbasedata.com/sunbase/portal/api/assignment.jsp?cmd=delete&uuid=${req.body.uuid}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization" :`Bearer ${req.body.token}`
    },
  })
    .then((res) => res.text())
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((e) => {
      console.log(e);
      res.status(200).json({ error: "Some Error Occured "+e });
    });
};


// Update User
const updateUser = (req, res) => {
  fetch(`https://qa2.sunbasedata.com/sunbase/portal/api/assignment.jsp?cmd=update&uuid=${req.body.uuid}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization" :`Bearer ${req.body.token}`
    },
    body: JSON.stringify(req.body.form),
  })
    .then((res) => res.text())
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((e) => {
      console.log(e);
      res.status(200).json({ error: "Some Error Occured "+e });
    });
};



const controllers = {
  login,
  createUser,
  getUsers,
  deleteUser,
  updateUser
};

export default controllers;
