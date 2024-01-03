import { cards } from '../../constants/cards';
import CardHeader from '../cardHeader/CardHeader';
import { StyledCardContent, StyledCardTitle } from './styles';

const Card = ({ image, user, userDescription, title, content }) => {
	return (
		<>
			<CardHeader
				image={cards[0].image}
				user={cards[0].user}
				userDescription={cards[0].userDescription}
			/>
			<StyledCardTitle>{cards[0].title}</StyledCardTitle>
			<StyledCardContent>{cards[0].content}</StyledCardContent>
		</>
	);
};

export default Card;
