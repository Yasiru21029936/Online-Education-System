const router = require('express').Router();
const { count } = require('../models/Billpayment');
const BillPayment = require('../models/Billpayment');

//http://localhost:8080/
// View All the Bills

router.route("/").get(async (req,res) =>{
   await BillPayment.find().then((Bills) =>{
        res.status(200).send({status :" Data Recieved",Bills : Bills});
    }).catch((err)=>{
        res.status(400).send({status :err}) 
    })
})

router.route("/addBill").post(async (req,res) =>{
    const {BillCategory,Description,Account,Date} = req.body;

    console.log(BillCategory)
    const Remark = req.files.Remark;
    // const remarkName = Remark.name;
    
    const remarkName = Remark.name;
    console.log(remarkName)

    const newBill = new BillPayment({
        BillCategory,
        Description,
        Account,
        Date,
        Remark:remarkName
    })

    Remark.mv('Assests/UtilityBills/'+remarkName,err =>{
        console.log(err);
    }) 

    await newBill.save().then(()=>{
        res.status(200).send({status:"New Bill Added"})
    }).catch((e)=>{
        res.status(400).send({status : e})
        // console.log(e)
    })
})


router.route("/delete/:id").delete((req,res)=>{
    const id  = req.params.id;
    BillPayment.findByIdAndDelete(id).then(()=>{
        res.status(200).send({state:"Deleted Successfully"});
    }).catch(err =>{
        res.status(100).send({state:err});
        
    })

})

router.route("/getCount").get(async(req,res)=>{
    const labels = ['telehpone', 'water', 'internet', 'other'];
    
    var counts = [];
    labels.map((elem) =>{
        var categoryCount  = BillPayment.find({BillCategory:elem})
        categoryCount.count(function (err, count) {
            if (err) console.log(err)
            else {
                var obj = {name : elem}
                // console.log(obj.name + count)
                counts.push(obj.name+":"+ count)
                // console.log("Count for "+elem, count)

                // console.log("count length "+counts.length)
                if(counts.length === 4){
                    // console.log(JSON.stringify(counts))
                    res.status(200).send({number : JSON.stringify(counts)})
                }
            }
        });

    })
})


module.exports = router;