import React from 'react'
import './SwipeButton.css'
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import IconButton from '@material-ui/core/IconButton';

function SwipeButtons() {
    return (
        <div className="swipeButtons">
            <IconButton className="SwipeButtons_repeat">
                <ReplayIcon />
            </IconButton>
            <IconButton className="SwipeButtons_left">
                <CloseIcon />
            </IconButton>
            <IconButton className="SwipeButtons_star">
                <StarRateIcon />
            </IconButton>
            <IconButton className="SwipeButtons_right">
                <FavoriteIcon />
            </IconButton>
            <IconButton className="SwipeButtons_lighting">
                <FlashOnIcon />
            </IconButton>
        </div>
    )
}

export default SwipeButtons
