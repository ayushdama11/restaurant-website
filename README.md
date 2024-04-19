# Simple web application using Node js & MongoDb

<h3>installation steps: </h3>

1 -> install library node js by typing [ npm install ]

2 -> create database with mongodb by typing [ use restaurant ]

3 -> Fake Data to using application by typing [ node ./seeder/seeder.js ]

<strong>Password : ddd</strong>

<h3>Mvc concept : </h3>

![stack Overflow](https://2.bp.blogspot.com/-I6bIQMAj-Nc/WWaQAbXnfJI/AAAAAAAABZg/aVDBAFcksSogYYNgWqd1GIkOZgtQuCQ7ACLcBGAs/s320/icon-aspnetmvc.png)

<h3>Database schema :</h3>

<pre> 
// Users schema
User {
        _id : ("5e946cbe64937321dc961e5e"),
        role : "adminstrator",
        Fname : "ibrahim",
        LName : "bougaoua",
        Contact : "02152145454",
        email : "adminstrator@gmail.com",
        password : "$2a$08$kmk4DRv5jcCRhNKk0OTBhuze6zKitBOSoSoFKQ/qVKinoVbXzVXkm",
        avatar : "profile.png",
        created_at : ("2020-04-13T13:44:30.521Z")
}

// Drink schema
Drink {
            _id : ("5e87404989624917fc83db12"),
            Name : "namemore",
            Alcohol : "alcoholwoman",
            Type : "newwoman",
            Description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            created_at : ("2020-04-03T13:55:21.527Z")
}

// Food schema
Food {
        _id : ("5e81ba1051d4f6298052d9d1"),
        Name : "hmiss",
        Price : "201.21",
        Type : "khfif",
        Category : "taklidi",
        Description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        created_at : ("2020-04-17T13:55:16.968Z")
