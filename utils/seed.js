const connection = require('../config/connection');
const { User, Thought } = require('../models'); // Ensure path is correct
const { users, thoughts } = require('./data');

connection.on('error', (err) => console.error(err));

connection.once('open', async () => {
  console.log('connected');

  // Delete existing collections if they exist
  await connection.db.dropCollection('users').catch(() => {});
  await connection.db.dropCollection('thoughts').catch(() => {});

  // Create and populate users
  const userData = await User.create(users);

  // Create and populate thoughts
  const thoughtData = await Thought.create(thoughts);

  console.table(userData);
  console.table(thoughtData);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
