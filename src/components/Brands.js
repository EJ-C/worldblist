import React, { Component } from "react";
import Scroll from "./Scroll";

import "../containers/App.css";

function sortBrands(a, b) {
  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();

  return nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
}

class Brands extends Component {
  constructor() {
    super();
    this.state = {
      brandsAll: [
        {
          id: 1,

          name: "Barbour"
        },
        {
          id: 2,

          name: "Capsule"
        },
        {
          id: 3,

          name: "A.P.C."
        },
        {
          id: 4,

          name: "DDD"
        },
        {
          id: 5,

          name: "ABC"
        }
      ]
    };
  }

  render() {
    return (
      <div class="hide-child">
        Brand
        <Scroll>
          <div className="branddropdown" class="child">
            {this.state.brandsAll.sort(sortBrands).map(brandsAll => (
              <p key={brandsAll.id}> {brandsAll.name}</p>
            ))}
          </div>
        </Scroll>
      </div>
    );
  }
}

export default Brands;
