window.DRApp = new DoTRoute.Application();

DRApp.load = function (name) {
    return $.ajax({url: name + ".html", async: false}).responseText;
}


DRApp.partial("Header",DRApp.load("header"));
DRApp.partial("Footer",DRApp.load("footer"));

DRApp.template("Home",DRApp.load("home"),null,DRApp.partials);
DRApp.template("Install",DRApp.load("install"),null,DRApp.partials);
DRApp.template("Dcoumentation",DRApp.load("documentation"),null,DRApp.partials);
DRApp.template("Architecture",DRApp.load("architecture"),null,DRApp.partials);
DRApp.template("Development",DRApp.load("development"),null,DRApp.partials);

DRApp.route("home","/","Home");
DRApp.route("install","/install","Install");
DRApp.route("apps","/documentation","Apps");
DRApp.route("architecture","/architecture","Architecture");
DRApp.route("development","/development","Development");
