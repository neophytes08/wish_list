app
  .directive('list', [
    function directive()
    {
      return {
        "restrict": "A",
        "scope": true,
        "controller": "List",
        "link": function onLink(scope, element, attributeSet)
        {
          
        }
      }
    }
  ]);