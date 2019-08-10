window.DRApp = new DoTRoute.Application();

DRApp.load = function (name) {
    return $.ajax({url: name + ".html", async: false}).responseText;
}

DRApp.partial("Header",DRApp.load("header"));
DRApp.partial("Footer",DRApp.load("footer"));

DRApp.template("Home",DRApp.load("home"),null,DRApp.partials);
DRApp.template("Backstory",DRApp.load("backstory"),null,DRApp.partials);
DRApp.template("Overview",DRApp.load("overview"),null,DRApp.partials);
DRApp.template("Architecture",DRApp.load("architecture"),null,DRApp.partials);

DRApp.route("home","/","Home");
DRApp.route("backstory","/backstory","Backstory");
DRApp.route("overview","/overview","Overview");
DRApp.route("architecture","/architecture","Architecture");
