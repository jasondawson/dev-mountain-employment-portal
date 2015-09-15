app.directive('fileread', function (service) {
  return {
    restrict: 'A',
    link: function (scope, elem, attrs) {
      elem.bind("change", function (changeEvent) {
          
        var reader = new FileReader();
        reader.onload = function (loadEvent) {
          var encodedImage = loadEvent.target.result;
          console.log(encodedImage);
        

        var tempArray = elem[0].value.split('\\');
        console.log(tempArray)
          var fileName = tempArray[tempArray.length - 1];
          studentProfileSvc.storeImage(encodedImage,fileName).then(function(result) {
            scope.s3url = result.data.Location;
          })
        }
        reader.readAsDataURL(changeEvent.target.files[0]);
      });
    }
  }
});