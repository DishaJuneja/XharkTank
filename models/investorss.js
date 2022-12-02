
const mongoose =  require('mongoose');

const investoresSchema = new mongoose.Schema({
    investor:{
        type:String,
        required:true
    },
    amount:{
     type:Number,
     required:true
    },
    equity:{
        type:Number,
        required:true,
        min:0,
        max:100
    },
    comment:{
        type:String,
        required:true
    },
    
},{
    timestamps:true
});

investoresSchema.virtual('id').get(function(){
    return this._id.toHexString();
});

// // Ensure virtual fields are serialised.
// investorSchema.set('toJSON', {
//     virtuals: true
// });

investoresSchema.set('toJSON', {
    virtuals: true,
    versionKey:false,
    transform: function (doc, ret) {   delete ret._id  }
  });
  investoresSchema.set('toObject', { virtuals: true })

const Investor = mongoose.model('Investor',investoresSchema);
module.exports=Investor;