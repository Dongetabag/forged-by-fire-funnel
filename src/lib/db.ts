import { neon } from '@neondatabase/serverless';

const connectionString = process.env.DATABASE_URL;

const sql = neon(connectionString || 'postgresql://noop:noop@localhost/noop');

export async function query(text: string, params?: unknown[]) {
  if (!connectionString) {
    throw new Error('DATABASE_URL is not configured');
  }
  return sql.query(text, params);
}
