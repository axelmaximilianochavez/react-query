export const UsersList = ({ users }) => {
  return (
    <table>
        <thead>
            <tr>Picture</tr>
            <tr>Name</tr>
            <tr>Surname</tr>
            <tr>Country</tr>
            <tr>Actions</tr>
        </thead>
        <tbody>
            {
                users.map(user => {
                    return(
                        <tr>
                            <td>
                                <img src={} />
                            </td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    )
                })
            }
        </tbody>
    </table>
  )
}
