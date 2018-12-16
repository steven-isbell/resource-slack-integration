import { Pool, QueryResult, PoolClient } from 'pg';

const pool: Pool = new Pool({
  connectionString: process.env.CONNECTION_STRING
});

pool.on('error', (err: Error) => {
  console.error('Error in Client: ', err);
  process.exit(-1);
});

const query = async (
  text: string,
  params?: any | any[]
): Promise<QueryResult> => {
  const client: PoolClient = await pool.connect();
  try {
    return await pool.query(text, params);
  } catch (e) {
    throw e;
  } finally {
    client.release();
  }
};

export default query;
