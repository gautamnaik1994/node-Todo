module.exports = ['$scope', '$http', function ($scope, $http) {
    $scope.data = {};
    $scope.loginFunction = function () {
        console.log(JSON.stringify($scope.data));
        $http.post('/users', JSON.stringify($scope.data))
            .then(function (response) {
                if (response.data) {
                    console.log(response.data);
                }

            }, function (response) {
                console.log(response);
            });

    };

}];