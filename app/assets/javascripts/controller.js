app
  .controller('List', [
    "$scope",
    "$http",
    "$base64",
    "WishServer",
    function controller($scope, $http, $base64, WishServer)
    {

      $scope.wishList = {};
      $scope.datalist = {};
      $scope.editData = {};
      $scope.list = function list()
      {
        console.log('hello');
        WishServer.request("get", '/all/list',
          function(response){
            $scope.wishList = response;
            console.log(response);
          });
      }

      $scope.saveList = function saveList()
      {
        console.log($scope.datalist);
        $('.create-progress').fadeIn(500);
        WishServer.request("post", '/list/saveList',
          function(response){
            console.log(response);
            if(response.status == "ok")
            {
              $('.create-progress').fadeOut(500);
              $('#create').closeModal();
              $scope.datalist = {};
              $scope.list();
            }
          }, $scope.datalist);
      }

      // edit
      $scope.editList = function editList(list)
      {
        console.log(list);
        $scope.editData = list;
        $('#edit').openModal();
      }
      // update
      $scope.updateList = function updateList()
      {
        $('.update-progress').fadeIn(500);
        console.log($scope.editData);
        WishServer.request("post", "/list/updateList",
          function(response){
            $('.update-progress').fadeOut(500);
            $scope.list();
            $('#edit').closeModal();
          }, $scope.editData);
      }
      $scope.deleteList = function deleteList(list)
      {
        console.log(list);
        WishServer.request("delete", '/lists/' + list.id,
          function(response){
            $scope.wishList.splice($scope.wishList.indexOf(list), 1)
          });
      }
      // delete
     // load list

    $scope.list();
    }
  ]);