const fakeData = require('../data/fake-db');

module.exports = {
    index,
    show,
    newSkill,
    create,
    update,
    deleteIt
};

function index(req, res) {
    res.render('index', {
        fakeData: fakeData.getAll()
    })
};

function newSkill(req, res) {
    res.render('new');
}

function show(req, res) {
    res.render('skills', {
        skill: fakeData.getOne(req.params.id),
        skillNum: parseInt(req.params.id) + 1
    });
}

function create(req, res) {
    console.log(req.body);
    req.body.done = false;
    fakeData.create(req.body);
    res.redirect('/');
}

function update(req, res) {
    fakeData.update(req.body, req.params.id);
    res.redirect(`/index${req.params.id}`);
}
function deleteIt(req, res) {
    fakeData.deleteIt(req.params.id);
    res.redirect('/');
}
