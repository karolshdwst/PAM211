import { Usuario } from '../models/usuario';
import DatabaseService from '../database/DatabaseService';

export class UsuarioController {
    constructor() {
        this.listeners = [];
    }

    // Inicializar el controlador con el Service
    async initialize() {
        await DatabaseService.initialize();
    }

    // Obtener usuarios y convertirlos a objetos del modelo
    async obtenerUsuarios() {
        try {
            const data = await DatabaseService.getAll();
            // Mapeamos los datos crudos de la BD a instancias de la clase Usuario
            return data.map(u => new Usuario(u.id, u.nombre, u.fecha_creacion));
        } catch (error) {
            console.error('Error al obtener usuarios:', error);
            throw new Error('No se pudieron cargar los usuarios');
        }
    }

    // Crear un nuevo usuario
    async crearUsuario(nombre) {
        try {
            // 1. Validar datos usando el Modelo
            Usuario.validar(nombre);

            // 2. Insertar en BD usando el Servicio
            const nuevoUsuario = await DatabaseService.add(nombre.trim());

            // 3. Notificar a los observadores (actualizar la vista)
            this.notifyListeners();

            // 4. Retornar usuario creado como objeto Usuario
            return new Usuario(
                nuevoUsuario.id,
                nuevoUsuario.nombre,
                nuevoUsuario.fecha_creacion
            );
        } catch (error) {
            console.error('Error al crear usuario:', error);
            throw error;
        }
    }

    // Eliminar un usuario
    async eliminarUsuario(id) {
        try {
            await DatabaseService.delete(id);
            this.notifyListeners();
        } catch (error) {
            console.error('Error al eliminar usuario:', error);
            throw new Error('No se pudo eliminar el usuario');
        }
    }

    // Editar un usuario
    async editarUsuario(id, nombre) {
        try {
            Usuario.validar(nombre);
            await DatabaseService.update(id, nombre.trim());
            this.notifyListeners();
        } catch (error) {
            console.error('Error al editar usuario:', error);
            throw error;
        }
    }

    // Sistema de observadores para actualizar la vista automáticamente
    addListener(callback) {
        this.listeners.push(callback);
    }

    removeListener(callback) {
        this.listeners = this.listeners.filter(l => l !== callback);
    }

    notifyListeners() {
        this.listeners.forEach(callback => callback());
    }
}