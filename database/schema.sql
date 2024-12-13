-- Criação da tabela de animais
CREATE TABLE animais (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    species TEXT NOT NULL,
    age INTEGER NOT NULL,
    enrollment_duration INTEGER NOT NULL,
    image_url TEXT
);

-- Criação da tabela de funcionários
CREATE TABLE funcionarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    position TEXT NOT NULL,
    experience_years INTEGER NOT NULL
);

-- Criação da tabela de histórico dos animais
CREATE TABLE history (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    animal_id INTEGER NOT NULL,
    history TEXT NOT NULL,
    FOREIGN KEY (animal_id) REFERENCES animais (id) ON DELETE CASCADE
);
