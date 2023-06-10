import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';
import { FaPencilAlt, FaStar, FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useTitle from '../../Hooks/useTitle';

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [toysData, setToysData] = useState([]);
    const [open, setOpen] = useState(false);
    const [id, setId] = useState('');
    const [sort, setSort] = useState(true);
    useTitle('My Toys')
    // console.log(toysData)

    useEffect(() => {
        if (user && user.email) {
            fetch(`https://animagic-action-figure-server.vercel.app/myToys?email=${encodeURIComponent(user?.email)}&sort=${sort ? 'true' : 'false'}`)
                .then(res => res.json())
                .then(data => setToysData(data));
        }
    }, [user,toysData, sort]);

    const handleDelete = _id => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        })

        swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://animagic-action-figure-server.vercel.app/myToys/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {

                            swalWithBootstrapButtons.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = toysData.filter(td => td._id !== _id)
                            setToysData(remaining)
                        }
                        console.log(data)
                    })
            } else if (
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Cancelled',
                    'Your imaginary file is safe :)',
                    'error'
                )
            }
        })
    }

    const handleUpdate = (_id) => {
        setId(_id)
        setOpen(true);
    };

    const handleSubmitUpdate = (event) => {
        event.preventDefault();
        const form = event.target;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;

        fetch(`https://animagic-action-figure-server.vercel.app/myToys/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ price, quantity, description }),
        })
            .then(res => res.json())
            .then(data => {
                if (data.result.modifiedCount > 0) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Haha....',
                        text: 'Information updated successfully!',
                    });
                    const remaining = toysData.filter((dt) => dt._id !== id);
                    const updatedData = toysData.find(dt => dt._id === id)
                    const newToysData = [updatedData, ...remaining]
                    setToysData(newToysData);
                }
                // console.log(data);
            })
            .catch((error) => {
                console.log(error.message);
            });

        setOpen(false);
    };


    return (
        <div className="my-10 px-10 flex flex-col w-full items-center">
            {open && (
                <>
                    <input type="checkbox" id="my-modal-6" className="modal-toggle" />
                    <div className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg text-center">Update Your Toy Information</h3>
                            <form onSubmit={handleSubmitUpdate}>
                                <div className="form-control my-3 space-y-2">
                                    <label htmlFor="" className='font-bold'>Price</label>
                                    <input className='focus:outline-none input input-bordered' type="text" name="price" id="" placeholder='Price' />
                                </div>
                                <div className="form-control space-y-2 my-3">
                                    <label htmlFor="" className='font-bold'>Available Quantity</label>
                                    <input className='focus:outline-none input input-bordered' type="text" name="quantity" id="" placeholder='Available Quantity' />
                                </div>
                                <div className='form-control space-y-2 my-3'>
                                    <label htmlFor="" className='font-bold'>Description</label>
                                    <textarea placeholder="Description" name='description' className="focus:outline-none textarea textarea-bordered textarea-md w-full" ></textarea>
                                </div>
                                <div className="modal-action">
                                    <button type='submit' htmlFor="my-modal-6" className="btn">
                                        Update
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </>
            )}

            <p className="text-3xl font-bold text-center mb-10">My Toys</p>
            <div className='w-1/3 flex justify-between mb-5'>
                <button className='btn' onClick={() => setSort(true)}>Price Low to High</button>
                <button className='btn' onClick={() => setSort(false)}>Price High to Low</button>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table table-normal">
                    <thead className=''>
                        <tr>
                            <th>#</th>
                            <th>Toy Name</th>
                            <th>Toy Photo</th>
                            <th>Seller Name</th>
                            <th>Seller Email</th>
                            <th>Sub-Category</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Ratings</th>
                            <th>Available Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className=''>
                        {toysData.map((toyData, index) => (
                            <tr key={toyData._id} className="hover w-full">
                                <td>{1 + index}</td>
                                <td>{toyData?.toyName}</td>
                                <td><img className='rounded-lg' src={toyData?.photo} alt="" /></td>
                                <th>{toyData?.sellerName}</th>
                                <th>{toyData?.email}</th>
                                <td >{toyData?.category?.join(', ')}</td>
                                <td>{toyData?.description}</td>
                                <td>$ {toyData?.price}</td>
                                <td><div className='flex items-center'>{toyData?.ratings}<FaStar className='w-4 h-4 mx-2' /></div></td>
                                <td>{toyData?.quantity} Pice</td>
                                <td><div className='flex space-x-6'>
                                    <label htmlFor="my-modal-6" onClick={() => handleUpdate(toyData._id)} className='cursor-pointer p-2 rounded-lg'><FaPencilAlt /></label>
                                    <div onClick={() => handleDelete(toyData._id)} className='p-2 rounded-lg cursor-pointer'><FaTrashAlt /></div>
                                </div>
                                </td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;