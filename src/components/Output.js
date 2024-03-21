import { useState, useEffect } from "react";

function Output() {
    const [text, setText] = useState('No file uploaded');

    useEffect(() => {
        const savedText = localStorage.getItem('text');
        let i = 0;
        let newText = '';
        while (i < savedText.length) {
            if (savedText.charAt(i) == '/' && savedText.charAt(i+1) == '/') {
                i += savedText.slice(i).indexOf('\n');
                // searches the end of the comment and 
            } else if (savedText.charAt(i) == '/' && savedText.charAt(i+1) == '*') {
                if (savedText.slice(i).includes('*/')) {
                    i += savedText.slice(i).indexOf('*/') + 2;
                } else {
                    i = savedText.length;
                    // if there is no closing tag, treats everyting after opening as a comment and skips right to the end
                }
            } else {
                newText += savedText.charAt(i);
                i++;
            }
        }
        setText(newText);
    }, [])

    return (
        <>
            <h1>Output</h1>
            <p>{text}</p>
        </>
    )
}

export default Output;