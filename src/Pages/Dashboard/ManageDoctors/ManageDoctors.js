import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import ConfirmationModal from '../../../Shared/ConfirmationModal/ConfirmationModal';

const ManageDoctors = () => {
    const [deletingDoctor, setDeletingDoctor] = useState(null)

    const closeModal = () => {
        setDeletingDoctor(null)
    }


    const { data: doctors = [], refetch } = useQuery({
        queryKey: ["doctors"],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:5000/doctors', {
                    headers: {
                        accessToken: `bearer ${localStorage.getItem("accessToken")}`
                    }
                })
                const data = await res.json()
                return data;
            }
            catch (error) {
                console.log(error)
            }
        }
    })

    const handleDeleteDoctor = doctor => {
        fetch(`http://localhost:5000/doctors/${doctor._id}`, {
            method: "DELETE",
            headers: {
                authorization: `bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success(`${doctor.name} delete succesfully.`)
                    refetch()
                }
            })
    }

    return (
        <div>
            <h2 className="text-3xl ml-3 mb-3">Manage Doctors {doctors?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors &&
                            doctors.map((doctor, i) =>
                                <tr key={doctor._id}>
                                    <td className='font-semibold'>{i + 1}</td>
                                    <td> <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={doctor.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div></td>
                                    <td>{doctor.name}</td>
                                    <td>{doctor.email}</td>
                                    <td>{doctor.specialty}</td>
                                    <td>
                                        <label
                                            onClick={() => setDeletingDoctor(doctor)}
                                            htmlFor="confirmation-modal" className="btn btn-xs btn-error">Delete</label>
                                    </td>

                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deletingDoctor &&
                <ConfirmationModal
                    title={`Are you sure you want to delete ?`}
                    message={`If you delete Dr. ${deletingDoctor.name}. His data will not be back!`}
                    closeModal={closeModal}
                    successAction={handleDeleteDoctor}
                    modalData={deletingDoctor}
                    successBtnName="Delete"
                ></ConfirmationModal>
            }
        </div >
    );
};

export default ManageDoctors;