import React, {useEffect, useState} from 'react';


let StatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);
    useEffect(()=>{
        setStatus(props.status)
    },[props.status]);

    let toggleEditMode = (editMode) => {
        setEditMode(editMode);
        if (!editMode) {
            props.updateStatus(status)
        }
    };

    let onChangeStatus = (e) => {
        setStatus(e.target.value)
    };
    return (
        <>
            {editMode &&
            <div>
                <b>Status:</b>
                <input autoFocus={true} onBlur={() => toggleEditMode(false)} type="text" value={status}
                       onChange={onChangeStatus}/>
            </div>}
            {!editMode &&
            <div>
                <b>Status:</b>
                <span onDoubleClick={props.isOwner ? () => toggleEditMode(true): null}> {props.status || "---------"}</span>
            </div>}
        </>
    )
}

export default StatusWithHooks;