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

<<<<<<< HEAD
	this.getStudentProf = function(profileId) {
		var deferred = $q.defer();


		$http({
			//url: 'http://localhost:3000/api/studentPortfolio/55f8480baec60b07268b0f59', 
			url: 'http://localhost:3000/api/studentPortfolio/'+ profileId, 
=======
	this.getStudentProf = function(id) {
		var deferred = $q.defer();
		var me = loginSvc.getCurrentUser();
		console.log("getCurrentUser fucniton GET LOGINUSER ID", me)


		$http({
			url: 'http://localhost:3000/api/studentPortfolio/' + me.Id,
			// url: 'http://localhost:3000/api/studentPortfolio/'+me.Id,
>>>>>>> ea6c48493abc7aff1bc591ddc6b0eb239ab44659
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
<<<<<<< HEAD
	this.updateStudentInfo = function (info, profileId) {
=======
	this.updateStudentInfo = function(info) {
>>>>>>> ea6c48493abc7aff1bc591ddc6b0eb239ab44659
		var deferred = $q.defer();
		$http({
			method: 'PUT',
			url: 'http://localhost:3000/api/studentPortfolio/' + profileId,
			//ID = STudent PORTFOLIO ID,
			data: info
		}).then(function(response) {
			deferred.resolve(response);
		});
		return deferred.promise;
	};

	this.updateProject = function(project) {
		console.log('what info im i gettign???', project)
		var deferred = $q.defer();
		$http({
			method: 'PUT',
			url: '/api/updateProject/' + project._id,
			data: {
				projectType: project.projectType,
				name: project.name,
				picture: project.picture,
				description: project.description,
				TechUsed: project.TechUSed,
				codeSource: {
					name: project.codeSource.name,
					url: project.codeSource.url
				}
			}
			//data: project
		}).then(function(response) {
			deferred.resolve(response);
		});
		return deferred.promise;

	}

<<<<<<< HEAD
	this.addProject = function(newProject, porfileId){
=======
	this.addProject = function(newProject, studentId) {
>>>>>>> ea6c48493abc7aff1bc591ddc6b0eb239ab44659
		var deferred = $q.defer();
		$http({
			method: 'POST',
			url: '/api/project/' + profileId,
			//+ studentId,

			data: {
				projectType: newProject.projectType,
				name: newProject.name,
				picture: newProject.picture,
				description: newProject.description,
				TechUsed: newProject.TechUSed,
				codeSource: {
					name: newProject.codeSource.name,
					url: newProject.codeSource.url
				}
			}
		}).then(function(response) {
			deferred.resolve(response);
		});
		return deferred.promise;

	}

<<<<<<< HEAD
	this.saveStudentInfo = function (info) {
=======
	this.saveStudentInfo = function(info) {
>>>>>>> ea6c48493abc7aff1bc591ddc6b0eb239ab44659
		var deferred = $q.defer();
		$http({
			method: 'POST',
			url: 'http://localhost:3000/api/studentPortfolio/',
			//+ me.Id,
			data: info
		}).then(function(response) {
			deferred.resolve(response);
		});
		return deferred.promise;
	};
		this.delProject = function(project){
			var deferred = $q.defer();
		$http({
			method: 'DELETE',
			url: '/api/project/'+ project._id
		}).then(function (response) {
			deferred.resolve(response);
		});
		return deferred.promise;


<<<<<<< HEAD
		}
	
=======
	//this gets student info for publicview

	this.getStudentPublicView = function(id) {
		var deferred = $q.defer();
		$http({
			url: 'http://localhost:3000/api/studentPortfolio/' + id,
			method: 'GET',
		}).then(function(response) { //console.log('this is response.data in service', response.data);
			deferred.resolve(response.data);
		})
		return deferred.promise;
	};
>>>>>>> ea6c48493abc7aff1bc591ddc6b0eb239ab44659


});
