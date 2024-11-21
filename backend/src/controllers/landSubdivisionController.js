const LandSubdivision = require('../models/landSubdivisionModel');
const createError = require('../utils/appError');

// Create a new land subdivision
exports.createLandSubdivision = async (req, res, next) => {
  try {
    const newLandSubdivision = await LandSubdivision.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        landSubdivision: newLandSubdivision,
      },
    });
  } catch (error) {
    next(error);
  }
};

// Get all land subdivisions
exports.getAllLandSubdivisions = async (req, res, next) => {
  try {
    const landSubdivisions = await LandSubdivision.find();
    res.status(200).json({
      status: 'success',
      results: landSubdivisions.length,
      data: {
        landSubdivisions,
      },
    });
  } catch (error) {
    next(error);
  }
};

// Get a single land subdivision by ID
exports.getLandSubdivisionById = async (req, res, next) => {
  try {
    const landSubdivision = await LandSubdivision.findById(req.params.id);
    if (!landSubdivision) {
      return next(new createError('Subdivisión de terreno no encontrada', 404));
    }
    res.status(200).json({
      status: 'success',
      data: {
        landSubdivision,
      },
    });
  } catch (error) {
    next(error);
  }
};

// Update a land subdivision by ID
exports.updateLandSubdivisionById = async (req, res, next) => {
  try {
    const landSubdivision = await LandSubdivision.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!landSubdivision) {
      return next(new createError('Subdivisión de terreno no encontrada', 404));
    }

    res.status(200).json({
      status: 'success',
      data: {
        landSubdivision,
      },
    });
  } catch (error) {
    next(error);
  }
};

// Delete a land subdivision by ID
exports.deleteLandSubdivisionById = async (req, res, next) => {
  try {
    const landSubdivision = await LandSubdivision.findByIdAndDelete(req.params.id);
    if (!landSubdivision) {
      return next(new createError('Subdivisión de terreno no encontrada', 404));
    }
    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (error) {
    next(error);
  }
};