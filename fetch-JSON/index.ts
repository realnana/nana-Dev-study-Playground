// Make a network Request to fetch some JSON and print the result

import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

axios.get(url).then(response => {
    console.log(response.data);
});

