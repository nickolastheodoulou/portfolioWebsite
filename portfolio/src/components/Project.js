import React from 'react';
import cx from 'clsx';
import Color from 'color';
import GoogleFontLoader from 'react-google-font-loader';
import NoSsr from '@material-ui/core/NoSsr';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import { useCoverCardMediaStyles } from '@mui-treasury/styles/cardMedia/cover';
import { Row, Item } from '@mui-treasury/components/flex';


const useGridStyles = makeStyles(({ breakpoints }) => ({
  root: {
    overflow: 'auto',
    [breakpoints.only('xs')]: {
      '& > *:not(:first-child)': {
        paddingLeft: 0,
      },
    },
    [breakpoints.up('sm')]: {
      justifyContent: 'center',
    },
  },
}));

const useStyles = makeStyles(({ palette }) => ({
  color: ({ color }: { color: string }) => ({
    '&:before': {
      backgroundColor: Color(color)
        .darken(0.3)
        .desaturate(0.2)
        .toString(),
    },
  }),
  root: {
    position: 'relative',
    borderRadius: '1rem',
    minWidth: 320,
    '&:before': {
      transition: '0.2s',
      position: 'absolute',
      width: '100%',
      height: '100%',
      content: '""',
      display: 'block',
      borderRadius: '1rem',
      zIndex: 0,
      bottom: 0,
    },
    '&:hover': {
      cursor: 'pointer',
      '&:before': {
        bottom: -6,
        right: -6,
      },
      '& $logo': {
        transform: 'scale(1.1)',
        boxShadow: '0 6px 20px 0 rgba(0,0,0,0.38)',
      },
      '& $date': {
        opacity: 0.72,
      },
    },
  },
  cover: {
    borderRadius: '1rem',
  },
  content: ({ color }: { color: string }) => ({
    position: 'relative',
    zIndex: 1,
    borderRadius: '1rem',
    boxShadow: `0 6px 16px 0 ${Color(color).fade(0.5)}`,
    '&:before': {
      content: '""',
      display: 'block',
      position: 'absolute',
      left: 0,
      top: 0,
      zIndex: 0,
      width: '100%',
      height: '100%',
      clipPath:
        'polygon(0% 100%, 0% 35%, 0.3% 33%, 1% 31%, 1.5% 30%, 2% 29%, 2.5% 28.4%, 3% 27.9%, 3.3% 27.6%, 5% 27%,95% 0%,100% 0%, 100% 100%)',
      borderRadius: '1rem',
      background: `linear-gradient(to top, ${color}, ${Color(color)
        .rotate(24)
        .lighten(0.12)})`,
    },
  }),
  title: {
    fontFamily: 'Fjalla One',
    fontSize: '2.5rem',
    color: '#fff',
    margin: 0,
  },
  logo: {
    transition: '0.3s',
    width: 100,
    height: 100,
    boxShadow: '0 4px 12px 0 rgba(0,0,0,0.24)',
    borderRadius: '1rem',
  },
  team: {
    fontFamily: 'Sen',
    fontSize: '2rem',
    color: palette.text.hint,
  },
  date: {
    fontFamily: 'Sen',
    color: '#fff',
    backgroundColor: palette.text.hint,
    opacity: 0,
    fontSize: '2.5rem',
    padding: '0.4rem 2rem',
    borderRadius: 12,
    alignContent: "center"
  },
}));

const CustomCard = ({ styles, cover, logo, title, date }) => {
  const mediaStyles = useCoverCardMediaStyles();
  return (
    <Box className={cx(styles.root, styles.color)} pt={20}>
      <CardMedia image={cover} className={styles.cover} classes={mediaStyles} />
      <Box className={styles.content} p={2}>
        <Box position={'relative'} zIndex={1}>
          <Row p={0} gap={2}>
            <Item>
              <Avatar className={styles.logo} src={logo} />
            </Item>
            <Item position={'bottom'}>
              <h2 className={styles.title}>{title}</h2>
            </Item>
          </Row>
          <Row mt={4} alignItems={'center'}>
            <Item position={'center'}>
              <div className={styles.date}>{date}</div>
            </Item>
          </Row>
        </Box>
      </Box>
    </Box>
  );
};

export const HighlightCardDemo = React.memo(function HighlightCard() {
  const stylesCovid = useStyles({ color: '#deb992' });
  const stylesNews = useStyles({ color: '#4051b5' });
  const stylesDashboard = useStyles({ color: '#d40f00' });
  const stylesPortfolio = useStyles({ color: '#D8205F' });



  const gridStyles = useGridStyles();
  return (
    <>
      <h2 align='center'> Previous Projects</h2>
      <NoSsr>
        <GoogleFontLoader
          fonts={[{ font: 'Fjalla One' }, { font: 'Sen', weights: [500] }]}
        />
      </NoSsr>
      <Grid
        style={{ padding: 20 }}
        classes={gridStyles}
        wrap={'nowrap'}
        container
        spacing={4}
      >
        <Grid item onClick={event =>  window.location.href='https://www.covidpostcode.com'} >
          <CustomCard
            styles={stylesCovid}
            date={'View Website'}
            cover={'images/portfolio/covid/covid5.png'}
            logo={'images/portfolio/covid/logo512.png'}
            title={<div>Covid-19 UK Postcode Search</div>
            }
          />
        </Grid>
        <Grid item onClick={event =>  window.location.href='https://murmuring-castle-67752.herokuapp.com/'} >
          <CustomCard
            styles={stylesNews}
            date={'View Website'}
            cover={'images/portfolio/news/news.png'}
            logo={'images/portfolio/news/logo.png'}
            title={<div>Global News Application </div>}
          />
        </Grid>
        <Grid item onClick={event =>  window.location.href='https://www.inflectomedia.com/'} >
          <CustomCard
            styles={stylesDashboard}
            date={'Project Page Coming Soon'}
            cover={'images/portfolio/bidashboard/dashboardbackground.png'}
            logo={'images/portfolio/bidashboard/inflectologo.png'}
            title={<div>Business Insights Platform</div>}
          />
        </Grid>
        <Grid item onClick={event =>  window.location.href='https://callieames.com/'} >
          <CustomCard
            styles={stylesPortfolio}
            date={'View Website'}
            cover={'images/portfolio/portfolio/portfolioBackground.png'}
            logo={'images/portfolio/portfolio/callieLogo.png'}
            title={<div>Artist Portfolio</div>}
          />
        </Grid>
      </Grid>
    </>
  );
});

export default HighlightCardDemo;