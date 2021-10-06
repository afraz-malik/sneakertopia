import React, { useState } from 'react'
import Card from '../Card/Card'
import CommentsCss from './Comments.module.scss'
import $ from 'jquery'

// Dummy Comments Array Getting from BAckend
const commentsArray = [
  {
    id: 1,
    name: 'Dorothy Parker',
    img: 'images/Mask Group.svg',
    date: 'Today at 12:05',
    comment:
      'This is probably one of the best shoes i’ve seen, i definetly recommend it to everyone!',
  },
]

const Comments = () => {
  const [state, setstate] = useState(commentsArray)
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
      <div className={CommentsCss.comments}>
        <textarea
          placeholder="Add comments here ( Press Enter to Submit )"
          rows="6"
          name="comment"
          id="comment"
          value={comment}
          onChange={(e) => setcomment(e.target.value)}
        />
        {state.map((el, idx) => (
          <div className={CommentsCss.comment} key={idx}>
            <img alt="" src={el.img} />
            <div className={CommentsCss.text}>
              <p>{el.comment}</p>
              <p className={CommentsCss.date}>
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

export default Comments
