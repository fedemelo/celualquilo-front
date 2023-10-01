components = [
    "Billing",
    "Pagination",
    "PhoneDetail",
    "PriceDetails",
    "ProductGridPrice",
    "ProductsGrid",
    "RentDetail",
    "RentHistory",
    "Review",
    "SignIn",
    "UserProfile",
]
components_words = [
    [
        "Dirección de facturación",
        "Método de Pago",
    ],
    [
        "1",
        "2",
        "3",
        "4",
        "5",
    ],
    [
        "Alquilar",
        "Reseñas de otros usuarios",

    ],
    [
        "Detalle del precio de alquiler",
        "Precio por",
        "días",
        "Impuestos 19%",
        "Total + Impuestos",
        "/dia",
    ],
    [
        "Filtrar por precios",
    ],
    [
        "Todos",
        "Populares",
        "Última Generación",
        "En Descuento",
        "Nuestros Productos",
    ],
    [
        "Detalles del Alquiler",
        "Continuar pago",
    ],
    [
        "Historial de Alquileres",
        "Alquileres Activos",
    ],
    [
        "¡Dínos tu opinión!",
    ],
    [
        "Bienvenido de Vuelta",
        "Alquila un celular fácil con CeluAlquilo",
        "Olvidaste tu contraseña?",
        "Nuevo Usuario?",
        "Crear una cuenta",
    ],
    [
        "Correo:",
        "Ver reservas activas",
        "Ver reservas pasadas",
    ],
]

for i in range(len(components)):
    s = ""
    s += "import React from 'react';
import { FormattedMessage, useIntl } from "react-intl";"+"\n"
    s += "import { render, screen } from '@testing-library/react';"+"\n"
    s += f"import {components[i]} from '../components/{components[i]}';"+"\n"
    s += "import '@testing-library/jest-dom/extend-expect';\n"+"\n"
    for word in components_words[i]:
        s += "\ntest('renders %s', () => " % word + r"{{"+"\n"
        s += " "*4 + f"render(<{components[i]}/>);"+"\n"
        s += " "*4 + f"const searchedText = screen.getByText(\"{word}\");"+"\n"
        s += " "*4 + f"expect(searchedText).toBeInTheDocument();"+"\n"
        s += r"}});" + "\n"+"\n"
    with open(r"C:\Users\feder\Desktop\ISIS3710_202320_S1_E03_Front\src\defaults\\"+f"{components[i]}.test.js", "w") as f:
        f.write(s)
        f.close()
