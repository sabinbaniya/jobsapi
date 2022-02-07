const { StatusCodes } = require("http-status-codes");

const Job = require("../Models/JobsModel");
const BadRequestError = require("../Errors/BadRequestError");

const createJob = async (req, res) => {
  const { company, position } = req.body;

  const { userId } = req.body;

  if (!company || !position || company === "" || position === "") {
    throw new BadRequestError("Please provide a user id");
  }

  const job = await Job.create({
    company,
    position,
    createdBy: userId,
  });

  res.status(StatusCodes.CREATED).json({ job });
};

const getAllJobs = async (req, res) => {
  const { userId } = req.body.user;

  if (!userId || userId === "") {
    throw new BadRequestError("Please provide a user id");
  }

  const jobs = await Job.find({ createdBy: userId }).sort(Job.createdAt);

  res.status(StatusCodes.OK).json({ jobs });
};

const getSingleJob = async (req, res) => {
  const { id } = req.params;
  const { userId, name } = req.body.user;

  // if (!mongoose.Types.ObjectId.isValid(id)) {
  //   throw new BadRequestError("Please provide valid job id");
  // }

  const job = await Job.findOne({ _id: id, createdBy: userId });

  res.status(StatusCodes.OK).json({ job });
};

const updateJob = async (req, res) => {
  const { id } = req.params;
  const { userId } = req.body.user;

  // if (!mongoose.Types.ObjectId.isValid(id)) {
  //   throw new BadRequestError("Please provide valid job id");
  // }

  const updatedJob = await Job.findOneAndUpdate(
    { _id: id, createdBy: userId },
    req.body,
    { new: true, runValidators: true }
  );

  if (!updatedJob) {
    throw new BadRequestError("Couldn't find job");
  }

  res.status(StatusCodes.OK).json({ updatedJob });
};

const deleteJob = async (req, res) => {
  const { id } = req.params;

  const { userId } = req.body.user;

  const deletedJob = await Job.findOneAndDelete({
    _id: id,
    createdBy: userId,
  });

  res.status(StatusCodes.OK).json({ deletedJob });
};

module.exports = {
  getSingleJob,
  getAllJobs,
  createJob,
  updateJob,
  deleteJob,
};
