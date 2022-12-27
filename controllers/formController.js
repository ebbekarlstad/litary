const Form = require('../models/form');

const form_index = (req, res) => {
    Form.find().sort({createdAt: -1})
    .then((result) =>{
        res.render('discussion', {title: 'Diskussioner', posts: result})
    })
    .catch((err) => {
        console.log(err);
    });
}

const form_details = (req, res) => {
    const id = req.params.id;
    Form.findById(id)
        .then(result =>{
            res.render ('details', { form: result, title: 'Visa Recension'});
        })
        .catch(err => {
            res.status(404).render('404', {title: 'Error 404'});
        });
}

const form_create_get = (req, res) => {
    res.render('create', {title: 'Skapa Recension'});
}

const form_create_post = (req, res) => {
    const form = new Form(req.body);

    form.save()
        .then((result) => {
            res.redirect('/discussion');
        })
        .catch((err) => {
            console.log(err);
        });
}

module.exports = {
    form_index,
    form_details,
    form_create_get,
    form_create_post
}