let initialState = {
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
}
let sidebarPageReducer = (state=initialState, action) => {
    return state
};

export default sidebarPageReducer;