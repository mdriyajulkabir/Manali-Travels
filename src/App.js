import './App.css';
import Banner from './Componants/Banner/Banner';
import BookingItems from './Componants/BookingItems/BookingItems';
import Header from './Componants/Header/Header';
import OurService from './Componants/OurService/OurService';

function App() {
  return (
    <div className="">
       <Header/>
       <Banner/>
       <BookingItems/>
       <OurService/>
    </div>
  );
}

export default App;
