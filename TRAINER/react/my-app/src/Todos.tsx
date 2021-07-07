
function Todos() {
    const todos = [
        { description: 'post', id: 0 },
        { description: 'kochen', id: 0 },
        { description: 'joggen', id: 0 },
        { description: 'chillen', id: 0 }]
        let table = <table>
            <tbody>
        {
            todos.map(todo => (<tr key={todo.id}>
                <td>{todo.description}</td></tr>))
        }
        </tbody>
        </table>
    return (
        <> { table } </>
    )    
}

export default Todos;