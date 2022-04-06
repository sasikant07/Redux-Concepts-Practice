import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../redux/user/userActions'

function UserComponent({userData, fetchAllUsers}) {

  useEffect(() => {
    fetchAllUsers()
  }, [])

  return userData.loading ? (
    <h2>Loading...</h2>
  ) : userData.error ? (
    <h2>userData.error</h2>
  ) : (
    <div>
      <h2>User List</h2>
      <div>
        {
          userData && 
            userData.map(user => <p key={user.id}>{user.name}</p>)
        }
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    userData: state.users
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAllUsers: () => dispatch(fetchUsers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserComponent)