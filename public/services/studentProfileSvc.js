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

	this.getStudentProf = function(id) {
		var deferred = $q.defer();
		$http({
			//url: 'http://localhost:3000/api/studentPortfolio/55f8480baec60b07268b0f59',
			url: 'http://localhost:3000/api/studentPortfolio/' + id,
			//ID = LOGIN USER ID,

			method: 'GET',
		}).then(function(response) {
			//console.log('this is response.data in service', response.data);
			deferred.resolve(response.data);
		})
		return deferred.promise;
	};

	this.updateStudentInfo = function(info, id) {

		var deferred = $q.defer();
		$http({
			method: 'PUT',
			url: 'http://localhost:3000/api/studentPortfolio/' + id,
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
				techUsed: project.techUsed,
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


	this.addProject = function(newProject, id) {
		var deferred = $q.defer();
		$http({
			method: 'POST',
			url: '/api/project/' + id,
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


	this.saveStudentInfo = function(info) {
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
	this.delProject = function(project) {
		var deferred = $q.defer();
		$http({
			method: 'DELETE',
			url: '/api/project/' + project._id
		}).then(function(response) {
			deferred.resolve(response);
		});
		return deferred.promise;
	}
	this.addDevSkill=function(newDevskill, id){
	var deferred = $q.defer();
		$http({
			method: 'POST',
			url: '/api/devskill/' + id,
			//+ studentId,
			data: {
				name: newDevskill.name,
				description: newDevskill.description,
				link: {
					name: newDevskill.link.name,
					url: newDevskill.link.url
				}
			}
		}).then(function(response) {
			deferred.resolve(response);
		});
		return deferred.promise;
	}
	this.updateDevSkill = function(DevSkill) {
		var deferred = $q.defer();
		$http({
			method: 'PUT',
			url: '/api/devskill/' + DevSkill._id,
			data: {
				name: DevSkill.name,
				description: DevSkill.description,
				link: {
					name: DevSkill.link.name,
					url: DevSkill.link.url
				}
			}
			//data: project
		}).then(function(response) {
			deferred.resolve(response);
		});
		return deferred.promise;

	}
	this.deleteDevSkill = function(DevSkill) {
		var deferred = $q.defer();
		$http({
			method: 'DELETE',
			url: '/api/devskill/' + DevSkill._id
		}).then(function(response) {
			deferred.resolve(response);
		});
		return deferred.promise;
	}

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

});
