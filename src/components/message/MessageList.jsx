// MessageList.js
import React, { useEffect, useState } from 'react';
import { getMessages } from '../../service/UrlConfig.js';

const MessageList = ({ conversationId }) => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const { data } = await getMessages(conversationId);
                setMessages(data);
            } catch (error) {
                console.error('Error fetching messages:', error);
            }
        };

        fetchMessages();
    }, [conversationId]);

    return (
        <div>
            <h3 className="text-xl font-semibold mb-4">Mensajes</h3>
            <ul>
                {messages.map((message) => (
                    <li key={message._id} className="mb-2">
                        <div className="bg-gray-200 p-3 rounded shadow">
                            <p><strong>{message.sender.username}:</strong> {message.content}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MessageList;
