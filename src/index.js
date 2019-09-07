import React from "react";
import ReactDOM from "react-dom";
import Reconciler from "react-reconciler";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const HostConfig = {
  now: Date.now,
  getRootHostContext: nextRootInstance => {},
  getChildHostContext: (context, type, rootInstance) => {},
  shouldSetTextContent: (type, nextProps) => {},
  prepareForCommit: containerInfo => {},
  resetAfterCommit: containerInfo => {},
  createTextInstance: (
    newText,
    rootContainerInstance,
    currentHostContext,
    workInProgress
  ) => {},
  createInstance: (
    type,
    newProps,
    rootContainerInstance,
    currentHostContext,
    workInProgress
  ) => {},
  supportsMutation: true,
  appendInitialChild: (parent, node) => {},
  finalizeInitialChildren: (
    instance,
    type,
    newProps,
    rootContainerInstance,
    currentHostContext
  ) => {},
  appendChildToContainer: (parent, node) => {}
};

const Renderer = Reconciler(HostConfig);

const ReactTOM = {
  render: (element, container) => {
    if (!container._rootContainer) {
      container._rootContainer = Renderer.createContainer(container, false);
    }

    Renderer.updateContainer(element, container._rootContainer);
  }
};

const rootElement = document.getElementById("root");
ReactTOM.render(<App />, rootElement);
