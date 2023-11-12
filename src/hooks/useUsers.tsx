import { DashboardContext } from '@contexts/dashboard-context'
import { api } from '@services/fake-store-api'
import { useCallback, useContext, useMemo } from 'react'

const useUsers = () => {
  const { users, loadingUsers, setLoadingUsers, setUsers } = useContext(DashboardContext)

  const fetchUsers = useCallback(async () => {
    console.log('Function recreated')
    try {
      setLoadingUsers(true)
      const { data } = await api.get('/users?limit=20')
      setUsers(data)
      setLoadingUsers(false)
    } catch (error) {
      console.log(error)
    }
  }, [setLoadingUsers, setUsers])

  const countUsers = useMemo(() => users.length, [users])

  return {
    users,
    countUsers,
    fetchUsers,
    loadingUsers,
  }
}

export default useUsers
