import Card from './components/card/Card';
import ContainerDiv from './components/containerDiv/ContainerDiv';
import { CARDS } from './constants/cards';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
	return (
		<>
			<GlobalStyles />
			<ContainerDiv>
				{CARDS.map(card => (
					<Card
						key={card.id}
						image={card.image}
						user={card.user}
						userDescription={card.userDescription}
						title={card.title}
						content={card.content}
						$backgroundColor={card.$backgroundColor}
						$color={card.$color}
						$colorContent={card.$colorContent}
						$className={card.$className}
					/>
				))}
			</ContainerDiv>
		</>
	);
};

export default App;
