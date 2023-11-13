import { DashboardContext } from '@contexts/dashboard-context'
import { api } from '@services/fake-store-api'
import { useCallback, useContext, useMemo } from 'react'

const useUsers = () => {
  const { users, loadingUsers, setLoadingUsers, setUsers } = useContext(DashboardContext)

  const fetchUsers = useCallback(async () => {
    try {
      setLoadingUsers(true)
      const { data } = await api.get('/users?limit=20')
      setUsers(data)
      setLoadingUsers(false)
    } catch (error) {
      console.log(error)
    }
  }, [setLoadingUsers, setUsers])

  const totalUsers = useMemo(() => users.length, [users])

  const parsedUsers = useMemo(() => {
    return users.map((user) => ({
      id: user.id,
      firstname: `${user.name.firstname.charAt(0).toUpperCase()}${user.name.firstname.slice(1)}`,
      lastname: `${user.name.lastname.charAt(0).toUpperCase()}${user.name.lastname.slice(1)}`,
      email: user.email,
      username: user.username,
      phone: user.phone,
    }))
  }, [users])

  return {
    users,
    totalUsers,
    fetchUsers,
    loadingUsers,
    parsedUsers,
  }
}

export default useUsers
