require('dotenv').config();
const  mongoose  = require('mongoose');
const app = require("./app");
const { PORT, DB } = require('./constants');
const envSchema = require('./schema/env.schema');
const { ZodError } = require('zod');

function validateEnvVariable() {
      try {
            const runTime = process.env;
            envSchema.parse(runTime);
            console.log('Env variable validation completed.');
      } catch (error) {
            console.log('Env variable validation failed');
            err = new Error()
            if (error instanceof ZodError) {
                  console.log('Missing/Invalid variables:');
                  console.log('########################');
            }
      }
}

async function connectToDatabase() {
      try {
            mongoose.connect(DB, {
                  useNewUrlParser: true
            });
            console.log(("Connected to mongoDB"));
      } catch (error) {
            console.log('Error while connecting to MongoDB');
            console.log(error);
      }
}

const server = app.listen(PORT, () => {
      console.log(`server running on port:${PORT}`);
});

async function main() {
      validateEnvVariable();
      await connectToDatabase();
      process.on('unhandledRejection', (err) => {
            console.log('UnhandledRejection occurred.');
            console.log(err);
            server.close(() => {
                  process.exit(1)
            })
      })
};
main();


