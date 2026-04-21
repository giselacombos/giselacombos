// App root

function App() {
  return React.createElement(React.Fragment, null,
    React.createElement(Header),
    React.createElement("main", null,
      React.createElement(Hero),
      React.createElement(Sobre),
      React.createElement(CombosSection),
      React.createElement(Productos),
      React.createElement(Calculador),
      React.createElement(ComoPedir),
    ),
    React.createElement(Footer),
    React.createElement(WhatsAppFloat),
    React.createElement(TweaksPanel),
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(App));
