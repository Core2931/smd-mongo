import mongoose from "mongoose";

mongoose.Promise = Promise;
mongoose.connect(process.env.MONGOOSE_URI ?? "mongodb+srv://Admin:1234@cluster0.biswt.mongodb.net/test", {
  dbName: process.env.MONGOOSE_DBNAME ?? "smd-project",
  promiseLibrary: Promise,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});
