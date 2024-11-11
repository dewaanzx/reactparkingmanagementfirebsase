import classes from './Footer.module.css';

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<div className = {classes.footer}>
			<footer className = {classes.foot}>
				<span>&copy; {currentYear} Test Frontend Engineer.</span>
			</footer>
		</div>
	);
};

export default Footer;