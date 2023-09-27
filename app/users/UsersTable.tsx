import Link from 'next/link';
import { sort } from 'fast-sort';

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
}

interface Props {
    sortOrder: string;
}

const UsersTable = async ({ sortOrder }: Props) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users: User[] = await res.json();

    const sortedUsers = sort(users).asc(
        sortOrder === 'Email' 
        ? user => user.email
        : user => user.name
    );

    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <th><Link href="/users?sortOrder=id">Id</Link></th>
                        <th><Link href="/users?sortOrder=Name">Name</Link></th>
                        <th><Link href="/users?sortOrder=Email">Email</Link></th>
                    </tr>
                </thead>
                <tbody>
                    {sortedUsers.map(user => (
                        <tr key={user.id}>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <td>
                                {user.id}
                            </td>
                            <td>
                                <div>
                                    <div className="font-bold">{user.name}</div>
                                    <div className="text-sm opacity-50">{user.username}</div>
                                </div>
                            </td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default UsersTable