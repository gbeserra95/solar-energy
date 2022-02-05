// Import React to use React.Children.ToArray
// It helps to add the keys of elements in a map function
import React from 'react'

//Hooks
import { useState, useEffect } from 'react'

// Links
import { Link } from 'react-router-dom'

// Components
import Container from '../../components/Container'
import Menu from '../../components/Menu'
import MainSection from '../../components/MainSection'
import Table from '../../components/Table'
import TableRow from '../../components/TableRow'
import Button from '../../components/Button'
import Modal from '../../components/Modal'

// Styled-components
import { ButtonContainer } from './styles'

// Toast
import { toast } from 'react-toastify'

// API functions
import { getData } from '../../utils/myAPI'

function Unidades() {
  const [data, setData] = useState([])

  // Send a callback function to REMOVE buttons so the modal for deleting an item can be displayed
  // This is how to get element from a child to a parent
  const [displayModal, setDisplayModal] = useState('')
  const [modalData, setModalData] = useState(null)

  const openModal = response => {
    setDisplayModal(response.visibility)
    setModalData(response)
  }
  // This is the function to close the modal. It is also a callback function to get the visible property from the child component
  const closeModal = response => {
    setDisplayModal(response)
  }

  useEffect(() => {
    // Get data from json server
    async function handleData() {
      try {
        // Get all data from /unidades
        const response = await getData('/unidades')
        setData(response)
      } catch (error) {
        toast.error('Não foi possível buscar os dados!')
      }
    }
    handleData()
  }, [displayModal])

  return (
    <Container>
      {displayModal === 'visible' && (
        <Modal
          visibility={displayModal}
          id={modalData.id}
          nickname={modalData.nickname}
          place={modalData.place}
          brand={modalData.brand}
          model={modalData.model}
          callback={closeModal}
        />
      )}
      <Menu current="unidades"></Menu>
      <MainSection title="Unidades">
        <Table>
          {React.Children.toArray(
            data.map(unit => {
              return (
                <TableRow
                  id={unit.id}
                  nickname={unit.nickname}
                  place={unit.place}
                  brand={unit.brand}
                  model={unit.model}
                  callback={openModal}
                />
              )
            })
          )}
        </Table>
        <ButtonContainer>
          <Link to={`/cadastro`}>
            <Button bg="rgba(76, 93, 241, 1)">Nova unidade</Button>
          </Link>
        </ButtonContainer>
      </MainSection>
    </Container>
  )
}

export default Unidades
