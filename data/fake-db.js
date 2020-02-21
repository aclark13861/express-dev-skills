const fakeData = [
    {skill: 'React', knowledge: true},
    {skill: 'JavaScript', knowledge: false},
    {skill: 'CSS', knowledge: false},
    {skill: 'express', knowledge: true},
];

module.exports = {
    getAll,
    getOne,
    update,
    create,
    update,
    deleteIt
};

function getAll() {
        return fakeData;
}

function getOne(id) {
    return fakeData[id];
}

function update(skill, id) {
    fakeData.splice(id, 1, skill);
}

function create(skill) {
    return fakeData.push(skill);
}

function update(todo, id) {
    fakeData.splice(id, 1, todo);
}

function deleteIt(id) {
    fakeData.splice(id, 1)
}