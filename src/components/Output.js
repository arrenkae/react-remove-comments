import { useState, useEffect } from "react";

function Output() {
    const [text, setText] = useState("No file uploaded");

    const removeComments = (savedText) => {
        let i = 0;
        let newText = '';
        while (i < savedText.length) {
            if (savedText.charAt(i) == '/' && savedText.charAt(i+1) == '/') {
                i += savedText.slice(i).indexOf('\n');
                while (savedText.charAt(i+1) == '\n') { // removes extra line breaks after removing comments
                    i++;
                }
                // skips indexes between opening and closing tags
            } else if (savedText.charAt(i) == '/' && savedText.charAt(i+1) == '*') {
                if (savedText.slice(i).includes('*/')) {
                    i += savedText.slice(i).indexOf('*/') + 1;
                    while (savedText.charAt(i+1) == ' ' || savedText.charAt(i+1) == '\n') { // removes spaces at the beginning of the line and extra line breaks after removing comments
                        i++;
                    } 
                } else {
                    i = savedText.length;
                    // if there is no closing tag, treats everyting after opening as a comment and skips right to the end
                }
            } else {
                newText += savedText.charAt(i);
            }
            i++;
        }
        setText(newText);
    }

    useEffect(() => {
        const savedText = localStorage.getItem('text'); // text from the last uploaded txt file
        if (savedText) {
            removeComments(savedText)
        }
    }, [])

    return (
        <>
            <h1>Output</h1>
            <div style={{whiteSpace: "pre-wrap", margin: "auto", textAlign: 'left', width: "90%"}}>
                {text}
            </div>
        </>
    )
}

export default Output;