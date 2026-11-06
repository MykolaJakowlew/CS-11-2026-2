import classes from './style.module.css'

export const Item = (props) => {
    const { title, price, itemSrc, isTitleTop } = props

    if (!title || !itemSrc || price == null) {
        return null;
    }

    return (
        <div className={classes.item}>
            {/* {
                isTitleTop && <div className={classes.title}>{title}</div>
            }
            <img src={itemSrc} />
            {
                !isTitleTop && <div className={classes.title}>{title}</div>
            }
            <div className={classes.price}>$ {price}</div> */}

            <img src={itemSrc} className={
                [isTitleTop ? classes.order_2 : ''].join(' ')
            } />
            <div
                className={
                    [classes.title, isTitleTop ? classes.order_1 : ''].join(' ')
                }>{title}</div>
            <div className={[classes.price, isTitleTop ? classes.order_3 : ''].join(' ')}>$ {price}</div>
        </div>
    )
}