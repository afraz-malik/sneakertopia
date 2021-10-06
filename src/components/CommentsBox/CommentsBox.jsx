import React, { useState } from 'react'
import Card from '../Card/Card'
import CommentsBoxCss from './CommentsBox.module.scss'
import $ from 'jquery'

// Getting All comments from Product API from Product Details Page
const CommentsBox = ({ comments }) => {
  const [state, setstate] = useState(comments)
  const [comment, setcomment] = useState('')
  // Pressing Enter will add comment in state
  $('#comment').keypress(function (e) {
    if (e.which === 13 && !e.shiftKey) {
      e.preventDefault()
      // You can customize this by getin' user info
      setstate([
        ...state,
        {
          id: state[0].id + 1,
          name: 'Dorothy Parker',
          img: 'images/Mask Group.svg',
          date: 'Today at 12:05',
          comment: comment,
        },
      ])
      setcomment('')
    }
  })

  return (
    <Card title="Comments">
      <div className={CommentsBoxCss.comments}>
        <textarea
          placeholder="Add comments here ( Press Enter to Submit )"
          rows="6"
          name="comment"
          id="comment"
          value={comment}
          onChange={(e) => setcomment(e.target.value)}
        />
        {state.map((el, idx) => (
          <div className={CommentsBoxCss.comment} key={idx}>
            <img alt="" src={el.img} />
            <div className={CommentsBoxCss.text}>
              <p>{el.comment}</p>
              <p className={CommentsBoxCss.date}>
                <span>{el.date} by</span> &ensp;
                <span>{el.name}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}

export default CommentsBox
