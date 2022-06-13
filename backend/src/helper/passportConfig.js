const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = process.env;

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:5500/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      /**
       * Nous allons ici récupérer les données du profile de Google
       * et les stocker dans une base de données
       */
      //console.log({ profile });
      done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
