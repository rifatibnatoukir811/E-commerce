import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { apiData } from '../components/ContextApi'
import Container from '../components/Container'
import Productinfo from '../components/productinfo/Productinfo'



const ProductDetails = ({ }) => {
    let data = useContext(apiData)

    let productId = useParams()


    return (
        <>
            <Container>
                <Productinfo />
            </Container>
        </>
    )
}

export default ProductDetails