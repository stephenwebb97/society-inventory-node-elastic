import React, {Component} from 'react';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import PlaceHolder from './PlaceHolders/PlaceHolder.js';
import LibrarySearch from './LibrarySearch/LibrarySearch.js';
import ClickOutside from 'react-click-outside';
import './App.css';
import BoardgamesImage from'./BoardGames.png';
import BookImage from './Books.png';

class TempSideNav extends Component {
    constructor(props) {
        super(props);
        this.state = {expanded: false};
        this.isExpanded = this.isExpanded.bind(this);
    }

    isExpanded(check){
        this.setState({ expanded: check });
    }

    render() {
        return(<ClickOutside onClickOutside={() => {
            this.setState({ expanded: false });
        }}>
            <SideNav
                expanded ={this.state.expanded}
                onToggle={this.isExpanded}
                className={'SideNavWrapperClass'}
                onSelect={(selected) => {
                    const to = '/' + selected;
                    if (this.props.location.pathname !== to) {
                        this.props.history.push(to);
                    }
                    this.isExpanded(false);

                }

                }
            >
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="home">
                    <NavItem eventKey="home">
                        <NavIcon>
                            <img className={"SideNavImages"} src={BoardgamesImage} alt="Logo" />
                        </NavIcon>
                        <NavText>
                            BoardGames
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="devices">
                        <NavIcon>
                            <img className={"SideNavImages"} src={BookImage} alt="Logo" />
                        </NavIcon>
                        <NavText>
                            Books
                        </NavText>
                    </NavItem>
                </SideNav.Nav>
            </SideNav>
        </ClickOutside>);
    }
}


class App extends Component {
  render() {
    return (
        <Router>
          <Route render={({ location, history }) => (
              <React.Fragment>
                  <TempSideNav location={location} history={history}/>
                  <div className={"RouterMainBody"}>
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
