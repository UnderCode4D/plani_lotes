const RoleCount = require('../models/roleCountModel');
const createError = require('../utils/appError');

// Create a new role count
exports.createRoleCount = async (req, res, next) => {
  try {
    const { role, count } = req.body;
    const newRoleCount = await RoleCount.create({ role, count });

    res.status(201).json({
      status: 'success',
      data: {
        roleCount: newRoleCount,
      },
    });
  } catch (error) {
    next(error);
  }
};

// Get all role counts
exports.getAllRoleCounts = async (req, res, next) => {
  try {
    const roleCounts = await RoleCount.find();
    res.status(200).json({
      status: 'success',
      results: roleCounts.length,
      data: {
        roleCounts,
      },
    });
  } catch (error) {
    next(error);
  }
};

// Get a single role count by ID
exports.getRoleCountById = async (req, res, next) => {
  try {
    const roleCount = await RoleCount.findById(req.params.id);
    if (!roleCount) {
      return next(new createError('Role count not found', 404));
    }
    res.status(200).json({
      status: 'success',
      data: {
        roleCount,
      },
    });
  } catch (error) {
    next(error);
  }
};

// Update a role count by ID (only update count)
exports.updateRoleCountById = async (req, res, next) => {
  try {
    const { count } = req.body;
    const roleCount = await RoleCount.findByIdAndUpdate(
      req.params.id,
      { count },
      { new: true, runValidators: true }
    );

    if (!roleCount) {
      return next(new createError('Role count not found', 404));
    }

    res.status(200).json({
      status: 'success',
      data: {
        roleCount,
      },
    });
  } catch (error) {
    next(error);
  }
};

// Delete a role count by ID
exports.deleteRoleCountById = async (req, res, next) => {
  try {
    const roleCount = await RoleCount.findByIdAndDelete(req.params.id);
    if (!roleCount) {
      return next(new createError('Role count not found', 404));
    }
    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (error) {
    next(error);
  }
};