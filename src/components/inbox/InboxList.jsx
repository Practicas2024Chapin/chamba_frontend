import React, { useEffect, useState } from 'react';
import { getConversations } from '../../service/UrlConfig.js'; // Importa el servicio

const InboxList = () => {
    const [conversations, setConversations] = useState([]);

    useEffect(() => {
        const fetchConversations = async () => {
            const response = await getConversations();
            if (!response.error) {
                setConversations(response.data);
            }
        };
        fetchConversations();
    }, []);

    return (
        <div className="flex flex-col space-y-4">
            {conversations.map((conversation) => (
                <div key={conversation._id} className="p-4 border rounded-lg">
                    <h3 className="font-bold">{conversation.participants[1].username}</h3>
                    <p>{conversation.messages[conversation.messages.length - 1]?.content}</p>
                </div>
            ))}
        </div>
    );
};

export default InboxList;

