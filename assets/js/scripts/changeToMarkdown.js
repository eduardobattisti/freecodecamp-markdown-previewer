import marked from '../../../node_modules/marked/lib/marked.esm.js';

marked.setOptions({
    gfm: true,
    breaks: true,
})

const editor = document.getElementById('editor');
const outputTextArea = document.getElementById('preview');

const changeToMarkdown = event => {    

    let text = event.target.value;    
    
    outputTextArea.innerHTML = marked(text);        

};

const initialText = () => {

    if(editor.textContent) {
        outputTextArea.innerHTML = marked(editor.textContent);
    };

};

export { changeToMarkdown, initialText };