window.DRApp = new DoTRoute.Application();

DRApp.load = function (name) {
    return $.ajax({url: name + ".html", async: false}).responseText;
}

DRApp.partial("Header",DRApp.load("header"));
DRApp.partial("Footer",DRApp.load("footer"));

DRApp.template("Home",DRApp.load("home"),null,DRApp.partials);
DRApp.template("Backstory",DRApp.load("backstory"),null,DRApp.partials);
DRApp.template("Install",DRApp.load("install"),null,DRApp.partials);
DRApp.template("Apps",DRApp.load("apps"),null,DRApp.partials);
DRApp.template("Overview",DRApp.load("overview"),null,DRApp.partials);
DRApp.template("Documentation",DRApp.load("documentation"),null,DRApp.partials);
DRApp.template("GUI",DRApp.load("gui"),null,DRApp.partials);
DRApp.template("API",DRApp.load("api"),null,DRApp.partials);
DRApp.template("Daemon",DRApp.load("daemon"),null,DRApp.partials);
DRApp.template("Boot",DRApp.load("boot"),null,DRApp.partials);
DRApp.template("Architecture",DRApp.load("architecture"),null,DRApp.partials);
DRApp.template("Development",DRApp.load("development"),null,DRApp.partials);

DRApp.route("home","/","Home");
DRApp.route("backstory","/backstory","Backstory");
DRApp.route("install","/install","Install");
DRApp.route("apps","/apps","Apps");
DRApp.route("overview","/overview","Overview");
DRApp.route("documentation","/documentation","Documentation");
DRApp.route("gui","/gui","GUI");
DRApp.route("api","/api","API");
DRApp.route("daemon","/daemon","Daemon");
DRApp.route("boot","/boot","Boot");
DRApp.route("architecture","/architecture","Architecture");
DRApp.route("development","/development","Development");
