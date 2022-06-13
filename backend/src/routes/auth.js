const router = require("express").Router();
const passport = require("passport");

const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || "http://localhost:3000";

router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: CLIENT_ORIGIN,
    failureRedirect: "/auth/failure",
  })
);

router.get("/failure", (req, res) => {
  res.status(401).json({ message: "Authenticate failed" });
});

module.exports = router;
