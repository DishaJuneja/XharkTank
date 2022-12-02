const Pitch = require('../models/pitchess');
const Investor = require('../models/investorss');



module.exports.newPitch =async function(req,res){
 try{
    let newPitch = await Pitch.create({
    entrepreneur:req.body.entrepreneur,
    pitchTitle:req.body.pitchTitle,
    pitchIdea:req.body.pitchIdea,
    askAmount:req.body.askAmount,
    equity:req.body.equity

   });
   if(!newPitch){
        res.status(400).send("Invalid request body");
   }else{
    console.log(newPitch);
    return res.status(201).json({
             id:newPitch._id,
    });


       
}
 }catch(err){
    console.log("error in creating pitch");
    return  res.status(400).send("Invalid request body");
 }
}

module.exports.newInvestor =async function(req,res){
   
    try{
        let pitchAsked = req.params.id;
        let pitch = await Pitch.findById(pitchAsked);
        if(!pitch){
            return res.status(404).send("Pitch Not Found");
        }
        
        let newInvestor = await Investor.create({
        investor:req.body.investor,
        amount:req.body.amount,
        equity:req.body.equity,
        comment:req.body.comment,
       
    
       });
       if(!newInvestor){
            return res.status(400).send("Invalid request body");
       }else{
            pitch.offers.push(newInvestor);
            pitch.save();
        return res.status(201).json({
                 id:newInvestor.id,
        });
           
    }
     }catch(err){
        console.log("error in creating investor");
        return  res.status(400).send("Invalid request body");
}
}

module.exports.allPitches =async function(req,res){

    let pitches = await Pitch.find({},{id:1,entrepreneur:1,pitchTitle:1,pitchIdea:1,askAmount:1,equity:1,offers:1})
            .sort('-createdAt')
            .populate('offers',{id:1,investor:1,amount:1,equity:1,comment:1});
 if(!pitches){
     console.log("cannot fetch pitches");
     return;

 }

//console.log(pitches.length);
// return res.status(200).json({
    
// pitches:pitches
// });

return res.status(200).send(pitches);
}


module.exports.oneSpecificPitch = async function(req,res){
  //  console.log("*****here***");
  try{
let id = req.params.id;
    let pitch =await  Pitch.findById(id).populate('offers',{id:1,investor:1,amount:1,equity:1,comment:1});;
          
return res.status(200).json({
    id:pitch.id,
    entrepreneur:pitch.entrepreneur,
    pitchTitle:pitch.pitchTitle,
    pitchIdea:pitch.pitchIdea,
    askAmount:pitch.askAmount,
    equity:pitch.equity,
    offers:pitch.offers,
});
  }catch(err){
    console.log("error in specific pitch finding");
    return res.status(404).send("Pitch Not Found");
  }
}














/*const Pitch = require('../models/pitchess');
const Investor = require('../models/investorss');


module.exports.newPitch =async function(req,res){
 try{
    let newPitch = await Pitch.create({
    entrepreneur:req.body.entrepreneur,
    pitchTitle:req.body.pitchTitle,
    pitchIdea:req.body.pitchIdea,
    askAmount:req.body.askAmount,
    equity:req.body.equity
   });
   if(!newPitch){
        res.status(400).send();
   }else{
    return res.status(201).json({
             id:newPitch._id,
    });
       
}
 }catch(err){
    console.log("error in creating pitch");
    return  res.status(400).send();
 }
}

module.exports.newInvestor =async function(req,res){
   
    try{
        let askedPitch= req.params.id;
        let pitch = await Pitch.findById(askedPitch);
        if(!pitch){
            return res.status(404).send();
        }
        
        let newInvestor = await Investor.create({
        investor:req.body.investor,
        amount:req.body.amount,
        equity:req.body.equity,
        comment:req.body.comment,
       });
       if(!newInvestor){
            return res.status(400).send();
       }else{
            pitch.offers.push(newInvestor);
            pitch.save();
        return res.status(201).json({
                 id:newInvestor._id,
        });
    }
     }catch(err){
        console.log("error in creating investor");
        return  res.status(400).send();
}
}

module.exports.allPitches =async function(req,res){
    let pitches = await Pitch.find({},{_id:1,entrepreneur:1,pitchTitle:1,pitchIdea:1,askAmount:1,equity:1,offers:1})
            .sort('-createdAt')
            .populate('offers',{_id:1,investor:1,amount:1,equity:1,comment:1});
return res.status(200).send(pitches);
}

module.exports.oneSpecificPitch = async function(req,res){
  try{
let id = req.params.id;
    let pitch =await Pitch.findById(id,{id:1,entrepreneur:1,pitchTitle:1,pitchIdea:1,askAmount:1,equity:1,offers:1});

return res.status(200).json({
    id:pitch._id,
    entrepreneur:pitch.entrepreneur,
    pitchTitle:pitch.pitchTitle,
    pitchIdea:pitch.pitchIdea,
    askAmount:pitch.askAmount,
    equity:pitch.equity,
    offers:pitch.offers,
});

  }catch(err){
    console.log("error in specific pitch finding");
    return res.status(404).send();
  }
}
*/