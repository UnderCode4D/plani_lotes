const bcrypt = require('bcrypt');
const User = require('../models/userModel');
const createError = require('../utils/appError');
const { generateToken } = require('../utils/authUtils');

// Register user
exports.signup = async (req, res, next) => {
  try {
    const adminOrOwnerUser = await User.findOne({
      $or: [{ role: 'Administrador' }, { role: 'Dueño' }]
    });

    if (adminOrOwnerUser && (req.body.role === 'Administrador' || req.body.role === 'Dueño')) {
      return next(
        new createError(
          'Ya existe un administrador o dueño asignado. No se pueden registrar más administradores o dueños.',
          403
        )
      );
    }

    const user = await User.findOne({ email: req.body.email });
    if (user) {
      return next(new createError('El usuario ya existe', 400));
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 12);

    const newUser = await User.create({
      ...req.body,
      password: hashedPassword,
      active: true,
    });

    // Assing JWT (json web token) to user
    const token = generateToken(newUser._id);

    res.status(201).json({
      status: 'success',
      message: 'Usuario registrado exitosamente',
      token,
      user: {
        _id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
        active: newUser.active,
      },
    });
  } catch (error) {
    next(error);
  }
};

// Login user
exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) return next(new createError('Usuario no encontrado', 404));

    if (user.active === false)
      return next(new createError('Usuario sin autorización', 403));

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return next(new createError('Contraseña o email incorrecto', 401));
    }

    // Assing JWT (json web token) to user
    const token = generateToken(user._id);

    res.status(200).json({
      status: 'success',
      token,
      message: 'Inicio de sesión exitoso',
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        active: user.active,
      },
    });
  } catch (error) {
    next(error);
  }
};