import { neon } from "@neondatabase/serverless";

/*
 * FBF lead capture — simple, generic insert.
 * Writes to a `leads` table if DATABASE_URL is configured.
 * Silently returns when no DB is set up (e.g. pre-launch local preview).
 *
 * Expected schema (to create when Neon is provisioned):
 *   CREATE TABLE leads (
 *     id SERIAL PRIMARY KEY,
 *     name TEXT NOT NULL,
 *     email TEXT NOT NULL,
 *     phone TEXT,
 *     interest TEXT,
 *     message TEXT,
 *     source TEXT DEFAULT 'landing_page',
 *     created_at TIMESTAMPTZ DEFAULT NOW()
 *   );
 *   CREATE INDEX leads_email_idx ON leads (email);
 */

export interface FbfLead {
  name: string;
  email: string;
  phone?: string;
  interest?: string;
  message?: string;
  source?: "landing_page" | "chatbot" | "api";
}

export async function insertLead(data: FbfLead): Promise<void> {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    // No DB provisioned yet — skip silently. Email flow handles notification.
    return;
  }

  const sql = neon(connectionString);
  await sql`
    INSERT INTO leads (name, email, phone, interest, message, source)
    VALUES (
      ${data.name},
      ${data.email},
      ${data.phone ?? null},
      ${data.interest ?? null},
      ${data.message ?? null},
      ${data.source ?? "landing_page"}
    )
  `;
}
