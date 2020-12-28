import React from 'react';
import {addPost, onChangePostText} from "../../../redux/profilePageReducer";
import Posts from "./Posts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
}

const PostsContainer = connect(mapStateToProps, {addPost,onChangePostText})(Posts);
export default PostsContainer;
