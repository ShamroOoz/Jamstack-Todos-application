export default function CreateTodos() {
  return (
    <>
      <form onSubmit={addTodolistner}>
        <div className="flex mt-4">
          <input
            className="form-control"
            placeholder="Add Todo"
            value={newTodo}
            onChange={(e) => setnewTodo(e.target.value)}
          />
          <button type="submit" className="btn-add">
            Add
          </button>
        </div>
      </form>
    </>
  );
}
