const express = require('express');
const router = express.Router();


const bookController= require("../controllers/bookController")
const authorController= require("../controllers/authorController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createBook",bookController.createBook  )

router.post("/createAuthor", authorController.createAuthor)

router.get("/getAuthorBooks", authorController.getAuthorBooks)

router.get("/getBooksAuthor", bookController.getBooksAuthor)



router.get("/bookPrice", bookController.bookPrice )

module.exports = router;