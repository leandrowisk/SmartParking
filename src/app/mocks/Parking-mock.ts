import { Parking } from "../interfaces/Parking";
import { User }    from "../interfaces/User";

export const parkings: Parking[] = [ 
    
    {
        'id': 1,
        'name': 'Estacionamento avPaulista',
        'price': 45,
        'user_avaliation': 5,
        'average_time': 45,
        'image_url': '../../assets/images/teste.png',
        'monthly': false,
        'available_vacancies': 2,
        'services_available': [{
            'service_name': 'Lavagem',
            'service_price': 35
        }, {
            'service_name': 'Cera',
            'service_price': 20
        }],
        zone: 'oeste'
    },
    {
        'id': 2,
        'name': 'Estacionamento Sol Nascente',
        'price': 15,
        'user_avaliation': 4,
        'average_time': 45,
        'image_url': '../../assets/images/estacionamento.png',
        'monthly': true,
        'available_vacancies': 0,
        'services_available': [{
            'service_name': 'Cera',
            'service_price': 15
        }],
        zone: ''
    },
    {
        'id': 3,
        'name': 'Estacionamento Osasco Shopping',
        'price': 25,
        'user_avaliation': 2,
        'average_time': 45,
        'image_url': '../../assets/images/estacionamento2.jpg',
        'monthly': false,
        'available_vacancies': 1,
        'services_available': [{
            'service_name': 'Lavagem',
            'service_price': 35
        }],
        zone: 'sul'
    }

]

export const user: User =
    {
    "name": 'Leandro Tecioni',
    "email": 'leandrotdrumond@gmail.com',
    "address": "Rua São Jorge",
    "cpf": "506785188-07",
    "birthday": "13/05/1999",
    "sex": "Masculino",
    "car": {
        "color": "Preto Fosco",
        "brand": "Ford",
        "model": "Mustang"
    },
    "password": "************"
}   



