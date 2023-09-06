require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const cors = require('cors');
const mongoose = require("mongoose");
// const lodash = require("lodash");
// const session = require("express-session");
// const passport = require("passport");
// const passportLocalMongoose = require("passport-local-mongoose");
// const GoogleStrategy = require("passport-google-oauth20").Strategy;
// const findOrCreate = require("mongoose-findorcreate");

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(cors());

// app.use(session({
//     secret:process.env.SECRET_STRING,
//     resave:false,
//     saveUninitialized:false
// }));

// app.use(passport.initialize());
// app.use(passport.session());

mongoose.connect("mongodb://127.0.0.1:27017/ScoobeedooDB", { useNewUrlParser: true, useUnifiedTopology: true});

const studentSchema = new mongoose.Schema({
    name:String,
    class:Number,
    section:String,
    roll_number:Number
});

const teacherSchema = new mongoose.Schema({
    name:String,
    E_id:String
});

const resultSchema = new mongoose.Schema({
    key:String,
    result:String
});

// userSchema.plugin(passportLocalMongoose);

const Student = mongoose.model("Student",studentSchema);
const Teacher = mongoose.model("Teacher",teacherSchema);
const Result = mongoose.model("Result",resultSchema);


//**********to be done in student creation route************
const stu = new Student({
    name:"abs asd",
    class:8,
    section:"A",
    roll_number:12
})
const tec = new Teacher({
    name:"ASD ABC",
    E_id:"T-007"
})
// stu.save();
// tec.save();
//****************************************


// passport.serializeUser(function(user, cb) {
//     process.nextTick(function() {
//       return cb(null, {
//         id: user.id,
//         username: user.username,
//         picture: user.picture
//       });
//     });
// });

// passport.deserializeUser(function(user, cb) {
//     process.nextTick(function() {
//         return cb(null, user);
//     });
// });

// passport.use(new GoogleStrategy({
//     clientID: process.env.GOOGLE_CLIENT_ID,
//     clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     callbackURL: "--to be filled--",
//     userProfileURL: "--to be filled--"
//   },
//   function(accessToken, refreshToken, profile, cb) {
//     // console.log(profile);
//     User.findOrCreate({ googleId: profile.id }, function (err, user) {
//       return cb(err, user);
//     });
//   }
// ));

app.get("/",function(req,res){
    res.render("home");
});

app.post("/register_student",function(req,res){
    formData = req.body;
  console.log('Received form data:', formData);
  
  // Process the form data as needed
  
  res.send('Form data received successfully');
});

app.get("/register_student",function(req,res){
    res.send("done");
});

app.get("/register_teacher",function(req,res){
    res.send("done");
});

app.post("/register_teacher",function(req,res){
    formData = req.body;
  console.log('Received form data:', formData);
  
  // Process the form data as needed
  
  res.send('Form data received successfully');
});

app.get("/teacher_dashboard",function(req,res){
    res.send("job done for teacher")
});

app.post("/teacher_dashboard",function(req,res){
    console.log(req.body);
    const roll = req.body.rollno;
    const class_ = req.body.class;
    const sec = req.body.sec;
    const r=req.body.result;
    key = class_ + "@" + sec + "@" + roll;
    const resu = new Result({
        key:key,
        result:r
    });
    console.log("resu="+resu);
    console.log("r="+r);
    resu.save();
    res.redirect("/teacher_dashboard");
});

app.get("/student_dashboard",function(req,res){
    res.send("job done for student")
});

app.post("/student_dashboard",function(req,res){
    const roll = req.body.rollno;
    const class_ = req.body.class;
    const sec = req.body.sec;
    key = class_ + "@" + sec + "@" + roll;
    console.log(key);
    Result.findOne({key:key})
        .then(foundres => {
            console.log(foundres);
            res.redirect(foundres.result);
        })
        .catch(error => {
            console.log('Error finding data:', error);
        });
});

//#######todo#######
// app.get("/login_student",function(req,res){
//     res.render("login_student");
// });

// app.get("/login_teacher",function(req,res){
//     res.render("login_teacher");
// });

// app.post("/login_student",function(req,res){
//     //todo
// });

// app.post("/login_teacher",function(req,res){
//     //todo
// });

// app.get("/logout",function(req,res){
//     req.logOut(function(err){
//         if(err){
//             console.log("error4:"+err);
//         }
//     });
//     res.redirect("/");
// });
//############################################

app.listen(5000, function() {
    console.log("Server started on port 5000");
});