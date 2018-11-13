import * as PostActions from "../actions/post.actions";
import { Post } from "../models/post.model";


export type Action = PostActions.All;

const defaultState: Post = {
    text: 'Default Text',
    likes: 10
}

const newState = (state, newState) => {
    return Object.assign({}, state, newState);
    // return Object.assign(state, newState);
}

export function postReducer(state: Post = defaultState, action: Action) {
    console.log('action : ', action, 'state :', state);

    switch (action.type) {
        case PostActions.EDIT_TEXT:
            return newState(state, { text: action.payload })

        case PostActions.UPVOTE:
            return newState(state, { likes: state.likes + 1 })

        case PostActions.DOWNVOTE:
            return newState(state, { likes: state.likes - 1 })

        case PostActions.RESET:
            return defaultState
            
        default:
            return state;
    }
}