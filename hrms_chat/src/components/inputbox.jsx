import React from 'react';
import { InputGroup, Form, Button } from 'react-bootstrap';
import { SendFill } from 'react-bootstrap-icons';

const InputBox = () => {
    return (
        <div className="chat-footer">
            <InputGroup>
                <Form.Control placeholder="What would you like to say?" />
                <Button variant="primary" className="send-button">
                    <SendFill />
                </Button>
            </InputGroup>
        </div>
    );
};

export default InputBox;
