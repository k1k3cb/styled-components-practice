import { StyledCardTitle } from '../card/styles';
import { StyledH2, StyledH3, StyledHeader, StyledImage } from './styles';

const CardHeader = ({ image, user, userDescription }) => {
	return (
      
		<StyledHeader>
			<StyledImage src={image} alt='' />
			<div>
				<StyledH2>{user}</StyledH2>
				<StyledH3>{userDescription}</StyledH3>
			</div>
		</StyledHeader>

       
        
	);
};

export default CardHeader;
