import { Schema, model } from "mongoose";

const resourceSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
});

const Resource = model("Resource", resourceSchema);

export default Resource;
