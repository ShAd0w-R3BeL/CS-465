/* GET travel page */

const travel = async (req, res) => {
    await fetch('http://localhost:3000/api/trips')
        .then(res => res.json())
        .then(json => {
            res.render('travel', {
                title: 'Travlr Getaways',
                trips: json
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).send('Error retrieving trips');
        });
};

module.exports = {
    travel
};