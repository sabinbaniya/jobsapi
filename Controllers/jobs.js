const createJob = async (req, res) => {
  res.send("createJob");
};

const getAllJobs = async (req, res) => {
  res.send("getAllJobs");
};

const getSingleJob = async (req, res) => {
  res.send("getSingleJob");
};

const updateJob = async (req, res) => {
  res.send("updateJob");
};

const deleteJob = async (req, res) => {
  res.send("deleteJob");
};

module.exports = {
  getSingleJob,
  getAllJobs,
  createJob,
  updateJob,
  deleteJob,
};
