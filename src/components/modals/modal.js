import React from "react";
import ReactDOM from "react-dom";
/*
  We need the provider from react-redux because technically this modal box is
outside of the component tree.
*/
import { Provider } from "react-redux";
/*
  Here we import an instance of the store from index.js instead of the actual 
store from store.js. 
  This way we keep one source of truth. 
*/
import { store } from "../../index";

export default class Modal extends Component {
  /* 
  This block of code will execute whenever the Modal component is rendered.
  it...
  -generates a new div
  -assigns it the class name of modal
  -appends the div as a child of the document body element, so it stays high in 
    the heirarchy
  -then it calls the _render function
  */
  componentDidMount() {
    this.modalTarget = document.createElement("div");
    this.modalTarget.className = "modal";
    document.body.appendChild(this.modalTarget);
    this._render();
  }

  //This ensures that the render function will run when the modal is updated,
  //if there are any changes to the children, they will be up to date
  componentWillUpdate() {
    this._render;
  }

  //this line cleans up the DOM whenever we remove the modal from the component
  //heirarchy.
  componentWillUnmount() {
    ReactDOM.unmountComponentAtNode(this.modalTarget);
    document.body.removeChild(this.modalTarget);
  }

  /*
  this.props.children refers to any children that would be passed to the div
  */
  _render() {
    ReactDOM.render(
      <Provider store={store}>
        <div>{this.props.children}</div>
      </Provider>,
      this.modalTarget
    );
  }

  render() {
    return <noscript />;
  }
}
