import React from 'react';
import Home from './components/Home';
import Rooms from './components/Rooms';
import Room from './components/Room';
import Contact from './components/Contact';
import Header from './components/layout/Header';
import Whatsapp from './components/layout/Whatsapp';
import Footer from './components/layout/Footer';
import Into from './components/layout/Into';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BranchState from './context/branch/branchState';
import CategoryState from './context/category/categoryState';
import RoomState from './context/room/roomState';
import ContactState from './context/contact/contactState';
import Services from './components/Services';

function App() {


  return (
    <BranchState>
      <CategoryState>
        <RoomState>
          <ContactState>
            <Router>
              <Header />
              <Whatsapp />
              <Switch>
                <Route exact path={"/"} component={Home} />
                <Route exact path={"/sucursales/:branch"} component={Rooms} />
                <Route exact path={"/sucursales/:branch/:room"} component={Room} />
                <Route exact path={"/contacto"} component={Contact} />
                <Route exact path={"/servicios"} component={Services} />
              </Switch>
              <Into />
              <Footer />
            </Router>
          </ContactState>
        </RoomState>
      </CategoryState>
    </BranchState>
  );
}

export default App;
