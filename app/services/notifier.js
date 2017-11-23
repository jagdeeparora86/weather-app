/**
 * Created by singhj21 on 11/22/17.
 */

(function () {

    app.factory('notifier', Notifier);

    function Notifier() {

        var svc = {};

        svc.errorInfo = errorInfo;

        function errorInfo(text, title){
            var errorOps = {closeButton: true,
                progressBar: false,
                positionClass: "toast-top-right"
            }
            toastr.error(text, title, errorOps);
        }

        return svc;
    }
})()