const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const { transporter, mailOptions } = require("../nodemailer/nodemailer");

const User = require("../../models/schemas/user");

passport.serializeUser((user, done) => {
  done(null, user.id);
});
passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});

passport.use(
  "local-signup",
  new localStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      passReqToCallback: true,
    },
    async (req, email, password, done) => {
      const user = await User.findOne({ email: email });
      console.log(user);
      if (user) {
        return done(
          null,
          false,
          req.flash("signUpMessage", "El email ya está registrado")
        );
      } else {
        const newUser = new User();
        newUser.email = email;
        newUser.password = newUser.encryptPassword(password);
        console.log(newUser);
        await newUser.save();
        const info = await transporter.sendMail(mailOptions);
        done(null, newUser);
      }
    }
  )
);

passport.use(
  "local-signin",
  new localStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      passReqToCallback: true,
    },
    async (req, email, password, done) => {
      const user = await User.findOne({ email: email });
      if (!user) {
        return done(
          null,
          false,
          req.flash("signInMessage", "Usuario no encontrado")
        );
      }
      if (!user.comparePassword(password)) {
        return done(
          null,
          false,
          req.flash("signInMessage", "Contraseña incorrecta")
        );
      }
      done(null, user);
    }
  )
);
