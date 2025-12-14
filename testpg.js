import pg from "pg";
import 'dotenv/config'

const { Pool, Client } = pg

const pool = new Pool()

const res = pool.query('SELECT NOW()')
await pool.end()

console.log(res)


