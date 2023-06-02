const { Todo } = require("../models/todo");
// GET all Todos of a user
const findAllTasks = (req, res) => {
  Todo.findAll({ where: { userId: req.userId, archived: false } })
    .then(todos => {
      res.send(todos);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving todos."
      });
    });
};

// GET a single Todo by ID
const findOneTask = (req, res) => {
  const id = req.params.id;

  Todo.findOne({
    where: { id: id, userId: req.userId, archived: false }
  })
    .then(todo => {
      if (todo) res.send(todo);
      else res.status(404).send({ message: "Not found Task with id " + id });
    })
    .catch(err => {
      res.status(500).send({ message: "Error retrieving Task with id=" + id });
    });
};

const createTask = (req, res) => {
  if (!req.body.title) {
    res.status(400).send({ message: "Title can not be empty!" });
    return;
  }

  const todo = {
    title: req.body.title,
    description: req.body.description,
    userId: req.userId
  };

  Todo.create(todo)
  .then(data => {
    res.send({data, message: "Task Created Successfully!"});
  })
  .catch(err => {
    res.status(500).send({ message: err.message });
  });
};

// UPDATE a Todo
const updateTask = (req, res) => {
  const id = req.params.id;
  const {title, description} = req.body

  Todo.update({title, description}, {
    where: { id: id, userId: req.userId, archived: false },
    returning: true,
  })
    .then((num) => {
      if (num[0] >= 1) {
        res.send({
          data: num[1][0],
          message: "Task was updated successfully."
        });
      } else {
        res.status(400).send({
          message: `Cannot update Task id=${id}. Maybe it was not found or req.body is empty or unchanged!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Task with id=" + id
      });
    });
};

const toggleComplete = (req, res) => {
  const id = req.params.id;

  Todo.update({completed: req.body.completed}, {
    where: { id: id, userId: req.userId, archived: false },
    returning: true,
  })
    .then(num => {
      if (num[0] >= 1) {
        res.send({
          data: num[1][0],
          message: "Task was updated successfully."
        });
      } else {
        res.status(404).send({
          message: `Cannot update Task with id=${id}. Maybe it was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Task with id=" + id
      });
    });
}

// DELETE a Todo
const deleteTask = (req, res) => {
  const id = req.params.id;

  Todo.update({ archived: true },{
    where: { id: id, userId: req.userId, archived: false }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Task was deleted successfully!"
        });
      } else {
        res.status(400).send({
          message: `Cannot delete Task with id=${id}. Maybe Task was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Task with id=" + id
      });
    });
};

module.exports = {
  createTask,
  deleteTask,
  findAllTasks,
  findOneTask,
  updateTask,
  toggleComplete,
}