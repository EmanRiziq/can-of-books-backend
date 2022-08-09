const mongoose = require('mongoose');
const booksSchema = require('./booksSchema');
const bookModel = mongoose.model('BookModel', booksSchema);

const Zaman_alkhyol_albayda2 = new bookModel({
    title: "زمن الخيول البيضاء",
    description: "A novel that talks about Palestinian history in the early middle of the twentieth century",
    status: true
});
Zaman_alkhyol_albayda2.save();

const Blindness = new bookModel({
    title: "العمى",
    description: "Imagine what will happen when an epidemic of white blindness spreads across the city?",
    status: true
});
Blindness.save();

const Forty = new bookModel({
    title: "أربعون",
    description: "A book containing a summary of the experiences and reflections of Ahmed Al Shugairi after reaching the age of forty",
    status: true
});
Forty.save();
module.exports = bookModel;



