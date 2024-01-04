import { StyledH2, StyledH3, StyledHeader, StyledImage } from './styles';

const CardHeader = ({ image, user, userDescription, $color }) => {
	return (
		<StyledHeader>
			<StyledImage src={image} alt='' />
			<div>
				<StyledH2 $color={$color}>{user}</StyledH2>
				<StyledH3 $color={$color}>{userDescription}</StyledH3>
			</div>
		</StyledHeader>
	);
};

export default CardHeader;
