import CardHeader from '../cardHeader/CardHeader';
import {
	StyledCardContainer,
	StyledCardContent,
	StyledCardTitle
} from './styles';

const Card = ({
	image,
	user,
	userDescription,
	title,
	content,
	$backgroundColor,
	$color,
	$colorContent,
	$className
}) => {
	return (
		<StyledCardContainer
			$backgroundColor={$backgroundColor}
			className={$className}
		>
			<CardHeader
				image={image}
				user={user}
				userDescription={userDescription}
				$color={$color}
			/>
			<StyledCardTitle $color={$color}>{title}</StyledCardTitle>
			<StyledCardContent $colorContent={$colorContent}>
				{content}
			</StyledCardContent>
		</StyledCardContainer>
	);
};

export default Card;
