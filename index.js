app.post("/signup", (req, res) => {
    const { name, email, mobile, username, password } = req.body;
    
    const User = users.find(user => user.email == email || user.mobile == mobile || user.username == username);
    
    if (User && username && password) {
        res.send({
            code: 400,
            message: "User already exists"
        });
    } else if (name && email && mobile && username && password) {
        const newUser = {
            id: users.length, 
            name: "dhruv",
            email: "dhruv@gmail.com",
            mobile: "+91 908989899",
            username: "dhruv_9090",
            password: "898989899"
        };
        users.push(newUser); 
        res.status(200).send({
            code: 200,
            message: "User signed up successfully",
            data: newUser
        });
    } else {
        res.send({
            code: 400,
            message: "please enter your name, email, mobile, username, password"
        })
    }
});