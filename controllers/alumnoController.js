const pool = require('../models/db');
exports.getAlumnos = async (req, res) => {
try {
const result = await pool.query('SELECT * FROM alumnos');
res.json(result.rows);
} catch (err) {
res.status(500).send(err.message);
}};
exports.crearAlumno = async (req, res) => {
const { numero_alumno, nombre, apellido, dni, clase, telefono, fecha_nacimiento, fecha_ingreso, activo, foto_url } = req.body;
try {
await pool.query('INSERT INTO alumnos (numero_alumno, nombre, apellido, dni, clase, telefono, fecha_nacimiento, fecha_ingreso, activo, foto_url) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)',
[numero_alumno, nombre, apellido, dni, clase, telefono, fecha_nacimiento, fecha_ingreso, activo, foto_url]);
res.sendStatus(201);
} catch (err) {
res.status(500).send(err.message);
}};
exports.editarAlumno = async (req, res) => {
const { id } = req.params;
const { numero_alumno, nombre, apellido, dni, clase, telefono, fecha_nacimiento, fecha_ingreso, activo, foto_url } = req.body;
try {
await pool.query('UPDATE alumnos SET numero_alumno=$1, nombre=$2, apellido=$3, dni=$4, clase=$5, telefono=$6, fecha_nacimiento=$7, fecha_ingreso=$8, activo=$9, foto_url=$10 WHERE id=$11',
[numero_alumno, nombre, apellido, dni, clase, telefono, fecha_nacimiento, fecha_ingreso, activo, foto_url, id]);
res.sendStatus(200);
} catch (err) {
res.status(500).send(err.message);
}};
exports.eliminarAlumno = async (req, res) => {
const { id } = req.params;
try {
await pool.query('DELETE FROM alumnos WHERE id=$1', [id]);
res.sendStatus(200);
} catch (err) {
res.status(500).send(err.message);
}};