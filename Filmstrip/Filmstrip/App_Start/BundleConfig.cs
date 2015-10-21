using System.Web;
using System.Web.Optimization;

namespace Filmstrip
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            var libs = new ScriptBundle("~/bundles/libs");

            libs.Include(
                "~/wwwroot/lib/jquery/dist/jquery.js",
                "~/wwwroot/lib/lodash/lodash.js",
                "~/wwwroot/lib/angular/angular.js",
                "~/wwwroot/lib/angular-ui-router/release/angular-ui-router.js",
                "~/wwwroot/lib/angular-bootstrap/ui-bootstrap-tpls.js",
                "~/wwwroot/lib/angular-local-storage/dist/angular-local-storage.js"
                );

            var app = new ScriptBundle("~/bundles/app");

            // Ensure the order is correct
            app.Include(
                "~/app/app.js",
                "~/app/Router.js"
                ); 

            app.IncludeDirectory("~/app/", "*.js", true);

            bundles.Add(libs);
            bundles.Add(app);
        }
    }
}
