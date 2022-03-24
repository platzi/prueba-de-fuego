import './App.css';
import { useEffect, useState } from 'react' 
import { Button, ContainerFlex, MediaImg, Text } from 'basico-creacion-libreriasui'

import { getCharacter } from './service'

function App() {

  const [numbChar, setNumbChar] = useState(1)
  const [character, setCharacter] = useState("")

  const gettingCharacter = async (character) => {
    const response = await getCharacter(character)
    setCharacter(response)
    console.log(response);
  }

  const handleDecrement = () => {
    setNumbChar(prevCount => prevCount - 1)
  };

  const handleIncrement = () => {
    setNumbChar(prevCount => prevCount + 1)
  }

  useEffect(() => {
    gettingCharacter(numbChar)
  }, [numbChar])

  return (
    <div className="App">
      <ContainerFlex
        flexDirection="column"
        justifyContent="space-evenly"
        alignItems="center"
        height="100vh"
        gap="8px"
      >
        <MediaImg src={character.image} alt={character.name} width="200px" height="200px"/>
        <Text component="h3" fontSize="18px" lineHeight="10px">{character.name}</Text>
        <Text component="p" fontSize="18px" lineHeight="10px">{character.id}</Text>
        <Text component="p" fontSize="18px" lineHeight="10px">{character.species}</Text>
        <Text component="p" fontSize="18px" lineHeight="10px">{character.status}</Text>
        <ContainerFlex flexDirection="row" justifyContent="center" alignContent="center" height="40px" gap="8px">
          <Button
            onClick={handleDecrement}
            width="150px"
            height="40px"
            bgColor="lightsteelblue"
            bgColorHover="lightcoral"
          >
            {`< Before`}
          </Button>
          <Button
            onClick={handleIncrement}
            width="150px"
            height="40px"
            bgColor="lightsteelblue"
            bgColorHover="lightgreen"
          >
            {`Next >`}
          </Button>
        </ContainerFlex>
      </ContainerFlex>
    </div>
  );
}

export default App;
