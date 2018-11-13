import { Action } from "@ngrx/store";


export function helloReducer(state: string = 'Hello world!', action: Action) {
    // console.log('action.type : ',action.type, 'state :',state);

    switch (action.type) {
        case 'FRENCH':
            return state = 'Bonjour le monde'

        case 'SPANISH':
            return state = 'Hola Monde'

        default:
            return state;
    }

}