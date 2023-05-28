const router = require('express').Router();
const Classfees = require('../models/Classfees');

//http://localhost:8080/
// View All the Bills

router.route("/").get(async (req,res) =>{
   await Classfees.find().then((fees) =>{
        res.status(200).send({status :" Data Recieved",fee : fees});
    }).catch((err)=>{
        res.status(400).send({status :err}) 
    })
})

router.route("/addfee").post(async (req,res) =>{
    const {Type,Class,Method} = req.body;
    const Remark = req.files.Remark;

    // const remarkName = Remark.name;
    console.log("this runs")
    
    const remarkName = Remark.name;
    console.log("file name "+remarkName)
    
    console.log(Type);
    console.log(Class);
    console.log(Method);

    const newfee = new Classfees({
        Type,
        Class,
        Method,
        Remark : remarkName,
    })

    Remark.mv('Assests/classfees/'+remarkName,(err) =>{
        console.log("This is a file error " +err);
    }) 

    await newfee.save().then(()=>{
        res.status(200).send({state:"Class fee Added !"})
    }).catch((e)=>{
        res.status(400).send({state : e})
        // console.log(e)
    })
})

router.route("/addFeeOnline").post(async(req,res)=>{
    const {Type,Class,Method} = req.body;

    console.log(Type,Class,Method);

    const remarkName = "online.jpg";
    console.log(Type);
    console.log(Class);
    console.log(Method);

    const newfee = new Classfees({
        Type,
        Class,
        Method,
        Remark : remarkName,
    })

    await newfee.save().then(()=>{
        res.status(200).send({state:"Class fee Added !"})
    }).catch((e)=>{
        res.status(400).send({state : e})
        // console.log(e)
    })
    
})


router.route("/getCount").get(async(req,res)=>{
    const labels = ['bank', 'Online','other'];
    
    var counts = [];
    labels.map((elem) =>{
        var categoryCount  = Classfees.find({Method:elem})
        categoryCount.count(function (err, count) {
            if (err) console.log(err)
            else {
                var obj = {name : elem}
                // console.log(obj.name + count)
                counts.push(obj.name+":"+ count)
                // console.log("Count for "+elem, count)

                // console.log("count length "+counts.length)
                if(counts.length === 3){
                    // console.log(JSON.stringify(counts))
                    res.status(200).send({number : JSON.stringify(counts)})
                }
            }
        });

    })
})

router.route("/getCountType").get(async(req,res)=>{
    const labels = ['Paper', 'Theory','Revision'];

    var counts = [];
    labels.map((elem) =>{
        var categoryCount  = Classfees.find({Type:elem})
        categoryCount.count(function (err, count) {
            if (err) console.log(err)
            else {
                var obj = {name : elem}
                // console.log(obj.name + count)
                counts.push(obj.name+":"+ count)
                // console.log("Count for "+elem, count)

                // console.log("count length "+counts.length)
                if(counts.length === 3){
                    // console.log(JSON.stringify(counts))
                    res.status(200).send({number : JSON.stringify(counts)})
                }
            }
        });

    })
})


module.exports = router;