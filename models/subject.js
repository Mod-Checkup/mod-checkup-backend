import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const subjectSchema = new Schema({
    subject_abbr: {
        type: String,
        required: true,
        unique: true,
        max: 7
    },
    subject_name: {
        type: String,
        required: true,
        unique: true
    },
    active: {
        type: Boolean,
        required: true,
        default: true
    }
},{
    timestamps: true,
});

const subjectMessage = mongoose.model('subject', subjectSchema);

export default subjectMessage;