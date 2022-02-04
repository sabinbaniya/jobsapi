const router = require("express").Router();

const {
  getSingleJob,
  getAllJobs,
  createJob,
  updateJob,
  deleteJob,
} = require("../Controllers/jobs");

router.route("/").post(createJob).get(getAllJobs);
router.route("/:id").get(getSingleJob).patch(updateJob).delete(deleteJob);

module.exports = router;
