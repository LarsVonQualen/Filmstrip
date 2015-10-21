﻿module Filmstrip {
    angular.module("fs.services", []);
    angular.module("fs.directives", ["fs.services"]);
    angular.module("fs.controllers", ["fs.services"]);    

    angular.module("fs", [
        "ui.router",
        "ui.bootstrap",
        "LocalStorageModule",
        "fs.controllers",
        "fs.directives"
    ]);
}