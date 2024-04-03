const mongoose = require('mongoose');
const ModuleSchema = mongoose.Schema(
   {
      name: String,
      code: Number
   }
);

const ModuleModel = mongoose.model("modules", ModuleSchema);
module.exports = ModuleModel;
