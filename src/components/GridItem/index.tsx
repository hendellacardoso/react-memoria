import { type } from 'os';
import { GridItemType } from '../../types/GridItemTypes';
import * as C from './styles';
import logo from '../../assets/logo.png';
import { items } from '../../data/itens';

type Props = {
    item: GridItemType,
    onClick: () => void;
}

export const GridItem = ( {item, onClick}: Props ) => {
    return(
        <C.Container 
            showBackGround={item.permanentShown || item.shown}
            onClick={onClick}                
        >
            {!item.permanentShown && !item.shown &&
                <C.Icon src={logo} alt="" opacity={.1} />
            }
            {(item.permanentShown || item.shown) && item.item !== null &&
                <C.Icon src={items[item.item].icon} alt="" />
            }            
        </C.Container>
    )
}