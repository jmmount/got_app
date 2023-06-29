const App = () => {
    const [quote, setQuote] = React.useState('');
    const [author, setAuthor] = React.useState('');
    
    const handleClick = (e) => {
        e.preventDefault();
        fetch('https://api.gameofthronesquotes.xyz/v1/random')
        .then(data=>data.json())
        .then(cleanedData => {
            setQuote(cleanedData.sentence);
            setAuthor(cleanedData.character.name)
            console.log('new click')
        });
    };

    React.useEffect(() => {
        fetch('https://api.gameofthronesquotes.xyz/v1/random')
        .then(data=>data.json())
        .then(cleanedData => {
            setQuote(cleanedData.sentence);
            setAuthor(cleanedData.character.name)
            console.log('rendered')
        });
    }, []);
 
    return (
        <div className='App'>
            <h1 id='quote'> {quote} </h1>
            <h2 id='author'> {author} </h2>
            <div id='button'>
                <button onClick={handleClick} id='new-quote'>New Quote</button>
            </div>
        </div>
    );


}

ReactDOM.render(<App />, document.getElementById("root"));

