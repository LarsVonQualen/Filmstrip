module Filmstrip.Directives {
    interface IOmniSearchScope {
        busy: boolean;
        onResult: (args: { results: Array<Models.SearchResult> }) => void;
    }

    class OmniSearchController {
        public static $inject = ["OmdbService", "$scope"];

        public query: string;

        constructor(
            private omdbService: Services.OmdbService,
            private $scope: IOmniSearchScope
        ) {
            
        }

        public performSearch() {
            this.$scope.busy = true;

            this.omdbService
                .search(this.query)
                .then(result => this.$scope.onResult({ results: result }))
                .finally(() => this.$scope.busy = false);
        }
    }

    angular.module("fs.directives").directive("omniSearch", () => {
        return {
            scope: {
                busy: "=",
                onResult: "&"
            },
            restrict: "E",
            templateUrl: "/app/directives/omnisearch/omnisearch.html",
            controller: OmniSearchController,
            controllerAs: "vm"
        };
    });
}