import './App.css';
import Advanture from './Componants/AdvantureAndActivity/Advanture';
import Banner from './Componants/Banner/Banner';
import BookingItems from './Componants/BookingItems/BookingItems';
import Footer from './Componants/Footer/Footer';
import Header from './Componants/Header/Header';
import OurService from './Componants/OurService/OurService';
import SpecialOffer from './Componants/SpecialOffer/SpecialOffer';
import WhyChooseUS from './Componants/WhyChooseUs/WhyChooseUS';
import TourPlace from './TourPlace/TourPlace';

function App() {
  return (
    <div className="">
       <Header/>
       <Banner/>
       <BookingItems/>
       <OurService/>
       <TourPlace/>
       <Advanture/>
       <SpecialOffer/>
       <WhyChooseUS/>
       <Footer/>
    </div>
  );
}

export default App;
