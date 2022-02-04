const router = require("express").Router();

const {
  login,
  register,
  getAllJobs,
  createJob,
  updateJob,
  deleteJob,
} = require("../Controllers/controllers");

router.route("/api/v1/login").post(login);
router.route("/api/v1/register").post(register);
router.route("/api/v1/jobs").get(getAllJobs);
router
  .route("/api/v1/job/:id")
  .post(createJob)
  .patch(updateJob)
  .delete(deleteJob);

module.exports = router;
