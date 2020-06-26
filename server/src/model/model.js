const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ProjectsSchema = new Schema({
        name: String,
        description: {short:String, long:String},
        tools: Array,
        website: {url: String, snapshot: String},
        repository: {domain: String, url: String},
        resources: [{describe: String, link: String, tag: String}],
        category: String,
        completed: Boolean,
    },
    {timestamps: true}
);


module.exports = mongoose.model('Projects', ProjectsSchema);