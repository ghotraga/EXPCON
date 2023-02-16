import styles from '@/styles/Footer.module.css'
import EmailIcon from "@mui/icons-material/Email";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const footer = () => {
    return (
        <div className={styles.footer}>
            <Grid container direction="column" alignItems="center">
                <Grid item xs={12}>
                    <Typography className={styles.companyName} variant="h5">
                        EXP|CON
                    </Typography>
                </Grid>

                <Grid item xs={12}>
                    <Typography variant="subtitle1">
                        {`® ${new Date().getFullYear()} Gagandeep Ghotra`}
                    </Typography>
                </Grid>
            </Grid>
            {/* <h2 className={styles.companyName}></h2>
            <EmailIcon className={styles.emailIcon} />
            <h3 className={styles.companyEmail}>support@experienceconcerts.com</h3>
            <h3 className={styles.companyTradeMark}>Gagandeep Ghotra</h3> */}
        </div>
    );
}

export default footer;