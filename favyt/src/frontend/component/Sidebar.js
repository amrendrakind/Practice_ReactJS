import React, { Component } from "react";
class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                <h2>Current News</h2>
                <h5>Sit amet mattis vulputate</h5>
                <div className="fakeimg" style={{ height: 250 }}>Insert Image</div>
                <p>Non blandit massa enim nec dui nunc mattis enim. Egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla..</p>
                <h3>Massa enim</h3>
                <p>Lorem ipsum dolor sit ame.</p>
                <div className="fakeimg" style={{ height: 110 }}>Insert Image</div><br />
                <div className="fakeimg" style={{ height: 110 }}>Insert Image</div><br />
                <div className="fakeimg" style={{ height: 110 }}>Insert Image</div>
            </div>
        )
    }
}
export default Sidebar