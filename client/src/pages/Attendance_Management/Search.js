import React from 'react'
import Staff from './Staff';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container'
import '../../Styles/searchStaff.css'

function Search() {
  return (
    <>
    <Staff/>
    <Container style={{marginTop : '5%',display : 'block',width : '20%',justifyContent : 'center'}}>
        <div class="input-group">
        <input type="text" class="input" id="text" name="text" placeholder="Staff Member Name" autocomplete="off"></input>
        <input class="button--submit" value="Search" type="submit"></input>
        </div>

    </Container>
    </>
  )

}

export default Search