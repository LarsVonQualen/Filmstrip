var Filmstrip;
(function (Filmstrip) {
    var Config = (function () {
        function Config($stateProvider, $urlRouterProvider, localStorageServiceProvider) {
            this.$stateProvider = $stateProvider;
            this.$urlRouterProvider = $urlRouterProvider;
            this.localStorageServiceProvider = localStorageServiceProvider;
            this.router = new Filmstrip.Router($stateProvider, $urlRouterProvider);
            localStorageServiceProvider
                .setStorageType("localStorage")
                .setPrefix("fs")
                .setNotify(true, true);
        }
        Config.$inject = [
            "$stateProvider",
            "$urlRouterProvider",
            "localStorageServiceProvider"
        ];
        return Config;
    })();
    angular.module("fs").config(Config);
})(Filmstrip || (Filmstrip = {}));
//# sourceMappingURL=app.config.js.map