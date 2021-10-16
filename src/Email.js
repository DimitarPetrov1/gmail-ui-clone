import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';

import './css/email.css';

function Email({ userName, emailTopic }) {
    return (
        <div className="email">
            <input type="checkbox" />
            <IconButton>
                <StarBorderIcon fontSize="small" />
            </IconButton>
            <p className="email__from">{userName}</p>
            <p className="email__content">{emailTopic}</p>
            <small>11.10.20</small>
        </div>
    )
}

export default Email;
