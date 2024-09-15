import React, { useEffect, useState } from 'react';
import { getMyPost } from '../../service/PostGetMyPost';

function CardViewJobAp() {
    const [myPost, setMyPost] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const data = await getMyPost();
                setMyPost(data); // Guarda los datos en el estado
            } catch (error) {
                console.error('Error fetching posts:', error);
                setMyPost([]);
            }
        };

        fetchPosts();
    }, []);

    const handleApplyNow = () => {
        console.log('Apply Now button clicked');
    };

    return (
        <div className="p-auto">
            {myPost.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3  gap-x-[6rem]  gap-y-[3rem] mx-[auto]">
                    {myPost.map((element, index) => (
                        <div key={index} className="bg-white p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                            <h2 className="text-xl font-semibold mb-2 text-gray-900">{element.post}</h2>
                            <p className="text-gray-600 mb-2">{element.content}</p>
                            <div className="mb-2">
                                <span className="text-sm font-medium text-gray-500">Category:</span>
                                <p className="text-base text-gray-800">{element.category}</p>
                            </div>
                            <div className="mb-2">
                                <span className="text-sm font-medium text-gray-500">Location:</span>
                                <p className="text-base text-gray-800">{element.location}</p>
                            </div>
                            <div className="mb-4">
                                <span className="text-sm font-medium text-gray-500">Estado de empleo:</span>
                                <p className="text-base font-bold text-green-600">Active</p>
                            </div>
                            <button
                                onClick={handleApplyNow}
                                className="w-full px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-full hover:bg-blue-700 transition-all"
                            >
                                Aplica a empleo
                            </button>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-gray-700 text-center">No hay publicaciones de empleos disponibles.</p>
            )}
        </div>
    );
}

export default CardViewJobAp;
