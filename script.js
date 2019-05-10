
 var movies = [
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'film o czarodzieju',
	photo:''
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
	photo:''
  },
  {
    id: 3,
    title: 'Dzień świstaka',
    desc: 'Film wcale nie o świstaku',
	photo:''
  },
  {
    id: 4,
    title: 'Tytanic',
    desc: 'Film o pechowym statku',
	photo:''
  },
  {
    id: 5,
    title: 'Chicago',
    desc: 'Film o strasznych babach',
	photo:'pobrane.jpg'
  },
    
 ];

var moviesElements = movies.map(function(movie) {
  return React.createElement('li', {key: movie.id},
      React.createElement('h2', {}, movie.title),
      React.createElement('p', {}, movie.desc),
	  React.createElement('img', {'src': movie.photo})
    );
});


var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
	);
 
  
 ReactDOM.render(element, document.getElementById('app'));