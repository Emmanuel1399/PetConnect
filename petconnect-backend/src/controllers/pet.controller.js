const petServices = require('../services/pet.services')

const getAllPets = async(req, res)=>{
    try {
        const pets = await petServices.getAllPets();
        res.json(pets);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}
const getPetById = async(req, res)=>{
    try {
        const pet = await petServices.getPetById(req.params.id);
        res.json(pet);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}
const createPet = async(req, res)=>{
    try {
        const newPet = await petServices.createPet(req.body);
        res.status(201).json(newPet)
    } catch (err) {
        res.status(400).json({error: err.message});
    }
}
const updatePet = async(req, res)=>{
    try {
        const updatedPet = await petServices.updatePet(req.params.id,req.body);
        if(!updatedPet)
            return res.status(404).json({message: 'Pet not found'})
        res.json(updatedPet);
    } catch (err) {
        res.status(400).json({error: err.message});
    }
}

const deletePet = async(req, res)=>{
    try {
        const deletedPet = await petServices.deletePet(req.params.id);
        if(!deletedPet)
            return res.status(404).json({message: 'Pet not found'})
        res.json({message: 'Pet deleted succesfully'});
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}

module.exports = {
    getAllPets,
    getPetById,
    createPet,
    updatePet,
    deletePet
}
