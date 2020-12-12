import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, fade } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ButtonBase from '@material-ui/core/ButtonBase';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { Avatar, Badge, Divider } from '@material-ui/core';
import ItemsCarousel from 'react-items-carousel';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import HomeIcon from '@material-ui/icons/Home';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import Fab from '@material-ui/core/Fab';
import BorderAllIcon from '@material-ui/icons/BorderAll';

const useStyles = makeStyles((theme) => ({
	extendedIcon: {
		marginRight: theme.spacing(1),
	},
	icon: {
		marginRight: theme.spacing(2),
	},
	heroContent: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(2, 0, 6),
	},
	heroButtons: {
		marginTop: theme.spacing(4),
	},
	cardGrid: {
		paddingTop: theme.spacing(8),
		paddingBottom: theme.spacing(8),
	},
	card: {
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
	},
	cardMedia: {
		paddingTop: '56.25%', // 16:9
	},
	cardContent: {
		flexGrow: 1,
	},
	footer: {
		//backgroundColor: theme.palette.background.paper,
		backgroundColor: '#272c34',
		padding: theme.spacing(6),
		color: '#fff',
	},
	paper: {
		padding: theme.spacing(2),
		margin: 'auto',
		maxWidth: 500,
	},
	// image: {
	// 	width: 128,
	// 	height: 128,
	// },
	img: {
		margin: 'auto',
		display: 'block',
		maxWidth: '100%',
		maxHeight: '100%',
	},
	square: {
		height: '70px',
		width: '70px',
	},
	squareProductList: {
		height: '100px',
		width: '100px',
	},
	iconText: {
		color: 'green',
		fontWeight: 'bold',
	},
	search: {
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.black, 0.15),
		'&:hover': {
			backgroundColor: fade(theme.palette.common.black, 0.25),
		},
		margin: theme.spacing(1, 0, 2),
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing(1),
			width: 'auto',
		},
	},
	searchIcon: {
		padding: theme.spacing(0, 2),
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	inputRoot: {
		color: 'inherit',
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			width: '12ch',
			'&:focus': {
				width: '20ch',
			},
		},
	},
	image: {
		position: 'relative',
		height: 200,
		[theme.breakpoints.down('xs')]: {
			width: '100% !important', // Overrides inline-style
			height: 100,
		},
		'&:hover, &$focusVisible': {
			zIndex: 1,
			'& $imageBackdrop': {
				opacity: 0.15,
			},
			'& $imageMarked': {
				opacity: 0,
			},
			'& $imageTitle': {
				border: '4px solid currentColor',
			},
		},
	},
	focusVisible: {},
	imageButton: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		color: theme.palette.common.white,
	},
	imageSrc: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		backgroundSize: 'cover',
		backgroundPosition: 'center 40%',
	},
	imageBackdrop: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		backgroundColor: theme.palette.common.black,
		opacity: 0.4,
		transition: theme.transitions.create('opacity'),
	},
	imageTitle: {
		position: 'relative',
		padding: `${theme.spacing(0.5)}px ${theme.spacing(1)}px ${theme.spacing(
			1
		)}px`,
	},
	imageMarked: {
		height: 3,
		width: 18,
		backgroundColor: theme.palette.common.white,
		position: 'absolute',
		bottom: -2,
		left: 'calc(50% - 9px)',
		transition: theme.transitions.create('opacity'),
	},
	whatsAppButton: {
		background: '#49c759',
		color: '#ffffff',
	},
	orderIcon: {
		background: '#4d4d4d',
		color: '#ffffff',
	},
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const footers = [
	{
		title: 'Free Delivery',
		src: 'images/car.png',
	},
	{
		title: 'Buyer Protection',
		src: 'images/warrenty.png',
	},
	{
		title: 'Customer Support',
		src: 'images/dial.png',
	},
];
export default function Products() {
	const classes = useStyles();
	const [activeItemIndex, setActiveItemIndex] = useState(0);
	const chevronWidth = 40;

	return (
		<React.Fragment>
			<CssBaseline />
			<AppBar position='relative'>
				<Toolbar>
					{/* <CameraIcon className={classes.icon} />
					<Typography variant='h6' color='inherit' noWrap>
						Album layout
					</Typography> */}
					<Grid
						container
						spacing={1}
						justify='space-evenly'
						alignContent='center'
					>
						<Grid item xs={4} sm={4}>
							Store made with
						</Grid>
						<Grid item xs={4} sm={4}>
							<Grid
								container
								spacing={1}
								justify='space-evenly'
								alignContent='center'
							>
								<Grid item xs={1} sm={6}>
									<LocalMallIcon />
								</Grid>
								<Grid item>dukaan</Grid>
							</Grid>
						</Grid>
						<Grid item xs={4} sm={4}>
							<a href='#' style={{ color: '#fff', fontSize: '13px' }}>
								DOWNLOAD APP
							</a>
							{/* <Typography gutterBottom>DOWNLOAD APP</Typography> */}
						</Grid>
					</Grid>
				</Toolbar>
			</AppBar>
			<main>
				{/* Hero unit */}
				<div className={classes.heroContent}>
					<Container maxWidth='sm'>
						{/* <Paper className={classes.paper}> */}
						<Grid container spacing={1}>
							<Grid item xs={3} sm={6}>
								<Avatar
									variant='square'
									src='images/rectangle.jpg'
									className={classes.square}
								/>
							</Grid>
							<Grid item xs>
								<Typography
									gutterBottom
									variant='h6'
									// style={{
									// 	fontFamily: 'GalanoGrotesque',
									// 	fontSize: '18px',
									// 	fontWeight: 500,
									// 	fontStretch: 'normal',
									// 	fontStyle: 'normal',
									// 	lineHeight: 1.44,
									// 	letterSpacing: 'normal',
									// 	color: '#1a181e',
									// }}
								>
									Mano Super Market
								</Typography>
								<Grid container spacing={4} className={classes.iconText}>
									<Grid item xs={1}>
										<CheckCircleIcon />
									</Grid>
									<Grid item xs>
										TRUSTED SELLER
									</Grid>
								</Grid>
							</Grid>
						</Grid>
						{/* </Paper> */}
						<div className={classes.search}>
							<div className={classes.searchIcon}>
								<SearchIcon />
							</div>
							<InputBase
								placeholder='Search for products…'
								classes={{
									root: classes.inputRoot,
									input: classes.inputInput,
								}}
								inputProps={{ 'aria-label': 'search' }}
							/>
						</div>
						<Divider />

						<div
							style={{
								padding: `0 ${chevronWidth}px`,
								marginTop: 15,
								width: '100%',
							}}
						>
							<ItemsCarousel
								requestToChangeActive={setActiveItemIndex}
								activeItemIndex={activeItemIndex}
								numberOfCards={2}
								gutter={20}
								leftChevron={
									<IconButton aria-label='delete' disabled color='primary'>
										<ChevronLeftIcon />
									</IconButton>
								}
								rightChevron={
									<IconButton aria-label='delete' disabled color='primary'>
										<ChevronRightIcon />
									</IconButton>
								}
								outsideChevron
								chevronWidth={chevronWidth}
							>
								<div style={{ height: '100%' }}>
									<ButtonBase
										focusRipple
										//	key={image.title}
										className={classes.image}
										focusVisibleClassName={classes.focusVisible}
										style={{
											width: '33%',
										}}
									>
										<span
											className={classes.imageSrc}
											style={{
												backgroundImage: `url(images/slider-1.png)`,
											}}
										/>
										<span className={classes.imageBackdrop} />
										<span className={classes.imageButton}>
											<Typography
												component='span'
												variant='subtitle1'
												color='inherit'
												className={classes.imageTitle}
											>
												Home Food
												<span className={classes.imageMarked} />
											</Typography>
										</span>
									</ButtonBase>
								</div>
								<div style={{ height: '100%' }}>
									<ButtonBase
										focusRipple
										//	key={image.title}
										className={classes.image}
										focusVisibleClassName={classes.focusVisible}
										style={{
											width: '33%',
										}}
									>
										<span
											className={classes.imageSrc}
											style={{
												backgroundImage: `url(images/slider-2.png)`,
											}}
										/>
										<span className={classes.imageBackdrop} />
										<span className={classes.imageButton}>
											<Typography
												component='span'
												variant='subtitle1'
												color='inherit'
												className={classes.imageTitle}
											>
												Ice Creams
												<span className={classes.imageMarked} />
											</Typography>
										</span>
									</ButtonBase>
								</div>
								<div style={{ height: '100%' }}>
									<ButtonBase
										focusRipple
										//	key={image.title}
										className={classes.image}
										focusVisibleClassName={classes.focusVisible}
										style={{
											width: '33%',
										}}
									>
										<span
											className={classes.imageSrc}
											style={{
												backgroundImage: `url(images/slider-1.png)`,
											}}
										/>
										<span className={classes.imageBackdrop} />
										<span className={classes.imageButton}>
											<Typography
												component='span'
												variant='subtitle1'
												color='inherit'
												className={classes.imageTitle}
											>
												Fruit Saus
												<span className={classes.imageMarked} />
											</Typography>
										</span>
									</ButtonBase>
								</div>
								<div style={{ height: '100%' }}>
									<ButtonBase
										focusRipple
										//	key={image.title}
										className={classes.image}
										focusVisibleClassName={classes.focusVisible}
										style={{
											width: '33%',
										}}
									>
										<span
											className={classes.imageSrc}
											style={{
												backgroundImage: `url(images/slider-2.png)`,
											}}
										/>
										<span className={classes.imageBackdrop} />
										<span className={classes.imageButton}>
											<Typography
												component='span'
												variant='subtitle1'
												color='inherit'
												className={classes.imageTitle}
											>
												Breakfast
												<span className={classes.imageMarked} />
											</Typography>
										</span>
									</ButtonBase>
								</div>
							</ItemsCarousel>
						</div>
						<div style={{ marginTop: 10 }}>
							<Grid container spacing={1}>
								<Grid item xs={4}>
									<Typography gutterBottom variant='h6'>
										Ice Creams
									</Typography>
								</Grid>
								<Grid item xs>
									<Typography variant='h6' gutterBottom>
										<span
											style={{
												background: '#3f51b5',
												color: '#fff',
												padding: '0 5px 0 5px',
												borderRadius: 4,
												fontSize: 17,
											}}
										>
											10
										</span>
									</Typography>
								</Grid>
							</Grid>
						</div>
						<Grid container spacing={4}>
							{cards.map((card) => (
								<Grid
									container
									spacing={1}
									item
									xs={12}
									sm={6}
									md={4}
									key={card}
								>
									<Grid item xs={4} sm={12}>
										<Avatar
											variant='square'
											src='images/slider-1.png'
											className={classes.squareProductList}
										/>
									</Grid>
									<Grid item xs>
										<Typography gutterBottom variant='subtitle1'>
											Standard license
										</Typography>
										<Typography variant='body2' gutterBottom>
											1 Unit
										</Typography>
										<Typography gutterBottom variant='h6'>
											₹209
											<div style={{ float: 'right' }}>
												<Button variant='outlined' color='primary'>
													Add +
												</Button>
											</div>
										</Typography>
									</Grid>
								</Grid>
							))}
						</Grid>
					</Container>
				</div>
			</main>

			<footer>
				<div className={classes.footer}>
					<Grid
						container
						spacing={4}
						justify='space-evenly'
						alignContent='center'
					>
						{footers.map((footer) => (
							<Grid item xs={4} sm={4} key={footer.title} alignItems='center'>
								<img src={footer.src} alt='text' width={50} />
								<Typography gutterBottom align='center'>
									{footer.title}
								</Typography>
							</Grid>
						))}
					</Grid>

					<Divider style={{ background: '#fff' }} />
					<Typography
						align='center'
						variant='overline'
						display='block'
						gutterBottom
						style={{ fontSize: 14, opacity: 0.6 }}
					>
						STORE DETAILS
					</Typography>
					<Typography variant='h6' align='center' gutterBottom>
						Mano Super Market
					</Typography>

					<Typography
						variant='subtitle1'
						align='center'
						component='p'
						style={{ opacity: 0.8 }}
					>
						Krishvi Terazzao, 80 Feet Road Indirabagar, Bengaluru, Karnataka
					</Typography>
					<Grid container spacing={1} item xs={12} sm={6} md={4}>
						<Grid item xs={9} sm={12}>
							<div style={{ textAlign: 'center', marginTop: 10 }}>
								<Button
									variant='contained'
									//	color='secondary'

									className={classes.whatsAppButton}
									startIcon={<WhatsAppIcon />}
								>
									Chat with us
								</Button>
							</div>
						</Grid>
						<Grid item xs>
							<div style={{ float: 'right' }}>
								<Fab
									size='large'
									//	color='secondary'
									aria-label='add'
									className={classes.orderIcon}
								>
									<BorderAllIcon />
								</Fab>
							</div>
						</Grid>
					</Grid>
				</div>
				<div>
					<Grid container spacing={1} item xs={12} sm={6} md={4}>
						<Grid item xs={4} sm={12}>
							{/* <Fab variant='extended'>
								<HomeIcon className={classes.extendedIcon} />
								Home
							</Fab> */}
							<div style={{ margin: 15 }}>
								<Button
									startIcon={<HomeIcon className={classes.extendedIcon} />}
									href='#text-buttons'
									color='primary'
								>
									Home
								</Button>
							</div>
						</Grid>
						<Grid spacing={5} item xs={4} sm={12}>
							<div style={{ margin: 15 }}>
								<Button href='#text-buttons'>
									<Badge
										anchorOrigin={{
											vertical: 'top',
											horizontal: 'left',
										}}
										badgeContent={9}
										color='secondary'
									>
										<LocalMallIcon /> Bag
									</Badge>
								</Button>
							</div>
						</Grid>
						<Grid item xs>
							{/* <Fab variant='extended'>
								<HomeIcon className={classes.extendedIcon} />
								Home
							</Fab> */}
							<div style={{ marginTop: 15 }}>
								<Button
									startIcon={
										<FormatListBulletedIcon className={classes.extendedIcon} />
									}
									href='#text-buttons'
									color='primary'
								>
									Orders
								</Button>
							</div>
						</Grid>
					</Grid>
				</div>
			</footer>
		</React.Fragment>
	);
}
