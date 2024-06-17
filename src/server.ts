/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */

console.clear();

import app from './app';
import config from './app/config';
import mongoose from 'mongoose';
import { Server } from 'http';

let server: Server;

async function main() {
  try {
    await mongoose.connect(config.databaseURL as string); // Connect to MongoDB
    server = app.listen(config.port, () => {
      // Start the server
      console.log(`Server is running on port ${config.port}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
  }
}

main().catch((err) => console.error('Unexpected error in main():', err));

process.on('unhandledRejection', () => {
  // Handle unhandled promise rejections
  console.log(`unhandledRejection is detected Shutting Down..`);
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});

process.on('uncaughtException', () => {
  console.log(`uncaughtException is Detected, Shutting Down..`);
});
