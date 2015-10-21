module Filmstrip {
    class Config {
        public static $inject = [
            "$stateProvider",
            "$urlRouterProvider",
            "localStorageServiceProvider"
        ];

        private router: Router;

        constructor(
            private $stateProvider: angular.ui.IStateProvider,
            private $urlRouterProvider: angular.ui.IUrlRouterProvider,
            private localStorageServiceProvider: angular.local.storage.ILocalStorageServiceProvider
        ) {
            this.router = new Router($stateProvider, $urlRouterProvider);

            localStorageServiceProvider
                .setStorageType("localStorage")
                .setPrefix("fs")
                .setNotify(true, true);
        }
    }

    angular.module("fs").config(Config);
}