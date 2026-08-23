const fs = require('fs');
const mongoose = require('mongoose');
const Trip = require('./travlr');

const host = process.env.DB_HOST || '127.0.0.1';
const dbURI = `mongodb://${host}/travlr`;

const trips = JSON.parse(
    fs.readFileSync('./app_server/data/trips.json', 'utf8')
);

mongoose.connect(dbURI)
    .then(async () => {
        console.log(`Mongoose connected to ${dbURI}`);

        // Remove existing trip records
        await Trip.deleteMany({});

        // Insert seed data
        await Trip.insertMany(trips);

        console.log(`${trips.length} trips inserted successfully`);

        await mongoose.connection.close();
        console.log('Mongoose disconnected');
    })
    .catch((err) => {
        console.error('Database seed error:', err);
        process.exit(1);
    });