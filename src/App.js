
import './App.css';
import ErrorBoundary from './components/ErrorBoundary';

function BuggyComponent() {
  const obj = undefined;
  return <div>{obj.name}</div>; // This will cause an error
}

function App() {
  return (
    <div className="App">
       <h1>Error Boundary Example</h1>
        <ErrorBoundary>
          <BuggyComponent />
        </ErrorBoundary>
    </div>
  );
}

export default App;
