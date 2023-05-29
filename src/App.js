import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Feed from './Components/Feed';
// import Lists from './Components/Lists';
import "../src/App.css"

function App() {
  return (
    <div className="App">
     <Header></Header>
     <div className='mid'>
     <Sidebar></Sidebar>
     <Feed />
     </div>
{/* <Lists></Lists> */}
    </div>
  );
}

export default App;
