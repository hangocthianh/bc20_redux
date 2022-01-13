import logo from './logo.svg';
import './App.css';
import GameOanTuTi from "./baiTapRedux/game-oan-tu-ti"
import BookingTicket from './baiTapRedux/booking-ticket';
import BaiTapBauCua from './baiTapBauCua';

function App() {
  return (
    <div>
      <h2 className="pt-5 text-info text-center">GAME BẦU CUA</h2>
      <BaiTapBauCua/>
      <h2 className="pt-5 text-info text-center">GAME OẲN TÙ TÌ</h2>
      <GameOanTuTi />
      <h2 className="pt-5 text-info text-center">BOOKING TICKET</h2>
      <BookingTicket/>
    </div>
  );
}

export default App;
