import reflex as rx

class EstadoContador(rx.State):
    def __init__(self):
        super().__init__()
        self.conteo = 0

    def incrementar(self):
        self.conteo += 1
        self.update()

    def disminuir(self):
        self.conteo -= 1
        self.update()

def contador():
    return rx.fragment(
        rx.hstack(
            rx.button("Incrementar", on_click=EstadoContador.incrementar),
            rx.text(EstadoContador.conteo),
            rx.button("Disminuir", on_click=EstadoContador.disminuir),
        )
    )

def main():
    rx.run(contador)

if __name__ == "__main__":
    main()
