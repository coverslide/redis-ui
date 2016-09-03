import path from "path";
const link = document.createElement('link');
link.setAttribute('rel', 'stylesheet');
link.setAttribute('href', `file://${path.resolve(__dirname, '..', '..')}/styles/main.css`);
document.head.appendChild(link);