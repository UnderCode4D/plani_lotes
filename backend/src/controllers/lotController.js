const Lot = require('../models/lotModel');
const createError = require('../utils/appError');

// Create a new lot
exports.createLot = async (req, res, next) => {
  try {
    const newLot = await Lot.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        lot: newLot,
      },
    });
  } catch (error) {
    next(error);
  }
};

// Get all lots
exports.getAllLots = async (req, res, next) => {
  try {
    const lots = await Lot.find();
    res.status(200).json({
      status: 'success',
      results: lots.length,
      data: {
        lots,
      },
    });
  } catch (error) {
    next(error);
  }
};

// Get a single lot by ID
exports.getLotById = async (req, res, next) => {
  try {
    const lot = await Lot.findById(req.params.id);
    if (!lot) {
      return next(new createError('Lote no encontrado', 404));
    }
    res.status(200).json({
      status: 'success',
      data: {
        lot,
      },
    });
  } catch (error) {
    next(error);
  }
};

// Update a lot by ID
exports.updateLotById = async (req, res, next) => {
  try {
    const lot = await Lot.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!lot) {
      return next(new createError('Lote no encontrado', 404));
    }

    res.status(200).json({
      status: 'success',
      data: {
        lot,
      },
    });
  } catch (error) {
    next(error);
  }
};

// Delete a lot by ID
exports.deleteLotById = async (req, res, next) => {
  try {
    const lot = await Lot.findByIdAndDelete(req.params.id);
    if (!lot) {
      return next(new createError('Lote no encontrado', 404));
    }
    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (error) {
    next(error);
  }
};