import { changeToMarkdown,  initialText} from './changeToMarkdown.js';

const inputTextArea = document.getElementById('editor');

const run = () => {    
   
    window.addEventListener('DOMContentLoaded', initialText);
    inputTextArea.addEventListener('input', changeToMarkdown);
    inputTextArea.addEventListener('change', changeToMarkdown);

}

export default run;