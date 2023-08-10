require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
// const lodash = require("lodash");
// const session = require("express-session");
// const passport = require("passport");
// const passportLocalMongoose = require("passport-local-mongoose");
// const GoogleStrategy = require("passport-google-oauth20").Strategy;
// const findOrCreate = require("mongoose-findorcreate");

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

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

//#######todo#######
// app.get("/register_student",function(req,res){
//     res.render("register_student");
// });

// app.get("/login_student",function(req,res){
//     res.render("login_student");
// });

// app.get("/register_teacher",function(req,res){
//     res.render("register_teacher");
// });

// app.get("/login_teacher",function(req,res){
//     res.render("login_teacher");
// });

// app.post("/register_student",function(req,res){
//     //todo
// });

// app.post("/login_student",function(req,res){
//     //todo
// });

// app.post("/register_teacher",function(req,res){
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

app.get("/teacher",function(req,res){
    const roll = req.body.roll_no;
    const class_ = req.body.class_name;
    const sec = req.body.section;
    key = class_ + "@" + sec + "@" + roll;
    const resu = new Result({
        key:key,
        result:"Grade a15"
    });
    resu.save();
    res.send("done");
});

app.get("/student",function(req,res){
    const roll = req.body.roll_no;
    const class_ = req.body.class_name;
    const sec = req.body.section;
    key = class_ + "@" + sec + "@" + roll;
    Result.findOne({key:key})
            .then(foundres => {
                res.send(foundres);
            })
            .catch(error => {
                console.log('Error finding data:', error);
            });
});

app.listen(3000, function() {
    console.log("Server started on port 3000");
});