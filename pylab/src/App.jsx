import Navbar from './components/Navbar/Navbar'
import './App.css'

function App() {

  return (
    <>
    <div className="container">
      <div className="navbar">
        SAS
      </div>
      <div className="topic">
        <h1> Students Academic Success </h1>
        <p>
          This application allows users to explore various machine learning models for CGPA prediction and classification. It showcases
          different algorithms, evaluates their performance, and presents insights into feature importance and predictions. Users can upload
          datasets and select different methods to predict CGPA or classify results based on performance metrics like accuracy, precision,
          recall, and more.
        </p>
      </div>
      <div className="algorithms">
        <div className="choices">
          <h1> Decision Tree </h1>
          <div className="choice-content">
            <img src="/decision-tree.png" alt="Decision Tree Logo" />
            <p></p>
          </div>
        </div>
        <div className="choices">
          <h1> Random Forest </h1>
          <div className="choice-content">
            <img src="/random-forest.png" alt="Random Forest Classifier Logo" />
            <p></p>
          </div>
        </div>
        <div className="choices">
          <h1> SVC </h1>
          <div className="choice-content">
            <img src="/support-vector.png" alt="Support Vector Classifier Logo" />
            <p></p>
          </div>
        </div>
        <div className="choices">
          <h1> ID3 </h1>
          <div className="choice-content">
            <img src="/decision-tree.png" alt="ID3 Logo" />
            <p></p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
