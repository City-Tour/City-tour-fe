import React from 'react'
import './User.scss'
const User = () => {
  return (
    <div className="user">
      {/* Greet user and build functionality after DB updates with Endpoints */}
      <article className="user-packages">
        <section>
          <h2>Your Purchased Packages</h2>
        </section>
        <section>
          <h2>Your Own Package Submissions</h2>
        </section>
      </article>
    </div>
  )
}

export default User
