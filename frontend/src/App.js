// frontend/src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import SortingVisualizer from './SortingVisualizer/SortingVisualizer';


// Define the React app
const App = () => {
  const [count, setCount] = React.useState(0)
  const onClick = () => setCount(c => c + 1)
  return (
    <div className="App">
      <SortingVisualizer></SortingVisualizer>
    </div>
  )
}
// Mount the app to the mount point.
const root = document.getElementById('app')
ReactDOM.render(<App />, root)