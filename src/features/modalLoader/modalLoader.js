import React from 'react'
import { useSelector } from 'react-redux';
import LoadingOverlay from 'react-loading-overlay';
import { isLoaderActive } from './modalLoaderSlice';

export default function ModalLoader(props) {

    const loaderActive = useSelector(isLoaderActive)
    console.log('loaderActive: ' + loaderActive);

    return (
        <LoadingOverlay
            active={loaderActive}
            spinner
            text='Wait...'
        >
            {props.children}
        </LoadingOverlay>
    )
}
