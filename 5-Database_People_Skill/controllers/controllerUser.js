var mongoose  = require('mongoose')
var User      = require('../models/user')
var seedUsers = require('../seeders/users')

module.exports = {
  seed: (req, res) => {
    mongoose.connection.db.dropCollection('users', (err, result) => {
      if (err) {
        res.send(err)
      } else {
        res.send('Success seed all data user!')
      }
    })

    User.create(seedUsers, (err, users) => {
      if (err) {
        res.send(err)
      } else {
        res.json(users)
      }
    })
  },

  addUser: (req, res) => {
    let jsonSkill = JSON.parse(req.body.skills)
    let getSkill  = jsonSkill.map((user, index) => {
      return user.skill
    })

    function validateSkill(getSkill) {
      return getSkill.length === new Set(getSkill).size
    }

    if (validateSkill(getSkill)) {
      User.create({
        name: req.body.name,
        skills: jsonSkill
      }, (err, user) => {
        if (err) {
          res.send(err)
        } else {
          res.json(user)
        }
      })
    } else {
      res.json('Sorry, you can not have a duplicate skill.')
    }
  },

  getAll: (req, res) => {
    User.find({}, (err, users) => {
      if (err) {
        res.send(err)
      } else {
        res.json(users)
      }
    })
  },

  getOne: (req, res) => {
    User.findById(req.params.id, (err, user) => {
      if (err) {
        res.send(err)
      } else {
        res.json(user)
      }
    })
  },

  delete: (req, res) => {
    User.findByIdAndRemove(req.params.id, (err, user) => {
      if (err) {
        res.send(err)
      } else {
        res.json(user)
      }
    })
  },

  addSkill: (req, res) => {
    let jsonSkill = JSON.parse(req.body.skills)
    User.findByIdAndUpdate(
      req.params.id, {
        $push: {
          skills: {
            $each: jsonSkill
          }
        }
      }, {
        new: true
      }, (err, result) => {
        if (err) {
          res.send(err)
        } else {
          res.json(result)
        }
      })
  },

  updateSkill: (req, res) => {
    let jsonSkill = JSON.parse(req.body.skills)
    User.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        skills: jsonSkill
      }, {
        new: true
      }, (err, result) => {
        if (err) {
          res.send(err)
        } else {
          res.json(result)
        }
      })
  },

  deleteSkill: (req, res) => {
    User.findByIdAndUpdate(
      req.params.id, {
        $pull: {
          skills: {
            skill: req.body.skill
          }
        }
      }, {
        new: true
      }, (err, result) => {
        if (err) {
          res.send(err)
        } else {
          res.json(result)
        }
      })
  }
}
