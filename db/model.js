import mongoose from 'mongoose'

const Schema = mongoose.Schema;

//yjl
const yjlSchema = new Schema({
    img_list: {type: String},
    remark: {type: String},
    isShow : { type : Boolean},
    created: {type: Date}
});

const Yjl = mongoose.model('yjl', yjlSchema);
//team
const teamSchema = new Schema({
    name: {type: String,require: true},
    intro: {type: String},
    img_list: {type: Array},
    logo: {type: String},
    isShow : { type : Boolean},
    created: {type: Date}
});

const Team = mongoose.model('team', teamSchema);
//activity
const activitySchema = new Schema({
    name: {type: String,require: true},
    intro: {type: String},
    url: {type: String},
    isShow : { type : Boolean},
    created: {type: Date}
});

const Activity = mongoose.model('activity', activitySchema);
//research
const researchSchema = new Schema({
    name: {type: String,require: true},
    url: {type: String},
    isShow : { type : Boolean},
    created: {type: Date}
});

const Research = mongoose.model('research', researchSchema);
//product
const productSchema = new Schema({
    name: {type: String,require: true},
    intro : {type : String},
    url: {type: String},
    img_list: {type: Array},
    isShow : { type : Boolean},
    created: {type: Date}
});
const Product = mongoose.model('product', productSchema);
// invite 
const inviteSchema = new Schema({
    name: {type: String,require: true},
    money: {type: String},
    url: {type: String},
    company: {type: String},
    isShow : { type : Boolean},
    created: {type: Date}
});

const Invite = mongoose.model('invite', inviteSchema);

export {
    Yjl,
    Team,
    Activity,
    Research,
    Product,
    Invite
}