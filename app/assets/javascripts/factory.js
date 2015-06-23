app
  .factory( "WishServer" , [
    "$http",
    function factory ( $http ) {
      var host = "https://warm-ridge-5966.herokuapp.com/";

      this.request  = function request ( method , path , callback , data ) {
        $http[ method ]( host + path , ( data || { } ) )
        .success( function ( response ) {
          callback( response );
        } );
      }

      return this;
    }
  ]);