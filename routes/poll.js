const express = require('express');
const router = express.Router();



const Pusher = require("pusher");

var pusher = new Pusher({
  appId: "1462335",
  key: "2b7680353932fa8430ce",
  secret: "d57d0e47fc59a93aa8c4",
  cluster: "ap2",
  useTLS: true
});



router.get('/', (req, res) => {
    res.send('Poll');
});

router.post('/',(req,res)=>{
    pusher.trigger('os-poll', 'os-vote', {
        os: req.body.os,
        points: 1
      });
      return res.json({ success: true, message: 'Thank you for voting' });
});






module.exports=router; 