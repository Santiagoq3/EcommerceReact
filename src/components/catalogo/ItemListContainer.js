import React from 'react'
import { Contador } from '../Contador'
import { ItemList } from './ItemList'
import "./ItemListContainer.css"
import { ItemQuickView } from './ItemQuickView'

export const ItemListContainer = ({greeting}) => {
    return (
        <div className="ItemListContainer">
            <p className="ItemListContainer__greeting">
                {greeting} &#x2728; &#x2728;
            </p>
            <ItemList />
            <ItemQuickView />

        </div>
    )
}
