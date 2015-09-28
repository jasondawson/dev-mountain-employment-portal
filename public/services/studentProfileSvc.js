app.service("studentProfileSvc", function($http, $q, loginSvc) {


	this.storeImage = function(imageData, filename) {
		var imageExtension = imageData.split(';')[0].split('/');
		imageExtension = imageExtension[imageExtension.length - 1];
		//console.log(imageExtension);

		var newImage = {
			imageName: filename,
			imageBody: imageData,
			imageExtension: imageExtension,
			userEmail: 'ih8blackwidowspiders@gmail.com'
		}

		return $http.post('/api/newimage', newImage)
	}

	this.getStudentProf = function() {
		var deferred = $q.defer();
	 	var me = loginSvc.getCurrentUser();
	 	console.log("getCurrentUser fucniton GET LOGINUSER ID",me)


		$http({
			url: 'http://localhost:3000/api/studentPortfolio/55f8480baec60b07268b0f59', 
			// url: 'http://localhost:3000/api/studentPortfolio/'+me.Id, 
			//ID = LOGIN USER ID,
			
			method: 'GET',
			//cache: false
			// data: data
		}).then(function(response) {
			//console.log('this is response.data in service', response.data);
			deferred.resolve(response.data);
		})
		return deferred.promise;
	};
		this.updateStudentInfo = function (info) {
		var deferred = $q.defer();
		$http({
			method: 'PUT',
			url: 'http://localhost:3000/api/studentPortfolio/55f708cc4a368e270de0ecff',
			//ID = STudent PORTFOLIO ID,
			data: info
		}).then(function (response) {
			deferred.resolve(response);
		});
		return deferred.promise;
	};

	this.updateProject= function(project){
		console.log('what info im i gettign???',project)
		var deferred = $q.defer();
		$http({
			method: 'PUT',
			url: '/api/updateProject/'+project._id,
			data:{
				projectType:project.projectType,
				name:project.name,
				picture:project.picture,
				description:project.description,
				TechUsed:project.TechUSed,
				codeSource:{
					name:project.codeSource.name,
					url:project.codeSource.url
				}
			}
			//data: project
		}).then(function (response) {
			deferred.resolve(response);
		});
		return deferred.promise;
		
	}

	this.addProject = function(newProject, studentId){
		var deferred = $q.defer();
		$http({
			method: 'POST',
			url: '/api/project/55f708cc4a368e270de0ecff',
			//+ studentId,
			
			data: {
				projectType:newProject.projectType,
				name:newProject.name,
				picture: newProject.picture,
				description:newProject.description,
				TechUsed:newProject.TechUSed,
				codeSource:{
					name:newProject.codeSource.name,
					url:newProject.codeSource.url
				}
			}
		}).then(function (response) {
			deferred.resolve(response);
		});
		return deferred.promise;

	}

		this.saveStudentInfo = function (info) {
		var deferred = $q.defer();
		$http({
			method: 'POST',
			url: 'http://localhost:3000/api/studentPortfolio/',
			//+ me.Id,
			data: info
		}).then(function (response) {
			deferred.resolve(response);
		});
		return deferred.promise;
	};

	


});
