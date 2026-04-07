import sql from 'mssql';

const sqlConfig: sql.config = {
  user: process.env.MSSQL_USER,
  password: process.env.MSSQL_PASSWORD,
  database: process.env.MSSQL_DATABASE,
  server: process.env.MSSQL_SERVER || 'localhost',
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  },
  options: {
    encrypt: true, // for Azure
    trustServerCertificate: process.env.NODE_ENV === 'development'
  }
};

// Global connection pool
let pool: sql.ConnectionPool | null = null;

export async function getConnection(): Promise<sql.ConnectionPool> {
  if (pool) {
    return pool;
  }
  
  try {
    pool = await sql.connect(sqlConfig);
    console.log('Connected to MS SQL Server');
    return pool;
  } catch (err) {
    console.error('Database connection failed:', err);
    throw err;
  }
}

export async function query<T>(
  queryString: string,
  params?: Record<string, unknown>
): Promise<T[]> {
  const connection = await getConnection();
  const request = connection.request();
  
  // Add parameters if provided
  if (params) {
    for (const [key, value] of Object.entries(params)) {
      request.input(key, value);
    }
  }
  
  const result = await request.query(queryString);
  return result.recordset as T[];
}

export async function queryOne<T>(
  queryString: string,
  params?: Record<string, unknown>
): Promise<T | null> {
  const results = await query<T>(queryString, params);
  return results[0] || null;
}

export async function execute(
  queryString: string,
  params?: Record<string, unknown>
): Promise<sql.IResult<unknown>> {
  const connection = await getConnection();
  const request = connection.request();
  
  if (params) {
    for (const [key, value] of Object.entries(params)) {
      request.input(key, value);
    }
  }
  
  return request.query(queryString);
}

// Close connection (for cleanup)
export async function closeConnection(): Promise<void> {
  if (pool) {
    await pool.close();
    pool = null;
    console.log('Database connection closed');
  }
}

export { sql };
