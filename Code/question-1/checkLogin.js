//allUsers is an array of objects
let allUsers = [

    {
        'email': 'harshitkyal@gmail.com',
        'password': 123
    },
    {
        'email': 'abc',
        'password': 1234
    }
]

//defining checkLogin function
let checkLogin = (email, password, allUsers) => {

    let isUserFound = false
    let passwordCorrect = false
    //for of loop
    for (currentUser of allUsers) {
        if (currentUser.email == email) {
            if (currentUser.password == password) {
                isUserFound = true
                passwordCorrect = true
            } else {
                isUserFound = true
            }
        } else {
            //do nothing
        }
    }
    //printing results
    if (isUserFound == true && passwordCorrect == true)
        console.log(`You are logged In`) //template literal
    else if (isUserFound == true && passwordCorrect == false)
        console.log(`Your email Id ${email} is correct but  You have provided incorrect password`)
    else
        console.log(`No User found with email id ${email}`)
}

//function call
checkLogin("abc", 12234, allUsers)