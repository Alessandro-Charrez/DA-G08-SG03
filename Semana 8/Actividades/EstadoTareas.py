import reflex as rx 

class EstadoTareas(rx.State): 
    def __init__(self): 
        super().__init__() 
        self.tareas = ["Tarea 1", "Tarea 2"] 
    def agregar_tarea(self, nueva_tarea): 
        self.tareas.append(nueva_tarea) 
        self.update()  # Actualizamos el estado para reflejar el cambio 
      
def lista_tareas(): 
    return rx.fragment( 
        rx.heading("Lista de Tareas"), 
        rx.ul([rx.li(tarea) for tarea in EstadoTareas.tareas]),  # Muestra la lista de tareas 
    ) 

def agregar_tarea(): 
    nueva_tarea = rx.input(placeholder="Agregar tarea...")  # Campo de entrada para nueva tarea 
    return rx.fragment( 
        nueva_tarea, 
        rx.button("Agregar", on_click=lambda: EstadoTareas.agregar_tarea(nueva_tarea.value)),  # Botón para agregar tarea 
    ) 

  

def app(): 
    return rx.fragment( 
        agregar_tarea(),  # Componente para agregar tareas 
        lista_tareas()  # Componente para mostrar la lista de tareas 
    ) 

def main(): 
    rx.run(app) 

if __name__ == "__main__": 
    main()
  
