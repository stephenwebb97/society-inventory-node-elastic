import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PlaceHolder from './PlaceHolders/PlaceHolder.js';
import LibrarySearch from './LibrarySearch/LibrarySearch.js';
import Sidebar from "react-sidebar";


class AppBroken extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: true
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  render() {
    return (
        <Router>
          <Sidebar
              sidebar={
                <>
                  <Link to={"/home"}>Library</Link>
                  <Link to={"/placeholder"}>Other</Link>
                </>
              }
              open={this.state.sidebarOpen}
              onSetOpen={this.onSetSidebarOpen}
              styles={{ sidebar: { background: "white" } }}
          >
            <button onClick={() => this.onSetSidebarOpen(true)}>
              Open sidebar
            </button>
            <main>
              <Route path="/" exact component={props => <LibrarySearch />} />
              <Route path="/home" component={props => <LibrarySearch />} />
              <Route path="/placeholder" component={props => <PlaceHolder />} />
            </main>

          </Sidebar>


        </Router>
    );
  }
}

export default AppBroken;
