import {userApi} from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_TOTAL_USERS_COUNTS = "SET-TOTAL-USERS-COUNTS";
const CHANGE_CURRENT_PAGE = "CHANGE-CURRENT-PAGE";
const IS_FETCHING = "IS-FETCHING";
const FOLLOWING_PROGRESS = "FOLLOWING-PROGRESS";

let initialState = {
    users: [],
    totalCount: 0,
    pageSize: 35,
    currentPage: 1,
    isFetching: false,
    followingProgress: []
};
let usersPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return {...u, followed: false};
                    }
                    return u;
                })
            };
        case SET_USERS:
            return {
                ...state,
                users:[...action.users]
            };
        case SET_TOTAL_USERS_COUNTS:
            return {
                ...state,
                totalCount: action.totalUsersCounts
            };
        case CHANGE_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.newCurrentPage
            };
        case IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            };
        case FOLLOWING_PROGRESS:
            return {
                ...state,
                followingProgress: action.followingProgressIsFetching ? [...state.followingProgress,action.userId] : state.followingProgress.filter(id => id!=action.userId)
            };
        default:
            return state
    }
};

export const followSucces = (userId) => {
    return {
        type: FOLLOW,
        userId
    }
};

export const unFollowSucces = (userId) => {
    return {
        type: UNFOLLOW,
        userId
    }
};

export const setUsers = (users) => {
    return {
        type: SET_USERS,
        users
    }
};

export const setTotalUsersCounts = (totalUsersCounts) => {
    return{
        type: SET_TOTAL_USERS_COUNTS,
        totalUsersCounts
    }
};

export const changeCurrentPageSucces = (newCurrentPage) => {
    return {
        type: CHANGE_CURRENT_PAGE,
        newCurrentPage
    }
};

export const isFetching = (isFetching) => {
    return {
        type:IS_FETCHING,
        isFetching
    }
};

export const toggleISFollowingProgress = (followingProgressIsFetching,userId) => {
    debugger;
    return {
        type:FOLLOWING_PROGRESS,
        followingProgressIsFetching,
        userId
    }
};

export const getUsers = (pageSize,currentPage) =>{
 return (dispatch) => {
     dispatch(isFetching(true));
     userApi.getUsers(pageSize,currentPage).then((data) => {
         dispatch(setUsers(data.items));
         dispatch(setTotalUsersCounts(data.totalCount));
         dispatch(isFetching(false));
     });
 }
};

export const changeCurrentPage = (pageSize,pageNumber) =>{
    return (dispatch) => {
        dispatch(isFetching(true));
        dispatch(changeCurrentPageSucces(pageNumber));
        userApi.getUsers(pageSize,pageNumber).then((data) => {
            dispatch(setUsers(data.items));
            dispatch(isFetching(false));
        });
    }
};

export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toggleISFollowingProgress(true,userId));
        dispatch(isFetching(true));
        userApi.follow(userId).then((data) => {
            if (data.resultCode === 0) {
                dispatch(followSucces(userId));
                dispatch(toggleISFollowingProgress(false,userId));
                dispatch(isFetching(false));
            }
        });
    }
};

export const unFollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleISFollowingProgress(true,userId));
        dispatch(isFetching(true));
        userApi.unFollow(userId).then((data) => {
            if (data.resultCode === 0) {
                dispatch(unFollowSucces(userId));
                dispatch(toggleISFollowingProgress(false,userId));
                dispatch(isFetching(false));
            }
        });
    }
};
export default usersPageReducer;