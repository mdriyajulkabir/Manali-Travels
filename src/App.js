import './App.css';
import Advanture from './Componants/AdvantureAndActivity/Advanture';
import Banner from './Componants/Banner/Banner';
import BookingItems from './Componants/BookingItems/BookingItems';
import Header from './Componants/Header/Header';
import OurService from './Componants/OurService/OurService';
import WhyChooseUS from './Componants/WhyChooseUs/WhyChooseUS';

function App() {
  return (
    <div className="">
       <Header/>
       <Banner/>
       <BookingItems/>
       <OurService/>
       <Advanture/>
       <WhyChooseUS/>
    </div>
  );
}

export default App;
