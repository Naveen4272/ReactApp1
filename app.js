const heading=React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},[React.createElement("h1",{},"hello world1"),React.createElement("h2",{},"hello world2")]));
 const root=ReactDOM.createRoot(document.getElementById("root"));
 root.render(heading);
 console.log(heading);
 