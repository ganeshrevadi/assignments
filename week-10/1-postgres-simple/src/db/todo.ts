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
  await client.connect()
  const insertQuery = "INSERT INTO todos (user_id , title , description) VALUES ($1 , $2 , $3)"
  const values = [userId, title, description]
  const res = await client.query(insertQuery, values)
  return res;
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
  await client.connect()
  const query = "UPDATE todos SET done = $1 WHERE id = $2"
  const values = [true, todoId]
  const res = await client.query(query, values)
  return res;
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

  await client.connect()
  const getQuery = "SELECT * FROM todos WHERE user_id = $1"
  const values = [userId]
  const res = await client.query(getQuery, values)
  return res;
}
