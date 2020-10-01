import React from 'react';
import { useHistory } from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(3, 0, 2),
        textAlign: 'center',
        fontSize: '20px',
        color: 'green',
        textShadow: '1px 1px darkmagenta'
    },
    innerLinks: {
        padding: '10px',
        cursor: 'pointer'
    }
}))

export const MainMenu = () => {

    let history = useHistory();
    const styles = useStyles()

    return (<nav className={styles.root}>
                <a href='#/' className={styles.innerLinks} onClick={(e)=>{
                    e.preventDefault();
                    history.push("/");
                }}>Home</a>
                <a href='#/' className={styles.innerLinks} onClick={(e)=> {
                    e.preventDefault();
                    history.push('/step1')
                }}>MultipleForm</a>
                <a href='#/' className={styles.innerLinks} onClick={(e)=> {
                    e.preventDefault();
                    history.push('/form-ex')
                }}>SimpleForm</a>
            </nav>)
}
