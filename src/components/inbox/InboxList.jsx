// src/components/inbox/InboxList.js
import React from 'react';

const messages = [
    { id: 1, sender: 'Juan Pérez', subject: 'Interesado en tu oferta de trabajo', date: '2024-09-15', snippet: 'Hola, me gustaría postularme para...' },
    { id: 2, sender: 'Ana López', subject: 'Seguimiento a mi aplicación', date: '2024-09-14', snippet: 'Solo quería verificar el estado de...' },
    { id: 3, sender: 'Carlos García', subject: 'Consulta sobre los beneficios', date: '2024-09-13', snippet: 'Me gustaría conocer más acerca de...' },
];

const InboxList = () => {
    return (
        <div className="p-6 bg-gray-100 rounded-lg shadow-lg w-full">
            <h3 className="text-xl font-semibold mb-4">Mensajes Recibidos</h3>
            <ul className="divide-y divide-gray-300">
                {messages.map((message) => (
                    <li key={message.id} className="py-4 flex justify-between">
                        <div>
                            <h4 className="font-semibold">{message.subject}</h4>
                            <p className="text-sm text-gray-600">De: {message.sender}</p>
                            <p className="text-sm text-gray-500 truncate">{message.snippet}</p>
                        </div>
                        <span className="text-sm text-gray-400">{message.date}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default InboxList;
