import reflex as rx
import requests as rq

class miEstado (rx.State):
    lista_pers = [] #declarando lista de diccionarios

    @rx.background
    async def getRichAndMorty(self):
        async with self:
            response = rq.get('https://rickandmortyapi.com/api/character')
            self.lista_pers = response.json()['results']

    @rx.var
    def geListPersToCard(self):
        return self.lista_pers

def index():
    return(
        rx.button("Extraer Datos",on_click=miEstado.getRichAndMorty),
        rx.button("Mostrar Datos",on_click=rx.console_log(miEstado.geListPersToCard))
    )

app = rx.App()
app.add_page(index)