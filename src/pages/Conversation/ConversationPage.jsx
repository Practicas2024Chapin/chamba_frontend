// ConversationPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import MessageList from '../../components/message/MessageList';

const ConversationPage = () => {
    const { conversationId } = useParams();

    return (
        <div>
            <h2 className="text-3xl font-bold">Conversación</h2>
            <MessageList conversationId={conversationId} />
        </div>
    );
};

export default ConversationPage;
