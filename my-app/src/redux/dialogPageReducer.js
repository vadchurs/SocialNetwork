const ON_CHANGE_MESSAGE_BODY = "ON-CHANGE-MESSAGE-BODY";
const ON_SEND_MESSAGE = "ON-SEND-MESSAGE";

let initialState = {
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
        {id:1, message: "hello"},
        {id:2, message: "xxxxxxxxxxxxxxxxxxxxxx"},
        {id:3, message: "qqqqqqqqqqqqqqqqqqqqqq"}
    ],
    messageBody: ""
}


let dialogPageReducer = (state = initialState,action) => {
    switch (action.type) {
        case ON_SEND_MESSAGE:
        {
            let newMessage = {
                message:state.messageBody
            };
            return {
                ...state,
                messagesData:[...state.messagesData,newMessage],
                messageBody:""
            }
        }
        case ON_CHANGE_MESSAGE_BODY:
        {
            return {
                ...state,
                messageBody: action.newMessageBody
            }
        }
        default: return state;
    }
};

export const onChangeMessageBodyAC = (newMessageBody) => {
    return {
        newMessageBody, type: ON_CHANGE_MESSAGE_BODY
    }
};

export const onSendMessageTextAC = () => {
    return {
        type: ON_SEND_MESSAGE
    }
};

export default dialogPageReducer;