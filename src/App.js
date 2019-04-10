import React, {Component} from 'react';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import PlaceHolder from './PlaceHolders/PlaceHolder.js';
import LibrarySearch from './LibrarySearch/LibrarySearch.js';


class App extends Component {
  render() {
    return (
        <Router>
          <Route render={({ location, history }) => (
              <React.Fragment>
                <SideNav
                    onSelect={(selected) => {
                      const to = '/' + selected;
                      if (location.pathname !== to) {
                        history.push(to);
                      }
                    }}
                >
                  <SideNav.Toggle />
                  <SideNav.Nav defaultSelected="home">
                    <NavItem eventKey="home">
                      <NavIcon>
                        <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                      </NavIcon>
                      <NavText>
                        Home
                      </NavText>
                    </NavItem>
                    <NavItem eventKey="devices">
                      <NavIcon>
                        <i className="fa fa-fw fa-device" style={{ fontSize: '1.75em' }} />
                      </NavIcon>
                      <NavText>
                        Devices
                      </NavText>
                    </NavItem>
                  </SideNav.Nav>
                </SideNav>
                <div>
                  <main>
                    <Route path="/" exact component={props => <LibrarySearch />} />
                    <Route path="/home" component={props => <LibrarySearch />} />
                    <Route path="/devices" component={props => <PlaceHolder />} />
                  </main>
                </div>

              </React.Fragment>
          )}
          />
        </Router>
    );
  }
}

export default App;
