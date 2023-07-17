const mongoose =  require('mongoose');

const pitchesSchema = new mongoose.Schema({
    entrepreneur:{
        type:String,
        required:true
    },
    pitchTitle:{
     type:String,
     required:true
    },
    pitchIdea:{
        type:String,
        required:true
    },
    askAmount:{
        type:Number,
        required:true
    },
    equity:{
        type:Number,
        required:true,
        min:0,
        max:100
    },
    offers:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Investor'
    }]
},{
    timestamps:true
});

pitchesSchema.virtual('id').get(function(){
    return this._id.toHexString();
2});

pitchesSchema.set('toJSON', {
    virtuals: true,
    versionKey:false,
    transform: function (doc, ret) {   delete ret._id  }
  });
  pitchesSchema.set('toObject', { virtuals: true })

const Pitch = mongoose.model('Pitch',pitchesSchema);
module.exports=Pitch;