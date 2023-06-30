import './App.css';
import Navbar from './Sections/Header/Navbar';
import SecondSection from './Sections/section2/SecondSection';
import ThirdSection from './Sections/section3/ThirdSection';

function App() {
  return (
    <>
        <Navbar />
      <div className="centriliezer">
        <SecondSection />
      </div>
        <ThirdSection />
    </>
  );
}

export default App;

