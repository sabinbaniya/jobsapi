const { StatusCodes } = require("http-status-codes");

const Job = require("../Models/JobsModel");
const BadRequestError = require("../Errors/BadRequestError");
const { isValidObjectId } = require("mongoose");

const createJob = async (req, res) => {
  const { userId, company, position } = req.body;

  if (
    !userId ||
    !company ||
    !position ||
    userId === "" ||
    company === "" ||
    position === ""
  ) {
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
  const { userId } = req.body;

  if (!userId || userId === "") {
    throw new BadRequestError("Please provide a user id");
  }

  const jobs = await Job.find({ createdBy: userId }).sort(Job.createdAt);

  res.status(StatusCodes.OK).json({ jobs });
};

const getSingleJob = async (req, res) => {
  const { id } = req.params;
  const { userId, name } = req.body.user;

  console.log(userId, name);
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
