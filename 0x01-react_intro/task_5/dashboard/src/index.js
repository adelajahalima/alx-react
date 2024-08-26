import './style.css';

console.log('Hello, Webpack!');

// Example of using hot reloading
if (module.hot) {
    module.hot.accept();
}
