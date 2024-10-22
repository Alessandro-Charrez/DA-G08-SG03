import reflex as rx 
import re 

class EstadoFormulario(rx.State): 
    def __init__(self): 
        super().__init__() 
        self.nombre = "" 
        self.email = "" 
        self.mensaje = "" 
        self.mensaje_estado = "" 
      
    def validar_email(self, email): 
        patron = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$' 
        return re.match(patron, email) is not None 

    def enviar_formulario(self): 
        if not self.nombre or not self.email or not self.mensaje: 
            self.mensaje_estado = "Todos los campos son obligatorios." 
        elif not self.validar_email(self.email): 
            self.mensaje_estado = "Formato de correo electrónico no válido." 
        else: 
            self.mensaje_estado = "Formulario enviado con éxito!" 
            self.nombre = "" 
            self.email = "" 
            self.mensaje = "" 
        self.update()  # Actualizamos el estado para reflejar el mensaje 

def formulario_contacto(): 
    return rx.fragment( 
        rx.heading("Formulario de Contacto"), 
        rx.input(placeholder="Nombre", value=EstadoFormulario.nombre,  
                  on_change=lambda e: setattr(EstadoFormulario, 'nombre', e.value)), 
        rx.input(placeholder="Correo electrónico", value=EstadoFormulario.email,  
                  on_change=lambda e: setattr(EstadoFormulario, 'email', e.value)), 
        rx.textarea(placeholder="Mensaje", value=EstadoFormulario.mensaje,  
                    on_change=lambda e: setattr(EstadoFormulario, 'mensaje', e.value)), 
        rx.button("Enviar", on_click=EstadoFormulario.enviar_formulario), 
        rx.text(EstadoFormulario.mensaje_estado)  # Mostrar mensaje de estado 
    ) 

def app(): 
    return rx.fragment( 
        formulario_contacto() 
    ) 

def main(): 
    rx.run(app) 
  
if __name__ == "__main__": 
    main() 
