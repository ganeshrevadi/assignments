import { client } from "..";

/*
 * Should insert into the users table
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function createUser(username: string, password: string, name: string) {
  const insertQuery = "INSERT INTO users (username, password, name) VALUES ($1, $2, $3)";
  const values = [username, password, name];
  const res = await client.query(insertQuery, values);
  return res; // Output insertion result
}

/*
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function getUser(userId: number) {
  const getQuery = "SELECT * from User WHERE id = $1"
  const values = [userId]
  const res = await client.query(getQuery, values)
  return res
}

