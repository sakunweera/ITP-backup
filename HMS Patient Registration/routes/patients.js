const express = require('express');
const patients = require('../models/patients');
const Patients = require('../models/patients');

const router = express.Router();               //express router used to access requests

//Add Patients
router.post('/patients/add',(req,res)=> {
    
    let newPatient = new Patients(req.body);   //instantiate patients

    newPatient.save((err) => {
        if(err) {
            return res.status(400).json({       //if error occurs push error
                error:err
            });
        }
        return res.status(200).json({
            success: "Patient added successfully"
        });
    });

});


//get Patients
router.get('/patients',(req,res) =>{
    Patients.find().exec((err,patients) => {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingPatients:patients
        });
    });
});


//get a specific patient
router.get("/patients/:id",(req,res) =>{

    let PatientId = req.params.id;

    patients.findById(PatientId,(err,patients) =>{
        if(err){
            return res.status(400).json({success:false, err});
        }

        return res.status(200).json({
            success:true,
            patients
        });
    });


});






//Update Patients
router.put('/patients/update/:id',(req,res)=>{
    Patients.findByIdAndUpdate(
    req.params.id,
    {
        $set:req.body
    },
    (err,post)=>{
       if(err){ 
        return res.status(400).json({error:err});
    }
    return res.status(200).json({
        success:"Updated Successfully"
    });
    }
    );

});


//delete

router.delete('/patients/delete/:id',(req,res)=>{
    Patients.findByIdAndRemove(req.params.id).exec((err,deletedPatient) => {

        if(err) return res.status(400).json({
            message:"Delete unsuccessful",err
        });

        return res.json({
            message:"Delete Successful",deletedPatient
        });
    });
});    



module.exports = router;