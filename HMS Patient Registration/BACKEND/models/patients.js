const mongoose = require('mongoose'); //to connect with db

const patientsSchema = new mongoose.Schema({

    covidp:{                 
        type:String,
        
    },
    pfname:{                 
        type:String,
        required:true
    },
    plname:{                 
        type:String,
        required:true
    },
    regdate:{                 
        type:Date,
        required:true
    }, 
    lastdate:{                 
        type:Date,
        required:true
    },
    pnum:{                 
        type:Number,
        required:true
    },
    ename:{                 
        type:String,
        required:true
    },
    enums:{                 
        type:Number,
        required:true
    },
    disdate:{                 
        type:Date,      
    },

    bltype:{                 
        type:String,
        required:true
    },
    gender:{                 
        type:String,
        required:true
    },
    city:{                 
        type:String,
        required:true
    },
    street:{                 
        type:String,
        required:true
    },
    history:{                 
        type:String,
        required:true
    },
    ptype:{                 
        type:String,
        required:true
    },
    status:{                 
        type:String,
        required:true
    },
  

});

module.exports = mongoose.model('Patients',patientsSchema);