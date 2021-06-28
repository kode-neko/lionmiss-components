import React from 'react'
import ReactDOM from 'react-dom'

const App = (): React.FunctionComponentElement<unknown> => {
    return (
        <div>
            Miau Miau!!!
        </div>
    )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)

export default App
