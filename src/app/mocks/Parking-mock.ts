import { Parking } from "../interfaces/Parking";
import { User }    from "../interfaces/User";

export const parkings: Parking[] = [ 
    
    {
        'id': 1,
        'name': 'Estacionamento avPaulista',
        'hour_price': 45,
        'user_avaliation': 5,
        'address': 'Av. Paulista, 1578 - Bela Vista, São Paulo - SP, 01310-200',
        'reference_point': 'Próximo ao MASP',
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
    },
    {
        'id': 2,
        'name': 'Estacionamento Sol Nascente',
        'hour_price': 15,
        'user_avaliation': 4,
        'average_time': 45,
        'address': 'Estrada da ligação nº56',
        'reference_point': 'Próximo ao campão',
        'image_url': '../../assets/images/estacionamento.png',
        'monthly': true,
        'monthly_price': 70,
        'available_vacancies': 0,
        'services_available': [{
            'service_name': 'Cera',
            'service_price': 15
        }],
    },
    {
        'id': 3,
        'name': 'Estacionamento Osasco Shopping',
        'hour_price': 25,
        'user_avaliation': 2,
        'average_time': 45,
        'address': 'Rochdale, Osasco - SP',
        'reference_point': 'Lugar embaçado',
        'image_url': '../../assets/images/estacionamento2.jpg',
        'monthly': false,
        'available_vacancies': 1,
        'services_available': [{
            'service_name': 'Lavagem',
            'service_price': 35
        }],
    }

]

export const user: User =
    {
    "id": 7,
    "name": 'Leandro Tecioni',
    "email": 'leandrotdrumond@gmail.com',
    "address": "Rua São Jorge",
    "cpf": "506785188-07",
    "birthday": "13/05/1999",
    "phone": '(11) 968822810',
    "sex": "Masculino",
    "car": {
        "color": "Preto Fosco",
        "brand": 'ford',
        "model": "Mustang",
        "category":  "pickup",
        "chassi": '78787',
        "renavam": 1245,
        "plaque": "123445"
    },
    "password": "************"
}   



