import profilePageReducer from "./profilePageReducer";
import dialogPageReducer from "./dialogPageReducer";
import sidebarPageReducer from "./sidebarPageReducer";
import userPageReducer from "./userPageReducer";

let store = {
    _state: {
        profilePage: {
            postsData: [
                {message: "How are you?", like: 12},
                {message: "Where are you from?", like: 18},
                {message: "Where are you from?", like: 23},
                {message: "Where are you from?", like: 11},
                {message: "How are you?", like: 122},
            ],
            postText: ""
        },
        dialogPage: {
            dialogsData: [
                {
                    name: "Vadim",
                    id: 1,
                    ava: "https://c7.hotpng.com/preview/549/388/33/shrek-the-third-donkey-princess-fiona-gingerbread-man-t-shirt-shrek.jpg"
                },
                {
                    name: "Sveta",
                    id: 2,
                    ava: "https://i.pinimg.com/736x/03/a9/c3/03a9c377e1fd89b539ab5cd7539f1f89--tangled-dress-tangled-cosplay.jpg"
                },
                {
                    name: "Alex",
                    id: 3,
                    ava: "https://vignette.wikia.nocookie.net/tekken/images/0/07/Bob-t6br.jpg/revision/latest?cb=20120810084348&path-prefix=ru"
                },
                {
                    name: "Mike",
                    id: 4,
                    ava: "https://2000culture.com/images2/kakviglyadelibivsepersonazhiiznarutovrea_EB1636C8.jpg"
                },
                {name: "Jhon", id: 5, ava: "https://www.facenews.ua/media/contentimages/72e5b8273c297356.jpg"},
            ], messagesData: [
                {message: "hello"},
                {message: "xxxxxxxxxxxxxxxxxxxxxx"},
                {message: "qqqqqqqqqqqqqqqqqqqqqq"}
            ],
            messageBody: ""
        },
        sidebarPage: {
            friendsData: [
                {
                    name: "Vadim",
                    id: 1,
                    ava: "https://c7.hotpng.com/preview/549/388/33/shrek-the-third-donkey-princess-fiona-gingerbread-man-t-shirt-shrek.jpg"
                },
                {
                    name: "Sveta",
                    id: 2,
                    ava: "https://i.pinimg.com/736x/03/a9/c3/03a9c377e1fd89b539ab5cd7539f1f89--tangled-dress-tangled-cosplay.jpg"
                },
                {
                    name: "Alex",
                    id: 3,
                    ava: "https://vignette.wikia.nocookie.net/tekken/images/0/07/Bob-t6br.jpg/revision/latest?cb=20120810084348&path-prefix=ru"
                }
            ]
        },
        userPage: {}
    },
    getState() {
        return this._state
    },
    rerenderEntireTree() {
        console.log("zzz");
    },

    subscribe(observer) {
        this.rerenderEntireTree = observer;
    },

    dispatch(action) {
        this._state.profilePage = profilePageReducer(this._state.profilePage,action);
        this._state.dialogPage = dialogPageReducer(this._state.dialogPage,action);
        this._state.sidebarPage = sidebarPageReducer(this._state.sidebarPage,action);
        this._state.userPage = userPageReducer(this._state.userPage,action);
        this.rerenderEntireTree(this._state)
    }
};




export default store;