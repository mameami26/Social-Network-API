// utils/data.js

const users = [
  {
    username: 'johnDoe',
    email: 'john.doe@example.com',
  },
  {
    username: 'janeDoe',
    email: 'jane.doe@example.com',
  },
  {
    username: 'user123',
    email: 'user123@example.com',
  },
];

const thoughts = [
  {
    thoughtText: "Here's a cool thought...",
    username: 'johnDoe',
  },
  {
    thoughtText: 'I love coding in JavaScript!',
    username: 'janeDoe',
  },
  {
    thoughtText: 'MongoDB makes storing data a breeze.',
    username: 'user123',
  },
];

module.exports = { users, thoughts };
