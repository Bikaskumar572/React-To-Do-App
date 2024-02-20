function TodoItem2() {
  let inputTodo = "Go to College";
  let inputDate = "20/02/2024";
  return (
    <div class="container">
      <div class="row kg-row">
        <div class="col-6">{inputTodo}</div>
        <div class="col-4">{inputDate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger kg-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem2;
