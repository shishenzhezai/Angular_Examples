// module.exports=function () {

// }
// var angular=require("../../node_modules/angular/angular.js" );
 
module.exports= function ($scope) {
    $scope.jisuanObj = {
        parm1:'',
        parm2:'',
        result:''
    };

    $scope.add = function () {
        $scope.jisuanObj.result = $scope.jisuanObj.parm1 + $scope.jisuanObj.parm2;
    }

    $scope.jian = function () {
        $scope.jisuanObj.result = $scope.jisuanObj.parm1 - $scope.jisuanObj.parm2;
    }
    $scope.chen = function () {
        $scope.jisuanObj.result = $scope.jisuanObj.parm1 * $scope.jisuanObj.parm2;
    }
    $scope.chu = function () {
        $scope.jisuanObj.result = $scope.jisuanObj.parm1 / $scope.jisuanObj.parm2;
    }
}