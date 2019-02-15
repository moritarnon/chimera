import React, {Component} from 'react';
import NestedList from "./NestedList";

class Page1 extends Component {
  render() {
    return (
        <div className="Page">
            Page1
            <NestedList />
        </div>
    );
  }
}

export default Page1;
