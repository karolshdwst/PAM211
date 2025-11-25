import { useEffect, useState, useCallback } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, Alert, ActivityIndicator, Platform } from 'react-native';
import { UsuarioController } from '../controllers/UsuarioController';

const controller = new UsuarioController();

export default function InsertUsuarioScreen() {

  const [usuarios, setUsuarios] = useState([]);
  const [nombre, setNombre] = useState('');
  const [loading, setLoading] = useState(true);
  const [guardando, setGuardando] = useState(false);
  const [eliminar, setEliminar] = useState(false);
  const [editingId, setEditingId] = useState(null);

  // SELECT - cargar usuarios desde la bd
  const cargarUsuarios = useCallback(async () => {
    try {
      setLoading(true);
      const data = await controller.obtenerUsuarios();
      setUsuarios(data);
      console.log(`${data.length} usuarios cargados`);
    } catch (error) {
      Alert.alert('Error', error.message);
    } finally {
      setLoading(false)
    }
  }, []);

  // INSERT / UPDATE - Agregar o Actualizar usuario
  const handleGuardar = async () => {
    if (guardando) return;

    try {
      setGuardando(true);
      if (editingId) {
        // UPDATE
        await controller.editarUsuario(editingId, nombre);
        Alert.alert('Usuario Actualizado', `Usuario actualizado correctamente`);
        setEditingId(null);
      } else {
        // INSERT
        const usuarioCreado = await controller.crearUsuario(nombre);
        Alert.alert('Usuario Creado', `"${usuarioCreado.nombre}" guardado con ID: ${usuarioCreado.id}`);
      }
      setNombre('');
    } catch (error) {
      Alert.alert('Error', error.message);
    } finally {
      setGuardando(false);
    }
  };

  // DELETE - Eliminar usuario
  const handleEliminar = async (id) => {
    if (eliminar) return;

    if (Platform.OS === 'web') {
      if (confirm("¿Estás seguro de que quieres eliminar este usuario?")) {
        try {
          setEliminar(true);
          await controller.eliminarUsuario(id);
          // Alert.alert('Usuario Eliminado', `Usuario con ID: ${id} eliminado`);
        } catch (error) {
          Alert.alert('Error', error.message);
        } finally {
          setEliminar(false);
        }
      }
    } else {
      Alert.alert(
        "Eliminar Usuario",
        "¿Estás seguro de que quieres eliminar este usuario?",
        [
          { text: "Cancelar", style: "cancel" },
          {
            text: "Eliminar",
            style: "destructive",
            onPress: async () => {
              try {
                setEliminar(true);
                await controller.eliminarUsuario(id);
                Alert.alert('Usuario Eliminado', `Usuario con ID: ${id} eliminado`);
              } catch (error) {
                Alert.alert('Error', error.message);
              } finally {
                setEliminar(false);
              }
            }
          }
        ]
      );
    }
  };

  // Preparar edición
  const handleEditar = (usuario) => {
    setNombre(usuario.nombre);
    setEditingId(usuario.id);
  };

  // Cancelar edición
  const handleCancelarEdicion = () => {
    setNombre('');
    setEditingId(null);
  };

  // Renderizar cada usuario
  const renderUsuario = ({ item, index }) => (
    <View style={styles.userItem}>
      <View style={styles.userNumber}>
        <Text style={styles.userNumberText}>{index + 1}</Text>
      </View>
      <View style={styles.userInfo}>
        <Text style={styles.userName}>{item.nombre}</Text>
        <Text style={styles.userId}>ID: {item.id}</Text>
        <Text style={styles.userDate}>
          {new Date(item.fechaCreacion).toLocaleDateString('es-MX', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </Text>
      </View>
      <View style={styles.actionButtons}>
        <TouchableOpacity onPress={() => handleEditar(item)} style={[styles.actionButton, styles.editButton]}>
          <Text style={styles.actionText}>Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleEliminar(item.id)} style={[styles.actionButton, styles.deleteButton]}>
          <Text style={styles.actionText}>Eliminar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  // Inicializar y cargar datos
  useEffect(() => {
    const init = async () => {
      await controller.initialize();
      await cargarUsuarios();
    };
    init();

    // Avisar los cambios automáticos
    controller.addListener(cargarUsuarios);

    return () => {
      controller.removeListener(cargarUsuarios)
    };
  }, [cargarUsuarios]);

  return (
    <View style={styles.container}>

      {/* Zona del encabezado */}
      <Text style={styles.title}> INSERT & SELECT</Text>
      <Text style={styles.subtitle}>
        {Platform.OS === 'web' ? ' WEB (LocalStorage)' : ` ${Platform.OS.toUpperCase()} (SQLite)`}
      </Text>

      {/* Zona del INSERT */}
      <View style={styles.insertSection}>
        <Text style={styles.sectionTitle}>{editingId ? 'Editar Usuario' : 'Insertar Usuario'}</Text>

        <TextInput
          style={styles.input}
          placeholder="Escribe el nombre del usuario"
          value={nombre}
          onChangeText={setNombre}
          editable={!guardando}
        />

        <View style={styles.formButtons}>
          <TouchableOpacity
            style={[styles.button, guardando && styles.buttonDisabled, styles.flexButton]}
            onPress={handleGuardar}
            disabled={guardando} >

            <Text style={styles.buttonText}>
              {guardando ? ' Guardando...' : (editingId ? 'Actualizar Usuario' : 'Agregar Usuario')}
            </Text>

          </TouchableOpacity>

          {editingId && (
            <TouchableOpacity
              style={[styles.button, styles.cancelButton, styles.flexButton]}
              onPress={handleCancelarEdicion}
              disabled={guardando} >
              <Text style={styles.buttonText}>Cancelar</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>

      {/* Zona del SELECT */}
      <View style={styles.selectSection}>
        <View style={styles.selectHeader}>
          <Text style={styles.sectionTitle}>Lista de Usuarios</Text>
          <TouchableOpacity
            style={styles.refreshButton}
            onPress={cargarUsuarios} >
            <Text style={styles.refreshText}>Recargar</Text>
          </TouchableOpacity>
        </View>

        {loading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#007AFF" />
            <Text style={styles.loadingText}>Cargando usuarios...</Text>
          </View>
        ) : (
          <FlatList
            data={usuarios}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderUsuario}
            ListEmptyComponent={
              <View style={styles.emptyContainer}>
                <Text style={styles.emptyText}> No hay usuarios</Text>
                <Text style={styles.emptySubtext}>Agrega el primero arriba</Text>
              </View>
            }
            contentContainerStyle={usuarios.length === 0 && styles.emptyList}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 50,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  insertSection: {
    backgroundColor: '#fff',
    padding: 20,
    marginHorizontal: 15,
    marginBottom: 15,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  selectSection: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: 15,
    marginBottom: 15,
    borderRadius: 12,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    padding: 15,
    marginBottom: 12,
    fontSize: 16,
    backgroundColor: '#fafafa',
  },
  formButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  flexButton: {
    flex: 1,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: '#FF3B30',
  },
  buttonDisabled: {
    backgroundColor: '#ccc',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  selectHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  refreshButton: {
    padding: 8,
  },
  refreshText: {
    color: '#007AFF',
    fontSize: 14,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
  },
  loadingText: {
    marginTop: 10,
    color: '#666',
    fontSize: 14,
  },
  userItem: {
    flexDirection: 'column',
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#007AFF',
  },
  userNumber: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  userNumberText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  userInfo: {
    marginBottom: 10,
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  userId: {
    fontSize: 12,
    color: '#007AFF',
    marginBottom: 2,
  },
  userDate: {
    fontSize: 12,
    color: '#666',
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 10,
    marginTop: 5,
  },
  actionButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  editButton: {
    backgroundColor: '#FF9500',
  },
  deleteButton: {
    backgroundColor: '#FF3B30',
  },
  actionText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  emptyContainer: {
    alignItems: 'center',
    paddingVertical: 40,
  },
  emptyList: {
    flex: 1,
    justifyContent: 'center',
  },
  emptyText: {
    fontSize: 18,
    color: '#999',
    marginBottom: 8,
  },
  emptySubtext: {
    fontSize: 14,
    color: '#bbb',
  },
});