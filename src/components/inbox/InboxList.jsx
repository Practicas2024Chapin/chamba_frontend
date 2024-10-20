import React, { useEffect, useState } from 'react';
import { getConversations, getMessages } from '../../service/UrlConfig.js';

const InboxList = () => {
    const [conversations, setConversations] = useState([]);
    const [selectedConversation, setSelectedConversation] = useState(null);
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const fetchConversations = async () => {
            try {
                const { data } = await getConversations();
                setConversations(data);
            } catch (error) {
                console.error('Error fetching conversations:', error);
            }
        };

        fetchConversations();
    }, []);

    // Obtener los mensajes cuando se selecciona una conversación
    const handleConversationSelect = async (conversationId) => {
        setSelectedConversation(conversationId);
        try {
            const { data } = await getMessages(conversationId);
            setMessages(data);
        } catch (error) {
            console.error('Error fetching messages:', error);
        }
    };

    return (
        <div className="flex h-full">
            {/* Lista de conversaciones */}
            <div className="w-1/3 p-4 border-r border-gray-200">
                <h3 className="text-xl font-semibold mb-4">Tus conversaciones</h3>
                <ul>
                    {conversations.map((conversation) => (
                        <li key={conversation._id} 
                            className={`mb-4 p-2 cursor-pointer rounded-lg ${selectedConversation === conversation._id ? 'bg-blue-200' : 'bg-gray-100'}`}
                            onClick={() => handleConversationSelect(conversation._id)}
                        >
                            <h4 className="font-bold">
                                {conversation.participants.map(p => p.username).join(', ')}
                            </h4>
                            <p>{conversation.messages.length} mensajes</p>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Vista de chat */}
            <div className="w-2/3 p-4 flex flex-col h-full">
                {selectedConversation ? (
                    <>
                        <div className="flex-1 overflow-y-auto p-4 bg-gray-50 rounded-lg shadow-inner">
                            <h3 className="font-semibold text-xl mb-4">Chat</h3>
                            <div className="space-y-4">
                                {messages.map((message) => (
                                    <div
                                        key={message._id}
                                        className={`flex ${message.sender._id === 'userIdActual' ? 'justify-end' : 'justify-start'}`}
                                    >
                                        <div className={`p-3 rounded-lg shadow ${message.sender._id === 'userIdActual' ? 'bg-blue-400 text-white' : 'bg-gray-200'}`}>
                                            <p className="text-sm">{message.content}</p>
                                            <span className="block text-xs text-gray-500">{message.sender.username}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Input para enviar nuevo mensaje */}
                        <div className="mt-4 flex items-center space-x-2">
                            <input
                                type="text"
                                placeholder="Escribe tu mensaje..."
                                className="w-full p-2 border border-gray-300 rounded-lg"
                            />
                            <button className="bg-blue-500 text-white p-2 rounded-lg">Enviar</button>
                        </div>
                    </>
                ) : (
                    <div className="flex items-center justify-center flex-1">
                        <p className="text-gray-500">Selecciona una conversación para ver los mensajes.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default InboxList;

