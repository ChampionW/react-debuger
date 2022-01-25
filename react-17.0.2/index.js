function App() {
    const [count, setCount] = React.useState(0)
    return <div>
        <div>Hello, React Source Code!</div>
        <div>Number: {count}</div>
        <button onClick={() => setCount(v => v + 1)}>Increment</button>
    </div>
}
// const Demo = <div test='ui'>测试demo
//     <span>demo测试2</span>
// </div>
// debugger
ReactDOM.render(<App></App>, document.querySelector('#app'))