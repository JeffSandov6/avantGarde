import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import CloudIcon from '@material-ui/icons/Cloud';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';


//TODO: set positioning of fab button on diff web screen sizes
//TODO: set the background of request a wrap to red, text black or white, cloud to just be an outline of it in black

export default function FloatingButton(props) {


    const style = {
        margin: 0,
        // top: 180,
        // right: 120,
        // left: 'auto',
        position: 'fixed',
        backgroundColor: 'transparent',
        zIndex: 5,

        top: '9rem',
        right: '3rem',
    };

    function onClickButton() {
        //here the state of showRequestWrapForm should be turned to true
        props.openRequestWrapForm();
    }

    return (
        <div>
            <Fab 
                style={style}
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