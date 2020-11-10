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
  .post(async (req, res)=> {
    try {
      await coll.upsert(`user_${req.body.username}`, req.body)
      res.send('success')
    } catch (error) {
      res.send('failed')
    }
  })

module.exports = router

