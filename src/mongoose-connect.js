import mongoose from "mongoose";

mongoose.Promise = Promise;
mongoose.connect("mongodb+srv://Admin:1234@cluster0.biswt.mongodb.net/test", {
  dbName:"smd-project",
  promiseLibrary: Promise,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});
