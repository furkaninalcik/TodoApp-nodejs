var data = [{item: 'water'} , {item: 'milk'} , {item: 'tea'}];

module.exports = function(app){

	app.get('/todo', function(req,res){
		res.render('todo' , {todos: data});


	});

	app.post('/todo', function(req,res){



	});

	app.delete('/todo/:item', function(req,res){


		
	});


};
