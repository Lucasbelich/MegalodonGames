import {ChakraProvider, Button} from "@chakra-ui/react"

const Item = ({nombre, img}) => {

    return(
        <ChakraProvider resetCSS>
        <section>
            <picture>
                <img src={img} alt={nombre} />
            </picture>
            <h3>{nombre}</h3>
            <Button>Ver detalle</Button>
            
        </section>
        </ChakraProvider>
    )
}

export default Item