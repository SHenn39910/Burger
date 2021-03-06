const express = require("express");
const router = express.Router()
router.get("/", function() {
    burger.selectAll(function(data){
        var hdbrsObj = {
            burgers: data
        };
        console.log()
    })
    
})

router.put("/:id", function(req, res) {
	var condition = "id = " + req.params.id;

	console.log("condition", condition);

	burger.updateOne({
		devoured: req.body.devoured
	}, condition, function(result) {
		if (result.changedRows == 0) {
			// If no rows were changed, then the ID must not exist, so 404
			return res.status(404).end();
		} else {
			res.status(200).end();
		}
	});
});




// Export routes for server.js to use.
module.exports = router;
