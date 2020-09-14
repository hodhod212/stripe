import React from 'react'

const IndexPage = () => {
    // Create state variables
    let [responseData, setResponseData] = React.useState('')
    let [message, setMessage] = React.useState('')
    const fetchData = (token) => {
        token.preventDefault()

        setMessage('Loading...')

       
        .then((response)=>{
           setResponseData(response.data)
           setMessage('')
           console.log(response)
        })
        .catch((error) => {
           setMessage('Error')
           console.log(error)
        })
    }


    return (
        <div
            style={{
                background: '#EEE',
                padding: '5%',
                fontFamily: '"Lucida Console", Monaco, monospace'
            }}>
            <h1
                style={{
                    background: 'black',
                    color: 'white',
                    padding: '1rem',
                    display: 'inline-block'
                }}>Get the data from the response</h1>
            <h2>The customer information</h2>
            <form onSubmit={fetchData}>
                
                    <button type='submit'>GET the data </button>
               
            </form>
            <p>{message}</p>
            <h3>Symbol: {responseData ? responseData.symbol : ''}</h3>
            <p>Daily Time Series with Splits and Dividend Events</p>
            <small>Last Refresh: {responseData ? responseData.refreshed : ''}</small>
        </div>
    )
}

export default IndexPage