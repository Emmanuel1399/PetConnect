const Pet = require('../models/pet.model');

const getAllPets = async () => await Pet.find();

const getPetById = async () => await Pet.findById(id);

const createPet = async (petData) => await Pet.create(petData);

const updatePet = async (id, updateData) => 
    await Pet.findByIdAndUpdate(id, updateData, {new:true});

const deletePet = async (id) => await Pet.findByIdAndDelete(id);


module.exports = {
    getAllPets,
    getPetById,
    createPet,
    updatePet,
    deletePet
}