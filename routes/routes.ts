const express = require("express");
const delSubRoute = require("./delSubRoutes");
const { getEmployeeData } = require("./router-controller");

const router = express.Router({ mergeParams: true });
router.use("/employee", delSubRoute);

router.route("/allEmployee").get(getEmployeeData);

module.exports = router;
export {};
