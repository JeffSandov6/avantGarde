import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import CloudIcon from '@material-ui/icons/Cloud';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';


//TODO: set positioning of fab button on diff web screen sizes


export default function FloatingButton() {


    const style = {
        margin: 0,
        // top: 180,
        // right: 120,
        // left: 'auto',
        position: 'fixed',
        // backgroundColor: 'transparent',
        zIndex: 1000,

        top: '9rem',
        right: '3rem',
    };

    function onClickButton() {
        console.log("his");
    }

    return (
        <div>
            <Fab 
                style={style}
                color="transparent"
                size="large"
                variant="extended"
                onClick={onClickButton}
            >
                <Button
                endIcon={<CloudIcon/>}
                >
                    Request A Wrap
                </Button>
            </Fab>
        </div>
    )
}