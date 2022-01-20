import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteComments } from '../features/commentSlice';
import EditCommentModal from './modals/EditCommentModal';

const CommentBox = ({ props, currentUserId }) => {
  const dispatch = useDispatch();
  const { id, description, date_created, user_name, owner_user_id } = props;
  return (
    <>
      <div className='secondary'>{description}</div>
      <span>User name: {user_name}</span>&nbsp;&nbsp;
      <span>Date posted: {date_created}</span>
      {owner_user_id === currentUserId ? (
        <div>
          <button
            className='btn btn-secondary me-3'
            onClick={() => {
              dispatch(
                deleteComments({
                  owner_user_id: owner_user_id,
                  id: id,
                })
              );
            }}
          >
            Delete Comment
          </button>
          <div>
            <EditCommentModal id={id} description={description} />
          </div>
        </div>
      ) : (
        <></>
      )}
      <hr />
    </>
  );
};

export default CommentBox;
