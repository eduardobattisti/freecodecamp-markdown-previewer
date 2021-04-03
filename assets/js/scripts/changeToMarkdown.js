import marked from '../../../node_modules/marked/lib/marked.esm.js';

marked.setOptions({
    gfm: true,
    breaks: true,
})

const outputTextArea = document.getElementById('preview');

const changeToMarkdown = event => {    

    let text = event.target.value;    
    
    outputTextArea.innerHTML = marked(text);        

};

export default changeToMarkdown;