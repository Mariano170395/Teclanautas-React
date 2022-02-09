import { Perfil } from "./Perfil";
//testing
import '@testing-library/jest-dom/extend-expect'
import {render} from '@testing-library/react'

test('renders content',()=>{
    const perfil = {
        img:'Hola',
        name:'Mariano',
        last_name:'Pruebas',
        email:'pruebas@pruebas',
        brd_date:'17/03',
        hobby:'probar',
        puesto:'pruebas',
        habilidad:'prueba',
    }

    const component = render(<Perfil img={perfil.img} name={perfil.name} last_name={perfil.last_name} email={perfil.email}/>)
    component.getByText('Hola')
})


