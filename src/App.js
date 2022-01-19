import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Index/Main/Main';

function App() {
  return (
    <>
      <div className='wrapper'>
        <Header />
        <div className="content">
          <Main />
        </div>
        <Footer />
      </div>

    </>
  );
}

export default App;
