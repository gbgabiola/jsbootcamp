localStorage.setItem('name', 'Genesis');
localStorage.getItem('name'); // 'Genesis'

// localStorage.setItem('data', { 'name': 'Genesis' });
// localStorage.getItem('data'); // '[object Object]'

// Store string items
localStorage.setItem('data', JSON.stringify({ 'name': 'Genesis' }));
localStorage.getItem('data'); // '{'name':'Genesis'}'

// Returns object
JSON.parse(localStorage.getItem('data')); // {name: 'Genesis'}

localStorage.length;

// Remove each data from storage
localStorage.removeItem('data');
localStorage.removeItem('name');

// Remove all data from storage
localStorage.clear();
