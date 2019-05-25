module.exports = app => {
    const save = (req, res) => {
        res.send('user save')
    }

    return { save }
}
// psql -h localhost -U postgres
