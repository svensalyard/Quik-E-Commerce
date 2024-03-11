const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", (req, res) => {
	// find all categories
	Category.findAll({ include: [Product] })
		.then((categoryData) => res.json(categoryData))
		.catch((err) => {
			console.log(err);
		});
});

router.get("/:id", (req, res) => {
	// find one category by its `id` value
	Category.findOne({
		where: { id: req.params.id },
		include: [Product],
	})
		.then((categoryData) => res.json(categoryData))
		.catch((err) => {
			console.log(err);
		});
});

router.post("/", (req, res) => {
	// create a new category
	Category.create(req.body)
		.then((categoryData) => res.json(categoryData))
		.catch((err) => {
			console.log(err);
		});
});

router.put("/:id", (req, res) => {
	// update a category by its `id` value
	Category.update(req.body, {
		where: {
			id: req.params.id,
		},
	})
		.then((categoryData) => res.json(categoryData))
		.catch((err) => {
			console.log(err);
		});
});

router.delete("/:id", (req, res) => {
	// delete a category by its `id` value
	Category.destroy({ where: { id: req.params.id } })
		.then((categoryData) => res.json(categoryData))
		.catch((err) => {
			console.log(err);
		});
});

module.exports = router;
