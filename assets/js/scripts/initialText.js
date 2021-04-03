import marked from '../../../node_modules/marked/lib/marked.esm.js';

const editor = document.getElementById('editor');
const outputTextArea = document.getElementById('preview');

const initialText = () => {

    if(editor.textContent) {
        outputTextArea.innerHTML = marked(editor.textContent);
    };

};

export default initialText;