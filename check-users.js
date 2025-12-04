const mongoose = require('mongoose');
const User = require('./backend/models/userModel');

mongoose.connect('mongodb+srv://hemanthsankarreddy_db_user:bVwG2nAbd4tmWpfS@cluster0.yjrazgq.mongodb.net/favcart?retryWrites=true&w=majority&appName=Cluster0')
  .then(async () => {
    console.log('\n📋 Current users in database:\n');
    const users = await User.find({}).select('name email createdAt').lean();
    
    if (users.length === 0) {
      console.log('No users found in database.');
    } else {
      users.forEach((u, i) => {
        console.log(`${i + 1}. Email: ${u.email}`);
        console.log(`   Name: ${u.name}`);
        console.log(`   Created: ${new Date(u.createdAt).toLocaleString()}\n`);
      });
    }
    
    console.log(`Total users: ${users.length}\n`);
    process.exit(0);
  })
  .catch(e => {
    console.error('Error:', e.message);
    process.exit(1);
  });
