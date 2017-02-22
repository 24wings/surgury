angular.module('app.directives', [])
    .directive('dragSurgury', function () {

        function link($scope, element, attrs) {
            var dom = element[0];
            dom.ondragstart = function (ev) {
                console.log(ev);
            }
        }

        return {
            controller: function () {
                console.log('ok')
            },
            link: link
        };
    })
    .directive('dropSurgury', function () {
        function link() {
            var dom = element[0];
            dom.ondragover = function (ev) {
                ev.preventDefault();
            }
        };
        return {
            link: link
        };
    });