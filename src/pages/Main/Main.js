import styles from "./Main.module.css";
import Grid from '@mui/material/Grid';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import HomeIcon from '@mui/icons-material/Home';
import GroupsIcon from '@mui/icons-material/Groups';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';

const Main = () => {
    return (
        <Grid className={styles.container}>
            <Grid item>
                <Grid container className={styles.header}>
                    <Grid item xs={2} className={styles.logo}>
                        <img src="img/logo2.png" alt="로고 이미지" />
                    </Grid>
                    <Grid item xs={8} className={styles.logo}>
                        <img src="img/logo.png" alt="로고 이미지" />
                        <Grid className={styles.menubar}>
                            <ButtonGroup variant="outlined" aria-label="Basic button group" fullWidth>
                                <Button
                                    sx={{
                                        color: 'black', // Default text color
                                        '&:hover': {
                                            backgroundColor: 'black',
                                            color: 'white',
                                            borderColor: 'whitesmoke'
                                        },
                                        borderColor: 'whitesmoke'
                                    }}
                                >
                                    <HomeIcon sx={{ marginRight: '4px' }} />Home
                                </Button>
                                <Button
                                    sx={{
                                        color: 'black', // Default text color
                                        '&:hover': {
                                            backgroundColor: 'black',
                                            color: 'white',
                                            borderColor: 'whitesmoke'
                                        },
                                        borderColor: 'whitesmoke'
                                    }}
                                >
                                    <GroupsIcon sx={{ marginRight: '4px' }} />About Us
                                </Button>
                                <Button
                                    sx={{
                                        color: 'black', // Default text color
                                        '&:hover': {
                                            backgroundColor: 'black',
                                            color: 'white',
                                            borderColor: 'whitesmoke'
                                        },
                                        borderColor: 'whitesmoke'
                                    }}
                                >
                                    <LocalMoviesIcon sx={{ marginRight: '4px' }} />Movies
                                </Button>
                            </ButtonGroup>
                        </Grid>
                    </Grid>
                    <Grid item xs={2} className={styles.logo}>
                        <InstagramIcon fontSize="large" />
                        <XIcon fontSize="large" />
                        <YouTubeIcon fontSize="large" />
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={2}>

                    </Grid>
                    <Grid item xs={8} className={styles.videoarea}>
                        <iframe className={styles.video}
                            src="https://www.youtube.com/embed/RURusloLi-s?si=qIJy5vUVUheOK221"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen
                        ></iframe>
                        <img className={styles.videocover} src="img/video.png" alt="로고 이미지" />
                    </Grid>
                    <Grid item xs={2}>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Main;