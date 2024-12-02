import React, { useState } from 'react';
import { marked } from 'marked';
import './App.css';

marked.setOptions({
  breaks: true, 
});

function App() {

  const defaultMarkdown = `# Markdown Previewer

## Sub-heading
This is an example of [a link](https://www.github.com).

\`Inline code\`

\`\`\`
Code block
\`\`\`

- List item 1
- List item 2

> Blockquote

**Bold text**

<img src="https://th.bing.com/th/id/R.394d42a12a654a01aff55a4ac589de48?rik=8meqYWp%2fRiAmDw&riu=http%3a%2f%2fstore.hp.com%2fUKStore%2fHtml%2fMerch%2fImages%2fc05475056_1750x1285.jpg&ehk=hFHW0bsoA4Vrq9NqTnBn9ZROJe9jXLuXOG2U%2bb2O7Wk%3d&risl=&pid=ImgRaw&r=0" style="width: 300px; height: auto;" alt="Image" />

`;
  const [editorContent, setEditorContent] = useState(defaultMarkdown);

  const handleEditorChange = (event) => {
    setEditorContent(event.target.value);
  };

  const previewContent = marked(editorContent);

  return (
    <div className="App">
      <div className="container">
        <h1>Markdown Previewer</h1>
        <div className="editor-container">
          <textarea
            id="editor"
            value={editorContent}
            onChange={handleEditorChange}
            rows="20"
            placeholder="Write your markdown here"
          />
        </div>
        <div
          id="preview"
          className="preview"
          dangerouslySetInnerHTML={{ __html: previewContent }}
        />
      </div>
    </div>
  );
}

export default App;
