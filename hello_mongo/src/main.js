const express = require("express");
const { dbConnect } = require("./config/db");
const expressSession = require("express-session");
const redis = require('redis');
const passport = require("passport");
const LocalStrategy = require("passport-local");
const userRoute = require("./routes/user.route");
const courseRoute = require("./routes/course.route");
const { User } = require("./models/user.model");
const isLoggedIn = require("./midllewares/loginRequired");

dbConnect();

const RedisStore = require('connect-redis')(expressSession);

const redisClient = redis.createClient({legacyMode: true })
redisClient.connect().then((err) => console.log('connected to redis!'))
redisClient.on('error', (err) => console.log(err))

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true}))

app.set("view engine", "pug")
app.set("views", "./src/views")

app.use(
    expressSession({
      store: new RedisStore( { client: redisClient } ),
      secret: "yourSecretCode",
      cookie: {
        maxAge: 3600000
      },
      resave: false, // if not modified don't save session
      saveUninitialized: false, // just create session if somthing stored
    })
);
  
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
 

app.get("/", async (req, res) => {
  try {
    // await redisClient.v4.set('name', 'Asghar')
    const cached_name = await redisClient.v4.get('name')
    console.log(cached_name);
    req.session.count === undefined ? req.session.count = 0 : req.session.count++
    req.session.pages = []
    console.log(req.session.cookie.path);
    console.log(req.user);
    return res.render("index", {session: req.session})
  } catch (error) {
    return res.send(error.message)
  }
})

app.get("/secret", isLoggedIn, function(req, res){
  res.render("secret");
});


app.get("/login", function(req, res){
  res.render("login");
});


app.post("/login", passport.authenticate("local",{
  successRedirect: "/secret",
  failureRedirect: "/login"
}), function(req, res){
});

app.get('/logout', function(req, res, next) {
  req.logout(function(err) {
    if (err) { return next(err); }
    res.redirect('/');
  });
});

app.post("/register", function(req, res){
  console.log(req.body.username);
  console.log(req.body.password);
  User.register(new User({username: req.body.username}), req.body.password, function(err, user){
      if(err){
          console.log(err);
          return res.render("register");
      }
      passport.authenticate("local")(req, res, function(){
          res.redirect("/secret");
      });
  });
});


app.get("/register", function(req, res){
  res.render("register");
});


app.use("/user", userRoute);
app.use("/course", courseRoute);


app.listen(3000, () => {
    console.log("server listen on port 3000");
})