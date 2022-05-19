import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import TaskRow from './TaskRow';

const ManageTask = () => {
    const [user] = useAuthState(auth);
    const { isLoading, data: tasks, refetch } = useQuery('tasks', () =>
        fetch(`https://gentle-cliffs-72966.herokuapp.com/task/${user.email}`).then(res =>
            res.json()
        ))

    if (isLoading) {
        return <Loading />
    }



    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Descreption</th>
                        <th>Complete</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tasks.map(task => <TaskRow
                            task={task}
                            refetch={refetch}
                        />)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default ManageTask;