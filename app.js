function REST_ROUTER(router, md5)
{
    this.handleRoutes(router, md5);
}

REST_ROUTER.prototype.num1 = 0;
REST_ROUTER.prototype.num2 = 0;
REST_ROUTER.prototype.avg = 0;

REST_ROUTER.prototype.handleRoutes = function(router, md5)
{
    router.get("/", function(req, res){
        res.render("index"); 
    });
    router.get("/entry", function(req, res){
        res.render("entry");
    });
    router.post("/parse", function(req, res){
        this.num1 = Number(req.body.num_1);
        this.num2 = Number(req.body.num_2);
        this.avg = (num1 + num2) / 2;
        res.redirect("/display");
    });
    router.get("/display", function(req, res){
        var data = "<tr title=\"data\"><td>" + this.num1 + "</td><td>" + this.num2 + "</td><td>" + this.avg + "</td></tr>";
        res.render("display", {
            data: data
        });
    });
}

module.exports = REST_ROUTER;