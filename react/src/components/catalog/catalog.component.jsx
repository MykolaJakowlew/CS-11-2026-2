import itemSrc_1 from '../../assets/item-1.jpg'
import itemSrc_2 from '../../assets/item-2.jpg'
import itemSrc_3 from '../../assets/item-3.jpg'
import itemSrc_4 from '../../assets/item-4.jpg'
import { Item } from "./item/item.component"
import './style.css'

const data_set = [
    { title: 'Coffee macarons', price: 30, itemImgSrc: itemSrc_1 },
    { title: 'Soft chocolate', price: 567, itemImgSrc: itemSrc_2 },
    { title: 'Nut tart', price: 3760, itemImgSrc: itemSrc_3 },
    { title: 'Berry cake', price: 37680, itemImgSrc: itemSrc_4 },
    { title: 'Berry cake', price: 37680, itemImgSrc: itemSrc_1 },
    { title: 'Berry cake', price: 37680, itemImgSrc: itemSrc_2 },
    { title: 'Berry cake', price: 37680, itemImgSrc: itemSrc_3 },
    { title: 'Berry cake', price: 37680, itemImgSrc: itemSrc_4 },
    { title: 'Berry cake', price: 37680, itemImgSrc: itemSrc_3 },

]

export const Catalog = () => {

    return (
        <div>
            <h1 className="title">Catalog</h1>
            <div className="item-wrapper">
                {/* <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item /> */}
                {/* <Item title={'title-1'} price={35} itemSrc={itemSrc_1}/>
                <Item title={'title-2'} price={2125} itemSrc={itemSrc_1}/>
                <Item title={'title-3'} price={31235} itemSrc={itemSrc_1}/>
                <Item title={'title-4'} price={31245} itemSrc={itemSrc_1}/> */}

                {
                    data_set.map((el, index) =>
                        <Item
                            title={el.title}
                            price={el.price}
                            itemSrc={el.itemImgSrc}
                            isTitleTop={(index + 1) % 2 == 0}
                        />
                    )
                }
            </div>
        </div>
    )
}