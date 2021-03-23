const mongoose = require('mongoose');
const { Schema } = mongoose;
// override default deprecated ensureIndex syntax
mongoose.set('useCreateIndex', true);
const AutoIncrement = require('mongoose-sequence')(mongoose);

// Schema
const menuSchema = new Schema(
    {
        menuName: {
            type: String
        },
        menuDescription: {
            type: String
        },
        parentMenuName: {
            type: String
        },
        menuIconClass: {
            type: String
        },
        rolesRequiredForAccess: {
            type: Array
        },
       subMenus: {
           type: Array
       }
        
    },
    { collection: 'menu' });

menuSchema.plugin(AutoIncrement, {
    inc_field: 'menuId'
});

module.exports = mongoose.model('Menu', menuSchema);

