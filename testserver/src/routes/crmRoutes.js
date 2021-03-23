const routes = (app) => {
    app.route('/contact')
        .get((req, res, next) => {
            //middleware
            console.log(`Request from: ${req.originalUrl}`);
            console.log(`Reqest from ${req.method}`);
            next();
        }, (req, res, next) => {
            res.send('GET request successful!')
        })
        .post((req, res) => {
            res.send('POST request successful!')
        });

    app.route('/contact/:contactID')
        .put((req, res) => {
            res.send('PUT request successful')
        })
        .delete((req, res) => {
            res.send('DELTE request successful')
        })
}

export default routes;