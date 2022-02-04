const login = async (req, res) => {
  res.send("login");
};

const register = async (req, res) => {
  res.send("register");
};

const createJob = async (req, res) => {
  res.send("createJob");
};

const getAllJobs = async (req, res) => {
  res.send("getAllJobs");
};

const updateJob = async (req, res) => {
  res.send("updateJob");
};

const deleteJob = async (req, res) => {
  res.send("deleteJob");
};

module.exports = {
  login,
  register,
  getAllJobs,
  createJob,
  updateJob,
  deleteJob,
};
