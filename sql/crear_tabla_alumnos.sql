CREATE TABLE IF NOT EXISTS alumnos (
id SERIAL PRIMARY KEY,
numero_alumno VARCHAR(10),
nombre TEXT,
apellido TEXT,
dni VARCHAR(20),
clase TEXT,
telefono TEXT,
fecha_nacimiento DATE,
fecha_ingreso DATE,
activo BOOLEAN,
foto_url TEXT
);