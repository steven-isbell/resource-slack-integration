import pg from 'pg';

const { Pool } = pg;

const pool = new Pool({ connectionString: process.env.CONNECTION_STRING });

pool.on('error', err => {
  console.error('Error in Client: ', err);
  process.exit(-1);
});

const query = async (text: string, params?: any | any[]) => {
  const client = await pool.connect();
  try {
    return await pool.query(text, params);
  } catch (e) {
    console.log('QUERY ERROR: ', e);
  } finally {
    client.release();
  }
};

export default query;
