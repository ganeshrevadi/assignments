import { client } from "..";
/*
 * Function should insert a new todo for this user
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function createTodo(userId: number, title: string, description: string) {
  try {
    //await client.connect();
    const createTodoQuery = "INSERT INTO todos (user_id, title, description) VALUES ($1, $2, $3) RETURNING *";
    const values = [userId, title, description];
    const res = await client.query(createTodoQuery, values);
    return res.rows[0];
  } catch (err) {
    console.error("Createtodo error has occurred: ", err);
  } finally {
    //await client.end();
  }
}
/*
 * mark done as true for this specific todo.
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function updateTodo(todoId: number) {
  try {
    //await client.connect();
    const updateTodoQuery = "UPDATE todos SET done = ($1) WHERE id = ($2) RETURNING *";
    const values = [true, todoId];
    const res = await client.query(updateTodoQuery, values);
    console.log(res.rows[0]);
    return res.rows[0];
  } catch (err) {
    console.error("Update todo Error has occurred: ", err);
  } finally {
    //await client.end();
  }
}

/*
 *  Get all the todos of a given user
 * Should return an array of todos
 * [{
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }]
 */
export async function getTodos(userId: number) {
  const getTodosQuery = "SELECT * FROM todos WHERE user_id = ($1)";
  const values = [userId];
  const res = await client.query(getTodosQuery, values);
  console.log(res.rows);
  return res.rows;
}
