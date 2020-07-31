import * as React from 'react';
import styles from './Formulario.module.css';
import useSelect from '../hooks/useSelect';
import PropTypes from 'prop-types';

const Formulario = ({guardarCategoria}) => {

    const Opciones = [
        {value: 'general', label: 'General'},
        {value: 'bussiness', label: 'Negocios'},
        {value: 'entertainment', label: 'Entretenimiento'},
        {value: 'health', label: 'Salud'},
        {value: 'sports', label: 'Deportes'},
        {value: 'technology', label: 'Tecnología'}
    ]

    //*utilizar el custom hook
    const [categoria, SelectNoticias] = useSelect('general', Opciones);

    //* submit al form, pasar categoria a app.js
    const buscarNoticias = e => {
        e.preventDefault();

        guardarCategoria(categoria);
    }

    return ( 
        <div className={`${styles.buscador} row`}>
            <div className="col s12 m8 offset-m2">
                <form
                onSubmit={buscarNoticias}>
                    <h2 className={styles.heading}>Noticias de tu Interes</h2>

                    <SelectNoticias />

                    <div className="input-field col s12">
                        <input 
                        type="submit"
                        className={`${styles.btn_block} btn-large amber darken-2`}
                        value="Buscar"
                        />
                    </div>
                </form>
            </div>
        </div>
     );
}
 
Formulario.propTypes = {
    guardarCategoria: PropTypes.func.isRequired
}

export default Formulario;