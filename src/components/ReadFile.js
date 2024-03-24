import { useNavigate } from 'react-router-dom';

function ReadFile() {
    const navigate = useNavigate();

    const textFromFile = (file) => {
        const reader = new FileReader();
        reader.readAsText(file);
        reader.onload = function() {
            localStorage.setItem('text', reader.result)
        };
    }

    return (
        <div>
            <h1>Upload txt file</h1>
            <input type="file" style={{width: '300px'}} onChange={(e) => textFromFile(e.target.files[0])}/>
            <button onClick={() => navigate('/output')}>Show output</button>
        </div>
    )

}

export default ReadFile;