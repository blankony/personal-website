CREATE TABLE IF NOT EXISTS skills (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL UNIQUE,
  display_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS projects (
  id BIGSERIAL PRIMARY KEY,
  title VARCHAR(160) NOT NULL,
  technology VARCHAR(100) NOT NULL,
  description TEXT NOT NULL,
  project_url TEXT,
  repository_url TEXT,
  is_featured BOOLEAN NOT NULL DEFAULT TRUE,
  display_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

INSERT INTO skills (name, display_order) VALUES
  ('Python', 1),
  ('Next.js', 2),
  ('PostgreSQL', 3),
  ('Tailwind CSS', 4),
  ('Machine Learning', 5),
  ('Network Security', 6),
  ('4G LTE / 5G Architecture', 7),
  ('Lua Scripting', 8)
ON CONFLICT (name) DO UPDATE SET display_order = EXCLUDED.display_order;

INSERT INTO projects (title, technology, description, display_order)
SELECT seed.title, seed.technology, seed.description, seed.display_order
FROM (VALUES
  ('Analisis QoS Jaringan 4G LTE', 'Network Analysis', 'Studi kasus mikrodinamika latensi pada game Mobile Legends: Bang Bang.', 1),
  ('Indoor Positioning System', 'Deep Learning', 'Implementasi hybrid model TabNet + GNN menggunakan dataset UJIIndoorLoc.', 2),
  ('OBS Tournament Countdown', 'Lua Script', 'Script otomatisasi countdown untuk overlay siaran langsung turnamen.', 3)
) AS seed(title, technology, description, display_order)
WHERE NOT EXISTS (SELECT 1 FROM projects);
