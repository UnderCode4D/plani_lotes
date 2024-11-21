const bcrypt = require('bcrypt');
const User = require('../models/userModel');
const createError = require('../utils/appError');

// Create a new user
exports.createUser = async (req, res, next) => {
  try {
    const { name, role, email, password, state } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return next(new createError('El usuario ya existe', 400));
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = await User.create({
      name,
      role,
      email,
      password: hashedPassword,
      state,
    });

    res.status(201).json({
      status: 'success',
      data: {
        user: newUser,
      },
    });
  } catch (error) {
    next(error);
  }
};

// Get all users
exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json({
      status: 'success',
      results: users.length,
      data: {
        users,
      },
    });
  } catch (error) {
    next(error);
  }
};

// Get a single user by ID
exports.getUserById = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return next(new createError('Usuario no encontrado', 404));
    }
    res.status(200).json({
      status: 'success',
      data: {
        user,
      },
    });
  } catch (error) {
    next(error);
  }
};

// Update a user by ID
exports.updateUserById = async (req, res, next) => {
  try {
    const { name, role, email, state } = req.body;

    const user = await User.findByIdAndUpdate(
      req.params.id,
      { name, role, email, state },
      { new: true, runValidators: true }
    );

    if (!user) {
      return next(new createError('Usuario no encontrado', 404));
    }

    res.status(200).json({
      status: 'success',
      data: {
        user,
      },
    });
  } catch (error) {
    next(error);
  }
};

// Delete a user by ID
exports.deleteUserById = async (req, res, next) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return next(new createError('Usuario no encontrado', 404));
    }
    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (error) {
    next(error);
  }
};