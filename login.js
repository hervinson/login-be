const express = require('express')
const router = express.Router()
//couchbase sample from npm
var couchbase = require('couchbase');
var cluster = new couchbase.Cluster('couchbase://127.0.0.1', {
  username: 'root',
  password: 'login_exam',
});
var bucket = cluster.bucket('login');
var coll = bucket.defaultCollection();


router.route('/')
  .get((req, res)=> { 
    res.send('Hello Login')
  })
  .post(async (req, res)=> {
    try {
      const result = await coll.get(`user_${req.body.username}`)
      const pass = result.value.password

      if (pass === req.body.password) {
        res.send('Success Login')
      } else {
        res.send('Failed')
      }
    } catch (error) {
      res.send('username does not exist')
    }
  })

module.exports = router

